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
  MigrationHubStrategyClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MigrationHubStrategyClient";
import { GetApplicationComponentDetailsRequest, GetApplicationComponentDetailsResponse } from "../models/models_0";
import {
  de_GetApplicationComponentDetailsCommand,
  se_GetApplicationComponentDetailsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetApplicationComponentDetailsCommand}.
 */
export interface GetApplicationComponentDetailsCommandInput extends GetApplicationComponentDetailsRequest {}
/**
 * @public
 *
 * The output of {@link GetApplicationComponentDetailsCommand}.
 */
export interface GetApplicationComponentDetailsCommandOutput
  extends GetApplicationComponentDetailsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p> Retrieves details about an application component. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubStrategyClient, GetApplicationComponentDetailsCommand } from "@aws-sdk/client-migrationhubstrategy"; // ES Modules import
 * // const { MigrationHubStrategyClient, GetApplicationComponentDetailsCommand } = require("@aws-sdk/client-migrationhubstrategy"); // CommonJS import
 * const client = new MigrationHubStrategyClient(config);
 * const input = { // GetApplicationComponentDetailsRequest
 *   applicationComponentId: "STRING_VALUE", // required
 * };
 * const command = new GetApplicationComponentDetailsCommand(input);
 * const response = await client.send(command);
 * // { // GetApplicationComponentDetailsResponse
 * //   applicationComponentDetail: { // ApplicationComponentDetail
 * //     id: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     recommendationSet: { // RecommendationSet
 * //       transformationTool: { // TransformationTool
 * //         name: "STRING_VALUE",
 * //         description: "STRING_VALUE",
 * //         tranformationToolInstallationLink: "STRING_VALUE",
 * //       },
 * //       targetDestination: "STRING_VALUE",
 * //       strategy: "STRING_VALUE",
 * //     },
 * //     analysisStatus: "STRING_VALUE",
 * //     statusMessage: "STRING_VALUE",
 * //     listAntipatternSeveritySummary: [ // ListAntipatternSeveritySummary
 * //       { // AntipatternSeveritySummary
 * //         severity: "STRING_VALUE",
 * //         count: Number("int"),
 * //       },
 * //     ],
 * //     databaseConfigDetail: { // DatabaseConfigDetail
 * //       secretName: "STRING_VALUE",
 * //     },
 * //     sourceCodeRepositories: [ // SourceCodeRepositories
 * //       { // SourceCodeRepository
 * //         repository: "STRING_VALUE",
 * //         branch: "STRING_VALUE",
 * //         versionControlType: "STRING_VALUE",
 * //         projectName: "STRING_VALUE",
 * //       },
 * //     ],
 * //     appType: "STRING_VALUE",
 * //     resourceSubType: "STRING_VALUE",
 * //     inclusionStatus: "STRING_VALUE",
 * //     antipatternReportS3Object: { // S3Object
 * //       s3Bucket: "STRING_VALUE",
 * //       s3key: "STRING_VALUE",
 * //     },
 * //     antipatternReportStatus: "STRING_VALUE",
 * //     antipatternReportStatusMessage: "STRING_VALUE",
 * //     osVersion: "STRING_VALUE",
 * //     osDriver: "STRING_VALUE",
 * //     lastAnalyzedTimestamp: new Date("TIMESTAMP"),
 * //     associatedServerId: "STRING_VALUE",
 * //     moreServerAssociationExists: true || false,
 * //     runtimeStatus: "STRING_VALUE",
 * //     runtimeStatusMessage: "STRING_VALUE",
 * //     appUnitError: { // AppUnitError
 * //       appUnitErrorCategory: "STRING_VALUE",
 * //     },
 * //     resultList: [ // ResultList
 * //       { // Result
 * //         analysisType: "STRING_VALUE",
 * //         analysisStatus: { // AnalysisStatusUnion Union: only one key present
 * //           runtimeAnalysisStatus: "STRING_VALUE",
 * //           srcCodeOrDbAnalysisStatus: "STRING_VALUE",
 * //         },
 * //         statusMessage: "STRING_VALUE",
 * //         antipatternReportResultList: [ // AntipatternReportResultList
 * //           { // AntipatternReportResult
 * //             analyzerName: { // AnalyzerNameUnion Union: only one key present
 * //               binaryAnalyzerName: "STRING_VALUE",
 * //               runTimeAnalyzerName: "STRING_VALUE",
 * //               sourceCodeAnalyzerName: "STRING_VALUE",
 * //             },
 * //             antiPatternReportS3Object: {
 * //               s3Bucket: "STRING_VALUE",
 * //               s3key: "STRING_VALUE",
 * //             },
 * //             antipatternReportStatus: "STRING_VALUE",
 * //             antipatternReportStatusMessage: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //   },
 * //   associatedApplications: [ // AssociatedApplications
 * //     { // AssociatedApplication
 * //       name: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //     },
 * //   ],
 * //   moreApplicationResource: true || false,
 * //   associatedServerIds: [ // AssociatedServerIDs
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetApplicationComponentDetailsCommandInput - {@link GetApplicationComponentDetailsCommandInput}
 * @returns {@link GetApplicationComponentDetailsCommandOutput}
 * @see {@link GetApplicationComponentDetailsCommandInput} for command's `input` shape.
 * @see {@link GetApplicationComponentDetailsCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubStrategyClientResolvedConfig | config} for MigrationHubStrategyClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> The server experienced an internal error. Try again. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The specified ID in the request is not found. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p> The request was denied due to request throttling. </p>
 *
 * @throws {@link MigrationHubStrategyServiceException}
 * <p>Base exception class for all service exceptions from MigrationHubStrategy service.</p>
 *
 */
export class GetApplicationComponentDetailsCommand extends $Command<
  GetApplicationComponentDetailsCommandInput,
  GetApplicationComponentDetailsCommandOutput,
  MigrationHubStrategyClientResolvedConfig
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
  constructor(readonly input: GetApplicationComponentDetailsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MigrationHubStrategyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetApplicationComponentDetailsCommandInput, GetApplicationComponentDetailsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetApplicationComponentDetailsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubStrategyClient";
    const commandName = "GetApplicationComponentDetailsCommand";
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
  private serialize(
    input: GetApplicationComponentDetailsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetApplicationComponentDetailsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetApplicationComponentDetailsCommandOutput> {
    return de_GetApplicationComponentDetailsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
