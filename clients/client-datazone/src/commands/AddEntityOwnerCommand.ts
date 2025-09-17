// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AddEntityOwnerInput, AddEntityOwnerOutput } from "../models/models_0";
import { de_AddEntityOwnerCommand, se_AddEntityOwnerCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AddEntityOwnerCommand}.
 */
export interface AddEntityOwnerCommandInput extends AddEntityOwnerInput {}
/**
 * @public
 *
 * The output of {@link AddEntityOwnerCommand}.
 */
export interface AddEntityOwnerCommandOutput extends AddEntityOwnerOutput, __MetadataBearer {}

/**
 * <p>Adds the owner of an entity (a domain unit).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, AddEntityOwnerCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, AddEntityOwnerCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // AddEntityOwnerInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   entityType: "DOMAIN_UNIT", // required
 *   entityIdentifier: "STRING_VALUE", // required
 *   owner: { // OwnerProperties Union: only one key present
 *     user: { // OwnerUserProperties
 *       userIdentifier: "STRING_VALUE", // required
 *     },
 *     group: { // OwnerGroupProperties
 *       groupIdentifier: "STRING_VALUE", // required
 *     },
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new AddEntityOwnerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AddEntityOwnerCommandInput - {@link AddEntityOwnerCommandInput}
 * @returns {@link AddEntityOwnerCommandOutput}
 * @see {@link AddEntityOwnerCommandInput} for command's `input` shape.
 * @see {@link AddEntityOwnerCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
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
export class AddEntityOwnerCommand extends $Command
  .classBuilder<
    AddEntityOwnerCommandInput,
    AddEntityOwnerCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DataZone", "AddEntityOwner", {})
  .n("DataZoneClient", "AddEntityOwnerCommand")
  .f(void 0, void 0)
  .ser(se_AddEntityOwnerCommand)
  .de(de_AddEntityOwnerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddEntityOwnerInput;
      output: {};
    };
    sdk: {
      input: AddEntityOwnerCommandInput;
      output: AddEntityOwnerCommandOutput;
    };
  };
}
