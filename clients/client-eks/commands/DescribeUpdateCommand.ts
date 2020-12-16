import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { DescribeUpdateRequest, DescribeUpdateResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeUpdateCommand,
  serializeAws_restJson1DescribeUpdateCommand,
} from "../protocols/Aws_restJson1";
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

export type DescribeUpdateCommandInput = DescribeUpdateRequest;
export type DescribeUpdateCommandOutput = DescribeUpdateResponse & __MetadataBearer;

/**
 * <p>Returns descriptive information about an update against your Amazon EKS cluster or
 *             associated managed node group.</p>
 *         <p>When the status of the update is <code>Succeeded</code>, the update is complete. If an
 *             update fails, the status is <code>Failed</code>, and an error detail explains the reason
 *             for the failure.</p>
 */
export class DescribeUpdateCommand extends $Command<
  DescribeUpdateCommandInput,
  DescribeUpdateCommandOutput,
  EKSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeUpdateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EKSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeUpdateCommandInput, DescribeUpdateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EKSClient";
    const commandName = "DescribeUpdateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeUpdateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeUpdateResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeUpdateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeUpdateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeUpdateCommandOutput> {
    return deserializeAws_restJson1DescribeUpdateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
