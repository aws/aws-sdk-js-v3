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

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { AssociateKmsKeyRequest } from "../models/models_0";
import { de_AssociateKmsKeyCommand, se_AssociateKmsKeyCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AssociateKmsKeyCommand}.
 */
export interface AssociateKmsKeyCommandInput extends AssociateKmsKeyRequest {}
/**
 * @public
 *
 * The output of {@link AssociateKmsKeyCommand}.
 */
export interface AssociateKmsKeyCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Associates the specified KMS key with either one log group in the account, or with all stored
 *       CloudWatch Logs query insights results in the account.</p>
 *          <p>When you use <code>AssociateKmsKey</code>, you specify either the <code>logGroupName</code> parameter
 *     or the <code>resourceIdentifier</code> parameter. You can't specify both of those parameters in the same operation.</p>
 *          <ul>
 *             <li>
 *                <p>Specify the <code>logGroupName</code> parameter to cause all log events stored in the log group to
 *     be encrypted with that key. Only the log events ingested after the key is associated are encrypted with that key.</p>
 *                <p>Associating a KMS key with a log group overrides any existing
 *       associations between the log group and a KMS key. After a KMS key is associated with a log group, all newly ingested data for the log group is encrypted
 *       using the KMS key. This association is stored as long as the data encrypted
 *       with the KMS key is still within CloudWatch Logs. This enables CloudWatch Logs to decrypt this data whenever it is requested.</p>
 *                <p>Associating
 *     a key with a log group does not cause the results of queries of that log group to be encrypted with that key. To have query
 *     results encrypted with a KMS key, you must use an <code>AssociateKmsKey</code> operation with the <code>resourceIdentifier</code>
 *     parameter that specifies a <code>query-result</code> resource. </p>
 *             </li>
 *             <li>
 *                <p>Specify the <code>resourceIdentifier</code> parameter with a <code>query-result</code> resource,
 *      to use that key to encrypt the stored results of all future
 *       <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StartQuery.html">StartQuery</a>
 *       operations in the account. The response from a
 *       <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetQueryResults.html">GetQueryResults</a>
 *       operation will still return
 *     the query results in plain text.</p>
 *                <p>Even if you have not associated a key with your query results, the query results are encrypted when stored,
 *       using the default CloudWatch Logs method.</p>
 *                <p>If you run a query from a monitoring account that queries logs in a source account, the
 *           query results key from the monitoring account, if any, is used.</p>
 *             </li>
 *          </ul>
 *          <important>
 *             <p>If you delete the key that is used to encrypt log events or log group query results,
 *     then all the associated stored log events or query results that were encrypted with that key
 *     will be unencryptable and unusable.</p>
 *          </important>
 *          <note>
 *             <p>CloudWatch Logs supports only symmetric KMS keys. Do not use an associate
 *         an asymmetric KMS key with your log group or query results. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using
 *           Symmetric and Asymmetric Keys</a>.</p>
 *          </note>
 *          <p>It can take up to 5 minutes for this operation to take effect.</p>
 *          <p>If you attempt to associate a KMS key with a log group but the KMS key does not exist or the KMS key is disabled, you receive an
 *         <code>InvalidParameterException</code> error. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, AssociateKmsKeyCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, AssociateKmsKeyCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const input = { // AssociateKmsKeyRequest
 *   logGroupName: "STRING_VALUE",
 *   kmsKeyId: "STRING_VALUE", // required
 *   resourceIdentifier: "STRING_VALUE",
 * };
 * const command = new AssociateKmsKeyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateKmsKeyCommandInput - {@link AssociateKmsKeyCommandInput}
 * @returns {@link AssociateKmsKeyCommandOutput}
 * @see {@link AssociateKmsKeyCommandInput} for command's `input` shape.
 * @see {@link AssociateKmsKeyCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
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
export class AssociateKmsKeyCommand extends $Command<
  AssociateKmsKeyCommandInput,
  AssociateKmsKeyCommandOutput,
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
  constructor(readonly input: AssociateKmsKeyCommandInput) {
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
  ): Handler<AssociateKmsKeyCommandInput, AssociateKmsKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateKmsKeyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchLogsClient";
    const commandName = "AssociateKmsKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Logs_20140328",
        operation: "AssociateKmsKey",
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
  private serialize(input: AssociateKmsKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AssociateKmsKeyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateKmsKeyCommandOutput> {
    return de_AssociateKmsKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
