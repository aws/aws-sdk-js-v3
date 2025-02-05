// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeploymentStrategies, ListDeploymentStrategiesRequest } from "../models/models_0";
import { de_ListDeploymentStrategiesCommand, se_ListDeploymentStrategiesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDeploymentStrategiesCommand}.
 */
export interface ListDeploymentStrategiesCommandInput extends ListDeploymentStrategiesRequest {}
/**
 * @public
 *
 * The output of {@link ListDeploymentStrategiesCommand}.
 */
export interface ListDeploymentStrategiesCommandOutput extends DeploymentStrategies, __MetadataBearer {}

/**
 * <p>Lists deployment strategies.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, ListDeploymentStrategiesCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, ListDeploymentStrategiesCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new AppConfigClient(config);
 * const input = { // ListDeploymentStrategiesRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListDeploymentStrategiesCommand(input);
 * const response = await client.send(command);
 * // { // DeploymentStrategies
 * //   Items: [ // DeploymentStrategyList
 * //     { // DeploymentStrategy
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       DeploymentDurationInMinutes: Number("int"),
 * //       GrowthType: "LINEAR" || "EXPONENTIAL",
 * //       GrowthFactor: Number("float"),
 * //       FinalBakeTimeInMinutes: Number("int"),
 * //       ReplicateTo: "NONE" || "SSM_DOCUMENT",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDeploymentStrategiesCommandInput - {@link ListDeploymentStrategiesCommandInput}
 * @returns {@link ListDeploymentStrategiesCommandOutput}
 * @see {@link ListDeploymentStrategiesCommandInput} for command's `input` shape.
 * @see {@link ListDeploymentStrategiesCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for AppConfigClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There was an internal failure in the AppConfig service.</p>
 *
 * @throws {@link AppConfigServiceException}
 * <p>Base exception class for all service exceptions from AppConfig service.</p>
 *
 * @public
 * @example To list the available deployment strategies
 * ```javascript
 * // The following list-deployment-strategies example lists the available deployment strategies in your AWS account.
 * const input = {};
 * const command = new ListDeploymentStrategiesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Items": [
 *     {
 *       "DeploymentDurationInMinutes": 15,
 *       "FinalBakeTimeInMinutes": 0,
 *       "GrowthFactor": 25,
 *       "GrowthType": "LINEAR",
 *       "Id": "1225qzk",
 *       "Name": "Example-Deployment",
 *       "ReplicateTo": "SSM_DOCUMENT"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-list-the-available-deployment-strategies-1632267364180
 * ```
 *
 */
export class ListDeploymentStrategiesCommand extends $Command
  .classBuilder<
    ListDeploymentStrategiesCommandInput,
    ListDeploymentStrategiesCommandOutput,
    AppConfigClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppConfigClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonAppConfig", "ListDeploymentStrategies", {})
  .n("AppConfigClient", "ListDeploymentStrategiesCommand")
  .f(void 0, void 0)
  .ser(se_ListDeploymentStrategiesCommand)
  .de(de_ListDeploymentStrategiesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDeploymentStrategiesRequest;
      output: DeploymentStrategies;
    };
    sdk: {
      input: ListDeploymentStrategiesCommandInput;
      output: ListDeploymentStrategiesCommandOutput;
    };
  };
}
