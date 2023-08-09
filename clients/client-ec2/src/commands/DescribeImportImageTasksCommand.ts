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
  DescribeImportImageTasksRequest,
  DescribeImportImageTasksResult,
  DescribeImportImageTasksResultFilterSensitiveLog,
} from "../models/models_3";
import { de_DescribeImportImageTasksCommand, se_DescribeImportImageTasksCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeImportImageTasksCommand}.
 */
export interface DescribeImportImageTasksCommandInput extends DescribeImportImageTasksRequest {}
/**
 * @public
 *
 * The output of {@link DescribeImportImageTasksCommand}.
 */
export interface DescribeImportImageTasksCommandOutput extends DescribeImportImageTasksResult, __MetadataBearer {}

/**
 * @public
 * <p>Displays details about an import virtual machine or import snapshot tasks that are already created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeImportImageTasksCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeImportImageTasksCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeImportImageTasksRequest
 *   DryRun: true || false,
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   ImportTaskIds: [ // ImportTaskIdList
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeImportImageTasksCommand(input);
 * const response = await client.send(command);
 * // { // DescribeImportImageTasksResult
 * //   ImportImageTasks: [ // ImportImageTaskList
 * //     { // ImportImageTask
 * //       Architecture: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Encrypted: true || false,
 * //       Hypervisor: "STRING_VALUE",
 * //       ImageId: "STRING_VALUE",
 * //       ImportTaskId: "STRING_VALUE",
 * //       KmsKeyId: "STRING_VALUE",
 * //       LicenseType: "STRING_VALUE",
 * //       Platform: "STRING_VALUE",
 * //       Progress: "STRING_VALUE",
 * //       SnapshotDetails: [ // SnapshotDetailList
 * //         { // SnapshotDetail
 * //           Description: "STRING_VALUE",
 * //           DeviceName: "STRING_VALUE",
 * //           DiskImageSize: Number("double"),
 * //           Format: "STRING_VALUE",
 * //           Progress: "STRING_VALUE",
 * //           SnapshotId: "STRING_VALUE",
 * //           Status: "STRING_VALUE",
 * //           StatusMessage: "STRING_VALUE",
 * //           Url: "STRING_VALUE",
 * //           UserBucket: { // UserBucketDetails
 * //             S3Bucket: "STRING_VALUE",
 * //             S3Key: "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //       Status: "STRING_VALUE",
 * //       StatusMessage: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       LicenseSpecifications: [ // ImportImageLicenseSpecificationListResponse
 * //         { // ImportImageLicenseConfigurationResponse
 * //           LicenseConfigurationArn: "STRING_VALUE",
 * //         },
 * //       ],
 * //       UsageOperation: "STRING_VALUE",
 * //       BootMode: "legacy-bios" || "uefi" || "uefi-preferred",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeImportImageTasksCommandInput - {@link DescribeImportImageTasksCommandInput}
 * @returns {@link DescribeImportImageTasksCommandOutput}
 * @see {@link DescribeImportImageTasksCommandInput} for command's `input` shape.
 * @see {@link DescribeImportImageTasksCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeImportImageTasksCommand extends $Command<
  DescribeImportImageTasksCommandInput,
  DescribeImportImageTasksCommandOutput,
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
  constructor(readonly input: DescribeImportImageTasksCommandInput) {
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
  ): Handler<DescribeImportImageTasksCommandInput, DescribeImportImageTasksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeImportImageTasksCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeImportImageTasksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DescribeImportImageTasksResultFilterSensitiveLog,
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
  private serialize(input: DescribeImportImageTasksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeImportImageTasksCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeImportImageTasksCommandOutput> {
    return de_DescribeImportImageTasksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
