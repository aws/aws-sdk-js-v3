import {
  LexModelBuildingServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LexModelBuildingServiceClient";
import { GetSlotTypesRequest, GetSlotTypesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetSlotTypesCommand,
  serializeAws_restJson1GetSlotTypesCommand,
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

export type GetSlotTypesCommandInput = GetSlotTypesRequest;
export type GetSlotTypesCommandOutput = GetSlotTypesResponse & __MetadataBearer;

/**
 * <p>Returns slot type information as follows: </p>
 *          <ul>
 *             <li>
 *                <p>If you specify the <code>nameContains</code> field, returns the
 *             <code>$LATEST</code> version of all slot types that contain the
 *           specified string.</p>
 *             </li>
 *             <li>
 *                <p> If you don't specify the <code>nameContains</code> field,
 *           returns information about the <code>$LATEST</code> version of all slot
 *           types. </p>
 *             </li>
 *          </ul>
 *          <p> The operation requires permission for the
 *         <code>lex:GetSlotTypes</code> action. </p>
 */
export class GetSlotTypesCommand extends $Command<
  GetSlotTypesCommandInput,
  GetSlotTypesCommandOutput,
  LexModelBuildingServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetSlotTypesCommandInput) {
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
  ): Handler<GetSlotTypesCommandInput, GetSlotTypesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelBuildingServiceClient";
    const commandName = "GetSlotTypesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSlotTypesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetSlotTypesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSlotTypesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetSlotTypesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSlotTypesCommandOutput> {
    return deserializeAws_restJson1GetSlotTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
