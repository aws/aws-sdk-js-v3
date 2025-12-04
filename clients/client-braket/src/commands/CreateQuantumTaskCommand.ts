// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BraketClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BraketClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateQuantumTaskRequest, CreateQuantumTaskResponse } from "../models/models_0";
import { CreateQuantumTask } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateQuantumTaskCommand}.
 */
export interface CreateQuantumTaskCommandInput extends CreateQuantumTaskRequest {}
/**
 * @public
 *
 * The output of {@link CreateQuantumTaskCommand}.
 */
export interface CreateQuantumTaskCommandOutput extends CreateQuantumTaskResponse, __MetadataBearer {}

/**
 * <p>Creates a quantum task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BraketClient, CreateQuantumTaskCommand } from "@aws-sdk/client-braket"; // ES Modules import
 * // const { BraketClient, CreateQuantumTaskCommand } = require("@aws-sdk/client-braket"); // CommonJS import
 * // import type { BraketClientConfig } from "@aws-sdk/client-braket";
 * const config = {}; // type is BraketClientConfig
 * const client = new BraketClient(config);
 * const input = { // CreateQuantumTaskRequest
 *   clientToken: "STRING_VALUE", // required
 *   deviceArn: "STRING_VALUE", // required
 *   deviceParameters: "STRING_VALUE",
 *   shots: Number("long"), // required
 *   outputS3Bucket: "STRING_VALUE", // required
 *   outputS3KeyPrefix: "STRING_VALUE", // required
 *   action: "STRING_VALUE", // required
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   jobToken: "STRING_VALUE",
 *   associations: [ // Associations
 *     { // Association
 *       arn: "STRING_VALUE", // required
 *       type: "STRING_VALUE", // required
 *     },
 *   ],
 *   experimentalCapabilities: { // ExperimentalCapabilities Union: only one key present
 *     enabled: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateQuantumTaskCommand(input);
 * const response = await client.send(command);
 * // { // CreateQuantumTaskResponse
 * //   quantumTaskArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateQuantumTaskCommandInput - {@link CreateQuantumTaskCommandInput}
 * @returns {@link CreateQuantumTaskCommandOutput}
 * @see {@link CreateQuantumTaskCommandInput} for command's `input` shape.
 * @see {@link CreateQuantumTaskCommandOutput} for command's `response` shape.
 * @see {@link BraketClientResolvedConfig | config} for BraketClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link DeviceOfflineException} (client fault)
 *  <p>The specified device is currently offline.</p>
 *
 * @throws {@link DeviceRetiredException} (client fault)
 *  <p>The specified device has been retired.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The request failed because of an unknown error.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request failed because a service quota is exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The API throttling rate limit is exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input request failed to satisfy constraints expected by Amazon Braket.</p>
 *
 * @throws {@link BraketServiceException}
 * <p>Base exception class for all service exceptions from Braket service.</p>
 *
 *
 * @public
 */
export class CreateQuantumTaskCommand extends $Command
  .classBuilder<
    CreateQuantumTaskCommandInput,
    CreateQuantumTaskCommandOutput,
    BraketClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BraketClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Braket", "CreateQuantumTask", {})
  .n("BraketClient", "CreateQuantumTaskCommand")
  .sc(CreateQuantumTask)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateQuantumTaskRequest;
      output: CreateQuantumTaskResponse;
    };
    sdk: {
      input: CreateQuantumTaskCommandInput;
      output: CreateQuantumTaskCommandOutput;
    };
  };
}
