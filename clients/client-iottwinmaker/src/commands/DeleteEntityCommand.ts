// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTTwinMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTTwinMakerClient";
import { DeleteEntityRequest, DeleteEntityResponse } from "../models/models_0";
import { de_DeleteEntityCommand, se_DeleteEntityCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteEntityCommand}.
 */
export interface DeleteEntityCommandInput extends DeleteEntityRequest {}
/**
 * @public
 *
 * The output of {@link DeleteEntityCommand}.
 */
export interface DeleteEntityCommandOutput extends DeleteEntityResponse, __MetadataBearer {}

/**
 * <p>Deletes an entity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTTwinMakerClient, DeleteEntityCommand } from "@aws-sdk/client-iottwinmaker"; // ES Modules import
 * // const { IoTTwinMakerClient, DeleteEntityCommand } = require("@aws-sdk/client-iottwinmaker"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IoTTwinMakerClient(config);
 * const input = { // DeleteEntityRequest
 *   workspaceId: "STRING_VALUE", // required
 *   entityId: "STRING_VALUE", // required
 *   isRecursive: true || false,
 * };
 * const command = new DeleteEntityCommand(input);
 * const response = await client.send(command);
 * // { // DeleteEntityResponse
 * //   state: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteEntityCommandInput - {@link DeleteEntityCommandInput}
 * @returns {@link DeleteEntityCommandOutput}
 * @see {@link DeleteEntityCommandInput} for command's `input` shape.
 * @see {@link DeleteEntityCommandOutput} for command's `response` shape.
 * @see {@link IoTTwinMakerClientResolvedConfig | config} for IoTTwinMakerClient's `config` shape.
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
 * @public
 */
export class DeleteEntityCommand extends $Command
  .classBuilder<
    DeleteEntityCommandInput,
    DeleteEntityCommandOutput,
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
  .s("AWSIoTTwinMaker", "DeleteEntity", {})
  .n("IoTTwinMakerClient", "DeleteEntityCommand")
  .f(void 0, void 0)
  .ser(se_DeleteEntityCommand)
  .de(de_DeleteEntityCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEntityRequest;
      output: DeleteEntityResponse;
    };
    sdk: {
      input: DeleteEntityCommandInput;
      output: DeleteEntityCommandOutput;
    };
  };
}
