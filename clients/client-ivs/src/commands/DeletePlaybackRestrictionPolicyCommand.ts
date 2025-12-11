// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvsClient";
import type { DeletePlaybackRestrictionPolicyRequest } from "../models/models_0";
import { DeletePlaybackRestrictionPolicy } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeletePlaybackRestrictionPolicyCommand}.
 */
export interface DeletePlaybackRestrictionPolicyCommandInput extends DeletePlaybackRestrictionPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeletePlaybackRestrictionPolicyCommand}.
 */
export interface DeletePlaybackRestrictionPolicyCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified playback restriction policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, DeletePlaybackRestrictionPolicyCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, DeletePlaybackRestrictionPolicyCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * // import type { IvsClientConfig } from "@aws-sdk/client-ivs";
 * const config = {}; // type is IvsClientConfig
 * const client = new IvsClient(config);
 * const input = { // DeletePlaybackRestrictionPolicyRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new DeletePlaybackRestrictionPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePlaybackRestrictionPolicyCommandInput - {@link DeletePlaybackRestrictionPolicyCommandInput}
 * @returns {@link DeletePlaybackRestrictionPolicyCommandOutput}
 * @see {@link DeletePlaybackRestrictionPolicyCommandInput} for command's `input` shape.
 * @see {@link DeletePlaybackRestrictionPolicyCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for IvsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p/>
 *
 * @throws {@link PendingVerification} (client fault)
 *  <p/>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link IvsServiceException}
 * <p>Base exception class for all service exceptions from Ivs service.</p>
 *
 *
 * @public
 */
export class DeletePlaybackRestrictionPolicyCommand extends $Command
  .classBuilder<
    DeletePlaybackRestrictionPolicyCommandInput,
    DeletePlaybackRestrictionPolicyCommandOutput,
    IvsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IvsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonInteractiveVideoService", "DeletePlaybackRestrictionPolicy", {})
  .n("IvsClient", "DeletePlaybackRestrictionPolicyCommand")
  .sc(DeletePlaybackRestrictionPolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePlaybackRestrictionPolicyRequest;
      output: {};
    };
    sdk: {
      input: DeletePlaybackRestrictionPolicyCommandInput;
      output: DeletePlaybackRestrictionPolicyCommandOutput;
    };
  };
}
