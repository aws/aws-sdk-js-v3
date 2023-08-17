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
import { ListApplicationComponentsRequest, ListApplicationComponentsResponse } from "../models/models_0";
import { de_ListApplicationComponentsCommand, se_ListApplicationComponentsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListApplicationComponentsCommand}.
 */
export interface ListApplicationComponentsCommandInput extends ListApplicationComponentsRequest {}
/**
 * @public
 *
 * The output of {@link ListApplicationComponentsCommand}.
 */
export interface ListApplicationComponentsCommandOutput extends ListApplicationComponentsResponse, __MetadataBearer {}

/**
 * @public
 * <p> Retrieves a list of all the application components (processes). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubStrategyClient, ListApplicationComponentsCommand } from "@aws-sdk/client-migrationhubstrategy"; // ES Modules import
 * // const { MigrationHubStrategyClient, ListApplicationComponentsCommand } = require("@aws-sdk/client-migrationhubstrategy"); // CommonJS import
 * const client = new MigrationHubStrategyClient(config);
 * const input = { // ListApplicationComponentsRequest
 *   applicationComponentCriteria: "STRING_VALUE",
 *   filterValue: "STRING_VALUE",
 *   sort: "STRING_VALUE",
 *   groupIdFilter: [ // GroupIds
 *     { // Group
 *       name: "STRING_VALUE",
 *       value: "STRING_VALUE",
 *     },
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListApplicationComponentsCommand(input);
 * const response = await client.send(command);
 * // { // ListApplicationComponentsResponse
 * //   applicationComponentInfos: [ // ApplicationComponentDetails
 * //     { // ApplicationComponentDetail
 * //       id: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       recommendationSet: { // RecommendationSet
 * //         transformationTool: { // TransformationTool
 * //           name: "STRING_VALUE",
 * //           description: "STRING_VALUE",
 * //           tranformationToolInstallationLink: "STRING_VALUE",
 * //         },
 * //         targetDestination: "STRING_VALUE",
 * //         strategy: "STRING_VALUE",
 * //       },
 * //       analysisStatus: "STRING_VALUE",
 * //       statusMessage: "STRING_VALUE",
 * //       listAntipatternSeveritySummary: [ // ListAntipatternSeveritySummary
 * //         { // AntipatternSeveritySummary
 * //           severity: "STRING_VALUE",
 * //           count: Number("int"),
 * //         },
 * //       ],
 * //       databaseConfigDetail: { // DatabaseConfigDetail
 * //         secretName: "STRING_VALUE",
 * //       },
 * //       sourceCodeRepositories: [ // SourceCodeRepositories
 * //         { // SourceCodeRepository
 * //           repository: "STRING_VALUE",
 * //           branch: "STRING_VALUE",
 * //           versionControlType: "STRING_VALUE",
 * //           projectName: "STRING_VALUE",
 * //         },
 * //       ],
 * //       appType: "STRING_VALUE",
 * //       resourceSubType: "STRING_VALUE",
 * //       inclusionStatus: "STRING_VALUE",
 * //       antipatternReportS3Object: { // S3Object
 * //         s3Bucket: "STRING_VALUE",
 * //         s3key: "STRING_VALUE",
 * //       },
 * //       antipatternReportStatus: "STRING_VALUE",
 * //       antipatternReportStatusMessage: "STRING_VALUE",
 * //       osVersion: "STRING_VALUE",
 * //       osDriver: "STRING_VALUE",
 * //       lastAnalyzedTimestamp: new Date("TIMESTAMP"),
 * //       associatedServerId: "STRING_VALUE",
 * //       moreServerAssociationExists: true || false,
 * //       runtimeStatus: "STRING_VALUE",
 * //       runtimeStatusMessage: "STRING_VALUE",
 * //       appUnitError: { // AppUnitError
 * //         appUnitErrorCategory: "STRING_VALUE",
 * //       },
 * //       resultList: [ // ResultList
 * //         { // Result
 * //           analysisType: "STRING_VALUE",
 * //           analysisStatus: { // AnalysisStatusUnion Union: only one key present
 * //             runtimeAnalysisStatus: "STRING_VALUE",
 * //             srcCodeOrDbAnalysisStatus: "STRING_VALUE",
 * //           },
 * //           statusMessage: "STRING_VALUE",
 * //           antipatternReportResultList: [ // AntipatternReportResultList
 * //             { // AntipatternReportResult
 * //               analyzerName: { // AnalyzerNameUnion Union: only one key present
 * //                 binaryAnalyzerName: "STRING_VALUE",
 * //                 runTimeAnalyzerName: "STRING_VALUE",
 * //                 sourceCodeAnalyzerName: "STRING_VALUE",
 * //               },
 * //               antiPatternReportS3Object: {
 * //                 s3Bucket: "STRING_VALUE",
 * //                 s3key: "STRING_VALUE",
 * //               },
 * //               antipatternReportStatus: "STRING_VALUE",
 * //               antipatternReportStatusMessage: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListApplicationComponentsCommandInput - {@link ListApplicationComponentsCommandInput}
 * @returns {@link ListApplicationComponentsCommandOutput}
 * @see {@link ListApplicationComponentsCommandInput} for command's `input` shape.
 * @see {@link ListApplicationComponentsCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubStrategyClientResolvedConfig | config} for MigrationHubStrategyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> The user does not have permission to perform the action. Check the
 *       AWS Identity and Access Management (IAM) policy associated with this user.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> The server experienced an internal error. Try again. </p>
 *
 * @throws {@link ServiceLinkedRoleLockClientException} (client fault)
 *  <p> Exception to indicate that the service-linked role (SLR) is locked. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The request body isn't valid. </p>
 *
 * @throws {@link MigrationHubStrategyServiceException}
 * <p>Base exception class for all service exceptions from MigrationHubStrategy service.</p>
 *
 */
export class ListApplicationComponentsCommand extends $Command<
  ListApplicationComponentsCommandInput,
  ListApplicationComponentsCommandOutput,
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
  constructor(readonly input: ListApplicationComponentsCommandInput) {
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
  ): Handler<ListApplicationComponentsCommandInput, ListApplicationComponentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListApplicationComponentsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubStrategyClient";
    const commandName = "ListApplicationComponentsCommand";
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
  private serialize(input: ListApplicationComponentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListApplicationComponentsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListApplicationComponentsCommandOutput> {
    return de_ListApplicationComponentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
