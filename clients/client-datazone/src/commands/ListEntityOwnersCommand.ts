// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListEntityOwnersInput, ListEntityOwnersOutput } from "../models/models_1";
import { ListEntityOwners } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEntityOwnersCommand}.
 */
export interface ListEntityOwnersCommandInput extends ListEntityOwnersInput {}
/**
 * @public
 *
 * The output of {@link ListEntityOwnersCommand}.
 */
export interface ListEntityOwnersCommandOutput extends ListEntityOwnersOutput, __MetadataBearer {}

/**
 * <p>Lists the entity (domain units) owners.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, ListEntityOwnersCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, ListEntityOwnersCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // ListEntityOwnersInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   entityType: "DOMAIN_UNIT", // required
 *   entityIdentifier: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListEntityOwnersCommand(input);
 * const response = await client.send(command);
 * // { // ListEntityOwnersOutput
 * //   owners: [ // EntityOwners // required
 * //     { // OwnerPropertiesOutput Union: only one key present
 * //       user: { // OwnerUserPropertiesOutput
 * //         userId: "STRING_VALUE",
 * //       },
 * //       group: { // OwnerGroupPropertiesOutput
 * //         groupId: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEntityOwnersCommandInput - {@link ListEntityOwnersCommandInput}
 * @returns {@link ListEntityOwnersCommandOutput}
 * @see {@link ListEntityOwnersCommandInput} for command's `input` shape.
 * @see {@link ListEntityOwnersCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
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
export class ListEntityOwnersCommand extends $Command
  .classBuilder<
    ListEntityOwnersCommandInput,
    ListEntityOwnersCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataZone", "ListEntityOwners", {})
  .n("DataZoneClient", "ListEntityOwnersCommand")
  .sc(ListEntityOwners)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEntityOwnersInput;
      output: ListEntityOwnersOutput;
    };
    sdk: {
      input: ListEntityOwnersCommandInput;
      output: ListEntityOwnersCommandOutput;
    };
  };
}
