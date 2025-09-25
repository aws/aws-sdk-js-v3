// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DrsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DrsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteSourceNetworkRequest, DeleteSourceNetworkResponse } from "../models/models_0";
import { DeleteSourceNetwork } from "../schemas/schemas_12_DeleteSourceNetwork";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSourceNetworkCommand}.
 */
export interface DeleteSourceNetworkCommandInput extends DeleteSourceNetworkRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSourceNetworkCommand}.
 */
export interface DeleteSourceNetworkCommandOutput extends DeleteSourceNetworkResponse, __MetadataBearer {}

/**
 * <p>Delete Source Network resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, DeleteSourceNetworkCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, DeleteSourceNetworkCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * // import type { DrsClientConfig } from "@aws-sdk/client-drs";
 * const config = {}; // type is DrsClientConfig
 * const client = new DrsClient(config);
 * const input = { // DeleteSourceNetworkRequest
 *   sourceNetworkID: "STRING_VALUE", // required
 * };
 * const command = new DeleteSourceNetworkCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSourceNetworkCommandInput - {@link DeleteSourceNetworkCommandInput}
 * @returns {@link DeleteSourceNetworkCommandOutput}
 * @see {@link DeleteSourceNetworkCommandInput} for command's `input` shape.
 * @see {@link DeleteSourceNetworkCommandOutput} for command's `response` shape.
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
export class DeleteSourceNetworkCommand extends $Command
  .classBuilder<
    DeleteSourceNetworkCommandInput,
    DeleteSourceNetworkCommandOutput,
    DrsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DrsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticDisasterRecoveryService", "DeleteSourceNetwork", {})
  .n("DrsClient", "DeleteSourceNetworkCommand")
  .sc(DeleteSourceNetwork)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSourceNetworkRequest;
      output: {};
    };
    sdk: {
      input: DeleteSourceNetworkCommandInput;
      output: DeleteSourceNetworkCommandOutput;
    };
  };
}
