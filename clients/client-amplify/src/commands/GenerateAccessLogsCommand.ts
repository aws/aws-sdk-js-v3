// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AmplifyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GenerateAccessLogsRequest, GenerateAccessLogsResult } from "../models/models_0";
import { GenerateAccessLogs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GenerateAccessLogsCommand}.
 */
export interface GenerateAccessLogsCommandInput extends GenerateAccessLogsRequest {}
/**
 * @public
 *
 * The output of {@link GenerateAccessLogsCommand}.
 */
export interface GenerateAccessLogsCommandOutput extends GenerateAccessLogsResult, __MetadataBearer {}

/**
 * <p>Returns the website access logs for a specific time range using a presigned URL.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, GenerateAccessLogsCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, GenerateAccessLogsCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * // import type { AmplifyClientConfig } from "@aws-sdk/client-amplify";
 * const config = {}; // type is AmplifyClientConfig
 * const client = new AmplifyClient(config);
 * const input = { // GenerateAccessLogsRequest
 *   startTime: new Date("TIMESTAMP"),
 *   endTime: new Date("TIMESTAMP"),
 *   domainName: "STRING_VALUE", // required
 *   appId: "STRING_VALUE", // required
 * };
 * const command = new GenerateAccessLogsCommand(input);
 * const response = await client.send(command);
 * // { // GenerateAccessLogsResult
 * //   logUrl: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GenerateAccessLogsCommandInput - {@link GenerateAccessLogsCommandInput}
 * @returns {@link GenerateAccessLogsCommandOutput}
 * @see {@link GenerateAccessLogsCommandInput} for command's `input` shape.
 * @see {@link GenerateAccessLogsCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for AmplifyClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>A request contains unexpected data. </p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>The service failed to perform an operation due to an internal issue. </p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>An entity was not found during an operation. </p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>An operation failed due to a lack of access. </p>
 *
 * @throws {@link AmplifyServiceException}
 * <p>Base exception class for all service exceptions from Amplify service.</p>
 *
 *
 * @public
 */
export class GenerateAccessLogsCommand extends $Command
  .classBuilder<
    GenerateAccessLogsCommandInput,
    GenerateAccessLogsCommandOutput,
    AmplifyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AmplifyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Amplify", "GenerateAccessLogs", {})
  .n("AmplifyClient", "GenerateAccessLogsCommand")
  .sc(GenerateAccessLogs$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GenerateAccessLogsRequest;
      output: GenerateAccessLogsResult;
    };
    sdk: {
      input: GenerateAccessLogsCommandInput;
      output: GenerateAccessLogsCommandOutput;
    };
  };
}
