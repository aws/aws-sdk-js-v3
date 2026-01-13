// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTTwinMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTTwinMakerClient";
import type { CreateSyncJobRequest, CreateSyncJobResponse } from "../models/models_0";
import { CreateSyncJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>This action creates a SyncJob.</p>
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
 *  <p>Access is denied.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflict occurred.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error has occurred.</p>
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
export class CreateSyncJobCommand extends $Command
  .classBuilder<
    CreateSyncJobCommandInput,
    CreateSyncJobCommandOutput,
    IoTTwinMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTTwinMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIoTTwinMaker", "CreateSyncJob", {})
  .n("IoTTwinMakerClient", "CreateSyncJobCommand")
  .sc(CreateSyncJob$)
  .build() {
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
