// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetSyncJobRequest, GetSyncJobResponse } from "../models/models_0";
import { GetSyncJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetSyncJobCommand}.
 */
export interface GetSyncJobCommandInput extends GetSyncJobRequest {}
/**
 * @public
 *
 * The output of {@link GetSyncJobCommand}.
 */
export interface GetSyncJobCommandOutput extends GetSyncJobResponse, __MetadataBearer {}

/**
 * Gets the SyncJob.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTTwinMakerClient, GetSyncJobCommand } from "@aws-sdk/client-iottwinmaker"; // ES Modules import
 * // const { IoTTwinMakerClient, GetSyncJobCommand } = require("@aws-sdk/client-iottwinmaker"); // CommonJS import
 * // import type { IoTTwinMakerClientConfig } from "@aws-sdk/client-iottwinmaker";
 * const config = {}; // type is IoTTwinMakerClientConfig
 * const client = new IoTTwinMakerClient(config);
 * const input = { // GetSyncJobRequest
 *   syncSource: "STRING_VALUE", // required
 *   workspaceId: "STRING_VALUE",
 * };
 * const command = new GetSyncJobCommand(input);
 * const response = await client.send(command);
 * // { // GetSyncJobResponse
 * //   arn: "STRING_VALUE", // required
 * //   workspaceId: "STRING_VALUE", // required
 * //   syncSource: "STRING_VALUE", // required
 * //   syncRole: "STRING_VALUE", // required
 * //   status: { // SyncJobStatus
 * //     state: "STRING_VALUE",
 * //     error: { // ErrorDetails
 * //       code: "STRING_VALUE",
 * //       message: "STRING_VALUE",
 * //     },
 * //   },
 * //   creationDateTime: new Date("TIMESTAMP"), // required
 * //   updateDateTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param GetSyncJobCommandInput - {@link GetSyncJobCommandInput}
 * @returns {@link GetSyncJobCommandOutput}
 * @see {@link GetSyncJobCommandInput} for command's `input` shape.
 * @see {@link GetSyncJobCommandOutput} for command's `response` shape.
 * @see {@link IoTTwinMakerClientResolvedConfig | config} for IoTTwinMakerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access is denied.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error has occurred.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource wasn't found.
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
export class GetSyncJobCommand extends command<GetSyncJobCommandInput, GetSyncJobCommandOutput>(
  _ep0,
  _mw0,
  "GetSyncJob",
  GetSyncJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSyncJobRequest;
      output: GetSyncJobResponse;
    };
    sdk: {
      input: GetSyncJobCommandInput;
      output: GetSyncJobCommandOutput;
    };
  };
}
