// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import { DeleteJobRequest, DeleteJobResponse } from "../models/models_0";
import { de_DeleteJobCommand, se_DeleteJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteJobCommand}.
 */
export interface DeleteJobCommandInput extends DeleteJobRequest {}
/**
 * @public
 *
 * The output of {@link DeleteJobCommand}.
 */
export interface DeleteJobCommandOutput extends DeleteJobResponse, __MetadataBearer {}

/**
 * <p>Deletes a single Job by ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, DeleteJobCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, DeleteJobCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const input = { // DeleteJobRequest
 *   jobID: "STRING_VALUE", // required
 *   accountID: "STRING_VALUE",
 * };
 * const command = new DeleteJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteJobCommandInput - {@link DeleteJobCommandInput}
 * @returns {@link DeleteJobCommandOutput}
 * @see {@link DeleteJobCommandInput} for command's `input` shape.
 * @see {@link DeleteJobCommandOutput} for command's `response` shape.
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
export class DeleteJobCommand extends $Command
  .classBuilder<
    DeleteJobCommandInput,
    DeleteJobCommandOutput,
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
  .s("ApplicationMigrationService", "DeleteJob", {})
  .n("MgnClient", "DeleteJobCommand")
  .f(void 0, void 0)
  .ser(se_DeleteJobCommand)
  .de(de_DeleteJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteJobRequest;
      output: {};
    };
    sdk: {
      input: DeleteJobCommandInput;
      output: DeleteJobCommandOutput;
    };
  };
}
