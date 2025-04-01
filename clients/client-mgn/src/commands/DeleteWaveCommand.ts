// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import { DeleteWaveRequest, DeleteWaveResponse } from "../models/models_0";
import { de_DeleteWaveCommand, se_DeleteWaveCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteWaveCommand}.
 */
export interface DeleteWaveCommandInput extends DeleteWaveRequest {}
/**
 * @public
 *
 * The output of {@link DeleteWaveCommand}.
 */
export interface DeleteWaveCommandOutput extends DeleteWaveResponse, __MetadataBearer {}

/**
 * <p>Delete wave.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, DeleteWaveCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, DeleteWaveCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const input = { // DeleteWaveRequest
 *   waveID: "STRING_VALUE", // required
 *   accountID: "STRING_VALUE",
 * };
 * const command = new DeleteWaveCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteWaveCommandInput - {@link DeleteWaveCommandInput}
 * @returns {@link DeleteWaveCommandOutput}
 * @see {@link DeleteWaveCommandInput} for command's `input` shape.
 * @see {@link DeleteWaveCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the target resource.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found exception.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>Uninitialized account exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 *
 * @public
 */
export class DeleteWaveCommand extends $Command
  .classBuilder<
    DeleteWaveCommandInput,
    DeleteWaveCommandOutput,
    MgnClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MgnClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ApplicationMigrationService", "DeleteWave", {})
  .n("MgnClient", "DeleteWaveCommand")
  .f(void 0, void 0)
  .ser(se_DeleteWaveCommand)
  .de(de_DeleteWaveCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteWaveRequest;
      output: {};
    };
    sdk: {
      input: DeleteWaveCommandInput;
      output: DeleteWaveCommandOutput;
    };
  };
}
