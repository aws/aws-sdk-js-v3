// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetDomainUnitInput, GetDomainUnitOutput } from "../models/models_1";
import { GetDomainUnit } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDomainUnitCommand}.
 */
export interface GetDomainUnitCommandInput extends GetDomainUnitInput {}
/**
 * @public
 *
 * The output of {@link GetDomainUnitCommand}.
 */
export interface GetDomainUnitCommandOutput extends GetDomainUnitOutput, __MetadataBearer {}

/**
 * <p>Gets the details of the specified domain unit.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, GetDomainUnitCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, GetDomainUnitCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // GetDomainUnitInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new GetDomainUnitCommand(input);
 * const response = await client.send(command);
 * // { // GetDomainUnitOutput
 * //   id: "STRING_VALUE", // required
 * //   domainId: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   parentDomainUnitId: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   owners: [ // DomainUnitOwners // required
 * //     { // DomainUnitOwnerProperties Union: only one key present
 * //       user: { // DomainUnitUserProperties
 * //         userId: "STRING_VALUE",
 * //       },
 * //       group: { // DomainUnitGroupProperties
 * //         groupId: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   createdAt: new Date("TIMESTAMP"),
 * //   lastUpdatedAt: new Date("TIMESTAMP"),
 * //   createdBy: "STRING_VALUE",
 * //   lastUpdatedBy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDomainUnitCommandInput - {@link GetDomainUnitCommandInput}
 * @returns {@link GetDomainUnitCommandOutput}
 * @see {@link GetDomainUnitCommandInput} for command's `input` shape.
 * @see {@link GetDomainUnitCommandOutput} for command's `response` shape.
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
export class GetDomainUnitCommand extends $Command
  .classBuilder<
    GetDomainUnitCommandInput,
    GetDomainUnitCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataZone", "GetDomainUnit", {})
  .n("DataZoneClient", "GetDomainUnitCommand")
  .sc(GetDomainUnit)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDomainUnitInput;
      output: GetDomainUnitOutput;
    };
    sdk: {
      input: GetDomainUnitCommandInput;
      output: GetDomainUnitCommandOutput;
    };
  };
}
