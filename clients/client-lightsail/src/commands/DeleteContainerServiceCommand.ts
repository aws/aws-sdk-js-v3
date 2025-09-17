// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { DeleteContainerServiceRequest, DeleteContainerServiceResult } from "../models/models_0";
import { de_DeleteContainerServiceCommand, se_DeleteContainerServiceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteContainerServiceCommand}.
 */
export interface DeleteContainerServiceCommandInput extends DeleteContainerServiceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteContainerServiceCommand}.
 */
export interface DeleteContainerServiceCommandOutput extends DeleteContainerServiceResult, __MetadataBearer {}

/**
 * <p>Deletes your Amazon Lightsail container service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, DeleteContainerServiceCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, DeleteContainerServiceCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * // import type { LightsailClientConfig } from "@aws-sdk/client-lightsail";
 * const config = {}; // type is LightsailClientConfig
 * const client = new LightsailClient(config);
 * const input = { // DeleteContainerServiceRequest
 *   serviceName: "STRING_VALUE", // required
 * };
 * const command = new DeleteContainerServiceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteContainerServiceCommandInput - {@link DeleteContainerServiceCommandInput}
 * @returns {@link DeleteContainerServiceCommandOutput}
 * @see {@link DeleteContainerServiceCommandInput} for command's `input` shape.
 * @see {@link DeleteContainerServiceCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid
 *       credentials to access a resource.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Lightsail throws this exception when user input does not conform to the validation rules
 *       of an input field.</p>
 *          <note>
 *             <p>Domain and distribution APIs are only available in the N. Virginia
 *           (<code>us-east-1</code>) Amazon Web Services Region. Please set your Amazon Web Services
 *         Region configuration to <code>us-east-1</code> to create, view, or edit these
 *         resources.</p>
 *          </note>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Lightsail throws this exception when it cannot find a resource.</p>
 *
 * @throws {@link RegionSetupInProgressException} (client fault)
 *  <p>Lightsail throws this exception when an operation is performed on resources in an opt-in
 *       Region that is currently being set up.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>A general service exception.</p>
 *
 * @throws {@link UnauthenticatedException} (client fault)
 *  <p>Lightsail throws this exception when the user has not been authenticated.</p>
 *
 * @throws {@link LightsailServiceException}
 * <p>Base exception class for all service exceptions from Lightsail service.</p>
 *
 *
 * @public
 */
export class DeleteContainerServiceCommand extends $Command
  .classBuilder<
    DeleteContainerServiceCommandInput,
    DeleteContainerServiceCommandOutput,
    LightsailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LightsailClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Lightsail_20161128", "DeleteContainerService", {})
  .n("LightsailClient", "DeleteContainerServiceCommand")
  .f(void 0, void 0)
  .ser(se_DeleteContainerServiceCommand)
  .de(de_DeleteContainerServiceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteContainerServiceRequest;
      output: {};
    };
    sdk: {
      input: DeleteContainerServiceCommandInput;
      output: DeleteContainerServiceCommandOutput;
    };
  };
}
