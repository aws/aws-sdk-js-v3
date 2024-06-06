// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListPrivateGraphEndpointsInput, ListPrivateGraphEndpointsOutput } from "../models/models_0";
import { NeptuneGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneGraphClient";
import { de_ListPrivateGraphEndpointsCommand, se_ListPrivateGraphEndpointsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPrivateGraphEndpointsCommand}.
 */
export interface ListPrivateGraphEndpointsCommandInput extends ListPrivateGraphEndpointsInput {}
/**
 * @public
 *
 * The output of {@link ListPrivateGraphEndpointsCommand}.
 */
export interface ListPrivateGraphEndpointsCommandOutput extends ListPrivateGraphEndpointsOutput, __MetadataBearer {}

/**
 * <p>Lists private endpoints for a specified Neptune Analytics graph.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneGraphClient, ListPrivateGraphEndpointsCommand } from "@aws-sdk/client-neptune-graph"; // ES Modules import
 * // const { NeptuneGraphClient, ListPrivateGraphEndpointsCommand } = require("@aws-sdk/client-neptune-graph"); // CommonJS import
 * const client = new NeptuneGraphClient(config);
 * const input = { // ListPrivateGraphEndpointsInput
 *   graphIdentifier: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListPrivateGraphEndpointsCommand(input);
 * const response = await client.send(command);
 * // { // ListPrivateGraphEndpointsOutput
 * //   privateGraphEndpoints: [ // PrivateGraphEndpointSummaryList // required
 * //     { // PrivateGraphEndpointSummary
 * //       vpcId: "STRING_VALUE", // required
 * //       subnetIds: [ // SubnetIds // required
 * //         "STRING_VALUE",
 * //       ],
 * //       status: "CREATING" || "AVAILABLE" || "DELETING" || "FAILED", // required
 * //       vpcEndpointId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPrivateGraphEndpointsCommandInput - {@link ListPrivateGraphEndpointsCommandInput}
 * @returns {@link ListPrivateGraphEndpointsCommandOutput}
 * @see {@link ListPrivateGraphEndpointsCommandInput} for command's `input` shape.
 * @see {@link ListPrivateGraphEndpointsCommandOutput} for command's `response` shape.
 * @see {@link NeptuneGraphClientResolvedConfig | config} for NeptuneGraphClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>A failure occurred on the server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A specified resource could not be located.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The exception was interrupted by throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A resource could not be validated.</p>
 *
 * @throws {@link NeptuneGraphServiceException}
 * <p>Base exception class for all service exceptions from NeptuneGraph service.</p>
 *
 * @public
 */
export class ListPrivateGraphEndpointsCommand extends $Command
  .classBuilder<
    ListPrivateGraphEndpointsCommandInput,
    ListPrivateGraphEndpointsCommandOutput,
    NeptuneGraphClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    ApiType: { type: "staticContextParams", value: `ControlPlane` },
  })
  .m(function (this: any, Command: any, cs: any, config: NeptuneGraphClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonNeptuneGraph", "ListPrivateGraphEndpoints", {})
  .n("NeptuneGraphClient", "ListPrivateGraphEndpointsCommand")
  .f(void 0, void 0)
  .ser(se_ListPrivateGraphEndpointsCommand)
  .de(de_ListPrivateGraphEndpointsCommand)
  .build() {}
