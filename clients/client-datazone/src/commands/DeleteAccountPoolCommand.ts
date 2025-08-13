// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAccountPoolInput, DeleteAccountPoolOutput } from "../models/models_1";
import { de_DeleteAccountPoolCommand, se_DeleteAccountPoolCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAccountPoolCommand}.
 */
export interface DeleteAccountPoolCommandInput extends DeleteAccountPoolInput {}
/**
 * @public
 *
 * The output of {@link DeleteAccountPoolCommand}.
 */
export interface DeleteAccountPoolCommandOutput extends DeleteAccountPoolOutput, __MetadataBearer {}

/**
 * <p>Deletes an account pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, DeleteAccountPoolCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, DeleteAccountPoolCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // DeleteAccountPoolInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteAccountPoolCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAccountPoolCommandInput - {@link DeleteAccountPoolCommandInput}
 * @returns {@link DeleteAccountPoolCommandOutput}
 * @see {@link DeleteAccountPoolCommandInput} for command's `input` shape.
 * @see {@link DeleteAccountPoolCommandOutput} for command's `response` shape.
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
export class DeleteAccountPoolCommand extends $Command
  .classBuilder<
    DeleteAccountPoolCommandInput,
    DeleteAccountPoolCommandOutput,
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
  .s("DataZone", "DeleteAccountPool", {})
  .n("DataZoneClient", "DeleteAccountPoolCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAccountPoolCommand)
  .de(de_DeleteAccountPoolCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAccountPoolInput;
      output: {};
    };
    sdk: {
      input: DeleteAccountPoolCommandInput;
      output: DeleteAccountPoolCommandOutput;
    };
  };
}
