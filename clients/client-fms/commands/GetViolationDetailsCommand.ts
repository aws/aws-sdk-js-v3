import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { GetViolationDetailsRequest, GetViolationDetailsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetViolationDetailsCommand,
  serializeAws_json1_1GetViolationDetailsCommand,
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

export type GetViolationDetailsCommandInput = GetViolationDetailsRequest;
export type GetViolationDetailsCommandOutput = GetViolationDetailsResponse & __MetadataBearer;

/**
 * <p>Retrieves violations for a resource based on the specified AWS Firewall Manager policy and AWS account.</p>
 */
export class GetViolationDetailsCommand extends $Command<
  GetViolationDetailsCommandInput,
  GetViolationDetailsCommandOutput,
  FMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetViolationDetailsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetViolationDetailsCommandInput, GetViolationDetailsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FMSClient";
    const commandName = "GetViolationDetailsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetViolationDetailsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetViolationDetailsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetViolationDetailsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetViolationDetailsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetViolationDetailsCommandOutput> {
    return deserializeAws_json1_1GetViolationDetailsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
