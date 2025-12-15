// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListEnvironmentBlueprintsInput, ListEnvironmentBlueprintsOutput } from "../models/models_1";
import { ListEnvironmentBlueprints$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEnvironmentBlueprintsCommand}.
 */
export interface ListEnvironmentBlueprintsCommandInput extends ListEnvironmentBlueprintsInput {}
/**
 * @public
 *
 * The output of {@link ListEnvironmentBlueprintsCommand}.
 */
export interface ListEnvironmentBlueprintsCommandOutput extends ListEnvironmentBlueprintsOutput, __MetadataBearer {}

/**
 * <p>Lists blueprints in an Amazon DataZone environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, ListEnvironmentBlueprintsCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, ListEnvironmentBlueprintsCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // ListEnvironmentBlueprintsInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   name: "STRING_VALUE",
 *   managed: true || false,
 * };
 * const command = new ListEnvironmentBlueprintsCommand(input);
 * const response = await client.send(command);
 * // { // ListEnvironmentBlueprintsOutput
 * //   items: [ // EnvironmentBlueprintSummaries // required
 * //     { // EnvironmentBlueprintSummary
 * //       id: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       provider: "STRING_VALUE", // required
 * //       provisioningProperties: { // ProvisioningProperties Union: only one key present
 * //         cloudFormation: { // CloudFormationProperties
 * //           templateUrl: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEnvironmentBlueprintsCommandInput - {@link ListEnvironmentBlueprintsCommandInput}
 * @returns {@link ListEnvironmentBlueprintsCommandOutput}
 * @see {@link ListEnvironmentBlueprintsCommandInput} for command's `input` shape.
 * @see {@link ListEnvironmentBlueprintsCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link DataZoneServiceException}
 * <p>Base exception class for all service exceptions from DataZone service.</p>
 *
 *
 * @public
 */
export class ListEnvironmentBlueprintsCommand extends $Command
  .classBuilder<
    ListEnvironmentBlueprintsCommandInput,
    ListEnvironmentBlueprintsCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataZone", "ListEnvironmentBlueprints", {})
  .n("DataZoneClient", "ListEnvironmentBlueprintsCommand")
  .sc(ListEnvironmentBlueprints$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEnvironmentBlueprintsInput;
      output: ListEnvironmentBlueprintsOutput;
    };
    sdk: {
      input: ListEnvironmentBlueprintsCommandInput;
      output: ListEnvironmentBlueprintsCommandOutput;
    };
  };
}
