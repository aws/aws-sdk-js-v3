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
import { ListFindingsMetricsRequest, ListFindingsMetricsResponse } from "../models/models_0";
import { de_ListFindingsMetricsCommand, se_ListFindingsMetricsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListFindingsMetricsCommand}.
 */
export interface ListFindingsMetricsCommandInput extends ListFindingsMetricsRequest {}
/**
 * @public
 *
 * The output of {@link ListFindingsMetricsCommand}.
 */
export interface ListFindingsMetricsCommandOutput extends ListFindingsMetricsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns metrics about all findings in an account within a specified time range.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruSecurityClient, ListFindingsMetricsCommand } from "@aws-sdk/client-codeguru-security"; // ES Modules import
 * // const { CodeGuruSecurityClient, ListFindingsMetricsCommand } = require("@aws-sdk/client-codeguru-security"); // CommonJS import
 * const client = new CodeGuruSecurityClient(config);
 * const input = { // ListFindingsMetricsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   startDate: new Date("TIMESTAMP"), // required
 *   endDate: new Date("TIMESTAMP"), // required
 * };
 * const command = new ListFindingsMetricsCommand(input);
 * const response = await client.send(command);
 * // { // ListFindingsMetricsResponse
 * //   findingsMetrics: [ // FindingsMetricList
 * //     { // AccountFindingsMetric
 * //       date: new Date("TIMESTAMP"),
 * //       newFindings: { // FindingMetricsValuePerSeverity
 * //         info: Number("double"),
 * //         low: Number("double"),
 * //         medium: Number("double"),
 * //         high: Number("double"),
 * //         critical: Number("double"),
 * //       },
 * //       closedFindings: {
 * //         info: Number("double"),
 * //         low: Number("double"),
 * //         medium: Number("double"),
 * //         high: Number("double"),
 * //         critical: Number("double"),
 * //       },
 * //       openFindings: {
 * //         info: Number("double"),
 * //         low: Number("double"),
 * //         medium: Number("double"),
 * //         high: Number("double"),
 * //         critical: Number("double"),
 * //       },
 * //       meanTimeToClose: {
 * //         info: Number("double"),
 * //         low: Number("double"),
 * //         medium: Number("double"),
 * //         high: Number("double"),
 * //         critical: Number("double"),
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFindingsMetricsCommandInput - {@link ListFindingsMetricsCommandInput}
 * @returns {@link ListFindingsMetricsCommandOutput}
 * @see {@link ListFindingsMetricsCommandInput} for command's `input` shape.
 * @see {@link ListFindingsMetricsCommandOutput} for command's `response` shape.
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
export class ListFindingsMetricsCommand extends $Command<
  ListFindingsMetricsCommandInput,
  ListFindingsMetricsCommandOutput,
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
  constructor(readonly input: ListFindingsMetricsCommandInput) {
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
  ): Handler<ListFindingsMetricsCommandInput, ListFindingsMetricsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListFindingsMetricsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeGuruSecurityClient";
    const commandName = "ListFindingsMetricsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AwsCodeGuruSecurity",
        operation: "ListFindingsMetrics",
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
  private serialize(input: ListFindingsMetricsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListFindingsMetricsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListFindingsMetricsCommandOutput> {
    return de_ListFindingsMetricsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
