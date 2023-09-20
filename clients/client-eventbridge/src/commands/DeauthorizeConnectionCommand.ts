// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { DeauthorizeConnectionRequest, DeauthorizeConnectionResponse } from "../models/models_0";
import { de_DeauthorizeConnectionCommand, se_DeauthorizeConnectionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeauthorizeConnectionCommand}.
 */
export interface DeauthorizeConnectionCommandInput extends DeauthorizeConnectionRequest {}
/**
 * @public
 *
 * The output of {@link DeauthorizeConnectionCommand}.
 */
export interface DeauthorizeConnectionCommandOutput extends DeauthorizeConnectionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Removes all authorization parameters from the connection. This lets you remove the secret
 *       from the connection so you can reuse it without having to create a new connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, DeauthorizeConnectionCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, DeauthorizeConnectionCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const input = { // DeauthorizeConnectionRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeauthorizeConnectionCommand(input);
 * const response = await client.send(command);
 * // { // DeauthorizeConnectionResponse
 * //   ConnectionArn: "STRING_VALUE",
 * //   ConnectionState: "CREATING" || "UPDATING" || "DELETING" || "AUTHORIZED" || "DEAUTHORIZED" || "AUTHORIZING" || "DEAUTHORIZING",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * //   LastAuthorizedTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DeauthorizeConnectionCommandInput - {@link DeauthorizeConnectionCommandInput}
 * @returns {@link DeauthorizeConnectionCommandOutput}
 * @see {@link DeauthorizeConnectionCommandInput} for command's `input` shape.
 * @see {@link DeauthorizeConnectionCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for EventBridgeClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>There is concurrent modification on a rule, target, archive, or replay.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An entity that you specified does not exist.</p>
 *
 * @throws {@link EventBridgeServiceException}
 * <p>Base exception class for all service exceptions from EventBridge service.</p>
 *
 */
export class DeauthorizeConnectionCommand extends $Command<
  DeauthorizeConnectionCommandInput,
  DeauthorizeConnectionCommandOutput,
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
  constructor(readonly input: DeauthorizeConnectionCommandInput) {
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
  ): Handler<DeauthorizeConnectionCommandInput, DeauthorizeConnectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeauthorizeConnectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EventBridgeClient";
    const commandName = "DeauthorizeConnectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSEvents",
        operation: "DeauthorizeConnection",
      },
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
  private serialize(input: DeauthorizeConnectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeauthorizeConnectionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeauthorizeConnectionCommandOutput> {
    return de_DeauthorizeConnectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
