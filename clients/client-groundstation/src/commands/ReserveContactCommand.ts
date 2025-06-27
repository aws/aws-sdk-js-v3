// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { ContactIdResponse, ReserveContactRequest } from "../models/models_0";
import { de_ReserveContactCommand, se_ReserveContactCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ReserveContactCommand}.
 */
export interface ReserveContactCommandInput extends ReserveContactRequest {}
/**
 * @public
 *
 * The output of {@link ReserveContactCommand}.
 */
export interface ReserveContactCommandOutput extends ContactIdResponse, __MetadataBearer {}

/**
 * <p>Reserves a contact using specified parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, ReserveContactCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, ReserveContactCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const input = { // ReserveContactRequest
 *   missionProfileArn: "STRING_VALUE", // required
 *   satelliteArn: "STRING_VALUE", // required
 *   startTime: new Date("TIMESTAMP"), // required
 *   endTime: new Date("TIMESTAMP"), // required
 *   groundStation: "STRING_VALUE", // required
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new ReserveContactCommand(input);
 * const response = await client.send(command);
 * // { // ContactIdResponse
 * //   contactId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ReserveContactCommandInput - {@link ReserveContactCommandInput}
 * @returns {@link ReserveContactCommandOutput}
 * @see {@link ReserveContactCommandInput} for command's `input` shape.
 * @see {@link ReserveContactCommandOutput} for command's `response` shape.
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
export class ReserveContactCommand extends $Command
  .classBuilder<
    ReserveContactCommandInput,
    ReserveContactCommandOutput,
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
  .s("GroundStation", "ReserveContact", {})
  .n("GroundStationClient", "ReserveContactCommand")
  .f(void 0, void 0)
  .ser(se_ReserveContactCommand)
  .de(de_ReserveContactCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ReserveContactRequest;
      output: ContactIdResponse;
    };
    sdk: {
      input: ReserveContactCommandInput;
      output: ReserveContactCommandOutput;
    };
  };
}
