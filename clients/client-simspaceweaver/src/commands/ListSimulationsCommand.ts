// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListSimulationsInput, ListSimulationsOutput } from "../models/models_0";
import { ListSimulations$ } from "../schemas/schemas_0";
import type {
  ServiceInputTypes,
  ServiceOutputTypes,
  SimSpaceWeaverClientResolvedConfig,
} from "../SimSpaceWeaverClient";

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
 * // import type { SimSpaceWeaverClientConfig } from "@aws-sdk/client-simspaceweaver";
 * const config = {}; // type is SimSpaceWeaverClientConfig
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SimSpaceWeaver", "ListSimulations", {})
  .n("SimSpaceWeaverClient", "ListSimulationsCommand")
  .sc(ListSimulations$)
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
