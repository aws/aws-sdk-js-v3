// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DrsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DrsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteRecoveryInstanceRequest } from "../models/models_0";
import { de_DeleteRecoveryInstanceCommand, se_DeleteRecoveryInstanceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteRecoveryInstanceCommand}.
 */
export interface DeleteRecoveryInstanceCommandInput extends DeleteRecoveryInstanceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRecoveryInstanceCommand}.
 */
export interface DeleteRecoveryInstanceCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a single Recovery Instance by ID. This deletes the Recovery Instance resource from Elastic Disaster Recovery. The Recovery Instance must be disconnected first in order to delete it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, DeleteRecoveryInstanceCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, DeleteRecoveryInstanceCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * // import type { DrsClientConfig } from "@aws-sdk/client-drs";
 * const config = {}; // type is DrsClientConfig
 * const client = new DrsClient(config);
 * const input = { // DeleteRecoveryInstanceRequest
 *   recoveryInstanceID: "STRING_VALUE", // required
 * };
 * const command = new DeleteRecoveryInstanceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRecoveryInstanceCommandInput - {@link DeleteRecoveryInstanceCommandInput}
 * @returns {@link DeleteRecoveryInstanceCommandOutput}
 * @see {@link DeleteRecoveryInstanceCommandInput} for command's `input` shape.
 * @see {@link DeleteRecoveryInstanceCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the target resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>The account performing the request has not been initialized.</p>
 *
 * @throws {@link DrsServiceException}
 * <p>Base exception class for all service exceptions from Drs service.</p>
 *
 *
 * @public
 */
export class DeleteRecoveryInstanceCommand extends $Command
  .classBuilder<
    DeleteRecoveryInstanceCommandInput,
    DeleteRecoveryInstanceCommandOutput,
    DrsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DrsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ElasticDisasterRecoveryService", "DeleteRecoveryInstance", {})
  .n("DrsClient", "DeleteRecoveryInstanceCommand")
  .f(void 0, void 0)
  .ser(se_DeleteRecoveryInstanceCommand)
  .de(de_DeleteRecoveryInstanceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRecoveryInstanceRequest;
      output: {};
    };
    sdk: {
      input: DeleteRecoveryInstanceCommandInput;
      output: DeleteRecoveryInstanceCommandOutput;
    };
  };
}
