import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { GetFlowTemplateRevisionsRequest, GetFlowTemplateRevisionsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetFlowTemplateRevisionsCommand,
  serializeAws_json1_1GetFlowTemplateRevisionsCommand,
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

export type GetFlowTemplateRevisionsCommandInput = GetFlowTemplateRevisionsRequest;
export type GetFlowTemplateRevisionsCommandOutput = GetFlowTemplateRevisionsResponse & __MetadataBearer;

/**
 * <p>Gets revisions of the specified workflow. Only the last 100 revisions are stored. If the workflow has been deprecated,
 *       this action will return revisions that occurred before the deprecation. This action won't work for workflows that have been deleted.</p>
 */
export class GetFlowTemplateRevisionsCommand extends $Command<
  GetFlowTemplateRevisionsCommandInput,
  GetFlowTemplateRevisionsCommandOutput,
  IoTThingsGraphClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetFlowTemplateRevisionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTThingsGraphClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetFlowTemplateRevisionsCommandInput, GetFlowTemplateRevisionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTThingsGraphClient";
    const commandName = "GetFlowTemplateRevisionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetFlowTemplateRevisionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetFlowTemplateRevisionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetFlowTemplateRevisionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetFlowTemplateRevisionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetFlowTemplateRevisionsCommandOutput> {
    return deserializeAws_json1_1GetFlowTemplateRevisionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
