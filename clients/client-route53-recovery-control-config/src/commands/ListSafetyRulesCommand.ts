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

import { ListSafetyRulesRequest, ListSafetyRulesResponse } from "../models/models_0";
import { de_ListSafetyRulesCommand, se_ListSafetyRulesCommand } from "../protocols/Aws_restJson1";
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
 * The input for {@link ListSafetyRulesCommand}.
 */
export interface ListSafetyRulesCommandInput extends ListSafetyRulesRequest {}
/**
 * @public
 *
 * The output of {@link ListSafetyRulesCommand}.
 */
export interface ListSafetyRulesCommandOutput extends ListSafetyRulesResponse, __MetadataBearer {}

/**
 * @public
 * <p>List the safety rules (the assertion rules and gating rules) that you've defined for the routing controls in a control panel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryControlConfigClient, ListSafetyRulesCommand } from "@aws-sdk/client-route53-recovery-control-config"; // ES Modules import
 * // const { Route53RecoveryControlConfigClient, ListSafetyRulesCommand } = require("@aws-sdk/client-route53-recovery-control-config"); // CommonJS import
 * const client = new Route53RecoveryControlConfigClient(config);
 * const input = { // ListSafetyRulesRequest
 *   ControlPanelArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListSafetyRulesCommand(input);
 * const response = await client.send(command);
 * // { // ListSafetyRulesResponse
 * //   NextToken: "STRING_VALUE",
 * //   SafetyRules: [ // __listOfRule
 * //     { // Rule
 * //       ASSERTION: { // AssertionRule
 * //         AssertedControls: [ // __listOf__stringMin1Max256PatternAZaZ09 // required
 * //           "STRING_VALUE",
 * //         ],
 * //         ControlPanelArn: "STRING_VALUE", // required
 * //         Name: "STRING_VALUE", // required
 * //         RuleConfig: { // RuleConfig
 * //           Inverted: true || false, // required
 * //           Threshold: Number("int"), // required
 * //           Type: "ATLEAST" || "AND" || "OR", // required
 * //         },
 * //         SafetyRuleArn: "STRING_VALUE", // required
 * //         Status: "PENDING" || "DEPLOYED" || "PENDING_DELETION", // required
 * //         WaitPeriodMs: Number("int"), // required
 * //       },
 * //       GATING: { // GatingRule
 * //         ControlPanelArn: "STRING_VALUE", // required
 * //         GatingControls: [ // required
 * //           "STRING_VALUE",
 * //         ],
 * //         Name: "STRING_VALUE", // required
 * //         RuleConfig: {
 * //           Inverted: true || false, // required
 * //           Threshold: Number("int"), // required
 * //           Type: "ATLEAST" || "AND" || "OR", // required
 * //         },
 * //         SafetyRuleArn: "STRING_VALUE", // required
 * //         Status: "PENDING" || "DEPLOYED" || "PENDING_DELETION", // required
 * //         TargetControls: [ // required
 * //           "STRING_VALUE",
 * //         ],
 * //         WaitPeriodMs: Number("int"), // required
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListSafetyRulesCommandInput - {@link ListSafetyRulesCommandInput}
 * @returns {@link ListSafetyRulesCommandOutput}
 * @see {@link ListSafetyRulesCommandInput} for command's `input` shape.
 * @see {@link ListSafetyRulesCommandOutput} for command's `response` shape.
 * @see {@link Route53RecoveryControlConfigClientResolvedConfig | config} for Route53RecoveryControlConfigClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>403 response - You do not have sufficient access to perform this action.</p>
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
export class ListSafetyRulesCommand extends $Command<
  ListSafetyRulesCommandInput,
  ListSafetyRulesCommandOutput,
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
  constructor(readonly input: ListSafetyRulesCommandInput) {
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
  ): Handler<ListSafetyRulesCommandInput, ListSafetyRulesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSafetyRulesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53RecoveryControlConfigClient";
    const commandName = "ListSafetyRulesCommand";
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
  private serialize(input: ListSafetyRulesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListSafetyRulesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSafetyRulesCommandOutput> {
    return de_ListSafetyRulesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
