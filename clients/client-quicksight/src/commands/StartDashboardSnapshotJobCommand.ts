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
  StartDashboardSnapshotJobRequest,
  StartDashboardSnapshotJobRequestFilterSensitiveLog,
  StartDashboardSnapshotJobResponse,
} from "../models/models_3";
import { de_StartDashboardSnapshotJobCommand, se_StartDashboardSnapshotJobCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartDashboardSnapshotJobCommand}.
 */
export interface StartDashboardSnapshotJobCommandInput extends StartDashboardSnapshotJobRequest {}
/**
 * @public
 *
 * The output of {@link StartDashboardSnapshotJobCommand}.
 */
export interface StartDashboardSnapshotJobCommandOutput extends StartDashboardSnapshotJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Starts an asynchronous job that generates a dashboard snapshot. You can request one of the following format configurations per API call.</p>
 *          <ul>
 *             <li>
 *                <p>1 paginated PDF</p>
 *             </li>
 *             <li>
 *                <p>1 Excel workbook</p>
 *             </li>
 *             <li>
 *                <p>5 CSVs</p>
 *             </li>
 *          </ul>
 *          <p>Poll job descriptions with a <code>DescribeDashboardSnapshotJob</code> API call. Once the job succeeds, use the <code>DescribeDashboardSnapshotJobResult</code> API to obtain the download URIs that the job generates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, StartDashboardSnapshotJobCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, StartDashboardSnapshotJobCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // StartDashboardSnapshotJobRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   DashboardId: "STRING_VALUE", // required
 *   SnapshotJobId: "STRING_VALUE", // required
 *   UserConfiguration: { // SnapshotUserConfiguration
 *     AnonymousUsers: [ // SnapshotAnonymousUserList
 *       { // SnapshotAnonymousUser
 *         RowLevelPermissionTags: [ // SessionTagList
 *           { // SessionTag
 *             Key: "STRING_VALUE", // required
 *             Value: "STRING_VALUE", // required
 *           },
 *         ],
 *       },
 *     ],
 *   },
 *   SnapshotConfiguration: { // SnapshotConfiguration
 *     FileGroups: [ // SnapshotFileGroupList // required
 *       { // SnapshotFileGroup
 *         Files: [ // SnapshotFileList
 *           { // SnapshotFile
 *             SheetSelections: [ // SnapshotFileSheetSelectionList // required
 *               { // SnapshotFileSheetSelection
 *                 SheetId: "STRING_VALUE", // required
 *                 SelectionScope: "ALL_VISUALS" || "SELECTED_VISUALS", // required
 *                 VisualIds: [ // SnapshotFileSheetSelectionVisualIdList
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *             ],
 *             FormatType: "CSV" || "PDF" || "EXCEL", // required
 *           },
 *         ],
 *       },
 *     ],
 *     DestinationConfiguration: { // SnapshotDestinationConfiguration
 *       S3Destinations: [ // SnapshotS3DestinationConfigurationList
 *         { // SnapshotS3DestinationConfiguration
 *           BucketConfiguration: { // S3BucketConfiguration
 *             BucketName: "STRING_VALUE", // required
 *             BucketPrefix: "STRING_VALUE", // required
 *             BucketRegion: "STRING_VALUE", // required
 *           },
 *         },
 *       ],
 *     },
 *     Parameters: { // Parameters
 *       StringParameters: [ // StringParameterList
 *         { // StringParameter
 *           Name: "STRING_VALUE", // required
 *           Values: [ // SensitiveStringList // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *       ],
 *       IntegerParameters: [ // IntegerParameterList
 *         { // IntegerParameter
 *           Name: "STRING_VALUE", // required
 *           Values: [ // SensitiveLongList // required
 *             Number("long"),
 *           ],
 *         },
 *       ],
 *       DecimalParameters: [ // DecimalParameterList
 *         { // DecimalParameter
 *           Name: "STRING_VALUE", // required
 *           Values: [ // SensitiveDoubleList // required
 *             Number("double"),
 *           ],
 *         },
 *       ],
 *       DateTimeParameters: [ // DateTimeParameterList
 *         { // DateTimeParameter
 *           Name: "STRING_VALUE", // required
 *           Values: [ // SensitiveTimestampList // required
 *             new Date("TIMESTAMP"),
 *           ],
 *         },
 *       ],
 *     },
 *   },
 * };
 * const command = new StartDashboardSnapshotJobCommand(input);
 * const response = await client.send(command);
 * // { // StartDashboardSnapshotJobResponse
 * //   Arn: "STRING_VALUE",
 * //   SnapshotJobId: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param StartDashboardSnapshotJobCommandInput - {@link StartDashboardSnapshotJobCommandInput}
 * @returns {@link StartDashboardSnapshotJobCommandOutput}
 * @see {@link StartDashboardSnapshotJobCommandInput} for command's `input` shape.
 * @see {@link StartDashboardSnapshotJobCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit is exceeded.</p>
 *
 * @throws {@link ResourceExistsException} (client fault)
 *  <p>The resource specified already exists. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link UnsupportedPricingPlanException} (client fault)
 *  <p>This error indicates that you are calling an embedding operation in Amazon QuickSight
 * 			without the required pricing plan on your Amazon Web Services account. Before you can use embedding
 * 			for anonymous users, a QuickSight administrator needs to add capacity pricing to Amazon QuickSight. You
 * 		    can do this on the <b>Manage Amazon QuickSight</b> page. </p>
 *          <p>After capacity pricing is added, you can use the
 *             <code>
 *                <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_GetDashboardEmbedUrl.html">GetDashboardEmbedUrl</a>
 *             </code> API operation with the
 *             <code>--identity-type ANONYMOUS</code> option.</p>
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
export class StartDashboardSnapshotJobCommand extends $Command<
  StartDashboardSnapshotJobCommandInput,
  StartDashboardSnapshotJobCommandOutput,
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
  constructor(readonly input: StartDashboardSnapshotJobCommandInput) {
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
  ): Handler<StartDashboardSnapshotJobCommandInput, StartDashboardSnapshotJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartDashboardSnapshotJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "StartDashboardSnapshotJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartDashboardSnapshotJobRequestFilterSensitiveLog,
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
  private serialize(input: StartDashboardSnapshotJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartDashboardSnapshotJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartDashboardSnapshotJobCommandOutput> {
    return de_StartDashboardSnapshotJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
