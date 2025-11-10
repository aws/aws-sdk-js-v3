// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateGroupProfileInput, CreateGroupProfileOutput } from "../models/models_0";
import { CreateGroupProfile } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateGroupProfileCommand}.
 */
export interface CreateGroupProfileCommandInput extends CreateGroupProfileInput {}
/**
 * @public
 *
 * The output of {@link CreateGroupProfileCommand}.
 */
export interface CreateGroupProfileCommandOutput extends CreateGroupProfileOutput, __MetadataBearer {}

/**
 * <p>Creates a group profile in Amazon DataZone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, CreateGroupProfileCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, CreateGroupProfileCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // CreateGroupProfileInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   groupIdentifier: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateGroupProfileCommand(input);
 * const response = await client.send(command);
 * // { // CreateGroupProfileOutput
 * //   domainId: "STRING_VALUE",
 * //   id: "STRING_VALUE",
 * //   status: "ASSIGNED" || "NOT_ASSIGNED",
 * //   groupName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateGroupProfileCommandInput - {@link CreateGroupProfileCommandInput}
 * @returns {@link CreateGroupProfileCommandOutput}
 * @see {@link CreateGroupProfileCommandInput} for command's `input` shape.
 * @see {@link CreateGroupProfileCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class CreateGroupProfileCommand extends $Command
  .classBuilder<
    CreateGroupProfileCommandInput,
    CreateGroupProfileCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataZone", "CreateGroupProfile", {})
  .n("DataZoneClient", "CreateGroupProfileCommand")
  .sc(CreateGroupProfile)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateGroupProfileInput;
      output: CreateGroupProfileOutput;
    };
    sdk: {
      input: CreateGroupProfileCommandInput;
      output: CreateGroupProfileCommandOutput;
    };
  };
}
