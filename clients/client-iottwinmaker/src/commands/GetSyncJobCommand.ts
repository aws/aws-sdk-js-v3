// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTTwinMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTTwinMakerClient";
import { GetSyncJobRequest, GetSyncJobResponse } from "../models/models_0";
import { GetSyncJob } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Gets the SyncJob.</p>
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
export class GetSyncJobCommand extends $Command
  .classBuilder<
    GetSyncJobCommandInput,
    GetSyncJobCommandOutput,
    IoTTwinMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTTwinMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIoTTwinMaker", "GetSyncJob", {})
  .n("IoTTwinMakerClient", "GetSyncJobCommand")
  .sc(GetSyncJob)
  .build() {
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
