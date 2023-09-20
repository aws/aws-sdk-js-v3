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

import { DescribeExportTasksMessage, ExportTasksMessage } from "../models/models_1";
import { de_DescribeExportTasksCommand, se_DescribeExportTasksCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeExportTasksCommand}.
 */
export interface DescribeExportTasksCommandInput extends DescribeExportTasksMessage {}
/**
 * @public
 *
 * The output of {@link DescribeExportTasksCommand}.
 */
export interface DescribeExportTasksCommandOutput extends ExportTasksMessage, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about a snapshot or cluster export to Amazon S3. This API operation supports
 *             pagination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeExportTasksCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeExportTasksCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // DescribeExportTasksMessage
 *   ExportTaskIdentifier: "STRING_VALUE",
 *   SourceArn: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   Marker: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   SourceType: "SNAPSHOT" || "CLUSTER",
 * };
 * const command = new DescribeExportTasksCommand(input);
 * const response = await client.send(command);
 * // { // ExportTasksMessage
 * //   Marker: "STRING_VALUE",
 * //   ExportTasks: [ // ExportTasksList
 * //     { // ExportTask
 * //       ExportTaskIdentifier: "STRING_VALUE",
 * //       SourceArn: "STRING_VALUE",
 * //       ExportOnly: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //       SnapshotTime: new Date("TIMESTAMP"),
 * //       TaskStartTime: new Date("TIMESTAMP"),
 * //       TaskEndTime: new Date("TIMESTAMP"),
 * //       S3Bucket: "STRING_VALUE",
 * //       S3Prefix: "STRING_VALUE",
 * //       IamRoleArn: "STRING_VALUE",
 * //       KmsKeyId: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       PercentProgress: Number("int"),
 * //       TotalExtractedDataInGB: Number("int"),
 * //       FailureCause: "STRING_VALUE",
 * //       WarningMessage: "STRING_VALUE",
 * //       SourceType: "SNAPSHOT" || "CLUSTER",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeExportTasksCommandInput - {@link DescribeExportTasksCommandInput}
 * @returns {@link DescribeExportTasksCommandOutput}
 * @see {@link DescribeExportTasksCommandInput} for command's `input` shape.
 * @see {@link DescribeExportTasksCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link ExportTaskNotFoundFault} (client fault)
 *  <p>The export task doesn't exist.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @example To describe snapshot export tasks
 * ```javascript
 * // The following example returns information about snapshot exports to Amazon S3.
 * const input = {};
 * const command = new DescribeExportTasksCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ExportTasks": [
 *     {
 *       "ExportTaskIdentifier": "test-snapshot-export",
 *       "IamRoleArn": "arn:aws:iam::123456789012:role/service-role/ExportRole",
 *       "KmsKeyId": "arn:aws:kms:us-west-2:123456789012:key/abcd0000-7fca-4128-82f2-aabbccddeeff",
 *       "PercentProgress": 100,
 *       "S3Bucket": "mybucket",
 *       "S3Prefix": "",
 *       "SnapshotTime": "2020-03-02T18:26:28.163Z",
 *       "SourceArn": "arn:aws:rds:us-west-2:123456789012:snapshot:test-snapshot",
 *       "Status": "COMPLETE",
 *       "TaskEndTime": "2020-03-02T19:10:31.985Z",
 *       "TaskStartTime": "2020-03-02T18:57:56.896Z",
 *       "TotalExtractedDataInGB": 0
 *     },
 *     {
 *       "ExportTaskIdentifier": "my-s3-export",
 *       "IamRoleArn": "arn:aws:iam::123456789012:role/service-role/ExportRole",
 *       "KmsKeyId": "arn:aws:kms:us-west-2:123456789012:key/abcd0000-7fca-4128-82f2-aabbccddeeff",
 *       "PercentProgress": 0,
 *       "S3Bucket": "mybucket",
 *       "S3Prefix": "",
 *       "SnapshotTime": "2020-03-27T20:48:42.023Z",
 *       "SourceArn": "arn:aws:rds:us-west-2:123456789012:snapshot:db5-snapshot-test",
 *       "Status": "STARTING",
 *       "TotalExtractedDataInGB": 0
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-snapshot-export-tasks-1680282299489
 * ```
 *
 */
export class DescribeExportTasksCommand extends $Command<
  DescribeExportTasksCommandInput,
  DescribeExportTasksCommandOutput,
  RDSClientResolvedConfig
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
  constructor(readonly input: DescribeExportTasksCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeExportTasksCommandInput, DescribeExportTasksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeExportTasksCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DescribeExportTasksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonRDSv19",
        operation: "DescribeExportTasks",
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
  private serialize(input: DescribeExportTasksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeExportTasksCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeExportTasksCommandOutput> {
    return de_DescribeExportTasksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
