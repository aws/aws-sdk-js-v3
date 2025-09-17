// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteSolNetworkInstanceInput } from "../models/models_0";
import { de_DeleteSolNetworkInstanceCommand, se_DeleteSolNetworkInstanceCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, TnbClientResolvedConfig } from "../TnbClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSolNetworkInstanceCommand}.
 */
export interface DeleteSolNetworkInstanceCommandInput extends DeleteSolNetworkInstanceInput {}
/**
 * @public
 *
 * The output of {@link DeleteSolNetworkInstanceCommand}.
 */
export interface DeleteSolNetworkInstanceCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a network instance.</p>
 *          <p>A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed.</p>
 *          <p>To delete a network instance, the instance must be in a stopped or terminated state. To
 *          terminate a network instance, see <a href="https://docs.aws.amazon.com/tnb/latest/APIReference/API_TerminateSolNetworkInstance.html">TerminateSolNetworkInstance</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TnbClient, DeleteSolNetworkInstanceCommand } from "@aws-sdk/client-tnb"; // ES Modules import
 * // const { TnbClient, DeleteSolNetworkInstanceCommand } = require("@aws-sdk/client-tnb"); // CommonJS import
 * // import type { TnbClientConfig } from "@aws-sdk/client-tnb";
 * const config = {}; // type is TnbClientConfig
 * const client = new TnbClient(config);
 * const input = { // DeleteSolNetworkInstanceInput
 *   nsInstanceId: "STRING_VALUE", // required
 * };
 * const command = new DeleteSolNetworkInstanceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSolNetworkInstanceCommandInput - {@link DeleteSolNetworkInstanceCommandInput}
 * @returns {@link DeleteSolNetworkInstanceCommandOutput}
 * @see {@link DeleteSolNetworkInstanceCommandInput} for command's `input` shape.
 * @see {@link DeleteSolNetworkInstanceCommandOutput} for command's `response` shape.
 * @see {@link TnbClientResolvedConfig | config} for TnbClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Insufficient permissions to make request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error occurred. Problem on the server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource that doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Exception caused by throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Unable to process the request because the client provided input failed to satisfy
 *          request constraints.</p>
 *
 * @throws {@link TnbServiceException}
 * <p>Base exception class for all service exceptions from Tnb service.</p>
 *
 *
 * @example Delete a Sol Network Instance.
 * ```javascript
 * //
 * const input = {
 *   nsInstanceId: "ni-07aa863e53460a2a6"
 * };
 * const command = new DeleteSolNetworkInstanceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteSolNetworkInstanceCommand extends $Command
  .classBuilder<
    DeleteSolNetworkInstanceCommandInput,
    DeleteSolNetworkInstanceCommandOutput,
    TnbClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TnbClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("TNB", "DeleteSolNetworkInstance", {})
  .n("TnbClient", "DeleteSolNetworkInstanceCommand")
  .f(void 0, void 0)
  .ser(se_DeleteSolNetworkInstanceCommand)
  .de(de_DeleteSolNetworkInstanceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSolNetworkInstanceInput;
      output: {};
    };
    sdk: {
      input: DeleteSolNetworkInstanceCommandInput;
      output: DeleteSolNetworkInstanceCommandOutput;
    };
  };
}
