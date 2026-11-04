// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetQuantumTaskRequest, GetQuantumTaskResponse } from "../models/models_0";
import { GetQuantumTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Retrieves the specified quantum task.
 *
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
 * //   experimentalCapabilities: { // ExperimentalCapabilities Union: only one key present
 * //     enabled: "STRING_VALUE",
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
 *
 * You do not have sufficient permissions to perform this action.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * The request failed because of an unknown error.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The API throttling rate limit is exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input request failed to satisfy constraints expected by Amazon Braket.
 *
 * @throws {@link BraketServiceException}
 *
 * Base exception class for all service exceptions from Braket service.
 *
 * @public
 */
export class GetQuantumTaskCommand extends command<GetQuantumTaskCommandInput, GetQuantumTaskCommandOutput>(
  _ep0,
  _mw0,
  "GetQuantumTask",
  GetQuantumTask$
) {
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
