import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { RemoveAttributesFromFindingsRequest, RemoveAttributesFromFindingsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1RemoveAttributesFromFindingsCommand,
  serializeAws_json1_1RemoveAttributesFromFindingsCommand,
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

export type RemoveAttributesFromFindingsCommandInput = RemoveAttributesFromFindingsRequest;
export type RemoveAttributesFromFindingsCommandOutput = RemoveAttributesFromFindingsResponse & __MetadataBearer;

/**
 * <p>Removes entire attributes (key and value pairs) from the findings that are specified
 *          by the ARNs of the findings where an attribute with the specified key exists.</p>
 */
export class RemoveAttributesFromFindingsCommand extends $Command<
  RemoveAttributesFromFindingsCommandInput,
  RemoveAttributesFromFindingsCommandOutput,
  InspectorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RemoveAttributesFromFindingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: InspectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RemoveAttributesFromFindingsCommandInput, RemoveAttributesFromFindingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InspectorClient";
    const commandName = "RemoveAttributesFromFindingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RemoveAttributesFromFindingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RemoveAttributesFromFindingsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RemoveAttributesFromFindingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RemoveAttributesFromFindingsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RemoveAttributesFromFindingsCommandOutput> {
    return deserializeAws_json1_1RemoveAttributesFromFindingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
