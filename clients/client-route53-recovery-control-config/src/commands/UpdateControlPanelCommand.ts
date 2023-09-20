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

import { UpdateControlPanelRequest, UpdateControlPanelResponse } from "../models/models_0";
import { de_UpdateControlPanelCommand, se_UpdateControlPanelCommand } from "../protocols/Aws_restJson1";
import {
  Route53RecoveryControlConfigClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53RecoveryControlConfigClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateControlPanelCommand}.
 */
export interface UpdateControlPanelCommandInput extends UpdateControlPanelRequest {}
/**
 * @public
 *
 * The output of {@link UpdateControlPanelCommand}.
 */
export interface UpdateControlPanelCommandOutput extends UpdateControlPanelResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates a control panel. The only update you can make to a control panel is to change the name of the control panel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryControlConfigClient, UpdateControlPanelCommand } from "@aws-sdk/client-route53-recovery-control-config"; // ES Modules import
 * // const { Route53RecoveryControlConfigClient, UpdateControlPanelCommand } = require("@aws-sdk/client-route53-recovery-control-config"); // CommonJS import
 * const client = new Route53RecoveryControlConfigClient(config);
 * const input = { // UpdateControlPanelRequest
 *   ControlPanelArn: "STRING_VALUE", // required
 *   ControlPanelName: "STRING_VALUE", // required
 * };
 * const command = new UpdateControlPanelCommand(input);
 * const response = await client.send(command);
 * // { // UpdateControlPanelResponse
 * //   ControlPanel: { // ControlPanel
 * //     ClusterArn: "STRING_VALUE",
 * //     ControlPanelArn: "STRING_VALUE",
 * //     DefaultControlPanel: true || false,
 * //     Name: "STRING_VALUE",
 * //     RoutingControlCount: Number("int"),
 * //     Status: "PENDING" || "DEPLOYED" || "PENDING_DELETION",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateControlPanelCommandInput - {@link UpdateControlPanelCommandInput}
 * @returns {@link UpdateControlPanelCommandOutput}
 * @see {@link UpdateControlPanelCommandInput} for command's `input` shape.
 * @see {@link UpdateControlPanelCommandOutput} for command's `response` shape.
 * @see {@link Route53RecoveryControlConfigClientResolvedConfig | config} for Route53RecoveryControlConfigClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>403 response - You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>409 response - ConflictException. You might be using a predefined variable.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>500 response - InternalServiceError. Temporary service error. Retry the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>404 response - MalformedQueryString. The query string contains a syntax error or resource not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>429 response - LimitExceededException or TooManyRequestsException.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>400 response - Multiple causes. For example, you might have a malformed query string and input parameter might be out of range, or you might have used parameters together incorrectly.</p>
 *
 * @throws {@link Route53RecoveryControlConfigServiceException}
 * <p>Base exception class for all service exceptions from Route53RecoveryControlConfig service.</p>
 *
 */
export class UpdateControlPanelCommand extends $Command<
  UpdateControlPanelCommandInput,
  UpdateControlPanelCommandOutput,
  Route53RecoveryControlConfigClientResolvedConfig
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
  constructor(readonly input: UpdateControlPanelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53RecoveryControlConfigClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateControlPanelCommandInput, UpdateControlPanelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateControlPanelCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53RecoveryControlConfigClient";
    const commandName = "UpdateControlPanelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Route53RecoveryControlConfig",
        operation: "UpdateControlPanel",
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
  private serialize(input: UpdateControlPanelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateControlPanelCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateControlPanelCommandOutput> {
    return de_UpdateControlPanelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
