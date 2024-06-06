// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DeleteEnvironmentBlueprintConfigurationInput,
  DeleteEnvironmentBlueprintConfigurationOutput,
} from "../models/models_0";
import {
  de_DeleteEnvironmentBlueprintConfigurationCommand,
  se_DeleteEnvironmentBlueprintConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteEnvironmentBlueprintConfigurationCommand}.
 */
export interface DeleteEnvironmentBlueprintConfigurationCommandInput
  extends DeleteEnvironmentBlueprintConfigurationInput {}
/**
 * @public
 *
 * The output of {@link DeleteEnvironmentBlueprintConfigurationCommand}.
 */
export interface DeleteEnvironmentBlueprintConfigurationCommandOutput
  extends DeleteEnvironmentBlueprintConfigurationOutput,
    __MetadataBearer {}

/**
 * <p>Deletes the blueprint configuration in Amazon DataZone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, DeleteEnvironmentBlueprintConfigurationCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, DeleteEnvironmentBlueprintConfigurationCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // DeleteEnvironmentBlueprintConfigurationInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   environmentBlueprintIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteEnvironmentBlueprintConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteEnvironmentBlueprintConfigurationCommandInput - {@link DeleteEnvironmentBlueprintConfigurationCommandInput}
 * @returns {@link DeleteEnvironmentBlueprintConfigurationCommandOutput}
 * @see {@link DeleteEnvironmentBlueprintConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteEnvironmentBlueprintConfigurationCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
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
export class DeleteEnvironmentBlueprintConfigurationCommand extends $Command
  .classBuilder<
    DeleteEnvironmentBlueprintConfigurationCommandInput,
    DeleteEnvironmentBlueprintConfigurationCommandOutput,
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
  .s("DataZone", "DeleteEnvironmentBlueprintConfiguration", {})
  .n("DataZoneClient", "DeleteEnvironmentBlueprintConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteEnvironmentBlueprintConfigurationCommand)
  .de(de_DeleteEnvironmentBlueprintConfigurationCommand)
  .build() {}
