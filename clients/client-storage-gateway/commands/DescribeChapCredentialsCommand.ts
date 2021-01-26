import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DescribeChapCredentialsInput, DescribeChapCredentialsOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeChapCredentialsCommand,
  serializeAws_json1_1DescribeChapCredentialsCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type DescribeChapCredentialsCommandInput = DescribeChapCredentialsInput;
export type DescribeChapCredentialsCommandOutput = DescribeChapCredentialsOutput & __MetadataBearer;

/**
 * <p>Returns an array of Challenge-Handshake Authentication Protocol (CHAP) credentials
 *          information for a specified iSCSI target, one for each target-initiator pair. This
 *          operation is supported in the volume and tape gateway types.</p>
 */
export class DescribeChapCredentialsCommand extends $Command<
  DescribeChapCredentialsCommandInput,
  DescribeChapCredentialsCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeChapCredentialsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeChapCredentialsCommandInput, DescribeChapCredentialsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "DescribeChapCredentialsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeChapCredentialsInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeChapCredentialsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeChapCredentialsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeChapCredentialsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeChapCredentialsCommandOutput> {
    return deserializeAws_json1_1DescribeChapCredentialsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
