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

import { CodeGuruSecurityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruSecurityClient";
import { GetMetricsSummaryRequest, GetMetricsSummaryResponse } from "../models/models_0";
import { de_GetMetricsSummaryCommand, se_GetMetricsSummaryCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetMetricsSummaryCommand}.
 */
export interface GetMetricsSummaryCommandInput extends GetMetricsSummaryRequest {}
/**
 * @public
 *
 * The output of {@link GetMetricsSummaryCommand}.
 */
export interface GetMetricsSummaryCommandOutput extends GetMetricsSummaryResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns top level metrics about an account from a specified date, including number of open
 *       findings, the categories with most findings, the scans with most open findings, and scans with
 *       most open critical findings. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruSecurityClient, GetMetricsSummaryCommand } from "@aws-sdk/client-codeguru-security"; // ES Modules import
 * // const { CodeGuruSecurityClient, GetMetricsSummaryCommand } = require("@aws-sdk/client-codeguru-security"); // CommonJS import
 * const client = new CodeGuruSecurityClient(config);
 * const input = { // GetMetricsSummaryRequest
 *   date: new Date("TIMESTAMP"), // required
 * };
 * const command = new GetMetricsSummaryCommand(input);
 * const response = await client.send(command);
 * // { // GetMetricsSummaryResponse
 * //   metricsSummary: { // MetricsSummary
 * //     date: new Date("TIMESTAMP"),
 * //     openFindings: { // FindingMetricsValuePerSeverity
 * //       info: Number("double"),
 * //       low: Number("double"),
 * //       medium: Number("double"),
 * //       high: Number("double"),
 * //       critical: Number("double"),
 * //     },
 * //     categoriesWithMostFindings: [ // CategoriesWithMostFindings
 * //       { // CategoryWithFindingNum
 * //         categoryName: "STRING_VALUE",
 * //         findingNumber: Number("int"),
 * //       },
 * //     ],
 * //     scansWithMostOpenFindings: [ // ScansWithMostOpenFindings
 * //       { // ScanNameWithFindingNum
 * //         scanName: "STRING_VALUE",
 * //         findingNumber: Number("int"),
 * //       },
 * //     ],
 * //     scansWithMostOpenCriticalFindings: [ // ScansWithMostOpenCriticalFindings
 * //       {
 * //         scanName: "STRING_VALUE",
 * //         findingNumber: Number("int"),
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetMetricsSummaryCommandInput - {@link GetMetricsSummaryCommandInput}
 * @returns {@link GetMetricsSummaryCommandOutput}
 * @see {@link GetMetricsSummaryCommandInput} for command's `input` shape.
 * @see {@link GetMetricsSummaryCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruSecurityClientResolvedConfig | config} for CodeGuruSecurityClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints.</p>
 *
 * @throws {@link CodeGuruSecurityServiceException}
 * <p>Base exception class for all service exceptions from CodeGuruSecurity service.</p>
 *
 */
export class GetMetricsSummaryCommand extends $Command<
  GetMetricsSummaryCommandInput,
  GetMetricsSummaryCommandOutput,
  CodeGuruSecurityClientResolvedConfig
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
  constructor(readonly input: GetMetricsSummaryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeGuruSecurityClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetMetricsSummaryCommandInput, GetMetricsSummaryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetMetricsSummaryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeGuruSecurityClient";
    const commandName = "GetMetricsSummaryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AwsCodeGuruSecurity",
        operation: "GetMetricsSummary",
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
  private serialize(input: GetMetricsSummaryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetMetricsSummaryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMetricsSummaryCommandOutput> {
    return de_GetMetricsSummaryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
