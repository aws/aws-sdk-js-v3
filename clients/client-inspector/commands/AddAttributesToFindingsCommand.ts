import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { AddAttributesToFindingsRequest, AddAttributesToFindingsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1AddAttributesToFindingsCommand,
  serializeAws_json1_1AddAttributesToFindingsCommand,
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

export type AddAttributesToFindingsCommandInput = AddAttributesToFindingsRequest;
export type AddAttributesToFindingsCommandOutput = AddAttributesToFindingsResponse & __MetadataBearer;

/**
 * <p>Assigns attributes (key and value pairs) to the findings that are specified by the
 *          ARNs of the findings.</p>
 */
export class AddAttributesToFindingsCommand extends $Command<
  AddAttributesToFindingsCommandInput,
  AddAttributesToFindingsCommandOutput,
  InspectorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AddAttributesToFindingsCommandInput) {
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
  ): Handler<AddAttributesToFindingsCommandInput, AddAttributesToFindingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InspectorClient";
    const commandName = "AddAttributesToFindingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AddAttributesToFindingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AddAttributesToFindingsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AddAttributesToFindingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AddAttributesToFindingsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddAttributesToFindingsCommandOutput> {
    return deserializeAws_json1_1AddAttributesToFindingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
