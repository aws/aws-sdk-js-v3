// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetSessionRequest, GetSessionResponse } from "../models/models_0";
import { GetSession } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSessionCommand}.
 */
export interface GetSessionCommandInput extends GetSessionRequest {}
/**
 * @public
 *
 * The output of {@link GetSessionCommand}.
 */
export interface GetSessionCommandOutput extends GetSessionResponse, __MetadataBearer {}

/**
 * <p>Gets the full details of a previously created session, including the session status
 *             and configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, GetSessionCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, GetSessionCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * // import type { AthenaClientConfig } from "@aws-sdk/client-athena";
 * const config = {}; // type is AthenaClientConfig
 * const client = new AthenaClient(config);
 * const input = { // GetSessionRequest
 *   SessionId: "STRING_VALUE", // required
 * };
 * const command = new GetSessionCommand(input);
 * const response = await client.send(command);
 * // { // GetSessionResponse
 * //   SessionId: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   WorkGroup: "STRING_VALUE",
 * //   EngineVersion: "STRING_VALUE",
 * //   EngineConfiguration: { // EngineConfiguration
 * //     CoordinatorDpuSize: Number("int"),
 * //     MaxConcurrentDpus: Number("int"), // required
 * //     DefaultExecutorDpuSize: Number("int"),
 * //     AdditionalConfigs: { // ParametersMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     SparkProperties: {
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * //   NotebookVersion: "STRING_VALUE",
 * //   SessionConfiguration: { // SessionConfiguration
 * //     ExecutionRole: "STRING_VALUE",
 * //     WorkingDirectory: "STRING_VALUE",
 * //     IdleTimeoutSeconds: Number("long"),
 * //     EncryptionConfiguration: { // EncryptionConfiguration
 * //       EncryptionOption: "SSE_S3" || "SSE_KMS" || "CSE_KMS", // required
 * //       KmsKey: "STRING_VALUE",
 * //     },
 * //   },
 * //   Status: { // SessionStatus
 * //     StartDateTime: new Date("TIMESTAMP"),
 * //     LastModifiedDateTime: new Date("TIMESTAMP"),
 * //     EndDateTime: new Date("TIMESTAMP"),
 * //     IdleSinceDateTime: new Date("TIMESTAMP"),
 * //     State: "CREATING" || "CREATED" || "IDLE" || "BUSY" || "TERMINATING" || "TERMINATED" || "DEGRADED" || "FAILED",
 * //     StateChangeReason: "STRING_VALUE",
 * //   },
 * //   Statistics: { // SessionStatistics
 * //     DpuExecutionInMillis: Number("long"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSessionCommandInput - {@link GetSessionCommandInput}
 * @returns {@link GetSessionCommandOutput}
 * @see {@link GetSessionCommandInput} for command's `input` shape.
 * @see {@link GetSessionCommandOutput} for command's `response` shape.
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
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 *
 * @public
 */
export class GetSessionCommand extends $Command
  .classBuilder<
    GetSessionCommandInput,
    GetSessionCommandOutput,
    AthenaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AthenaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonAthena", "GetSession", {})
  .n("AthenaClient", "GetSessionCommand")
  .sc(GetSession)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSessionRequest;
      output: GetSessionResponse;
    };
    sdk: {
      input: GetSessionCommandInput;
      output: GetSessionCommandOutput;
    };
  };
}
