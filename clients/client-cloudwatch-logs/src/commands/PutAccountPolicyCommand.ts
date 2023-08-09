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

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { PutAccountPolicyRequest, PutAccountPolicyResponse } from "../models/models_0";
import { de_PutAccountPolicyCommand, se_PutAccountPolicyCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutAccountPolicyCommand}.
 */
export interface PutAccountPolicyCommandInput extends PutAccountPolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutAccountPolicyCommand}.
 */
export interface PutAccountPolicyCommandOutput extends PutAccountPolicyResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates an account-level data protection policy that applies to all log groups in the account. A data protection policy can help safeguard sensitive
 *       data that's ingested by your log groups by auditing and masking the sensitive log data. Each account can have only
 *     one account-level policy.</p>
 *          <important>
 *             <p>Sensitive data is detected and masked when it is ingested into a log group. When you set a
 *       data protection policy, log events ingested into the log groups before that time are not masked.</p>
 *          </important>
 *          <p>If you use <code>PutAccountPolicy</code> to create a data protection policy for your whole account, it applies to both existing log groups
 *     and all log groups that are created later in this account. The account policy is applied to existing log groups
 *     with eventual consistency. It might take up to 5 minutes before sensitive data in existing log groups begins to be masked.</p>
 *          <p>By default, when a user views a log event that includes masked data, the sensitive data is replaced by asterisks.
 *       A user who has the <code>logs:Unmask</code> permission can use a
 *       <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogEvents.html">GetLogEvents</a> or
 *       <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_FilterLogEvents.html">FilterLogEvents</a>
 *       operation with the <code>unmask</code> parameter set to <code>true</code> to view the unmasked
 *       log events. Users with the <code>logs:Unmask</code> can also view unmasked data in the CloudWatch Logs
 *       console by running a CloudWatch Logs Insights query with the <code>unmask</code> query command.</p>
 *          <p>For more information, including a list of types of data that can be audited and masked, see
 *       <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/mask-sensitive-log-data.html">Protect sensitive log data with masking</a>.</p>
 *          <p>To use the <code>PutAccountPolicy</code> operation, you must be signed on with the <code>logs:PutDataProtectionPolicy</code>
 *     and <code>logs:PutAccountPolicy</code> permissions.</p>
 *          <p>The <code>PutAccountPolicy</code> operation applies to all log groups in the account. You can also use
 *       <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDataProtectionPolicy.html">PutDataProtectionPolicy</a>
 *       to create a data protection policy that applies to just one log group.
 *       If a log group has its own data protection policy and
 *       the account also has an account-level data protection policy, then the two policies are cumulative. Any sensitive term
 *       specified in either policy is masked.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, PutAccountPolicyCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, PutAccountPolicyCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const input = { // PutAccountPolicyRequest
 *   policyName: "STRING_VALUE", // required
 *   policyDocument: "STRING_VALUE", // required
 *   policyType: "DATA_PROTECTION_POLICY", // required
 *   scope: "ALL",
 * };
 * const command = new PutAccountPolicyCommand(input);
 * const response = await client.send(command);
 * // { // PutAccountPolicyResponse
 * //   accountPolicy: { // AccountPolicy
 * //     policyName: "STRING_VALUE",
 * //     policyDocument: "STRING_VALUE",
 * //     lastUpdatedTime: Number("long"),
 * //     policyType: "DATA_PROTECTION_POLICY",
 * //     scope: "ALL",
 * //     accountId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param PutAccountPolicyCommandInput - {@link PutAccountPolicyCommandInput}
 * @returns {@link PutAccountPolicyCommandOutput}
 * @see {@link PutAccountPolicyCommandInput} for command's `input` shape.
 * @see {@link PutAccountPolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You have reached the maximum number of resources that can be created.</p>
 *
 * @throws {@link OperationAbortedException} (client fault)
 *  <p>Multiple concurrent requests to update the same resource were in conflict.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service cannot complete the request.</p>
 *
 * @throws {@link CloudWatchLogsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchLogs service.</p>
 *
 */
export class PutAccountPolicyCommand extends $Command<
  PutAccountPolicyCommandInput,
  PutAccountPolicyCommandOutput,
  CloudWatchLogsClientResolvedConfig
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
  constructor(readonly input: PutAccountPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutAccountPolicyCommandInput, PutAccountPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutAccountPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchLogsClient";
    const commandName = "PutAccountPolicyCommand";
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
  private serialize(input: PutAccountPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutAccountPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutAccountPolicyCommandOutput> {
    return de_PutAccountPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
