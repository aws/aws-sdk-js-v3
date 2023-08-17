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
import { DescribeLogGroupsRequest, DescribeLogGroupsResponse } from "../models/models_0";
import { de_DescribeLogGroupsCommand, se_DescribeLogGroupsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeLogGroupsCommand}.
 */
export interface DescribeLogGroupsCommandInput extends DescribeLogGroupsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeLogGroupsCommand}.
 */
export interface DescribeLogGroupsCommandOutput extends DescribeLogGroupsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the specified log groups. You can list all your log groups or filter the results by prefix.
 *       The results are ASCII-sorted by log group name.</p>
 *          <p>CloudWatch Logs doesn’t support IAM policies that control access to the <code>DescribeLogGroups</code> action by using the
 *       <code>aws:ResourceTag/<i>key-name</i>
 *             </code> condition key. Other CloudWatch Logs actions
 *       do support the use of the <code>aws:ResourceTag/<i>key-name</i>
 *             </code> condition key to control access.
 *       For more information about using tags to control access, see
 *       <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Controlling access to Amazon Web Services resources using tags</a>.</p>
 *          <p>If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account and
 *     view data from the linked source accounts. For more information, see
 *       <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DescribeLogGroupsCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DescribeLogGroupsCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const input = { // DescribeLogGroupsRequest
 *   accountIdentifiers: [ // AccountIds
 *     "STRING_VALUE",
 *   ],
 *   logGroupNamePrefix: "STRING_VALUE",
 *   logGroupNamePattern: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   limit: Number("int"),
 *   includeLinkedAccounts: true || false,
 * };
 * const command = new DescribeLogGroupsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLogGroupsResponse
 * //   logGroups: [ // LogGroups
 * //     { // LogGroup
 * //       logGroupName: "STRING_VALUE",
 * //       creationTime: Number("long"),
 * //       retentionInDays: Number("int"),
 * //       metricFilterCount: Number("int"),
 * //       arn: "STRING_VALUE",
 * //       storedBytes: Number("long"),
 * //       kmsKeyId: "STRING_VALUE",
 * //       dataProtectionStatus: "ACTIVATED" || "DELETED" || "ARCHIVED" || "DISABLED",
 * //       inheritedProperties: [ // InheritedProperties
 * //         "ACCOUNT_DATA_PROTECTION",
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeLogGroupsCommandInput - {@link DescribeLogGroupsCommandInput}
 * @returns {@link DescribeLogGroupsCommandOutput}
 * @see {@link DescribeLogGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeLogGroupsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service cannot complete the request.</p>
 *
 * @throws {@link CloudWatchLogsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchLogs service.</p>
 *
 */
export class DescribeLogGroupsCommand extends $Command<
  DescribeLogGroupsCommandInput,
  DescribeLogGroupsCommandOutput,
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
  constructor(readonly input: DescribeLogGroupsCommandInput) {
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
  ): Handler<DescribeLogGroupsCommandInput, DescribeLogGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeLogGroupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchLogsClient";
    const commandName = "DescribeLogGroupsCommand";
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
  private serialize(input: DescribeLogGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeLogGroupsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeLogGroupsCommandOutput> {
    return de_DescribeLogGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
