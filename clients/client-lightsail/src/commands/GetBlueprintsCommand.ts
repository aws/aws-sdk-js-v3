// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetBlueprintsRequest, GetBlueprintsResult } from "../models/models_0";
import { de_GetBlueprintsCommand, se_GetBlueprintsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBlueprintsCommand}.
 */
export interface GetBlueprintsCommandInput extends GetBlueprintsRequest {}
/**
 * @public
 *
 * The output of {@link GetBlueprintsCommand}.
 */
export interface GetBlueprintsCommandOutput extends GetBlueprintsResult, __MetadataBearer {}

/**
 * <p>Returns the list of available instance images, or <i>blueprints</i>. You can
 *       use a blueprint to create a new instance already running a specific operating system, as well
 *       as a preinstalled app or development stack. The software each instance is running depends on
 *       the blueprint image you choose.</p>
 *          <note>
 *             <p>Use active blueprints when creating new instances. Inactive blueprints are listed to
 *         support customers with existing instances and are not necessarily available to create new
 *         instances. Blueprints are marked inactive when they become outdated due to operating system
 *         updates or new application releases.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetBlueprintsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetBlueprintsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const input = { // GetBlueprintsRequest
 *   includeInactive: true || false,
 *   pageToken: "STRING_VALUE",
 *   appCategory: "LfR",
 * };
 * const command = new GetBlueprintsCommand(input);
 * const response = await client.send(command);
 * // { // GetBlueprintsResult
 * //   blueprints: [ // BlueprintList
 * //     { // Blueprint
 * //       blueprintId: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       group: "STRING_VALUE",
 * //       type: "os" || "app",
 * //       description: "STRING_VALUE",
 * //       isActive: true || false,
 * //       minPower: Number("int"),
 * //       version: "STRING_VALUE",
 * //       versionCode: "STRING_VALUE",
 * //       productUrl: "STRING_VALUE",
 * //       licenseUrl: "STRING_VALUE",
 * //       platform: "LINUX_UNIX" || "WINDOWS",
 * //       appCategory: "LfR",
 * //     },
 * //   ],
 * //   nextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetBlueprintsCommandInput - {@link GetBlueprintsCommandInput}
 * @returns {@link GetBlueprintsCommandOutput}
 * @see {@link GetBlueprintsCommandInput} for command's `input` shape.
 * @see {@link GetBlueprintsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid
 *       credentials to access a resource.</p>
 *
 * @throws {@link AccountSetupInProgressException} (client fault)
 *  <p>Lightsail throws this exception when an account is still in the setup in progress
 *       state.</p>
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
 * @throws {@link OperationFailureException} (client fault)
 *  <p>Lightsail throws this exception when an operation fails to execute.</p>
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
export class GetBlueprintsCommand extends $Command
  .classBuilder<
    GetBlueprintsCommandInput,
    GetBlueprintsCommandOutput,
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
  .s("Lightsail_20161128", "GetBlueprints", {})
  .n("LightsailClient", "GetBlueprintsCommand")
  .f(void 0, void 0)
  .ser(se_GetBlueprintsCommand)
  .de(de_GetBlueprintsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBlueprintsRequest;
      output: GetBlueprintsResult;
    };
    sdk: {
      input: GetBlueprintsCommandInput;
      output: GetBlueprintsCommandOutput;
    };
  };
}
