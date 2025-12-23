// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { FisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FisClient";
import type {
  ListExperimentTargetAccountConfigurationsRequest,
  ListExperimentTargetAccountConfigurationsResponse,
} from "../models/models_0";
import { ListExperimentTargetAccountConfigurations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListExperimentTargetAccountConfigurationsCommand}.
 */
export interface ListExperimentTargetAccountConfigurationsCommandInput extends ListExperimentTargetAccountConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListExperimentTargetAccountConfigurationsCommand}.
 */
export interface ListExperimentTargetAccountConfigurationsCommandOutput extends ListExperimentTargetAccountConfigurationsResponse, __MetadataBearer {}

/**
 * <p>Lists the target account configurations of the specified experiment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FisClient, ListExperimentTargetAccountConfigurationsCommand } from "@aws-sdk/client-fis"; // ES Modules import
 * // const { FisClient, ListExperimentTargetAccountConfigurationsCommand } = require("@aws-sdk/client-fis"); // CommonJS import
 * // import type { FisClientConfig } from "@aws-sdk/client-fis";
 * const config = {}; // type is FisClientConfig
 * const client = new FisClient(config);
 * const input = { // ListExperimentTargetAccountConfigurationsRequest
 *   experimentId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListExperimentTargetAccountConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListExperimentTargetAccountConfigurationsResponse
 * //   targetAccountConfigurations: [ // ExperimentTargetAccountConfigurationList
 * //     { // ExperimentTargetAccountConfigurationSummary
 * //       roleArn: "STRING_VALUE",
 * //       accountId: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListExperimentTargetAccountConfigurationsCommandInput - {@link ListExperimentTargetAccountConfigurationsCommandInput}
 * @returns {@link ListExperimentTargetAccountConfigurationsCommandOutput}
 * @see {@link ListExperimentTargetAccountConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListExperimentTargetAccountConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link FisClientResolvedConfig | config} for FisClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The specified input is not valid, or fails to satisfy the constraints for the request.</p>
 *
 * @throws {@link FisServiceException}
 * <p>Base exception class for all service exceptions from Fis service.</p>
 *
 *
 * @public
 */
export class ListExperimentTargetAccountConfigurationsCommand extends $Command
  .classBuilder<
    ListExperimentTargetAccountConfigurationsCommandInput,
    ListExperimentTargetAccountConfigurationsCommandOutput,
    FisClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FisClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("FaultInjectionSimulator", "ListExperimentTargetAccountConfigurations", {})
  .n("FisClient", "ListExperimentTargetAccountConfigurationsCommand")
  .sc(ListExperimentTargetAccountConfigurations$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListExperimentTargetAccountConfigurationsRequest;
      output: ListExperimentTargetAccountConfigurationsResponse;
    };
    sdk: {
      input: ListExperimentTargetAccountConfigurationsCommandInput;
      output: ListExperimentTargetAccountConfigurationsCommandOutput;
    };
  };
}
