// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateGroupProfileInput, UpdateGroupProfileOutput } from "../models/models_1";
import { UpdateGroupProfile } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateGroupProfileCommand}.
 */
export interface UpdateGroupProfileCommandInput extends UpdateGroupProfileInput {}
/**
 * @public
 *
 * The output of {@link UpdateGroupProfileCommand}.
 */
export interface UpdateGroupProfileCommandOutput extends UpdateGroupProfileOutput, __MetadataBearer {}

/**
 * <p>Updates the specified group profile in Amazon DataZone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, UpdateGroupProfileCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, UpdateGroupProfileCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // UpdateGroupProfileInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   groupIdentifier: "STRING_VALUE", // required
 *   status: "ASSIGNED" || "NOT_ASSIGNED", // required
 * };
 * const command = new UpdateGroupProfileCommand(input);
 * const response = await client.send(command);
 * // { // UpdateGroupProfileOutput
 * //   domainId: "STRING_VALUE",
 * //   id: "STRING_VALUE",
 * //   status: "ASSIGNED" || "NOT_ASSIGNED",
 * //   groupName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateGroupProfileCommandInput - {@link UpdateGroupProfileCommandInput}
 * @returns {@link UpdateGroupProfileCommandOutput}
 * @see {@link UpdateGroupProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateGroupProfileCommandOutput} for command's `response` shape.
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
export class UpdateGroupProfileCommand extends $Command
  .classBuilder<
    UpdateGroupProfileCommandInput,
    UpdateGroupProfileCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataZone", "UpdateGroupProfile", {})
  .n("DataZoneClient", "UpdateGroupProfileCommand")
  .sc(UpdateGroupProfile)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateGroupProfileInput;
      output: UpdateGroupProfileOutput;
    };
    sdk: {
      input: UpdateGroupProfileCommandInput;
      output: UpdateGroupProfileCommandOutput;
    };
  };
}
