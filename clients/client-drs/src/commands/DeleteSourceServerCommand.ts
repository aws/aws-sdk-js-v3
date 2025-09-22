// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DrsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DrsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteSourceServerRequest, DeleteSourceServerResponse } from "../models/models_0";
import { DeleteSourceServer } from "../schemas/schemas_23_DeleteSourceServer";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSourceServerCommand}.
 */
export interface DeleteSourceServerCommandInput extends DeleteSourceServerRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSourceServerCommand}.
 */
export interface DeleteSourceServerCommandOutput extends DeleteSourceServerResponse, __MetadataBearer {}

/**
 * <p>Deletes a single Source Server by ID. The Source Server must be disconnected first.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, DeleteSourceServerCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, DeleteSourceServerCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * // import type { DrsClientConfig } from "@aws-sdk/client-drs";
 * const config = {}; // type is DrsClientConfig
 * const client = new DrsClient(config);
 * const input = { // DeleteSourceServerRequest
 *   sourceServerID: "STRING_VALUE", // required
 * };
 * const command = new DeleteSourceServerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSourceServerCommandInput - {@link DeleteSourceServerCommandInput}
 * @returns {@link DeleteSourceServerCommandOutput}
 * @see {@link DeleteSourceServerCommandInput} for command's `input` shape.
 * @see {@link DeleteSourceServerCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the target resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource for this operation was not found.</p>
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
export class DeleteSourceServerCommand extends $Command
  .classBuilder<
    DeleteSourceServerCommandInput,
    DeleteSourceServerCommandOutput,
    DrsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DrsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticDisasterRecoveryService", "DeleteSourceServer", {})
  .n("DrsClient", "DeleteSourceServerCommand")
  .sc(DeleteSourceServer)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSourceServerRequest;
      output: {};
    };
    sdk: {
      input: DeleteSourceServerCommandInput;
      output: DeleteSourceServerCommandOutput;
    };
  };
}
