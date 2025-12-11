// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MediaStoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreClient";
import type { PutLifecyclePolicyInput, PutLifecyclePolicyOutput } from "../models/models_0";
import { PutLifecyclePolicy } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutLifecyclePolicyCommand}.
 */
export interface PutLifecyclePolicyCommandInput extends PutLifecyclePolicyInput {}
/**
 * @public
 *
 * The output of {@link PutLifecyclePolicyCommand}.
 */
export interface PutLifecyclePolicyCommandOutput extends PutLifecyclePolicyOutput, __MetadataBearer {}

/**
 * <p>Writes an object lifecycle policy to a container. If the container already has an object lifecycle policy, the service replaces the existing policy with the new policy. It takes up to 20 minutes for the change to take effect.</p>
 *          <p>For information about how to construct an object lifecycle policy, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/policies-object-lifecycle-components.html">Components of an Object Lifecycle Policy</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreClient, PutLifecyclePolicyCommand } from "@aws-sdk/client-mediastore"; // ES Modules import
 * // const { MediaStoreClient, PutLifecyclePolicyCommand } = require("@aws-sdk/client-mediastore"); // CommonJS import
 * // import type { MediaStoreClientConfig } from "@aws-sdk/client-mediastore";
 * const config = {}; // type is MediaStoreClientConfig
 * const client = new MediaStoreClient(config);
 * const input = { // PutLifecyclePolicyInput
 *   ContainerName: "STRING_VALUE", // required
 *   LifecyclePolicy: "STRING_VALUE", // required
 * };
 * const command = new PutLifecyclePolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutLifecyclePolicyCommandInput - {@link PutLifecyclePolicyCommandInput}
 * @returns {@link PutLifecyclePolicyCommandOutput}
 * @see {@link PutLifecyclePolicyCommandInput} for command's `input` shape.
 * @see {@link PutLifecyclePolicyCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreClientResolvedConfig | config} for MediaStoreClient's `config` shape.
 *
 * @throws {@link ContainerInUseException} (client fault)
 *  <p>The container that you specified in the request already exists or is being
 *          updated.</p>
 *
 * @throws {@link ContainerNotFoundException} (client fault)
 *  <p>The container that you specified in the request does not exist.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link MediaStoreServiceException}
 * <p>Base exception class for all service exceptions from MediaStore service.</p>
 *
 *
 * @public
 */
export class PutLifecyclePolicyCommand extends $Command
  .classBuilder<
    PutLifecyclePolicyCommandInput,
    PutLifecyclePolicyCommandOutput,
    MediaStoreClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaStoreClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaStore_20170901", "PutLifecyclePolicy", {})
  .n("MediaStoreClient", "PutLifecyclePolicyCommand")
  .sc(PutLifecyclePolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutLifecyclePolicyInput;
      output: {};
    };
    sdk: {
      input: PutLifecyclePolicyCommandInput;
      output: PutLifecyclePolicyCommandOutput;
    };
  };
}
