// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { Deployments, ListDeploymentsRequest } from "../models/models_0";
import { ListDeployments } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDeploymentsCommand}.
 */
export interface ListDeploymentsCommandInput extends ListDeploymentsRequest {}
/**
 * @public
 *
 * The output of {@link ListDeploymentsCommand}.
 */
export interface ListDeploymentsCommandOutput extends Deployments, __MetadataBearer {}

/**
 * <p>Lists the deployments for an environment in descending deployment number order.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, ListDeploymentsCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, ListDeploymentsCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * // import type { AppConfigClientConfig } from "@aws-sdk/client-appconfig";
 * const config = {}; // type is AppConfigClientConfig
 * const client = new AppConfigClient(config);
 * const input = { // ListDeploymentsRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   EnvironmentId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListDeploymentsCommand(input);
 * const response = await client.send(command);
 * // { // Deployments
 * //   Items: [ // DeploymentList
 * //     { // DeploymentSummary
 * //       DeploymentNumber: Number("int"),
 * //       ConfigurationName: "STRING_VALUE",
 * //       ConfigurationVersion: "STRING_VALUE",
 * //       DeploymentDurationInMinutes: Number("int"),
 * //       GrowthType: "LINEAR" || "EXPONENTIAL",
 * //       GrowthFactor: Number("float"),
 * //       FinalBakeTimeInMinutes: Number("int"),
 * //       State: "BAKING" || "VALIDATING" || "DEPLOYING" || "COMPLETE" || "ROLLING_BACK" || "ROLLED_BACK" || "REVERTED",
 * //       PercentageComplete: Number("float"),
 * //       StartedAt: new Date("TIMESTAMP"),
 * //       CompletedAt: new Date("TIMESTAMP"),
 * //       VersionLabel: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDeploymentsCommandInput - {@link ListDeploymentsCommandInput}
 * @returns {@link ListDeploymentsCommandOutput}
 * @see {@link ListDeploymentsCommandInput} for command's `input` shape.
 * @see {@link ListDeploymentsCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for AppConfigClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There was an internal failure in the AppConfig service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found.</p>
 *
 * @throws {@link AppConfigServiceException}
 * <p>Base exception class for all service exceptions from AppConfig service.</p>
 *
 *
 * @public
 */
export class ListDeploymentsCommand extends $Command
  .classBuilder<
    ListDeploymentsCommandInput,
    ListDeploymentsCommandOutput,
    AppConfigClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppConfigClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonAppConfig", "ListDeployments", {})
  .n("AppConfigClient", "ListDeploymentsCommand")
  .sc(ListDeployments)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDeploymentsRequest;
      output: Deployments;
    };
    sdk: {
      input: ListDeploymentsCommandInput;
      output: ListDeploymentsCommandOutput;
    };
  };
}
