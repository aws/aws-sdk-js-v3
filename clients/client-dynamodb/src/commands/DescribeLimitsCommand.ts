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

import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { DescribeLimitsInput, DescribeLimitsOutput } from "../models/models_0";
import { de_DescribeLimitsCommand, se_DescribeLimitsCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeLimitsCommand}.
 */
export interface DescribeLimitsCommandInput extends DescribeLimitsInput {}
/**
 * @public
 *
 * The output of {@link DescribeLimitsCommand}.
 */
export interface DescribeLimitsCommandOutput extends DescribeLimitsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns the current provisioned-capacity quotas for your Amazon Web Services account in
 *             a Region, both for the Region as a whole and for any one DynamoDB table that you create
 *             there.</p>
 *          <p>When you establish an Amazon Web Services account, the account has initial quotas on
 *             the maximum read capacity units and write capacity units that you can provision across
 *             all of your DynamoDB tables in a given Region. Also, there are per-table
 *             quotas that apply when you create a table there. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Service,
 *                 Account, and Table Quotas</a> page in the <i>Amazon DynamoDB
 *                 Developer Guide</i>.</p>
 *          <p>Although you can increase these quotas by filing a case at <a href="https://console.aws.amazon.com/support/home#/">Amazon Web Services Support Center</a>, obtaining the
 *             increase is not instantaneous. The <code>DescribeLimits</code> action lets you write
 *             code to compare the capacity you are currently using to those quotas imposed by your
 *             account so that you have enough time to apply for an increase before you hit a
 *             quota.</p>
 *          <p>For example, you could use one of the Amazon Web Services SDKs to do the
 *             following:</p>
 *          <ol>
 *             <li>
 *                <p>Call <code>DescribeLimits</code> for a particular Region to obtain your
 *                     current account quotas on provisioned capacity there.</p>
 *             </li>
 *             <li>
 *                <p>Create a variable to hold the aggregate read capacity units provisioned for
 *                     all your tables in that Region, and one to hold the aggregate write capacity
 *                     units. Zero them both.</p>
 *             </li>
 *             <li>
 *                <p>Call <code>ListTables</code> to obtain a list of all your DynamoDB
 *                     tables.</p>
 *             </li>
 *             <li>
 *                <p>For each table name listed by <code>ListTables</code>, do the
 *                     following:</p>
 *                <ul>
 *                   <li>
 *                      <p>Call <code>DescribeTable</code> with the table name.</p>
 *                   </li>
 *                   <li>
 *                      <p>Use the data returned by <code>DescribeTable</code> to add the read
 *                             capacity units and write capacity units provisioned for the table itself
 *                             to your variables.</p>
 *                   </li>
 *                   <li>
 *                      <p>If the table has one or more global secondary indexes (GSIs), loop
 *                             over these GSIs and add their provisioned capacity values to your
 *                             variables as well.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Report the account quotas for that Region returned by
 *                         <code>DescribeLimits</code>, along with the total current provisioned
 *                     capacity levels you have calculated.</p>
 *             </li>
 *          </ol>
 *          <p>This will let you see whether you are getting close to your account-level
 *             quotas.</p>
 *          <p>The per-table quotas apply only when you are creating a new table. They restrict the
 *             sum of the provisioned capacity of the new table itself and all its global secondary
 *             indexes.</p>
 *          <p>For existing tables and their GSIs, DynamoDB doesn't let you increase provisioned
 *             capacity extremely rapidly, but the only quota that applies is that the aggregate
 *             provisioned capacity over all your tables and GSIs cannot exceed either of the
 *             per-account quotas.</p>
 *          <note>
 *             <p>
 *                <code>DescribeLimits</code> should only be called periodically. You can expect
 *                 throttling errors if you call it more than once in a minute.</p>
 *          </note>
 *          <p>The <code>DescribeLimits</code> Request element has no content.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, DescribeLimitsCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, DescribeLimitsCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const input = {};
 * const command = new DescribeLimitsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLimitsOutput
 * //   AccountMaxReadCapacityUnits: Number("long"),
 * //   AccountMaxWriteCapacityUnits: Number("long"),
 * //   TableMaxReadCapacityUnits: Number("long"),
 * //   TableMaxWriteCapacityUnits: Number("long"),
 * // };
 *
 * ```
 *
 * @param DescribeLimitsCommandInput - {@link DescribeLimitsCommandInput}
 * @returns {@link DescribeLimitsCommandOutput}
 * @see {@link DescribeLimitsCommandInput} for command's `input` shape.
 * @see {@link DescribeLimitsCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for DynamoDBClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidEndpointException} (client fault)
 *
 * @throws {@link DynamoDBServiceException}
 * <p>Base exception class for all service exceptions from DynamoDB service.</p>
 *
 * @example To determine capacity limits per table and account, in the current AWS region
 * ```javascript
 * // The following example returns the maximum read and write capacity units per table, and for the AWS account, in the current AWS region.
 * const input = {};
 * const command = new DescribeLimitsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "AccountMaxReadCapacityUnits": 20000,
 *   "AccountMaxWriteCapacityUnits": 20000,
 *   "TableMaxReadCapacityUnits": 10000,
 *   "TableMaxWriteCapacityUnits": 10000
 * }
 * *\/
 * // example id: to-determine-capacity-limits-per-table-and-account-in-the-current-aws-region-1475884162064
 * ```
 *
 */
export class DescribeLimitsCommand extends $Command<
  DescribeLimitsCommandInput,
  DescribeLimitsCommandOutput,
  DynamoDBClientResolvedConfig
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
  constructor(readonly input: DescribeLimitsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeLimitsCommandInput, DescribeLimitsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeLimitsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBClient";
    const commandName = "DescribeLimitsCommand";
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
  private serialize(input: DescribeLimitsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeLimitsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeLimitsCommandOutput> {
    return de_DescribeLimitsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
