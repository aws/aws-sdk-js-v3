// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListEnvironmentBlueprintConfigurationsInput,
  ListEnvironmentBlueprintConfigurationsOutput,
} from "../models/models_0";
import {
  de_ListEnvironmentBlueprintConfigurationsCommand,
  se_ListEnvironmentBlueprintConfigurationsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEnvironmentBlueprintConfigurationsCommand}.
 */
export interface ListEnvironmentBlueprintConfigurationsCommandInput
  extends ListEnvironmentBlueprintConfigurationsInput {}
/**
 * @public
 *
 * The output of {@link ListEnvironmentBlueprintConfigurationsCommand}.
 */
export interface ListEnvironmentBlueprintConfigurationsCommandOutput
  extends ListEnvironmentBlueprintConfigurationsOutput,
    __MetadataBearer {}

/**
 * <p>Lists blueprint configurations for a Amazon DataZone environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, ListEnvironmentBlueprintConfigurationsCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, ListEnvironmentBlueprintConfigurationsCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // ListEnvironmentBlueprintConfigurationsInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListEnvironmentBlueprintConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListEnvironmentBlueprintConfigurationsOutput
 * //   items: [ // EnvironmentBlueprintConfigurations
 * //     { // EnvironmentBlueprintConfigurationItem
 * //       domainId: "STRING_VALUE", // required
 * //       environmentBlueprintId: "STRING_VALUE", // required
 * //       provisioningRoleArn: "STRING_VALUE",
 * //       manageAccessRoleArn: "STRING_VALUE",
 * //       enabledRegions: [ // EnabledRegionList
 * //         "STRING_VALUE",
 * //       ],
 * //       regionalParameters: { // RegionalParameterMap
 * //         "<keys>": { // RegionalParameter
 * //           "<keys>": "STRING_VALUE",
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
 * @param ListEnvironmentBlueprintConfigurationsCommandInput - {@link ListEnvironmentBlueprintConfigurationsCommandInput}
 * @returns {@link ListEnvironmentBlueprintConfigurationsCommandOutput}
 * @see {@link ListEnvironmentBlueprintConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListEnvironmentBlueprintConfigurationsCommandOutput} for command's `response` shape.
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
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link DataZoneServiceException}
 * <p>Base exception class for all service exceptions from DataZone service.</p>
 *
 * @public
 */
export class ListEnvironmentBlueprintConfigurationsCommand extends $Command
  .classBuilder<
    ListEnvironmentBlueprintConfigurationsCommandInput,
    ListEnvironmentBlueprintConfigurationsCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DataZone", "ListEnvironmentBlueprintConfigurations", {})
  .n("DataZoneClient", "ListEnvironmentBlueprintConfigurationsCommand")
  .f(void 0, void 0)
  .ser(se_ListEnvironmentBlueprintConfigurationsCommand)
  .de(de_ListEnvironmentBlueprintConfigurationsCommand)
  .build() {}
