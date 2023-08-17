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
import { PutDataProtectionPolicyRequest, PutDataProtectionPolicyResponse } from "../models/models_0";
import { de_PutDataProtectionPolicyCommand, se_PutDataProtectionPolicyCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutDataProtectionPolicyCommand}.
 */
export interface PutDataProtectionPolicyCommandInput extends PutDataProtectionPolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutDataProtectionPolicyCommand}.
 */
export interface PutDataProtectionPolicyCommandOutput extends PutDataProtectionPolicyResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a data protection policy for the specified log group. A data protection policy can help safeguard sensitive
 *       data that's ingested by the log group by auditing and masking the sensitive log data.</p>
 *          <important>
 *             <p>Sensitive data is detected and masked when it is ingested into the log group. When you set a
 *       data protection policy, log events ingested into the log group before that time are not masked.</p>
 *          </important>
 *          <p>By default, when a user views a log event that includes masked data, the sensitive data is replaced by asterisks.
 *       A user who has the <code>logs:Unmask</code> permission can use a
 *       <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogEvents.html">GetLogEvents</a> or
 *       <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_FilterLogEvents.html">FilterLogEvents</a>
 *       operation with the <code>unmask</code> parameter set to <code>true</code> to view the unmasked
 *       log events. Users with the <code>logs:Unmask</code> can also view unmasked data in the CloudWatch Logs
 *       console by running a CloudWatch Logs Insights query with the <code>unmask</code> query command.</p>
 *          <p>For more information, including a list of types of data that can be audited and masked, see
 *       <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/mask-sensitive-log-data.html">Protect sensitive log data with masking</a>.</p>
 *          <p>The <code>PutDataProtectionPolicy</code> operation applies to only the specified log group. You can also use
 *       <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutAccountPolicy.html">PutAccountPolicy</a>
 *       to create an account-level data protection policy that applies to all log groups in the account,
 *     including both existing log groups and log groups that are created level. If a log group has its own data protection policy and
 *     the account also has an account-level data protection policy, then the two policies are cumulative. Any sensitive term
 *     specified in either policy is masked.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, PutDataProtectionPolicyCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, PutDataProtectionPolicyCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const input = { // PutDataProtectionPolicyRequest
 *   logGroupIdentifier: "STRING_VALUE", // required
 *   policyDocument: "STRING_VALUE", // required
 * };
 * const command = new PutDataProtectionPolicyCommand(input);
 * const response = await client.send(command);
 * // { // PutDataProtectionPolicyResponse
 * //   logGroupIdentifier: "STRING_VALUE",
 * //   policyDocument: "STRING_VALUE",
 * //   lastUpdatedTime: Number("long"),
 * // };
 *
 * ```
 *
 * @param PutDataProtectionPolicyCommandInput - {@link PutDataProtectionPolicyCommandInput}
 * @returns {@link PutDataProtectionPolicyCommandOutput}
 * @see {@link PutDataProtectionPolicyCommandInput} for command's `input` shape.
 * @see {@link PutDataProtectionPolicyCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service cannot complete the request.</p>
 *
 * @throws {@link CloudWatchLogsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchLogs service.</p>
 *
 */
export class PutDataProtectionPolicyCommand extends $Command<
  PutDataProtectionPolicyCommandInput,
  PutDataProtectionPolicyCommandOutput,
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
  constructor(readonly input: PutDataProtectionPolicyCommandInput) {
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
  ): Handler<PutDataProtectionPolicyCommandInput, PutDataProtectionPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutDataProtectionPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchLogsClient";
    const commandName = "PutDataProtectionPolicyCommand";
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
  private serialize(input: PutDataProtectionPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutDataProtectionPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutDataProtectionPolicyCommandOutput> {
    return de_PutDataProtectionPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
