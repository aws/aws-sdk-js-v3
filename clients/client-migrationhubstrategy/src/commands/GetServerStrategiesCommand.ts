// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetServerStrategiesRequest, GetServerStrategiesResponse } from "../models/models_0";
import { GetServerStrategies$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Retrieves recommended strategies and tools for the specified server.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubStrategyClient, GetServerStrategiesCommand } from "@aws-sdk/client-migrationhubstrategy"; // ES Modules import
 * // const { MigrationHubStrategyClient, GetServerStrategiesCommand } = require("@aws-sdk/client-migrationhubstrategy"); // CommonJS import
 * // import type { MigrationHubStrategyClientConfig } from "@aws-sdk/client-migrationhubstrategy";
 * const config = {}; // type is MigrationHubStrategyClientConfig
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
 *
 * The user does not have permission to perform the action. Check the AWS Identity and Access Management (IAM) policy associated with this user.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The server experienced an internal error. Try again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified ID in the request is not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request body isn't valid.
 *
 * @throws {@link MigrationHubStrategyServiceException}
 *
 * Base exception class for all service exceptions from MigrationHubStrategy service.
 *
 * @public
 */
export class GetServerStrategiesCommand extends command<GetServerStrategiesCommandInput, GetServerStrategiesCommandOutput>(
  _ep0,
  _mw0,
  "GetServerStrategies",
  GetServerStrategies$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetServerStrategiesRequest;
      output: GetServerStrategiesResponse;
    };
    sdk: {
      input: GetServerStrategiesCommandInput;
      output: GetServerStrategiesCommandOutput;
    };
  };
}
