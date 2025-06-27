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
  GetApplicationComponentStrategiesRequest,
  GetApplicationComponentStrategiesResponse,
} from "../models/models_0";
import {
  de_GetApplicationComponentStrategiesCommand,
  se_GetApplicationComponentStrategiesCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetApplicationComponentStrategiesCommand}.
 */
export interface GetApplicationComponentStrategiesCommandInput extends GetApplicationComponentStrategiesRequest {}
/**
 * @public
 *
 * The output of {@link GetApplicationComponentStrategiesCommand}.
 */
export interface GetApplicationComponentStrategiesCommandOutput
  extends GetApplicationComponentStrategiesResponse,
    __MetadataBearer {}

/**
 * <p> Retrieves a list of all the recommended strategies and tools for an application component
 *       running on a server. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubStrategyClient, GetApplicationComponentStrategiesCommand } from "@aws-sdk/client-migrationhubstrategy"; // ES Modules import
 * // const { MigrationHubStrategyClient, GetApplicationComponentStrategiesCommand } = require("@aws-sdk/client-migrationhubstrategy"); // CommonJS import
 * const client = new MigrationHubStrategyClient(config);
 * const input = { // GetApplicationComponentStrategiesRequest
 *   applicationComponentId: "STRING_VALUE", // required
 * };
 * const command = new GetApplicationComponentStrategiesCommand(input);
 * const response = await client.send(command);
 * // { // GetApplicationComponentStrategiesResponse
 * //   applicationComponentStrategies: [ // ApplicationComponentStrategies
 * //     { // ApplicationComponentStrategy
 * //       recommendation: { // RecommendationSet
 * //         transformationTool: { // TransformationTool
 * //           name: "STRING_VALUE",
 * //           description: "STRING_VALUE",
 * //           tranformationToolInstallationLink: "STRING_VALUE",
 * //         },
 * //         targetDestination: "STRING_VALUE",
 * //         strategy: "STRING_VALUE",
 * //       },
 * //       status: "STRING_VALUE",
 * //       isPreferred: true || false,
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetApplicationComponentStrategiesCommandInput - {@link GetApplicationComponentStrategiesCommandInput}
 * @returns {@link GetApplicationComponentStrategiesCommandOutput}
 * @see {@link GetApplicationComponentStrategiesCommandInput} for command's `input` shape.
 * @see {@link GetApplicationComponentStrategiesCommandOutput} for command's `response` shape.
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
 * @throws {@link MigrationHubStrategyServiceException}
 * <p>Base exception class for all service exceptions from MigrationHubStrategy service.</p>
 *
 *
 * @public
 */
export class GetApplicationComponentStrategiesCommand extends $Command
  .classBuilder<
    GetApplicationComponentStrategiesCommandInput,
    GetApplicationComponentStrategiesCommandOutput,
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
  .s("AWSMigrationHubStrategyRecommendation", "GetApplicationComponentStrategies", {})
  .n("MigrationHubStrategyClient", "GetApplicationComponentStrategiesCommand")
  .f(void 0, void 0)
  .ser(se_GetApplicationComponentStrategiesCommand)
  .de(de_GetApplicationComponentStrategiesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetApplicationComponentStrategiesRequest;
      output: GetApplicationComponentStrategiesResponse;
    };
    sdk: {
      input: GetApplicationComponentStrategiesCommandInput;
      output: GetApplicationComponentStrategiesCommandOutput;
    };
  };
}
