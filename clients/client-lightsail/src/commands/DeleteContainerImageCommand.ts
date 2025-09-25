// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { DeleteContainerImageRequest, DeleteContainerImageResult } from "../models/models_0";
import { DeleteContainerImage } from "../schemas/schemas_11_Container";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteContainerImageCommand}.
 */
export interface DeleteContainerImageCommandInput extends DeleteContainerImageRequest {}
/**
 * @public
 *
 * The output of {@link DeleteContainerImageCommand}.
 */
export interface DeleteContainerImageCommandOutput extends DeleteContainerImageResult, __MetadataBearer {}

/**
 * <p>Deletes a container image that is registered to your Amazon Lightsail container
 *       service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, DeleteContainerImageCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, DeleteContainerImageCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * // import type { LightsailClientConfig } from "@aws-sdk/client-lightsail";
 * const config = {}; // type is LightsailClientConfig
 * const client = new LightsailClient(config);
 * const input = { // DeleteContainerImageRequest
 *   serviceName: "STRING_VALUE", // required
 *   image: "STRING_VALUE", // required
 * };
 * const command = new DeleteContainerImageCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteContainerImageCommandInput - {@link DeleteContainerImageCommandInput}
 * @returns {@link DeleteContainerImageCommandOutput}
 * @see {@link DeleteContainerImageCommandInput} for command's `input` shape.
 * @see {@link DeleteContainerImageCommandOutput} for command's `response` shape.
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
export class DeleteContainerImageCommand extends $Command
  .classBuilder<
    DeleteContainerImageCommandInput,
    DeleteContainerImageCommandOutput,
    LightsailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LightsailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Lightsail_20161128", "DeleteContainerImage", {})
  .n("LightsailClient", "DeleteContainerImageCommand")
  .sc(DeleteContainerImage)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteContainerImageRequest;
      output: {};
    };
    sdk: {
      input: DeleteContainerImageCommandInput;
      output: DeleteContainerImageCommandOutput;
    };
  };
}
