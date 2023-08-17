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
  DescribeConversionTasksRequest,
  DescribeConversionTasksResult,
  DescribeConversionTasksResultFilterSensitiveLog,
} from "../models/models_3";
import { de_DescribeConversionTasksCommand, se_DescribeConversionTasksCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeConversionTasksCommand}.
 */
export interface DescribeConversionTasksCommandInput extends DescribeConversionTasksRequest {}
/**
 * @public
 *
 * The output of {@link DescribeConversionTasksCommand}.
 */
export interface DescribeConversionTasksCommandOutput extends DescribeConversionTasksResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes the specified conversion tasks or all your conversion tasks. For more information, see the
 *    <a href="https://docs.aws.amazon.com/vm-import/latest/userguide/">VM Import/Export User Guide</a>.</p>
 *          <p>For information about the import manifest referenced by this API action, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/manifest.html">VM Import Manifest</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeConversionTasksCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeConversionTasksCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeConversionTasksRequest
 *   ConversionTaskIds: [ // ConversionIdStringList
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new DescribeConversionTasksCommand(input);
 * const response = await client.send(command);
 * // { // DescribeConversionTasksResult
 * //   ConversionTasks: [ // DescribeConversionTaskList
 * //     { // ConversionTask
 * //       ConversionTaskId: "STRING_VALUE",
 * //       ExpirationTime: "STRING_VALUE",
 * //       ImportInstance: { // ImportInstanceTaskDetails
 * //         Description: "STRING_VALUE",
 * //         InstanceId: "STRING_VALUE",
 * //         Platform: "Windows",
 * //         Volumes: [ // ImportInstanceVolumeDetailSet
 * //           { // ImportInstanceVolumeDetailItem
 * //             AvailabilityZone: "STRING_VALUE",
 * //             BytesConverted: Number("long"),
 * //             Description: "STRING_VALUE",
 * //             Image: { // DiskImageDescription
 * //               Checksum: "STRING_VALUE",
 * //               Format: "VMDK" || "RAW" || "VHD",
 * //               ImportManifestUrl: "STRING_VALUE",
 * //               Size: Number("long"),
 * //             },
 * //             Status: "STRING_VALUE",
 * //             StatusMessage: "STRING_VALUE",
 * //             Volume: { // DiskImageVolumeDescription
 * //               Id: "STRING_VALUE",
 * //               Size: Number("long"),
 * //             },
 * //           },
 * //         ],
 * //       },
 * //       ImportVolume: { // ImportVolumeTaskDetails
 * //         AvailabilityZone: "STRING_VALUE",
 * //         BytesConverted: Number("long"),
 * //         Description: "STRING_VALUE",
 * //         Image: {
 * //           Checksum: "STRING_VALUE",
 * //           Format: "VMDK" || "RAW" || "VHD",
 * //           ImportManifestUrl: "STRING_VALUE",
 * //           Size: Number("long"),
 * //         },
 * //         Volume: {
 * //           Id: "STRING_VALUE",
 * //           Size: Number("long"),
 * //         },
 * //       },
 * //       State: "active" || "cancelling" || "cancelled" || "completed",
 * //       StatusMessage: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeConversionTasksCommandInput - {@link DescribeConversionTasksCommandInput}
 * @returns {@link DescribeConversionTasksCommandOutput}
 * @see {@link DescribeConversionTasksCommandInput} for command's `input` shape.
 * @see {@link DescribeConversionTasksCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeConversionTasksCommand extends $Command<
  DescribeConversionTasksCommandInput,
  DescribeConversionTasksCommandOutput,
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
  constructor(readonly input: DescribeConversionTasksCommandInput) {
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
  ): Handler<DescribeConversionTasksCommandInput, DescribeConversionTasksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeConversionTasksCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeConversionTasksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DescribeConversionTasksResultFilterSensitiveLog,
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
  private serialize(input: DescribeConversionTasksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeConversionTasksCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeConversionTasksCommandOutput> {
    return de_DescribeConversionTasksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
