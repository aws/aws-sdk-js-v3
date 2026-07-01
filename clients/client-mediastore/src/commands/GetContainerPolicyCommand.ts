// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetContainerPolicyInput, GetContainerPolicyOutput } from "../models/models_0";
import { GetContainerPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetContainerPolicyCommand}.
 */
export interface GetContainerPolicyCommandInput extends GetContainerPolicyInput {}
/**
 * @public
 *
 * The output of {@link GetContainerPolicyCommand}.
 */
export interface GetContainerPolicyCommandOutput extends GetContainerPolicyOutput, __MetadataBearer {}

/**
 * <p>Retrieves the access policy for the specified container. For information about the
 *          data that is included in an access policy, see the <a href="https://aws.amazon.com/documentation/iam/">AWS Identity and Access Management User
 *             Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreClient, GetContainerPolicyCommand } from "@aws-sdk/client-mediastore"; // ES Modules import
 * // const { MediaStoreClient, GetContainerPolicyCommand } = require("@aws-sdk/client-mediastore"); // CommonJS import
 * // import type { MediaStoreClientConfig } from "@aws-sdk/client-mediastore";
 * const config = {}; // type is MediaStoreClientConfig
 * const client = new MediaStoreClient(config);
 * const input = { // GetContainerPolicyInput
 *   ContainerName: "STRING_VALUE", // required
 * };
 * const command = new GetContainerPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetContainerPolicyOutput
 * //   Policy: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetContainerPolicyCommandInput - {@link GetContainerPolicyCommandInput}
 * @returns {@link GetContainerPolicyCommandOutput}
 * @see {@link GetContainerPolicyCommandInput} for command's `input` shape.
 * @see {@link GetContainerPolicyCommandOutput} for command's `response` shape.
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
 * @throws {@link PolicyNotFoundException} (client fault)
 *  <p>The policy that you specified in the request does not exist.</p>
 *
 * @throws {@link MediaStoreServiceException}
 * <p>Base exception class for all service exceptions from MediaStore service.</p>
 *
 *
 * @public
 */
export class GetContainerPolicyCommand extends command<GetContainerPolicyCommandInput, GetContainerPolicyCommandOutput>(
  _ep0,
  _mw0,
  "GetContainerPolicy",
  GetContainerPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetContainerPolicyInput;
      output: GetContainerPolicyOutput;
    };
    sdk: {
      input: GetContainerPolicyCommandInput;
      output: GetContainerPolicyCommandOutput;
    };
  };
}
