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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  DescribeImportSnapshotTasksRequest,
  DescribeImportSnapshotTasksResult,
  DescribeImportSnapshotTasksResultFilterSensitiveLog,
} from "../models/models_3";
import { de_DescribeImportSnapshotTasksCommand, se_DescribeImportSnapshotTasksCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeImportSnapshotTasksCommand}.
 */
export interface DescribeImportSnapshotTasksCommandInput extends DescribeImportSnapshotTasksRequest {}
/**
 * @public
 *
 * The output of {@link DescribeImportSnapshotTasksCommand}.
 */
export interface DescribeImportSnapshotTasksCommandOutput extends DescribeImportSnapshotTasksResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes your import snapshot tasks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeImportSnapshotTasksCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeImportSnapshotTasksCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeImportSnapshotTasksRequest
 *   DryRun: true || false,
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   ImportTaskIds: [ // ImportSnapshotTaskIdList
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeImportSnapshotTasksCommand(input);
 * const response = await client.send(command);
 * // { // DescribeImportSnapshotTasksResult
 * //   ImportSnapshotTasks: [ // ImportSnapshotTaskList
 * //     { // ImportSnapshotTask
 * //       Description: "STRING_VALUE",
 * //       ImportTaskId: "STRING_VALUE",
 * //       SnapshotTaskDetail: { // SnapshotTaskDetail
 * //         Description: "STRING_VALUE",
 * //         DiskImageSize: Number("double"),
 * //         Encrypted: true || false,
 * //         Format: "STRING_VALUE",
 * //         KmsKeyId: "STRING_VALUE",
 * //         Progress: "STRING_VALUE",
 * //         SnapshotId: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //         StatusMessage: "STRING_VALUE",
 * //         Url: "STRING_VALUE",
 * //         UserBucket: { // UserBucketDetails
 * //           S3Bucket: "STRING_VALUE",
 * //           S3Key: "STRING_VALUE",
 * //         },
 * //       },
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeImportSnapshotTasksCommandInput - {@link DescribeImportSnapshotTasksCommandInput}
 * @returns {@link DescribeImportSnapshotTasksCommandOutput}
 * @see {@link DescribeImportSnapshotTasksCommandInput} for command's `input` shape.
 * @see {@link DescribeImportSnapshotTasksCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeImportSnapshotTasksCommand extends $Command<
  DescribeImportSnapshotTasksCommandInput,
  DescribeImportSnapshotTasksCommandOutput,
  EC2ClientResolvedConfig
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
  constructor(readonly input: DescribeImportSnapshotTasksCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeImportSnapshotTasksCommandInput, DescribeImportSnapshotTasksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeImportSnapshotTasksCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeImportSnapshotTasksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DescribeImportSnapshotTasksResultFilterSensitiveLog,
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
  private serialize(input: DescribeImportSnapshotTasksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeImportSnapshotTasksCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeImportSnapshotTasksCommandOutput> {
    return de_DescribeImportSnapshotTasksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
