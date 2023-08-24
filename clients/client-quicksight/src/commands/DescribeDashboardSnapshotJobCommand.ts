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

import {
  DescribeDashboardSnapshotJobRequest,
  DescribeDashboardSnapshotJobResponse,
  DescribeDashboardSnapshotJobResponseFilterSensitiveLog,
} from "../models/models_3";
import {
  de_DescribeDashboardSnapshotJobCommand,
  se_DescribeDashboardSnapshotJobCommand,
} from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeDashboardSnapshotJobCommand}.
 */
export interface DescribeDashboardSnapshotJobCommandInput extends DescribeDashboardSnapshotJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDashboardSnapshotJobCommand}.
 */
export interface DescribeDashboardSnapshotJobCommandOutput
  extends DescribeDashboardSnapshotJobResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes an existing snapshot job.</p>
 *          <p>Poll job descriptions after a job starts to know the status of the job. For information on available status codes, see <code>JobStatus</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeDashboardSnapshotJobCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeDashboardSnapshotJobCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // DescribeDashboardSnapshotJobRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   DashboardId: "STRING_VALUE", // required
 *   SnapshotJobId: "STRING_VALUE", // required
 * };
 * const command = new DescribeDashboardSnapshotJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDashboardSnapshotJobResponse
 * //   AwsAccountId: "STRING_VALUE",
 * //   DashboardId: "STRING_VALUE",
 * //   SnapshotJobId: "STRING_VALUE",
 * //   UserConfiguration: { // SnapshotUserConfigurationRedacted
 * //     AnonymousUsers: [ // SnapshotAnonymousUserRedactedList
 * //       { // SnapshotAnonymousUserRedacted
 * //         RowLevelPermissionTagKeys: [ // SessionTagKeyList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //   },
 * //   SnapshotConfiguration: { // SnapshotConfiguration
 * //     FileGroups: [ // SnapshotFileGroupList // required
 * //       { // SnapshotFileGroup
 * //         Files: [ // SnapshotFileList
 * //           { // SnapshotFile
 * //             SheetSelections: [ // SnapshotFileSheetSelectionList // required
 * //               { // SnapshotFileSheetSelection
 * //                 SheetId: "STRING_VALUE", // required
 * //                 SelectionScope: "ALL_VISUALS" || "SELECTED_VISUALS", // required
 * //                 VisualIds: [ // SnapshotFileSheetSelectionVisualIdList
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //             ],
 * //             FormatType: "CSV" || "PDF" || "EXCEL", // required
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     DestinationConfiguration: { // SnapshotDestinationConfiguration
 * //       S3Destinations: [ // SnapshotS3DestinationConfigurationList
 * //         { // SnapshotS3DestinationConfiguration
 * //           BucketConfiguration: { // S3BucketConfiguration
 * //             BucketName: "STRING_VALUE", // required
 * //             BucketPrefix: "STRING_VALUE", // required
 * //             BucketRegion: "STRING_VALUE", // required
 * //           },
 * //         },
 * //       ],
 * //     },
 * //     Parameters: { // Parameters
 * //       StringParameters: [ // StringParameterList
 * //         { // StringParameter
 * //           Name: "STRING_VALUE", // required
 * //           Values: [ // SensitiveStringList // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       IntegerParameters: [ // IntegerParameterList
 * //         { // IntegerParameter
 * //           Name: "STRING_VALUE", // required
 * //           Values: [ // SensitiveLongList // required
 * //             Number("long"),
 * //           ],
 * //         },
 * //       ],
 * //       DecimalParameters: [ // DecimalParameterList
 * //         { // DecimalParameter
 * //           Name: "STRING_VALUE", // required
 * //           Values: [ // SensitiveDoubleList // required
 * //             Number("double"),
 * //           ],
 * //         },
 * //       ],
 * //       DateTimeParameters: [ // DateTimeParameterList
 * //         { // DateTimeParameter
 * //           Name: "STRING_VALUE", // required
 * //           Values: [ // SensitiveTimestampList // required
 * //             new Date("TIMESTAMP"),
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   Arn: "STRING_VALUE",
 * //   JobStatus: "QUEUED" || "RUNNING" || "COMPLETED" || "FAILED",
 * //   CreatedTime: new Date("TIMESTAMP"),
 * //   LastUpdatedTime: new Date("TIMESTAMP"),
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param DescribeDashboardSnapshotJobCommandInput - {@link DescribeDashboardSnapshotJobCommandInput}
 * @returns {@link DescribeDashboardSnapshotJobCommandOutput}
 * @see {@link DescribeDashboardSnapshotJobCommandInput} for command's `input` shape.
 * @see {@link DescribeDashboardSnapshotJobCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link UnsupportedUserEditionException} (client fault)
 *  <p>This error indicates that you are calling an operation on an Amazon QuickSight
 * 			subscription where the edition doesn't include support for that operation. Amazon
 * 			Amazon QuickSight currently has Standard Edition and Enterprise Edition. Not every operation and
 * 			capability is available in every edition.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 */
export class DescribeDashboardSnapshotJobCommand extends $Command<
  DescribeDashboardSnapshotJobCommandInput,
  DescribeDashboardSnapshotJobCommandOutput,
  QuickSightClientResolvedConfig
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
  constructor(readonly input: DescribeDashboardSnapshotJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDashboardSnapshotJobCommandInput, DescribeDashboardSnapshotJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDashboardSnapshotJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "DescribeDashboardSnapshotJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DescribeDashboardSnapshotJobResponseFilterSensitiveLog,
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
  private serialize(input: DescribeDashboardSnapshotJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeDashboardSnapshotJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDashboardSnapshotJobCommandOutput> {
    return de_DescribeDashboardSnapshotJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
