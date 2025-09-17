// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BraketClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BraketClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetQuantumTaskRequest, GetQuantumTaskResponse } from "../models/models_0";
import { de_GetQuantumTaskCommand, se_GetQuantumTaskCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetQuantumTaskCommand}.
 */
export interface GetQuantumTaskCommandInput extends GetQuantumTaskRequest {}
/**
 * @public
 *
 * The output of {@link GetQuantumTaskCommand}.
 */
export interface GetQuantumTaskCommandOutput extends GetQuantumTaskResponse, __MetadataBearer {}

/**
 * <p>Retrieves the specified quantum task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BraketClient, GetQuantumTaskCommand } from "@aws-sdk/client-braket"; // ES Modules import
 * // const { BraketClient, GetQuantumTaskCommand } = require("@aws-sdk/client-braket"); // CommonJS import
 * // import type { BraketClientConfig } from "@aws-sdk/client-braket";
 * const config = {}; // type is BraketClientConfig
 * const client = new BraketClient(config);
 * const input = { // GetQuantumTaskRequest
 *   quantumTaskArn: "STRING_VALUE", // required
 *   additionalAttributeNames: [ // QuantumTaskAdditionalAttributeNamesList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new GetQuantumTaskCommand(input);
 * const response = await client.send(command);
 * // { // GetQuantumTaskResponse
 * //   quantumTaskArn: "STRING_VALUE", // required
 * //   status: "STRING_VALUE", // required
 * //   failureReason: "STRING_VALUE",
 * //   deviceArn: "STRING_VALUE", // required
 * //   deviceParameters: "STRING_VALUE", // required
 * //   shots: Number("long"), // required
 * //   outputS3Bucket: "STRING_VALUE", // required
 * //   outputS3Directory: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   endedAt: new Date("TIMESTAMP"),
 * //   tags: { // TagsMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   jobArn: "STRING_VALUE",
 * //   queueInfo: { // QuantumTaskQueueInfo
 * //     queue: "STRING_VALUE", // required
 * //     position: "STRING_VALUE", // required
 * //     queuePriority: "STRING_VALUE",
 * //     message: "STRING_VALUE",
 * //   },
 * //   associations: [ // Associations
 * //     { // Association
 * //       arn: "STRING_VALUE", // required
 * //       type: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   numSuccessfulShots: Number("long"),
 * //   actionMetadata: { // ActionMetadata
 * //     actionType: "STRING_VALUE", // required
 * //     programCount: Number("long"),
 * //     executableCount: Number("long"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetQuantumTaskCommandInput - {@link GetQuantumTaskCommandInput}
 * @returns {@link GetQuantumTaskCommandOutput}
 * @see {@link GetQuantumTaskCommandInput} for command's `input` shape.
 * @see {@link GetQuantumTaskCommandOutput} for command's `response` shape.
 * @see {@link BraketClientResolvedConfig | config} for BraketClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The request failed because of an unknown error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
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
export class GetQuantumTaskCommand extends $Command
  .classBuilder<
    GetQuantumTaskCommandInput,
    GetQuantumTaskCommandOutput,
    BraketClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BraketClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Braket", "GetQuantumTask", {})
  .n("BraketClient", "GetQuantumTaskCommand")
  .f(void 0, void 0)
  .ser(se_GetQuantumTaskCommand)
  .de(de_GetQuantumTaskCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetQuantumTaskRequest;
      output: GetQuantumTaskResponse;
    };
    sdk: {
      input: GetQuantumTaskCommandInput;
      output: GetQuantumTaskCommandOutput;
    };
  };
}
