// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisableRadiusRequest, DisableRadiusResult } from "../models/models_0";
import { de_DisableRadiusCommand, se_DisableRadiusCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisableRadiusCommand}.
 */
export interface DisableRadiusCommandInput extends DisableRadiusRequest {}
/**
 * @public
 *
 * The output of {@link DisableRadiusCommand}.
 */
export interface DisableRadiusCommandOutput extends DisableRadiusResult, __MetadataBearer {}

/**
 * <p>Disables multi-factor authentication (MFA) with the Remote Authentication Dial In
 *          User Service (RADIUS) server for an AD Connector or Microsoft AD directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DisableRadiusCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DisableRadiusCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const input = { // DisableRadiusRequest
 *   DirectoryId: "STRING_VALUE", // required
 * };
 * const command = new DisableRadiusCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisableRadiusCommandInput - {@link DisableRadiusCommandInput}
 * @returns {@link DisableRadiusCommandOutput}
 * @see {@link DisableRadiusCommandInput} for command's `input` shape.
 * @see {@link DisableRadiusCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *  <p>The specified entity could not be found.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An exception has occurred in Directory Service.</p>
 *
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
 *
 * @example To disable radius
 * ```javascript
 * // The following example disables multi-factor authentication (MFA) with the Remote Authentication Dial In User Service (RADIUS) server for an AD Connector directory.
 * const input = {
 *   DirectoryId: "d-92654abfed"
 * };
 * const command = new DisableRadiusCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DisableRadiusCommand extends $Command
  .classBuilder<
    DisableRadiusCommandInput,
    DisableRadiusCommandOutput,
    DirectoryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DirectoryService_20150416", "DisableRadius", {})
  .n("DirectoryServiceClient", "DisableRadiusCommand")
  .f(void 0, void 0)
  .ser(se_DisableRadiusCommand)
  .de(de_DisableRadiusCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisableRadiusRequest;
      output: {};
    };
    sdk: {
      input: DisableRadiusCommandInput;
      output: DisableRadiusCommandOutput;
    };
  };
}
