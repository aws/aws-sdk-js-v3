// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteTestGridProjectRequest, DeleteTestGridProjectResult } from "../models/models_0";
import { de_DeleteTestGridProjectCommand, se_DeleteTestGridProjectCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTestGridProjectCommand}.
 */
export interface DeleteTestGridProjectCommandInput extends DeleteTestGridProjectRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTestGridProjectCommand}.
 */
export interface DeleteTestGridProjectCommandOutput extends DeleteTestGridProjectResult, __MetadataBearer {}

/**
 * <p> Deletes a Selenium testing project and all content generated under it. </p>
 *          <important>
 *             <p>You cannot undo this operation.</p>
 *          </important>
 *          <note>
 *             <p>You cannot delete a project if it has active sessions.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, DeleteTestGridProjectCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, DeleteTestGridProjectCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * // import type { DeviceFarmClientConfig } from "@aws-sdk/client-device-farm";
 * const config = {}; // type is DeviceFarmClientConfig
 * const client = new DeviceFarmClient(config);
 * const input = { // DeleteTestGridProjectRequest
 *   projectArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteTestGridProjectCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTestGridProjectCommandInput - {@link DeleteTestGridProjectCommandInput}
 * @returns {@link DeleteTestGridProjectCommandOutput}
 * @see {@link DeleteTestGridProjectCommandInput} for command's `input` shape.
 * @see {@link DeleteTestGridProjectCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 * @throws {@link ArgumentException} (client fault)
 *  <p>An invalid argument was specified.</p>
 *
 * @throws {@link CannotDeleteException} (client fault)
 *  <p>The requested object could not be deleted.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal exception was raised in the service. Contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a> if you see this
 *          error. </p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified entity was not found.</p>
 *
 * @throws {@link DeviceFarmServiceException}
 * <p>Base exception class for all service exceptions from DeviceFarm service.</p>
 *
 *
 * @public
 */
export class DeleteTestGridProjectCommand extends $Command
  .classBuilder<
    DeleteTestGridProjectCommandInput,
    DeleteTestGridProjectCommandOutput,
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
  .s("DeviceFarm_20150623", "DeleteTestGridProject", {})
  .n("DeviceFarmClient", "DeleteTestGridProjectCommand")
  .f(void 0, void 0)
  .ser(se_DeleteTestGridProjectCommand)
  .de(de_DeleteTestGridProjectCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTestGridProjectRequest;
      output: {};
    };
    sdk: {
      input: DeleteTestGridProjectCommandInput;
      output: DeleteTestGridProjectCommandOutput;
    };
  };
}
