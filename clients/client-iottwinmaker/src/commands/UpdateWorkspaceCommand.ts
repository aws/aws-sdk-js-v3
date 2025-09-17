// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTTwinMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTTwinMakerClient";
import { UpdateWorkspaceRequest, UpdateWorkspaceResponse } from "../models/models_0";
import { de_UpdateWorkspaceCommand, se_UpdateWorkspaceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateWorkspaceCommand}.
 */
export interface UpdateWorkspaceCommandInput extends UpdateWorkspaceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateWorkspaceCommand}.
 */
export interface UpdateWorkspaceCommandOutput extends UpdateWorkspaceResponse, __MetadataBearer {}

/**
 * <p>Updates a workspace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTTwinMakerClient, UpdateWorkspaceCommand } from "@aws-sdk/client-iottwinmaker"; // ES Modules import
 * // const { IoTTwinMakerClient, UpdateWorkspaceCommand } = require("@aws-sdk/client-iottwinmaker"); // CommonJS import
 * // import type { IoTTwinMakerClientConfig } from "@aws-sdk/client-iottwinmaker";
 * const config = {}; // type is IoTTwinMakerClientConfig
 * const client = new IoTTwinMakerClient(config);
 * const input = { // UpdateWorkspaceRequest
 *   workspaceId: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   role: "STRING_VALUE",
 *   s3Location: "STRING_VALUE",
 * };
 * const command = new UpdateWorkspaceCommand(input);
 * const response = await client.send(command);
 * // { // UpdateWorkspaceResponse
 * //   updateDateTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param UpdateWorkspaceCommandInput - {@link UpdateWorkspaceCommandInput}
 * @returns {@link UpdateWorkspaceCommandOutput}
 * @see {@link UpdateWorkspaceCommandInput} for command's `input` shape.
 * @see {@link UpdateWorkspaceCommandOutput} for command's `response` shape.
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
export class UpdateWorkspaceCommand extends $Command
  .classBuilder<
    UpdateWorkspaceCommandInput,
    UpdateWorkspaceCommandOutput,
    IoTTwinMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTTwinMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIoTTwinMaker", "UpdateWorkspace", {})
  .n("IoTTwinMakerClient", "UpdateWorkspaceCommand")
  .f(void 0, void 0)
  .ser(se_UpdateWorkspaceCommand)
  .de(de_UpdateWorkspaceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateWorkspaceRequest;
      output: UpdateWorkspaceResponse;
    };
    sdk: {
      input: UpdateWorkspaceCommandInput;
      output: UpdateWorkspaceCommandOutput;
    };
  };
}
