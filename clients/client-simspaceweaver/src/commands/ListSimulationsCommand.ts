// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListSimulationsInput, ListSimulationsOutput } from "../models/models_0";
import { de_ListSimulationsCommand, se_ListSimulationsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SimSpaceWeaverClientResolvedConfig } from "../SimSpaceWeaverClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSimulationsCommand}.
 */
export interface ListSimulationsCommandInput extends ListSimulationsInput {}
/**
 * @public
 *
 * The output of {@link ListSimulationsCommand}.
 */
export interface ListSimulationsCommandOutput extends ListSimulationsOutput, __MetadataBearer {}

/**
 * <p>Lists the SimSpace Weaver simulations in the Amazon Web Services account used to make the API call.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SimSpaceWeaverClient, ListSimulationsCommand } from "@aws-sdk/client-simspaceweaver"; // ES Modules import
 * // const { SimSpaceWeaverClient, ListSimulationsCommand } = require("@aws-sdk/client-simspaceweaver"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SimSpaceWeaverClient(config);
 * const input = { // ListSimulationsInput
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListSimulationsCommand(input);
 * const response = await client.send(command);
 * // { // ListSimulationsOutput
 * //   Simulations: [ // SimulationList
 * //     { // SimulationMetadata
 * //       Name: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       Status: "STRING_VALUE",
 * //       TargetStatus: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSimulationsCommandInput - {@link ListSimulationsCommandInput}
 * @returns {@link ListSimulationsCommandOutput}
 * @see {@link ListSimulationsCommandInput} for command's `input` shape.
 * @see {@link ListSimulationsCommandOutput} for command's `response` shape.
 * @see {@link SimSpaceWeaverClientResolvedConfig | config} for SimSpaceWeaverClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link SimSpaceWeaverServiceException}
 * <p>Base exception class for all service exceptions from SimSpaceWeaver service.</p>
 *
 * @public
 */
export class ListSimulationsCommand extends $Command
  .classBuilder<
    ListSimulationsCommandInput,
    ListSimulationsCommandOutput,
    SimSpaceWeaverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SimSpaceWeaverClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SimSpaceWeaver", "ListSimulations", {})
  .n("SimSpaceWeaverClient", "ListSimulationsCommand")
  .f(void 0, void 0)
  .ser(se_ListSimulationsCommand)
  .de(de_ListSimulationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSimulationsInput;
      output: ListSimulationsOutput;
    };
    sdk: {
      input: ListSimulationsCommandInput;
      output: ListSimulationsCommandOutput;
    };
  };
}
