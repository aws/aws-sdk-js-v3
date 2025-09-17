// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteEnvironmentBlueprintInput } from "../models/models_1";
import { de_DeleteEnvironmentBlueprintCommand, se_DeleteEnvironmentBlueprintCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteEnvironmentBlueprintCommand}.
 */
export interface DeleteEnvironmentBlueprintCommandInput extends DeleteEnvironmentBlueprintInput {}
/**
 * @public
 *
 * The output of {@link DeleteEnvironmentBlueprintCommand}.
 */
export interface DeleteEnvironmentBlueprintCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a blueprint in Amazon DataZone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, DeleteEnvironmentBlueprintCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, DeleteEnvironmentBlueprintCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // DeleteEnvironmentBlueprintInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteEnvironmentBlueprintCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteEnvironmentBlueprintCommandInput - {@link DeleteEnvironmentBlueprintCommandInput}
 * @returns {@link DeleteEnvironmentBlueprintCommandOutput}
 * @see {@link DeleteEnvironmentBlueprintCommandInput} for command's `input` shape.
 * @see {@link DeleteEnvironmentBlueprintCommandOutput} for command's `response` shape.
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
export class DeleteEnvironmentBlueprintCommand extends $Command
  .classBuilder<
    DeleteEnvironmentBlueprintCommandInput,
    DeleteEnvironmentBlueprintCommandOutput,
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
  .s("DataZone", "DeleteEnvironmentBlueprint", {})
  .n("DataZoneClient", "DeleteEnvironmentBlueprintCommand")
  .f(void 0, void 0)
  .ser(se_DeleteEnvironmentBlueprintCommand)
  .de(de_DeleteEnvironmentBlueprintCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEnvironmentBlueprintInput;
      output: {};
    };
    sdk: {
      input: DeleteEnvironmentBlueprintCommandInput;
      output: DeleteEnvironmentBlueprintCommandOutput;
    };
  };
}
