// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteEnvironmentProfileInput } from "../models/models_1";
import { DeleteEnvironmentProfile } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteEnvironmentProfileCommand}.
 */
export interface DeleteEnvironmentProfileCommandInput extends DeleteEnvironmentProfileInput {}
/**
 * @public
 *
 * The output of {@link DeleteEnvironmentProfileCommand}.
 */
export interface DeleteEnvironmentProfileCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes an environment profile in Amazon DataZone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, DeleteEnvironmentProfileCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, DeleteEnvironmentProfileCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // DeleteEnvironmentProfileInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteEnvironmentProfileCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteEnvironmentProfileCommandInput - {@link DeleteEnvironmentProfileCommandInput}
 * @returns {@link DeleteEnvironmentProfileCommandOutput}
 * @see {@link DeleteEnvironmentProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteEnvironmentProfileCommandOutput} for command's `response` shape.
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
export class DeleteEnvironmentProfileCommand extends $Command
  .classBuilder<
    DeleteEnvironmentProfileCommandInput,
    DeleteEnvironmentProfileCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataZone", "DeleteEnvironmentProfile", {})
  .n("DataZoneClient", "DeleteEnvironmentProfileCommand")
  .sc(DeleteEnvironmentProfile)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEnvironmentProfileInput;
      output: {};
    };
    sdk: {
      input: DeleteEnvironmentProfileCommandInput;
      output: DeleteEnvironmentProfileCommandOutput;
    };
  };
}
