// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaStoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreClient";
import { PutContainerPolicyInput, PutContainerPolicyOutput } from "../models/models_0";
import { de_PutContainerPolicyCommand, se_PutContainerPolicyCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutContainerPolicyCommand}.
 */
export interface PutContainerPolicyCommandInput extends PutContainerPolicyInput {}
/**
 * @public
 *
 * The output of {@link PutContainerPolicyCommand}.
 */
export interface PutContainerPolicyCommandOutput extends PutContainerPolicyOutput, __MetadataBearer {}

/**
 * <p>Creates an access policy for the specified container to restrict the users and
 *          clients that can access it. For information about the data that is included in an access
 *          policy, see the <a href="https://aws.amazon.com/documentation/iam/">AWS Identity and
 *             Access Management User Guide</a>.</p>
 *          <p>For this release of the REST API, you can create only one policy for a container. If
 *          you enter <code>PutContainerPolicy</code> twice, the second command modifies the existing
 *          policy. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreClient, PutContainerPolicyCommand } from "@aws-sdk/client-mediastore"; // ES Modules import
 * // const { MediaStoreClient, PutContainerPolicyCommand } = require("@aws-sdk/client-mediastore"); // CommonJS import
 * const client = new MediaStoreClient(config);
 * const input = { // PutContainerPolicyInput
 *   ContainerName: "STRING_VALUE", // required
 *   Policy: "STRING_VALUE", // required
 * };
 * const command = new PutContainerPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutContainerPolicyCommandInput - {@link PutContainerPolicyCommandInput}
 * @returns {@link PutContainerPolicyCommandOutput}
 * @see {@link PutContainerPolicyCommandInput} for command's `input` shape.
 * @see {@link PutContainerPolicyCommandOutput} for command's `response` shape.
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
 * @public
 */
export class PutContainerPolicyCommand extends $Command
  .classBuilder<
    PutContainerPolicyCommandInput,
    PutContainerPolicyCommandOutput,
    MediaStoreClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MediaStoreClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MediaStore_20170901", "PutContainerPolicy", {})
  .n("MediaStoreClient", "PutContainerPolicyCommand")
  .f(void 0, void 0)
  .ser(se_PutContainerPolicyCommand)
  .de(de_PutContainerPolicyCommand)
  .build() {}
