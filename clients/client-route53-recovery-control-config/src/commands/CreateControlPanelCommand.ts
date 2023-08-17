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
} from "@smithy/types";

import { CreateControlPanelRequest, CreateControlPanelResponse } from "../models/models_0";
import { de_CreateControlPanelCommand, se_CreateControlPanelCommand } from "../protocols/Aws_restJson1";
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
 * The input for {@link CreateControlPanelCommand}.
 */
export interface CreateControlPanelCommandInput extends CreateControlPanelRequest {}
/**
 * @public
 *
 * The output of {@link CreateControlPanelCommand}.
 */
export interface CreateControlPanelCommandOutput extends CreateControlPanelResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new control panel. A control panel represents a group of routing controls that can be changed together in a single transaction. You can use a control panel to centrally view the operational status of applications across your organization, and trigger multi-app failovers in a single transaction, for example, to fail over an Availability Zone or Amazon Web Services Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryControlConfigClient, CreateControlPanelCommand } from "@aws-sdk/client-route53-recovery-control-config"; // ES Modules import
 * // const { Route53RecoveryControlConfigClient, CreateControlPanelCommand } = require("@aws-sdk/client-route53-recovery-control-config"); // CommonJS import
 * const client = new Route53RecoveryControlConfigClient(config);
 * const input = { // CreateControlPanelRequest
 *   ClientToken: "STRING_VALUE",
 *   ClusterArn: "STRING_VALUE", // required
 *   ControlPanelName: "STRING_VALUE", // required
 *   Tags: { // __mapOf__stringMin0Max256PatternS
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateControlPanelCommand(input);
 * const response = await client.send(command);
 * // { // CreateControlPanelResponse
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
 * @param CreateControlPanelCommandInput - {@link CreateControlPanelCommandInput}
 * @returns {@link CreateControlPanelCommandOutput}
 * @see {@link CreateControlPanelCommandInput} for command's `input` shape.
 * @see {@link CreateControlPanelCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>402 response - You attempted to create more resources than the service allows based on service quotas.</p>
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
export class CreateControlPanelCommand extends $Command<
  CreateControlPanelCommandInput,
  CreateControlPanelCommandOutput,
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
  constructor(readonly input: CreateControlPanelCommandInput) {
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
  ): Handler<CreateControlPanelCommandInput, CreateControlPanelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateControlPanelCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53RecoveryControlConfigClient";
    const commandName = "CreateControlPanelCommand";
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
  private serialize(input: CreateControlPanelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateControlPanelCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateControlPanelCommandOutput> {
    return de_CreateControlPanelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
