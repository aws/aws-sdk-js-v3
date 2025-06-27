// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteRemoteAccessSessionRequest, DeleteRemoteAccessSessionResult } from "../models/models_0";
import { de_DeleteRemoteAccessSessionCommand, se_DeleteRemoteAccessSessionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteRemoteAccessSessionCommand}.
 */
export interface DeleteRemoteAccessSessionCommandInput extends DeleteRemoteAccessSessionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRemoteAccessSessionCommand}.
 */
export interface DeleteRemoteAccessSessionCommandOutput extends DeleteRemoteAccessSessionResult, __MetadataBearer {}

/**
 * <p>Deletes a completed remote access session and its results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, DeleteRemoteAccessSessionCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, DeleteRemoteAccessSessionCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const input = { // DeleteRemoteAccessSessionRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new DeleteRemoteAccessSessionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRemoteAccessSessionCommandInput - {@link DeleteRemoteAccessSessionCommandInput}
 * @returns {@link DeleteRemoteAccessSessionCommandOutput}
 * @see {@link DeleteRemoteAccessSessionCommandInput} for command's `input` shape.
 * @see {@link DeleteRemoteAccessSessionCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 * @throws {@link ArgumentException} (client fault)
 *  <p>An invalid argument was specified.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit was exceeded.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified entity was not found.</p>
 *
 * @throws {@link ServiceAccountException} (client fault)
 *  <p>There was a problem with the service account.</p>
 *
 * @throws {@link DeviceFarmServiceException}
 * <p>Base exception class for all service exceptions from DeviceFarm service.</p>
 *
 *
 * @example To delete a specific remote access session
 * ```javascript
 * // The following example deletes a specific remote access session.
 * const input = {
 *   arn: "arn:aws:devicefarm:us-west-2:123456789101:session:EXAMPLE-GUID-123-456"
 * };
 * const command = new DeleteRemoteAccessSessionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteRemoteAccessSessionCommand extends $Command
  .classBuilder<
    DeleteRemoteAccessSessionCommandInput,
    DeleteRemoteAccessSessionCommandOutput,
    DeviceFarmClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeviceFarmClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DeviceFarm_20150623", "DeleteRemoteAccessSession", {})
  .n("DeviceFarmClient", "DeleteRemoteAccessSessionCommand")
  .f(void 0, void 0)
  .ser(se_DeleteRemoteAccessSessionCommand)
  .de(de_DeleteRemoteAccessSessionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRemoteAccessSessionRequest;
      output: {};
    };
    sdk: {
      input: DeleteRemoteAccessSessionCommandInput;
      output: DeleteRemoteAccessSessionCommandOutput;
    };
  };
}
