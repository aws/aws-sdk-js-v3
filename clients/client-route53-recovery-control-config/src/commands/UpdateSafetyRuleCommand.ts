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

import { UpdateSafetyRuleRequest, UpdateSafetyRuleResponse } from "../models/models_0";
import { de_UpdateSafetyRuleCommand, se_UpdateSafetyRuleCommand } from "../protocols/Aws_restJson1";
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
 * The input for {@link UpdateSafetyRuleCommand}.
 */
export interface UpdateSafetyRuleCommandInput extends UpdateSafetyRuleRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSafetyRuleCommand}.
 */
export interface UpdateSafetyRuleCommandOutput extends UpdateSafetyRuleResponse, __MetadataBearer {}

/**
 * @public
 * <p>Update a safety rule (an assertion rule or gating rule). You can only update the name and the waiting period for a safety rule. To make other updates, delete the safety rule and create a new one.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryControlConfigClient, UpdateSafetyRuleCommand } from "@aws-sdk/client-route53-recovery-control-config"; // ES Modules import
 * // const { Route53RecoveryControlConfigClient, UpdateSafetyRuleCommand } = require("@aws-sdk/client-route53-recovery-control-config"); // CommonJS import
 * const client = new Route53RecoveryControlConfigClient(config);
 * const input = { // UpdateSafetyRuleRequest
 *   AssertionRuleUpdate: { // AssertionRuleUpdate
 *     Name: "STRING_VALUE", // required
 *     SafetyRuleArn: "STRING_VALUE", // required
 *     WaitPeriodMs: Number("int"), // required
 *   },
 *   GatingRuleUpdate: { // GatingRuleUpdate
 *     Name: "STRING_VALUE", // required
 *     SafetyRuleArn: "STRING_VALUE", // required
 *     WaitPeriodMs: Number("int"), // required
 *   },
 * };
 * const command = new UpdateSafetyRuleCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSafetyRuleResponse
 * //   AssertionRule: { // AssertionRule
 * //     AssertedControls: [ // __listOf__stringMin1Max256PatternAZaZ09 // required
 * //       "STRING_VALUE",
 * //     ],
 * //     ControlPanelArn: "STRING_VALUE", // required
 * //     Name: "STRING_VALUE", // required
 * //     RuleConfig: { // RuleConfig
 * //       Inverted: true || false, // required
 * //       Threshold: Number("int"), // required
 * //       Type: "ATLEAST" || "AND" || "OR", // required
 * //     },
 * //     SafetyRuleArn: "STRING_VALUE", // required
 * //     Status: "PENDING" || "DEPLOYED" || "PENDING_DELETION", // required
 * //     WaitPeriodMs: Number("int"), // required
 * //     Owner: "STRING_VALUE",
 * //   },
 * //   GatingRule: { // GatingRule
 * //     ControlPanelArn: "STRING_VALUE", // required
 * //     GatingControls: [ // required
 * //       "STRING_VALUE",
 * //     ],
 * //     Name: "STRING_VALUE", // required
 * //     RuleConfig: {
 * //       Inverted: true || false, // required
 * //       Threshold: Number("int"), // required
 * //       Type: "ATLEAST" || "AND" || "OR", // required
 * //     },
 * //     SafetyRuleArn: "STRING_VALUE", // required
 * //     Status: "PENDING" || "DEPLOYED" || "PENDING_DELETION", // required
 * //     TargetControls: [ // required
 * //       "STRING_VALUE",
 * //     ],
 * //     WaitPeriodMs: Number("int"), // required
 * //     Owner: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateSafetyRuleCommandInput - {@link UpdateSafetyRuleCommandInput}
 * @returns {@link UpdateSafetyRuleCommandOutput}
 * @see {@link UpdateSafetyRuleCommandInput} for command's `input` shape.
 * @see {@link UpdateSafetyRuleCommandOutput} for command's `response` shape.
 * @see {@link Route53RecoveryControlConfigClientResolvedConfig | config} for Route53RecoveryControlConfigClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>500 response - InternalServiceError. Temporary service error. Retry the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>404 response - MalformedQueryString. The query string contains a syntax error or resource not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>400 response - Multiple causes. For example, you might have a malformed query string and input parameter might be out of range, or you might have used parameters together incorrectly.</p>
 *
 * @throws {@link Route53RecoveryControlConfigServiceException}
 * <p>Base exception class for all service exceptions from Route53RecoveryControlConfig service.</p>
 *
 */
export class UpdateSafetyRuleCommand extends $Command<
  UpdateSafetyRuleCommandInput,
  UpdateSafetyRuleCommandOutput,
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
  constructor(readonly input: UpdateSafetyRuleCommandInput) {
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
  ): Handler<UpdateSafetyRuleCommandInput, UpdateSafetyRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateSafetyRuleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53RecoveryControlConfigClient";
    const commandName = "UpdateSafetyRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Route53RecoveryControlConfig",
        operation: "UpdateSafetyRule",
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
  private serialize(input: UpdateSafetyRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateSafetyRuleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateSafetyRuleCommandOutput> {
    return de_UpdateSafetyRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
