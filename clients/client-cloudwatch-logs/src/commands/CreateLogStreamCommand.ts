// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateLogStreamRequest } from "../models/models_0";
import { CreateLogStream } from "../schemas/schemas";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateLogStreamCommand}.
 */
export interface CreateLogStreamCommandInput extends CreateLogStreamRequest {}
/**
 * @public
 *
 * The output of {@link CreateLogStreamCommand}.
 */
export interface CreateLogStreamCommandOutput extends __MetadataBearer {}

/**
 * <p>Creates a log stream for the specified log group. A log stream is a sequence of log
 *       events that originate from a single source, such as an application instance or a resource that
 *       is being monitored.</p>
 *          <p>There is no limit on the number of log streams that you can create for a log group.
 *       There is a limit of 50 TPS on <code>CreateLogStream</code> operations, after which
 *       transactions are throttled.</p>
 *          <p>You must use the following guidelines when naming a log stream:</p>
 *          <ul>
 *             <li>
 *                <p>Log stream names must be unique within the log group.</p>
 *             </li>
 *             <li>
 *                <p>Log stream names can be between 1 and 512 characters long.</p>
 *             </li>
 *             <li>
 *                <p>Don't use ':' (colon) or '*' (asterisk) characters.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, CreateLogStreamCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, CreateLogStreamCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const input = { // CreateLogStreamRequest
 *   logGroupName: "STRING_VALUE", // required
 *   logStreamName: "STRING_VALUE", // required
 * };
 * const command = new CreateLogStreamCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateLogStreamCommandInput - {@link CreateLogStreamCommandInput}
 * @returns {@link CreateLogStreamCommandOutput}
 * @see {@link CreateLogStreamCommandInput} for command's `input` shape.
 * @see {@link CreateLogStreamCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The specified resource already exists.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service cannot complete the request.</p>
 *
 * @throws {@link CloudWatchLogsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchLogs service.</p>
 *
 *
 * @public
 */
export class CreateLogStreamCommand extends $Command
  .classBuilder<
    CreateLogStreamCommandInput,
    CreateLogStreamCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "CreateLogStream", {})
  .n("CloudWatchLogsClient", "CreateLogStreamCommand")
  .f(void 0, void 0)
  .sc(CreateLogStream)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateLogStreamRequest;
      output: {};
    };
    sdk: {
      input: CreateLogStreamCommandInput;
      output: CreateLogStreamCommandOutput;
    };
  };
}
