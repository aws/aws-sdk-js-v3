// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartSessionRequest, StartSessionResponse } from "../models/models_0";
import { StartSession } from "../schemas/schemas_7_Data";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartSessionCommand}.
 */
export interface StartSessionCommandInput extends StartSessionRequest {}
/**
 * @public
 *
 * The output of {@link StartSessionCommand}.
 */
export interface StartSessionCommandOutput extends StartSessionResponse, __MetadataBearer {}

/**
 * <p>Creates a session for running calculations within a workgroup. The session is ready
 *             when it reaches an <code>IDLE</code> state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, StartSessionCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, StartSessionCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * // import type { AthenaClientConfig } from "@aws-sdk/client-athena";
 * const config = {}; // type is AthenaClientConfig
 * const client = new AthenaClient(config);
 * const input = { // StartSessionRequest
 *   Description: "STRING_VALUE",
 *   WorkGroup: "STRING_VALUE", // required
 *   EngineConfiguration: { // EngineConfiguration
 *     CoordinatorDpuSize: Number("int"),
 *     MaxConcurrentDpus: Number("int"), // required
 *     DefaultExecutorDpuSize: Number("int"),
 *     AdditionalConfigs: { // ParametersMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *     SparkProperties: {
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 *   NotebookVersion: "STRING_VALUE",
 *   SessionIdleTimeoutInMinutes: Number("int"),
 *   ClientRequestToken: "STRING_VALUE",
 * };
 * const command = new StartSessionCommand(input);
 * const response = await client.send(command);
 * // { // StartSessionResponse
 * //   SessionId: "STRING_VALUE",
 * //   State: "CREATING" || "CREATED" || "IDLE" || "BUSY" || "TERMINATING" || "TERMINATED" || "DEGRADED" || "FAILED",
 * // };
 *
 * ```
 *
 * @param StartSessionCommandInput - {@link StartSessionCommandInput}
 * @returns {@link StartSessionCommandOutput}
 * @see {@link StartSessionCommandInput} for command's `input` shape.
 * @see {@link StartSessionCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates a platform issue, which may be due to a transient condition or
 *             outage.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *             required parameter may be missing or out of range.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource, such as a workgroup, was not found.</p>
 *
 * @throws {@link SessionAlreadyExistsException} (client fault)
 *  <p>The specified session already exists.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Indicates that the request was throttled.</p>
 *
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 *
 * @public
 */
export class StartSessionCommand extends $Command
  .classBuilder<
    StartSessionCommandInput,
    StartSessionCommandOutput,
    AthenaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AthenaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonAthena", "StartSession", {})
  .n("AthenaClient", "StartSessionCommand")
  .sc(StartSession)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartSessionRequest;
      output: StartSessionResponse;
    };
    sdk: {
      input: StartSessionCommandInput;
      output: StartSessionCommandOutput;
    };
  };
}
