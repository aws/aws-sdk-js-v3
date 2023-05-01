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

import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { DeleteEventBusRequest } from "../models/models_0";
import { de_DeleteEventBusCommand, se_DeleteEventBusCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link DeleteEventBusCommand}.
 */
export interface DeleteEventBusCommandInput extends DeleteEventBusRequest {}
/**
 * @public
 *
 * The output of {@link DeleteEventBusCommand}.
 */
export interface DeleteEventBusCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Deletes the specified custom event bus or partner event bus. All rules associated with
 *       this event bus need to be deleted. You can't delete your account's default event bus.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, DeleteEventBusCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, DeleteEventBusCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const input = { // DeleteEventBusRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeleteEventBusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DeleteEventBusCommandInput - {@link DeleteEventBusCommandInput}
 * @returns {@link DeleteEventBusCommandOutput}
 * @see {@link DeleteEventBusCommandInput} for command's `input` shape.
 * @see {@link DeleteEventBusCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for EventBridgeClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>There is concurrent modification on a rule, target, archive, or replay.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 *
 */
export class DeleteEventBusCommand extends $Command<
  DeleteEventBusCommandInput,
  DeleteEventBusCommandOutput,
  EventBridgeClientResolvedConfig
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

  /**
   * @public
   */
  constructor(readonly input: DeleteEventBusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteEventBusCommandInput, DeleteEventBusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteEventBusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EventBridgeClient";
    const commandName = "DeleteEventBusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DeleteEventBusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteEventBusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteEventBusCommandOutput> {
    return de_DeleteEventBusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
