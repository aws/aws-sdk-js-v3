// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteSyncJobRequest, DeleteSyncJobResponse } from "../models/models_0";
import { DeleteSyncJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteSyncJobCommand}.
 */
export interface DeleteSyncJobCommandInput extends DeleteSyncJobRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSyncJobCommand}.
 */
export interface DeleteSyncJobCommandOutput extends DeleteSyncJobResponse, __MetadataBearer {}

/**
 * <p>Delete the SyncJob.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTTwinMakerClient, DeleteSyncJobCommand } from "@aws-sdk/client-iottwinmaker"; // ES Modules import
 * // const { IoTTwinMakerClient, DeleteSyncJobCommand } = require("@aws-sdk/client-iottwinmaker"); // CommonJS import
 * // import type { IoTTwinMakerClientConfig } from "@aws-sdk/client-iottwinmaker";
 * const config = {}; // type is IoTTwinMakerClientConfig
 * const client = new IoTTwinMakerClient(config);
 * const input = { // DeleteSyncJobRequest
 *   workspaceId: "STRING_VALUE", // required
 *   syncSource: "STRING_VALUE", // required
 * };
 * const command = new DeleteSyncJobCommand(input);
 * const response = await client.send(command);
 * // { // DeleteSyncJobResponse
 * //   state: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteSyncJobCommandInput - {@link DeleteSyncJobCommandInput}
 * @returns {@link DeleteSyncJobCommandOutput}
 * @see {@link DeleteSyncJobCommandInput} for command's `input` shape.
 * @see {@link DeleteSyncJobCommandOutput} for command's `response` shape.
 * @see {@link IoTTwinMakerClientResolvedConfig | config} for IoTTwinMakerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource wasn't found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota was exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Failed</p>
 *
 * @throws {@link IoTTwinMakerServiceException}
 * <p>Base exception class for all service exceptions from IoTTwinMaker service.</p>
 *
 *
 * @public
 */
export class DeleteSyncJobCommand extends command<DeleteSyncJobCommandInput, DeleteSyncJobCommandOutput>(
  _ep0,
  _mw0,
  "DeleteSyncJob",
  DeleteSyncJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSyncJobRequest;
      output: DeleteSyncJobResponse;
    };
    sdk: {
      input: DeleteSyncJobCommandInput;
      output: DeleteSyncJobCommandOutput;
    };
  };
}
