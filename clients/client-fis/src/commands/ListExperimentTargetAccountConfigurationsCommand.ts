// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FisClient";
import {
  ListExperimentTargetAccountConfigurationsRequest,
  ListExperimentTargetAccountConfigurationsResponse,
} from "../models/models_0";
import {
  de_ListExperimentTargetAccountConfigurationsCommand,
  se_ListExperimentTargetAccountConfigurationsCommand,
} from "../protocols/Aws_restJson1";

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
export interface ListExperimentTargetAccountConfigurationsCommandInput
  extends ListExperimentTargetAccountConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListExperimentTargetAccountConfigurationsCommand}.
 */
export interface ListExperimentTargetAccountConfigurationsCommandOutput
  extends ListExperimentTargetAccountConfigurationsResponse,
    __MetadataBearer {}

/**
 * <p>Lists the target account configurations of the specified experiment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FisClient, ListExperimentTargetAccountConfigurationsCommand } from "@aws-sdk/client-fis"; // ES Modules import
 * // const { FisClient, ListExperimentTargetAccountConfigurationsCommand } = require("@aws-sdk/client-fis"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("FaultInjectionSimulator", "ListExperimentTargetAccountConfigurations", {})
  .n("FisClient", "ListExperimentTargetAccountConfigurationsCommand")
  .f(void 0, void 0)
  .ser(se_ListExperimentTargetAccountConfigurationsCommand)
  .de(de_ListExperimentTargetAccountConfigurationsCommand)
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
