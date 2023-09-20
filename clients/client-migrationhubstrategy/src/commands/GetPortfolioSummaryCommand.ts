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

import {
  MigrationHubStrategyClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MigrationHubStrategyClient";
import { GetPortfolioSummaryRequest, GetPortfolioSummaryResponse } from "../models/models_0";
import { de_GetPortfolioSummaryCommand, se_GetPortfolioSummaryCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetPortfolioSummaryCommand}.
 */
export interface GetPortfolioSummaryCommandInput extends GetPortfolioSummaryRequest {}
/**
 * @public
 *
 * The output of {@link GetPortfolioSummaryCommand}.
 */
export interface GetPortfolioSummaryCommandOutput extends GetPortfolioSummaryResponse, __MetadataBearer {}

/**
 * @public
 * <p> Retrieves overall summary including the number of servers to rehost and the overall
 *       number of anti-patterns. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubStrategyClient, GetPortfolioSummaryCommand } from "@aws-sdk/client-migrationhubstrategy"; // ES Modules import
 * // const { MigrationHubStrategyClient, GetPortfolioSummaryCommand } = require("@aws-sdk/client-migrationhubstrategy"); // CommonJS import
 * const client = new MigrationHubStrategyClient(config);
 * const input = {};
 * const command = new GetPortfolioSummaryCommand(input);
 * const response = await client.send(command);
 * // { // GetPortfolioSummaryResponse
 * //   assessmentSummary: { // AssessmentSummary
 * //     listServerStrategySummary: [ // ListStrategySummary
 * //       { // StrategySummary
 * //         strategy: "STRING_VALUE",
 * //         count: Number("int"),
 * //       },
 * //     ],
 * //     listApplicationComponentStrategySummary: [
 * //       {
 * //         strategy: "STRING_VALUE",
 * //         count: Number("int"),
 * //       },
 * //     ],
 * //     listAntipatternSeveritySummary: [ // ListAntipatternSeveritySummary
 * //       { // AntipatternSeveritySummary
 * //         severity: "STRING_VALUE",
 * //         count: Number("int"),
 * //       },
 * //     ],
 * //     listApplicationComponentSummary: [ // ListApplicationComponentSummary
 * //       { // ApplicationComponentSummary
 * //         appType: "STRING_VALUE",
 * //         count: Number("int"),
 * //       },
 * //     ],
 * //     listServerSummary: [ // ListServerSummary
 * //       { // ServerSummary
 * //         ServerOsType: "STRING_VALUE",
 * //         count: Number("int"),
 * //       },
 * //     ],
 * //     antipatternReportS3Object: { // S3Object
 * //       s3Bucket: "STRING_VALUE",
 * //       s3key: "STRING_VALUE",
 * //     },
 * //     antipatternReportStatus: "STRING_VALUE",
 * //     antipatternReportStatusMessage: "STRING_VALUE",
 * //     lastAnalyzedTimestamp: new Date("TIMESTAMP"),
 * //     listApplicationComponentStatusSummary: [ // ListApplicationComponentStatusSummary
 * //       { // ApplicationComponentStatusSummary
 * //         srcCodeOrDbAnalysisStatus: "STRING_VALUE",
 * //         count: Number("int"),
 * //       },
 * //     ],
 * //     listServerStatusSummary: [ // ListServerStatusSummary
 * //       { // ServerStatusSummary
 * //         runTimeAssessmentStatus: "STRING_VALUE",
 * //         count: Number("int"),
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetPortfolioSummaryCommandInput - {@link GetPortfolioSummaryCommandInput}
 * @returns {@link GetPortfolioSummaryCommandOutput}
 * @see {@link GetPortfolioSummaryCommandInput} for command's `input` shape.
 * @see {@link GetPortfolioSummaryCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubStrategyClientResolvedConfig | config} for MigrationHubStrategyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> The user does not have permission to perform the action. Check the
 *       AWS Identity and Access Management (IAM) policy associated with this user.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> The server experienced an internal error. Try again. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p> The request was denied due to request throttling. </p>
 *
 * @throws {@link MigrationHubStrategyServiceException}
 * <p>Base exception class for all service exceptions from MigrationHubStrategy service.</p>
 *
 */
export class GetPortfolioSummaryCommand extends $Command<
  GetPortfolioSummaryCommandInput,
  GetPortfolioSummaryCommandOutput,
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
  constructor(readonly input: GetPortfolioSummaryCommandInput) {
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
  ): Handler<GetPortfolioSummaryCommandInput, GetPortfolioSummaryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetPortfolioSummaryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubStrategyClient";
    const commandName = "GetPortfolioSummaryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSMigrationHubStrategyRecommendation",
        operation: "GetPortfolioSummary",
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
  private serialize(input: GetPortfolioSummaryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetPortfolioSummaryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetPortfolioSummaryCommandOutput> {
    return de_GetPortfolioSummaryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
