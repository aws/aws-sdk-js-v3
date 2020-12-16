import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import {
  DescribeRemediationExecutionStatusRequest,
  DescribeRemediationExecutionStatusResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeRemediationExecutionStatusCommand,
  serializeAws_json1_1DescribeRemediationExecutionStatusCommand,
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

export type DescribeRemediationExecutionStatusCommandInput = DescribeRemediationExecutionStatusRequest;
export type DescribeRemediationExecutionStatusCommandOutput = DescribeRemediationExecutionStatusResponse &
  __MetadataBearer;

/**
 * <p>Provides a detailed view of a Remediation Execution for a set of resources including state, timestamps for when steps for the remediation execution occur, and any error messages for steps that have failed.
 * 			When you specify the limit and the next token, you receive a paginated response.</p>
 */
export class DescribeRemediationExecutionStatusCommand extends $Command<
  DescribeRemediationExecutionStatusCommandInput,
  DescribeRemediationExecutionStatusCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeRemediationExecutionStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeRemediationExecutionStatusCommandInput, DescribeRemediationExecutionStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "DescribeRemediationExecutionStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeRemediationExecutionStatusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeRemediationExecutionStatusResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeRemediationExecutionStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeRemediationExecutionStatusCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeRemediationExecutionStatusCommandOutput> {
    return deserializeAws_json1_1DescribeRemediationExecutionStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
