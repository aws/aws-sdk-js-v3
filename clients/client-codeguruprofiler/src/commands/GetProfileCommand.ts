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
  GetProfileRequest,
  GetProfileRequestFilterSensitiveLog,
  GetProfileResponse,
  GetProfileResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetProfileCommand,
  serializeAws_restJson1GetProfileCommand,
} from "../protocols/Aws_restJson1";

export interface GetProfileCommandInput extends GetProfileRequest {}
export interface GetProfileCommandOutput extends GetProfileResponse, __MetadataBearer {}

/**
 * <p>
 *          Gets the aggregated profile of a profiling group for a specified time range.
 *          Amazon CodeGuru Profiler collects posted agent profiles for a profiling group
 *          into aggregated profiles.
 *      </p>
 *
 *          <note>
 *             <p>
 *             Because aggregated profiles expire over time <code>GetProfile</code> is not idempotent.
 *          </p>
 *          </note>
 *
 *          <p>
 *          Specify the time range for the requested aggregated profile using 1 or 2 of the following parameters: <code>startTime</code>,
 *          <code>endTime</code>, <code>period</code>. The maximum time range allowed is 7 days. If you specify all 3 parameters,
 *          an exception is thrown. If you specify only <code>period</code>, the latest aggregated profile is returned.
 *       </p>
 *
 *          <p>
 *          Aggregated profiles are available with aggregation periods of 5 minutes, 1 hour, and 1 day, aligned to
 *          UTC. The aggregation period of an aggregated profile determines how long it is retained. For more
 *          information, see <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_AggregatedProfileTime.html">
 *                <code>AggregatedProfileTime</code>
 *             </a>. The aggregated profile's aggregation period determines how long
 *          it is retained by CodeGuru Profiler.
 *       </p>
 *
 *          <ul>
 *             <li>
 *                <p>
 *                If the aggregation period is 5 minutes, the aggregated profile is retained for 15 days.
 *             </p>
 *             </li>
 *             <li>
 *                <p>
 *                If the aggregation period is 1 hour, the aggregated profile is retained for 60 days.
 *             </p>
 *             </li>
 *             <li>
 *                <p>
 *                If the aggregation period is 1 day, the aggregated profile is retained for 3 years.
 *             </p>
 *             </li>
 *          </ul>
 *
 *          <p>There are two use cases for calling <code>GetProfile</code>.</p>
 *          <ol>
 *             <li>
 *                <p>
 *                If you want to return an aggregated profile that already exists, use
 *                <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ListProfileTimes.html">
 *                      <code>ListProfileTimes</code>
 *                   </a> to
 *                view the time ranges of existing aggregated profiles. Use them in a <code>GetProfile</code> request to return a specific,
 *                existing aggregated profile.
 *             </p>
 *             </li>
 *             <li>
 *                <p>
 *                If you want to return an aggregated profile for a time range that doesn't align with an existing aggregated profile,
 *                then CodeGuru Profiler makes a best effort to combine existing aggregated profiles from the requested time
 *                range and return them as one aggregated profile.
 *             </p>
 *
 *                <p> If aggregated profiles do not exist for the full time range requested, then
 *                aggregated profiles for a smaller time range are returned. For example, if the
 *                requested time range is from 00:00 to 00:20, and the existing aggregated profiles are
 *                from 00:15 and 00:25, then the aggregated profiles from 00:15 to 00:20 are returned. </p>
 *
 *
 *             </li>
 *          </ol>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, GetProfileCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, GetProfileCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * const client = new CodeGuruProfilerClient(config);
 * const command = new GetProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetProfileCommandInput} for command's `input` shape.
 * @see {@link GetProfileCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruProfilerClientResolvedConfig | config} for CodeGuruProfilerClient's `config` shape.
 *
 */
export class GetProfileCommand extends $Command<
  GetProfileCommandInput,
  GetProfileCommandOutput,
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

  constructor(readonly input: GetProfileCommandInput) {
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
  ): Handler<GetProfileCommandInput, GetProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetProfileCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeGuruProfilerClient";
    const commandName = "GetProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetProfileRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetProfileResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetProfileCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetProfileCommandOutput> {
    return deserializeAws_restJson1GetProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
