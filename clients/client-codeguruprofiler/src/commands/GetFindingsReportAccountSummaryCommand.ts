// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CodeGuruProfilerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruProfilerClient";
import {
  GetFindingsReportAccountSummaryRequest,
  GetFindingsReportAccountSummaryRequestFilterSensitiveLog,
  GetFindingsReportAccountSummaryResponse,
  GetFindingsReportAccountSummaryResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetFindingsReportAccountSummaryCommand,
  serializeAws_restJson1GetFindingsReportAccountSummaryCommand,
} from "../protocols/Aws_restJson1";

export interface GetFindingsReportAccountSummaryCommandInput extends GetFindingsReportAccountSummaryRequest {}
export interface GetFindingsReportAccountSummaryCommandOutput
  extends GetFindingsReportAccountSummaryResponse,
    __MetadataBearer {}

/**
 * <p>
 *             Returns a list of
 *             <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_FindingsReportSummary.html">
 *                <code>FindingsReportSummary</code>
 *             </a>
 *             objects that contain analysis results for all profiling groups in your AWS account.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, GetFindingsReportAccountSummaryCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, GetFindingsReportAccountSummaryCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * const client = new CodeGuruProfilerClient(config);
 * const command = new GetFindingsReportAccountSummaryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFindingsReportAccountSummaryCommandInput} for command's `input` shape.
 * @see {@link GetFindingsReportAccountSummaryCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruProfilerClientResolvedConfig | config} for CodeGuruProfilerClient's `config` shape.
 *
 */
export class GetFindingsReportAccountSummaryCommand extends $Command<
  GetFindingsReportAccountSummaryCommandInput,
  GetFindingsReportAccountSummaryCommandOutput,
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

  constructor(readonly input: GetFindingsReportAccountSummaryCommandInput) {
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
  ): Handler<GetFindingsReportAccountSummaryCommandInput, GetFindingsReportAccountSummaryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetFindingsReportAccountSummaryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeGuruProfilerClient";
    const commandName = "GetFindingsReportAccountSummaryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetFindingsReportAccountSummaryRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetFindingsReportAccountSummaryResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetFindingsReportAccountSummaryCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetFindingsReportAccountSummaryCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetFindingsReportAccountSummaryCommandOutput> {
    return deserializeAws_restJson1GetFindingsReportAccountSummaryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
