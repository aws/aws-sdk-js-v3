// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  MigrationHubStrategyClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MigrationHubStrategyClient";
import {
  UpdateApplicationComponentConfigRequest,
  UpdateApplicationComponentConfigRequestFilterSensitiveLog,
  UpdateApplicationComponentConfigResponse,
} from "../models/models_0";
import {
  de_UpdateApplicationComponentConfigCommand,
  se_UpdateApplicationComponentConfigCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateApplicationComponentConfigCommand}.
 */
export interface UpdateApplicationComponentConfigCommandInput extends UpdateApplicationComponentConfigRequest {}
/**
 * @public
 *
 * The output of {@link UpdateApplicationComponentConfigCommand}.
 */
export interface UpdateApplicationComponentConfigCommandOutput
  extends UpdateApplicationComponentConfigResponse,
    __MetadataBearer {}

/**
 * <p> Updates the configuration of an application component. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubStrategyClient, UpdateApplicationComponentConfigCommand } from "@aws-sdk/client-migrationhubstrategy"; // ES Modules import
 * // const { MigrationHubStrategyClient, UpdateApplicationComponentConfigCommand } = require("@aws-sdk/client-migrationhubstrategy"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new MigrationHubStrategyClient(config);
 * const input = { // UpdateApplicationComponentConfigRequest
 *   applicationComponentId: "STRING_VALUE", // required
 *   inclusionStatus: "STRING_VALUE",
 *   strategyOption: { // StrategyOption
 *     strategy: "STRING_VALUE",
 *     toolName: "STRING_VALUE",
 *     targetDestination: "STRING_VALUE",
 *     isPreferred: true || false,
 *   },
 *   sourceCodeList: [ // SourceCodeList
 *     { // SourceCode
 *       versionControl: "STRING_VALUE",
 *       sourceVersion: "STRING_VALUE",
 *       location: "STRING_VALUE",
 *       projectName: "STRING_VALUE",
 *     },
 *   ],
 *   secretsManagerKey: "STRING_VALUE",
 *   configureOnly: true || false,
 *   appType: "STRING_VALUE",
 * };
 * const command = new UpdateApplicationComponentConfigCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateApplicationComponentConfigCommandInput - {@link UpdateApplicationComponentConfigCommandInput}
 * @returns {@link UpdateApplicationComponentConfigCommandOutput}
 * @see {@link UpdateApplicationComponentConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateApplicationComponentConfigCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubStrategyClientResolvedConfig | config} for MigrationHubStrategyClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> The server experienced an internal error. Try again. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The specified ID in the request is not found. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p> The request was denied due to request throttling. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The request body isn't valid. </p>
 *
 * @throws {@link MigrationHubStrategyServiceException}
 * <p>Base exception class for all service exceptions from MigrationHubStrategy service.</p>
 *
 * @public
 */
export class UpdateApplicationComponentConfigCommand extends $Command
  .classBuilder<
    UpdateApplicationComponentConfigCommandInput,
    UpdateApplicationComponentConfigCommandOutput,
    MigrationHubStrategyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MigrationHubStrategyClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSMigrationHubStrategyRecommendation", "UpdateApplicationComponentConfig", {})
  .n("MigrationHubStrategyClient", "UpdateApplicationComponentConfigCommand")
  .f(UpdateApplicationComponentConfigRequestFilterSensitiveLog, void 0)
  .ser(se_UpdateApplicationComponentConfigCommand)
  .de(de_UpdateApplicationComponentConfigCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateApplicationComponentConfigRequest;
      output: {};
    };
    sdk: {
      input: UpdateApplicationComponentConfigCommandInput;
      output: UpdateApplicationComponentConfigCommandOutput;
    };
  };
}
