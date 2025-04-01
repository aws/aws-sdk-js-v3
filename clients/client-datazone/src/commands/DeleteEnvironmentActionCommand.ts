// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteEnvironmentActionInput } from "../models/models_1";
import { de_DeleteEnvironmentActionCommand, se_DeleteEnvironmentActionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteEnvironmentActionCommand}.
 */
export interface DeleteEnvironmentActionCommandInput extends DeleteEnvironmentActionInput {}
/**
 * @public
 *
 * The output of {@link DeleteEnvironmentActionCommand}.
 */
export interface DeleteEnvironmentActionCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes an action for the environment, for example, deletes a console link for an
 *          analytics tool that is available in this environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, DeleteEnvironmentActionCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, DeleteEnvironmentActionCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // DeleteEnvironmentActionInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   environmentIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteEnvironmentActionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteEnvironmentActionCommandInput - {@link DeleteEnvironmentActionCommandInput}
 * @returns {@link DeleteEnvironmentActionCommandOutput}
 * @see {@link DeleteEnvironmentActionCommandInput} for command's `input` shape.
 * @see {@link DeleteEnvironmentActionCommandOutput} for command's `response` shape.
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
export class DeleteEnvironmentActionCommand extends $Command
  .classBuilder<
    DeleteEnvironmentActionCommandInput,
    DeleteEnvironmentActionCommandOutput,
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
  .s("DataZone", "DeleteEnvironmentAction", {})
  .n("DataZoneClient", "DeleteEnvironmentActionCommand")
  .f(void 0, void 0)
  .ser(se_DeleteEnvironmentActionCommand)
  .de(de_DeleteEnvironmentActionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEnvironmentActionInput;
      output: {};
    };
    sdk: {
      input: DeleteEnvironmentActionCommandInput;
      output: DeleteEnvironmentActionCommandOutput;
    };
  };
}
