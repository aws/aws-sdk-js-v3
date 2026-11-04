// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateDeploymentStrategyRequest, DeploymentStrategy } from "../models/models_0";
import { CreateDeploymentStrategy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateDeploymentStrategyCommand}.
 */
export interface CreateDeploymentStrategyCommandInput extends CreateDeploymentStrategyRequest {}
/**
 * @public
 *
 * The output of {@link CreateDeploymentStrategyCommand}.
 */
export interface CreateDeploymentStrategyCommandOutput extends DeploymentStrategy, __MetadataBearer {}

/**
 * Creates a deployment strategy that defines important criteria for rolling out your configuration to the designated targets. A deployment strategy includes the overall duration required, a percentage of targets to receive the deployment during each interval, an algorithm that defines how percentage grows, and bake time.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, CreateDeploymentStrategyCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, CreateDeploymentStrategyCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * // import type { AppConfigClientConfig } from "@aws-sdk/client-appconfig";
 * const config = {}; // type is AppConfigClientConfig
 * const client = new AppConfigClient(config);
 * const input = { // CreateDeploymentStrategyRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   DeploymentDurationInMinutes: Number("int"), // required
 *   FinalBakeTimeInMinutes: Number("int"),
 *   GrowthFactor: Number("float"), // required
 *   GrowthType: "LINEAR" || "EXPONENTIAL",
 *   ReplicateTo: "NONE" || "SSM_DOCUMENT",
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateDeploymentStrategyCommand(input);
 * const response = await client.send(command);
 * // { // DeploymentStrategy
 * //   Id: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   DeploymentDurationInMinutes: Number("int"),
 * //   GrowthType: "LINEAR" || "EXPONENTIAL",
 * //   GrowthFactor: Number("float"),
 * //   FinalBakeTimeInMinutes: Number("int"),
 * //   ReplicateTo: "NONE" || "SSM_DOCUMENT",
 * // };
 *
 * ```
 *
 * @param CreateDeploymentStrategyCommandInput - {@link CreateDeploymentStrategyCommandInput}
 * @returns {@link CreateDeploymentStrategyCommandOutput}
 * @see {@link CreateDeploymentStrategyCommandInput} for command's `input` shape.
 * @see {@link CreateDeploymentStrategyCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for AppConfigClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * There was an internal failure in the AppConfig service.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The number of one more AppConfig resources exceeds the maximum allowed. Verify that your environment doesn't exceed the following service quotas:
 *
 * Applications: 100 max
 *
 * To resolve this issue, you can delete one or more resources and try again. Or, you can request a quota increase. For more information about quotas and to request an increase, see [Service quotas for AppConfig](https://docs.aws.amazon.com/general/latest/gr/appconfig.html#limits_appconfig) in the Amazon Web Services General Reference.
 *
 * @throws {@link AppConfigServiceException}
 *
 * Base exception class for all service exceptions from AppConfig service.
 *
 * @example To create a deployment strategy
 * ```javascript
 * // The following create-deployment-strategy example creates a deployment strategy called Example-Deployment that takes 15 minutes and deploys the configuration to 25% of the application at a time. The strategy is also copied to an SSM Document.
 * const input = {
 *   DeploymentDurationInMinutes: 15,
 *   GrowthFactor: 25,
 *   Name: "Example-Deployment",
 *   ReplicateTo: "SSM_DOCUMENT"
 * };
 * const command = new CreateDeploymentStrategyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DeploymentDurationInMinutes: 15,
 *   FinalBakeTimeInMinutes: 0,
 *   GrowthFactor: 25,
 *   GrowthType: "LINEAR",
 *   Id: "1225qzk",
 *   Name: "Example-Deployment",
 *   ReplicateTo: "SSM_DOCUMENT"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateDeploymentStrategyCommand extends command<CreateDeploymentStrategyCommandInput, CreateDeploymentStrategyCommandOutput>(
  _ep0,
  _mw0,
  "CreateDeploymentStrategy",
  CreateDeploymentStrategy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDeploymentStrategyRequest;
      output: DeploymentStrategy;
    };
    sdk: {
      input: CreateDeploymentStrategyCommandInput;
      output: CreateDeploymentStrategyCommandOutput;
    };
  };
}
