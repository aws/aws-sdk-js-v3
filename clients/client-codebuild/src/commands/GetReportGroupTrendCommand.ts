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

import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { GetReportGroupTrendInput, GetReportGroupTrendOutput } from "../models/models_0";
import { de_GetReportGroupTrendCommand, se_GetReportGroupTrendCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetReportGroupTrendCommand}.
 */
export interface GetReportGroupTrendCommandInput extends GetReportGroupTrendInput {}
/**
 * @public
 *
 * The output of {@link GetReportGroupTrendCommand}.
 */
export interface GetReportGroupTrendCommandOutput extends GetReportGroupTrendOutput, __MetadataBearer {}

/**
 * @public
 * <p>Analyzes and accumulates test report values for the specified test reports.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, GetReportGroupTrendCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, GetReportGroupTrendCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const input = { // GetReportGroupTrendInput
 *   reportGroupArn: "STRING_VALUE", // required
 *   numOfReports: Number("int"),
 *   trendField: "PASS_RATE" || "DURATION" || "TOTAL" || "LINE_COVERAGE" || "LINES_COVERED" || "LINES_MISSED" || "BRANCH_COVERAGE" || "BRANCHES_COVERED" || "BRANCHES_MISSED", // required
 * };
 * const command = new GetReportGroupTrendCommand(input);
 * const response = await client.send(command);
 * // { // GetReportGroupTrendOutput
 * //   stats: { // ReportGroupTrendStats
 * //     average: "STRING_VALUE",
 * //     max: "STRING_VALUE",
 * //     min: "STRING_VALUE",
 * //   },
 * //   rawData: [ // ReportGroupTrendRawDataList
 * //     { // ReportWithRawData
 * //       reportArn: "STRING_VALUE",
 * //       data: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetReportGroupTrendCommandInput - {@link GetReportGroupTrendCommandInput}
 * @returns {@link GetReportGroupTrendCommandOutput}
 * @see {@link GetReportGroupTrendCommandInput} for command's `input` shape.
 * @see {@link GetReportGroupTrendCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for CodeBuildClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input value that was provided is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified Amazon Web Services resource cannot be found.</p>
 *
 * @throws {@link CodeBuildServiceException}
 * <p>Base exception class for all service exceptions from CodeBuild service.</p>
 *
 */
export class GetReportGroupTrendCommand extends $Command<
  GetReportGroupTrendCommandInput,
  GetReportGroupTrendCommandOutput,
  CodeBuildClientResolvedConfig
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
  constructor(readonly input: GetReportGroupTrendCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeBuildClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetReportGroupTrendCommandInput, GetReportGroupTrendCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetReportGroupTrendCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeBuildClient";
    const commandName = "GetReportGroupTrendCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CodeBuild_20161006",
        operation: "GetReportGroupTrend",
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
  private serialize(input: GetReportGroupTrendCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetReportGroupTrendCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetReportGroupTrendCommandOutput> {
    return de_GetReportGroupTrendCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
