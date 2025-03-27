// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateRadiusRequest, UpdateRadiusRequestFilterSensitiveLog, UpdateRadiusResult } from "../models/models_0";
import { de_UpdateRadiusCommand, se_UpdateRadiusCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateRadiusCommand}.
 */
export interface UpdateRadiusCommandInput extends UpdateRadiusRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRadiusCommand}.
 */
export interface UpdateRadiusCommandOutput extends UpdateRadiusResult, __MetadataBearer {}

/**
 * <p>Updates the Remote Authentication Dial In User Service (RADIUS) server information
 *          for an AD Connector or Microsoft AD directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, UpdateRadiusCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, UpdateRadiusCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const input = { // UpdateRadiusRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   RadiusSettings: { // RadiusSettings
 *     RadiusServers: [ // Servers
 *       "STRING_VALUE",
 *     ],
 *     RadiusPort: Number("int"),
 *     RadiusTimeout: Number("int"),
 *     RadiusRetries: Number("int"),
 *     SharedSecret: "STRING_VALUE",
 *     AuthenticationProtocol: "PAP" || "CHAP" || "MS-CHAPv1" || "MS-CHAPv2",
 *     DisplayLabel: "STRING_VALUE",
 *     UseSameUsername: true || false,
 *   },
 * };
 * const command = new UpdateRadiusCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateRadiusCommandInput - {@link UpdateRadiusCommandInput}
 * @returns {@link UpdateRadiusCommandOutput}
 * @see {@link UpdateRadiusCommandInput} for command's `input` shape.
 * @see {@link UpdateRadiusCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *  <p>The specified entity could not be found.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An exception has occurred in Directory Service.</p>
 *
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
 *
 * @public
 */
export class UpdateRadiusCommand extends $Command
  .classBuilder<
    UpdateRadiusCommandInput,
    UpdateRadiusCommandOutput,
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
  .s("DirectoryService_20150416", "UpdateRadius", {})
  .n("DirectoryServiceClient", "UpdateRadiusCommand")
  .f(UpdateRadiusRequestFilterSensitiveLog, void 0)
  .ser(se_UpdateRadiusCommand)
  .de(de_UpdateRadiusCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRadiusRequest;
      output: {};
    };
    sdk: {
      input: UpdateRadiusCommandInput;
      output: UpdateRadiusCommandOutput;
    };
  };
}
