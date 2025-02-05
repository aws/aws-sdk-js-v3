// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyClientPropertiesRequest, ModifyClientPropertiesResult } from "../models/models_0";
import { de_ModifyClientPropertiesCommand, se_ModifyClientPropertiesCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyClientPropertiesCommand}.
 */
export interface ModifyClientPropertiesCommandInput extends ModifyClientPropertiesRequest {}
/**
 * @public
 *
 * The output of {@link ModifyClientPropertiesCommand}.
 */
export interface ModifyClientPropertiesCommandOutput extends ModifyClientPropertiesResult, __MetadataBearer {}

/**
 * <p>Modifies the properties of the specified Amazon WorkSpaces clients.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, ModifyClientPropertiesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, ModifyClientPropertiesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new WorkSpacesClient(config);
 * const input = { // ModifyClientPropertiesRequest
 *   ResourceId: "STRING_VALUE", // required
 *   ClientProperties: { // ClientProperties
 *     ReconnectEnabled: "ENABLED" || "DISABLED",
 *     LogUploadEnabled: "ENABLED" || "DISABLED",
 *   },
 * };
 * const command = new ModifyClientPropertiesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ModifyClientPropertiesCommandInput - {@link ModifyClientPropertiesCommandInput}
 * @returns {@link ModifyClientPropertiesCommandOutput}
 * @see {@link ModifyClientPropertiesCommandInput} for command's `input` shape.
 * @see {@link ModifyClientPropertiesCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *  <p>This operation is not supported.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 * @public
 */
export class ModifyClientPropertiesCommand extends $Command
  .classBuilder<
    ModifyClientPropertiesCommandInput,
    ModifyClientPropertiesCommandOutput,
    WorkSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WorkspacesService", "ModifyClientProperties", {})
  .n("WorkSpacesClient", "ModifyClientPropertiesCommand")
  .f(void 0, void 0)
  .ser(se_ModifyClientPropertiesCommand)
  .de(de_ModifyClientPropertiesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyClientPropertiesRequest;
      output: {};
    };
    sdk: {
      input: ModifyClientPropertiesCommandInput;
      output: ModifyClientPropertiesCommandOutput;
    };
  };
}
