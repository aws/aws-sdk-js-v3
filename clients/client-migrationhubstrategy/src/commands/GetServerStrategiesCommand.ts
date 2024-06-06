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
import { GetServerStrategiesRequest, GetServerStrategiesResponse } from "../models/models_0";
import { de_GetServerStrategiesCommand, se_GetServerStrategiesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetServerStrategiesCommand}.
 */
export interface GetServerStrategiesCommandInput extends GetServerStrategiesRequest {}
/**
 * @public
 *
 * The output of {@link GetServerStrategiesCommand}.
 */
export interface GetServerStrategiesCommandOutput extends GetServerStrategiesResponse, __MetadataBearer {}

/**
 * <p> Retrieves recommended strategies and tools for the specified server. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubStrategyClient, GetServerStrategiesCommand } from "@aws-sdk/client-migrationhubstrategy"; // ES Modules import
 * // const { MigrationHubStrategyClient, GetServerStrategiesCommand } = require("@aws-sdk/client-migrationhubstrategy"); // CommonJS import
 * const client = new MigrationHubStrategyClient(config);
 * const input = { // GetServerStrategiesRequest
 *   serverId: "STRING_VALUE", // required
 * };
 * const command = new GetServerStrategiesCommand(input);
 * const response = await client.send(command);
 * // { // GetServerStrategiesResponse
 * //   serverStrategies: [ // ServerStrategies
 * //     { // ServerStrategy
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
 * //       numberOfApplicationComponents: Number("int"),
 * //       isPreferred: true || false,
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetServerStrategiesCommandInput - {@link GetServerStrategiesCommandInput}
 * @returns {@link GetServerStrategiesCommandOutput}
 * @see {@link GetServerStrategiesCommandInput} for command's `input` shape.
 * @see {@link GetServerStrategiesCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubStrategyClientResolvedConfig | config} for MigrationHubStrategyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> The user does not have permission to perform the action. Check the
 *       AWS Identity and Access Management (IAM) policy associated with this user.</p>
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
export class GetServerStrategiesCommand extends $Command
  .classBuilder<
    GetServerStrategiesCommandInput,
    GetServerStrategiesCommandOutput,
    MigrationHubStrategyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MigrationHubStrategyClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSMigrationHubStrategyRecommendation", "GetServerStrategies", {})
  .n("MigrationHubStrategyClient", "GetServerStrategiesCommand")
  .f(void 0, void 0)
  .ser(se_GetServerStrategiesCommand)
  .de(de_GetServerStrategiesCommand)
  .build() {}
