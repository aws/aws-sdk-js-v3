import {
  LexModelBuildingServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LexModelBuildingServiceClient";
import { GetIntentsRequest, GetIntentsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetIntentsCommand,
  serializeAws_restJson1GetIntentsCommand,
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

export type GetIntentsCommandInput = GetIntentsRequest;
export type GetIntentsCommandOutput = GetIntentsResponse & __MetadataBearer;

/**
 * <p>Returns intent information as follows: </p>
 *          <ul>
 *             <li>
 *                <p>If you specify the <code>nameContains</code> field, returns the
 *             <code>$LATEST</code> version of all intents that contain the
 *           specified string.</p>
 *             </li>
 *             <li>
 *                <p> If you don't specify the <code>nameContains</code> field,
 *           returns information about the <code>$LATEST</code> version of all
 *           intents. </p>
 *             </li>
 *          </ul>
 *          <p> The operation requires permission for the
 *         <code>lex:GetIntents</code> action. </p>
 */
export class GetIntentsCommand extends $Command<
  GetIntentsCommandInput,
  GetIntentsCommandOutput,
  LexModelBuildingServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetIntentsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexModelBuildingServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetIntentsCommandInput, GetIntentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelBuildingServiceClient";
    const commandName = "GetIntentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetIntentsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetIntentsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetIntentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetIntentsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetIntentsCommandOutput> {
    return deserializeAws_restJson1GetIntentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
