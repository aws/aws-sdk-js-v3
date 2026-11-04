// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateSyncJobRequest, CreateSyncJobResponse } from "../models/models_0";
import { CreateSyncJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateSyncJobCommand}.
 */
export interface CreateSyncJobCommandInput extends CreateSyncJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateSyncJobCommand}.
 */
export interface CreateSyncJobCommandOutput extends CreateSyncJobResponse, __MetadataBearer {}

/**
 * This action creates a SyncJob.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTTwinMakerClient, CreateSyncJobCommand } from "@aws-sdk/client-iottwinmaker"; // ES Modules import
 * // const { IoTTwinMakerClient, CreateSyncJobCommand } = require("@aws-sdk/client-iottwinmaker"); // CommonJS import
 * // import type { IoTTwinMakerClientConfig } from "@aws-sdk/client-iottwinmaker";
 * const config = {}; // type is IoTTwinMakerClientConfig
 * const client = new IoTTwinMakerClient(config);
 * const input = { // CreateSyncJobRequest
 *   workspaceId: "STRING_VALUE", // required
 *   syncSource: "STRING_VALUE", // required
 *   syncRole: "STRING_VALUE", // required
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateSyncJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateSyncJobResponse
 * //   arn: "STRING_VALUE", // required
 * //   creationDateTime: new Date("TIMESTAMP"), // required
 * //   state: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateSyncJobCommandInput - {@link CreateSyncJobCommandInput}
 * @returns {@link CreateSyncJobCommandOutput}
 * @see {@link CreateSyncJobCommandInput} for command's `input` shape.
 * @see {@link CreateSyncJobCommandOutput} for command's `response` shape.
 * @see {@link IoTTwinMakerClientResolvedConfig | config} for IoTTwinMakerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access is denied.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * A conflict occurred.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error has occurred.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The service quota was exceeded.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Failed
 *
 * @throws {@link IoTTwinMakerServiceException}
 *
 * Base exception class for all service exceptions from IoTTwinMaker service.
 *
 * @public
 */
export class CreateSyncJobCommand extends command<CreateSyncJobCommandInput, CreateSyncJobCommandOutput>(
  _ep0,
  _mw0,
  "CreateSyncJob",
  CreateSyncJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSyncJobRequest;
      output: CreateSyncJobResponse;
    };
    sdk: {
      input: CreateSyncJobCommandInput;
      output: CreateSyncJobCommandOutput;
    };
  };
}
