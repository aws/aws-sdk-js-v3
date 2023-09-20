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

import { ListAutomationRulesRequest, ListAutomationRulesResponse } from "../models/models_2";
import { de_ListAutomationRulesCommand, se_ListAutomationRulesCommand } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAutomationRulesCommand}.
 */
export interface ListAutomationRulesCommandInput extends ListAutomationRulesRequest {}
/**
 * @public
 *
 * The output of {@link ListAutomationRulesCommand}.
 */
export interface ListAutomationRulesCommandOutput extends ListAutomationRulesResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 *          A list of automation rules and their metadata for the calling account.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, ListAutomationRulesCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, ListAutomationRulesCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // ListAutomationRulesRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListAutomationRulesCommand(input);
 * const response = await client.send(command);
 * // { // ListAutomationRulesResponse
 * //   AutomationRulesMetadata: [ // AutomationRulesMetadataList
 * //     { // AutomationRulesMetadata
 * //       RuleArn: "STRING_VALUE",
 * //       RuleStatus: "ENABLED" || "DISABLED",
 * //       RuleOrder: Number("int"),
 * //       RuleName: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       IsTerminal: true || false,
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //       CreatedBy: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAutomationRulesCommandInput - {@link ListAutomationRulesCommandInput}
 * @returns {@link ListAutomationRulesCommandOutput}
 * @see {@link ListAutomationRulesCommandInput} for command's `input` shape.
 * @see {@link ListAutomationRulesCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action specified in the request.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidAccessException} (client fault)
 *  <p>The account doesn't have permission to perform this action.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because you supplied an invalid or out-of-range value for an
 *          input parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current Amazon Web Services
 *          account or throttling limits. The error code describes the limit exceeded.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 * @example To list automation rules
 * ```javascript
 * // The following example lists automation rules and rule metadata in the calling account.
 * const input = {
 *   "MaxResults": 2,
 *   "NextToken": "example-token"
 * };
 * const command = new ListAutomationRulesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "AutomationRulesMetadata": [
 *     {
 *       "CreatedAt": "2022-08-31T01:52:33.250Z",
 *       "CreatedBy": "AROAJURBUYQQNL5OL2TIM:TEST-16MJ75L9VBK14",
 *       "Description": "IAM.8 is a known issue and can be resolved",
 *       "RuleArn": "arn:aws:securityhub:us-east-1:123456789012:automation-rule/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *       "RuleName": "sample-rule-name-1",
 *       "RuleOrder": 1,
 *       "RuleStatus": "ENABLED",
 *       "UpdatedAt": "2022-08-31T01:52:33.250Z"
 *     },
 *     {
 *       "CreatedAt": "2022-08-31T01:52:33.250Z",
 *       "CreatedBy": "AROAJURBUYQQNL5OL2TIM:TEST-16MJ75L9VBK14",
 *       "Description": "Lambda.2 is a known issue and can be resolved",
 *       "RuleArn": "arn:aws:securityhub:us-east-1:123456789012:automation-rule/a1b2c3d4-5678-90ab-cdef-EXAMPLE22222",
 *       "RuleName": "sample-rule-name-2",
 *       "RuleOrder": 2,
 *       "RuleStatus": "ENABLED",
 *       "UpdatedAt": "2022-08-31T01:52:33.250Z"
 *     }
 *   ],
 *   "NextToken": "example-token"
 * }
 * *\/
 * // example id: to-list-automation-rules-1684770582059
 * ```
 *
 */
export class ListAutomationRulesCommand extends $Command<
  ListAutomationRulesCommandInput,
  ListAutomationRulesCommandOutput,
  SecurityHubClientResolvedConfig
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
  constructor(readonly input: ListAutomationRulesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAutomationRulesCommandInput, ListAutomationRulesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAutomationRulesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "ListAutomationRulesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SecurityHubAPIService",
        operation: "ListAutomationRules",
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
  private serialize(input: ListAutomationRulesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListAutomationRulesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAutomationRulesCommandOutput> {
    return de_ListAutomationRulesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
