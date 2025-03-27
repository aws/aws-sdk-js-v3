// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { ConfigIdResponse, DeleteConfigRequest } from "../models/models_0";
import { de_DeleteConfigCommand, se_DeleteConfigCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteConfigCommand}.
 */
export interface DeleteConfigCommandInput extends DeleteConfigRequest {}
/**
 * @public
 *
 * The output of {@link DeleteConfigCommand}.
 */
export interface DeleteConfigCommandOutput extends ConfigIdResponse, __MetadataBearer {}

/**
 * <p>Deletes a <code>Config</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, DeleteConfigCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, DeleteConfigCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const input = { // DeleteConfigRequest
 *   configId: "STRING_VALUE", // required
 *   configType: "STRING_VALUE", // required
 * };
 * const command = new DeleteConfigCommand(input);
 * const response = await client.send(command);
 * // { // ConfigIdResponse
 * //   configId: "STRING_VALUE",
 * //   configType: "STRING_VALUE",
 * //   configArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteConfigCommandInput - {@link DeleteConfigCommandInput}
 * @returns {@link DeleteConfigCommandOutput}
 * @see {@link DeleteConfigCommandInput} for command's `input` shape.
 * @see {@link DeleteConfigCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for GroundStationClient's `config` shape.
 *
 * @throws {@link DependencyException} (server fault)
 *  <p>Dependency encountered an error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource was not found.</p>
 *
 * @throws {@link GroundStationServiceException}
 * <p>Base exception class for all service exceptions from GroundStation service.</p>
 *
 *
 * @public
 */
export class DeleteConfigCommand extends $Command
  .classBuilder<
    DeleteConfigCommandInput,
    DeleteConfigCommandOutput,
    GroundStationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GroundStationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GroundStation", "DeleteConfig", {})
  .n("GroundStationClient", "DeleteConfigCommand")
  .f(void 0, void 0)
  .ser(se_DeleteConfigCommand)
  .de(de_DeleteConfigCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteConfigRequest;
      output: ConfigIdResponse;
    };
    sdk: {
      input: DeleteConfigCommandInput;
      output: DeleteConfigCommandOutput;
    };
  };
}
