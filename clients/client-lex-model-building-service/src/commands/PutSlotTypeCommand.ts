// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  LexModelBuildingServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LexModelBuildingServiceClient";
import {
  PutSlotTypeRequest,
  PutSlotTypeRequestFilterSensitiveLog,
  PutSlotTypeResponse,
  PutSlotTypeResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1PutSlotTypeCommand,
  serializeAws_restJson1PutSlotTypeCommand,
} from "../protocols/Aws_restJson1";

export interface PutSlotTypeCommandInput extends PutSlotTypeRequest {}
export interface PutSlotTypeCommandOutput extends PutSlotTypeResponse, __MetadataBearer {}

/**
 * <p>Creates a custom slot type or replaces an existing custom slot
 *       type.</p>
 *          <p>To create a custom slot type, specify a name for the slot type and
 *       a set of enumeration values, which are the values that a slot of this type
 *       can assume. For more information, see <a>how-it-works</a>.</p>
 *          <p>If you specify the name of an existing slot type, the fields in the
 *       request replace the existing values in the <code>$LATEST</code> version of
 *       the slot type. Amazon Lex removes the fields that you don't provide in the
 *       request. If you don't specify required fields, Amazon Lex throws an exception.
 *       When you update the <code>$LATEST</code> version of a slot type, if a bot
 *       uses the <code>$LATEST</code> version of an intent that contains the slot
 *       type, the bot's <code>status</code> field is set to
 *       <code>NOT_BUILT</code>.</p>
 *
 *          <p>This operation requires permissions for the
 *         <code>lex:PutSlotType</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, PutSlotTypeCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, PutSlotTypeCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new PutSlotTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutSlotTypeCommandInput} for command's `input` shape.
 * @see {@link PutSlotTypeCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for LexModelBuildingServiceClient's `config` shape.
 *
 */
export class PutSlotTypeCommand extends $Command<
  PutSlotTypeCommandInput,
  PutSlotTypeCommandOutput,
  LexModelBuildingServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: PutSlotTypeCommandInput) {
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
  ): Handler<PutSlotTypeCommandInput, PutSlotTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, PutSlotTypeCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelBuildingServiceClient";
    const commandName = "PutSlotTypeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutSlotTypeRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutSlotTypeResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutSlotTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutSlotTypeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutSlotTypeCommandOutput> {
    return deserializeAws_restJson1PutSlotTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
