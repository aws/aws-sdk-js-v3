// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateDomainUnitInput, CreateDomainUnitOutput } from "../models/models_0";
import { CreateDomainUnit } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDomainUnitCommand}.
 */
export interface CreateDomainUnitCommandInput extends CreateDomainUnitInput {}
/**
 * @public
 *
 * The output of {@link CreateDomainUnitCommand}.
 */
export interface CreateDomainUnitCommandOutput extends CreateDomainUnitOutput, __MetadataBearer {}

/**
 * <p>Creates a domain unit in Amazon DataZone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, CreateDomainUnitCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, CreateDomainUnitCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // CreateDomainUnitInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   parentDomainUnitIdentifier: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateDomainUnitCommand(input);
 * const response = await client.send(command);
 * // { // CreateDomainUnitOutput
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
 * //   ancestorDomainUnitIds: [ // DomainUnitIds // required
 * //     "STRING_VALUE",
 * //   ],
 * //   createdAt: new Date("TIMESTAMP"),
 * //   createdBy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateDomainUnitCommandInput - {@link CreateDomainUnitCommandInput}
 * @returns {@link CreateDomainUnitCommandOutput}
 * @see {@link CreateDomainUnitCommandInput} for command's `input` shape.
 * @see {@link CreateDomainUnitCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There is a conflict while performing this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request has exceeded the specified service quota.</p>
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
export class CreateDomainUnitCommand extends $Command
  .classBuilder<
    CreateDomainUnitCommandInput,
    CreateDomainUnitCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataZone", "CreateDomainUnit", {})
  .n("DataZoneClient", "CreateDomainUnitCommand")
  .sc(CreateDomainUnit)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDomainUnitInput;
      output: CreateDomainUnitOutput;
    };
    sdk: {
      input: CreateDomainUnitCommandInput;
      output: CreateDomainUnitCommandOutput;
    };
  };
}
