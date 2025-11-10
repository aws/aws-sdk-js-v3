// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CancelSolNetworkOperationInput } from "../models/models_0";
import { CancelSolNetworkOperation } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, TnbClientResolvedConfig } from "../TnbClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelSolNetworkOperationCommand}.
 */
export interface CancelSolNetworkOperationCommandInput extends CancelSolNetworkOperationInput {}
/**
 * @public
 *
 * The output of {@link CancelSolNetworkOperationCommand}.
 */
export interface CancelSolNetworkOperationCommandOutput extends __MetadataBearer {}

/**
 * <p>Cancels a network operation.</p>
 *          <p>A network operation is any operation that is done to your network, such as network instance instantiation or termination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TnbClient, CancelSolNetworkOperationCommand } from "@aws-sdk/client-tnb"; // ES Modules import
 * // const { TnbClient, CancelSolNetworkOperationCommand } = require("@aws-sdk/client-tnb"); // CommonJS import
 * // import type { TnbClientConfig } from "@aws-sdk/client-tnb";
 * const config = {}; // type is TnbClientConfig
 * const client = new TnbClient(config);
 * const input = { // CancelSolNetworkOperationInput
 *   nsLcmOpOccId: "STRING_VALUE", // required
 * };
 * const command = new CancelSolNetworkOperationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelSolNetworkOperationCommandInput - {@link CancelSolNetworkOperationCommandInput}
 * @returns {@link CancelSolNetworkOperationCommandOutput}
 * @see {@link CancelSolNetworkOperationCommandInput} for command's `input` shape.
 * @see {@link CancelSolNetworkOperationCommandOutput} for command's `response` shape.
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
 * @example Cancel a in-progress Sol Network Operation.
 * ```javascript
 * //
 * const input = {
 *   nsLcmOpOccId: "no-0d5b823eb5c2a9241"
 * };
 * const command = new CancelSolNetworkOperationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class CancelSolNetworkOperationCommand extends $Command
  .classBuilder<
    CancelSolNetworkOperationCommandInput,
    CancelSolNetworkOperationCommandOutput,
    TnbClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TnbClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("TNB", "CancelSolNetworkOperation", {})
  .n("TnbClient", "CancelSolNetworkOperationCommand")
  .sc(CancelSolNetworkOperation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelSolNetworkOperationInput;
      output: {};
    };
    sdk: {
      input: CancelSolNetworkOperationCommandInput;
      output: CancelSolNetworkOperationCommandOutput;
    };
  };
}
