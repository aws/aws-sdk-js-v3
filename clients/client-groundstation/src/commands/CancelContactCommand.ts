// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { CancelContactRequest, ContactIdResponse } from "../models/models_0";
import { de_CancelContactCommand, se_CancelContactCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelContactCommand}.
 */
export interface CancelContactCommandInput extends CancelContactRequest {}
/**
 * @public
 *
 * The output of {@link CancelContactCommand}.
 */
export interface CancelContactCommandOutput extends ContactIdResponse, __MetadataBearer {}

/**
 * <p>Cancels a contact with a specified contact ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, CancelContactCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, CancelContactCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const input = { // CancelContactRequest
 *   contactId: "STRING_VALUE", // required
 * };
 * const command = new CancelContactCommand(input);
 * const response = await client.send(command);
 * // { // ContactIdResponse
 * //   contactId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CancelContactCommandInput - {@link CancelContactCommandInput}
 * @returns {@link CancelContactCommandOutput}
 * @see {@link CancelContactCommandInput} for command's `input` shape.
 * @see {@link CancelContactCommandOutput} for command's `response` shape.
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
export class CancelContactCommand extends $Command
  .classBuilder<
    CancelContactCommandInput,
    CancelContactCommandOutput,
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
  .s("GroundStation", "CancelContact", {})
  .n("GroundStationClient", "CancelContactCommand")
  .f(void 0, void 0)
  .ser(se_CancelContactCommand)
  .de(de_CancelContactCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelContactRequest;
      output: ContactIdResponse;
    };
    sdk: {
      input: CancelContactCommandInput;
      output: CancelContactCommandOutput;
    };
  };
}
