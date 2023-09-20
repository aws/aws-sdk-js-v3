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

import { CodeGuruProfilerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruProfilerClient";
import { ListFindingsReportsRequest, ListFindingsReportsResponse } from "../models/models_0";
import { de_ListFindingsReportsCommand, se_ListFindingsReportsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListFindingsReportsCommand}.
 */
export interface ListFindingsReportsCommandInput extends ListFindingsReportsRequest {}
/**
 * @public
 *
 * The output of {@link ListFindingsReportsCommand}.
 */
export interface ListFindingsReportsCommandOutput extends ListFindingsReportsResponse, __MetadataBearer {}

/**
 * @public
 * <p>List the available reports for a given profiling group and time range.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, ListFindingsReportsCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, ListFindingsReportsCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * const client = new CodeGuruProfilerClient(config);
 * const input = { // ListFindingsReportsRequest
 *   profilingGroupName: "STRING_VALUE", // required
 *   startTime: new Date("TIMESTAMP"), // required
 *   endTime: new Date("TIMESTAMP"), // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   dailyReportsOnly: true || false,
 * };
 * const command = new ListFindingsReportsCommand(input);
 * const response = await client.send(command);
 * // { // ListFindingsReportsResponse
 * //   findingsReportSummaries: [ // FindingsReportSummaries // required
 * //     { // FindingsReportSummary
 * //       id: "STRING_VALUE",
 * //       profilingGroupName: "STRING_VALUE",
 * //       profileStartTime: new Date("TIMESTAMP"),
 * //       profileEndTime: new Date("TIMESTAMP"),
 * //       totalNumberOfFindings: Number("int"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFindingsReportsCommandInput - {@link ListFindingsReportsCommandInput}
 * @returns {@link ListFindingsReportsCommandOutput}
 * @see {@link ListFindingsReportsCommandInput} for command's `input` shape.
 * @see {@link ListFindingsReportsCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruProfilerClientResolvedConfig | config} for CodeGuruProfilerClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The parameter is not valid.</p>
 *
 * @throws {@link CodeGuruProfilerServiceException}
 * <p>Base exception class for all service exceptions from CodeGuruProfiler service.</p>
 *
 */
export class ListFindingsReportsCommand extends $Command<
  ListFindingsReportsCommandInput,
  ListFindingsReportsCommandOutput,
  CodeGuruProfilerClientResolvedConfig
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
  constructor(readonly input: ListFindingsReportsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeGuruProfilerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListFindingsReportsCommandInput, ListFindingsReportsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListFindingsReportsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeGuruProfilerClient";
    const commandName = "ListFindingsReportsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CodeGuruProfiler",
        operation: "ListFindingsReports",
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
  private serialize(input: ListFindingsReportsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListFindingsReportsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListFindingsReportsCommandOutput> {
    return de_ListFindingsReportsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
