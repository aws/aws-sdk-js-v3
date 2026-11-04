// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetLifecyclePolicyInput, GetLifecyclePolicyOutput } from "../models/models_0";
import { GetLifecyclePolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetLifecyclePolicyCommand}.
 */
export interface GetLifecyclePolicyCommandInput extends GetLifecyclePolicyInput {}
/**
 * @public
 *
 * The output of {@link GetLifecyclePolicyCommand}.
 */
export interface GetLifecyclePolicyCommandOutput extends GetLifecyclePolicyOutput, __MetadataBearer {}

/**
 * Retrieves the object lifecycle policy that is assigned to a container.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreClient, GetLifecyclePolicyCommand } from "@aws-sdk/client-mediastore"; // ES Modules import
 * // const { MediaStoreClient, GetLifecyclePolicyCommand } = require("@aws-sdk/client-mediastore"); // CommonJS import
 * // import type { MediaStoreClientConfig } from "@aws-sdk/client-mediastore";
 * const config = {}; // type is MediaStoreClientConfig
 * const client = new MediaStoreClient(config);
 * const input = { // GetLifecyclePolicyInput
 *   ContainerName: "STRING_VALUE", // required
 * };
 * const command = new GetLifecyclePolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetLifecyclePolicyOutput
 * //   LifecyclePolicy: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetLifecyclePolicyCommandInput - {@link GetLifecyclePolicyCommandInput}
 * @returns {@link GetLifecyclePolicyCommandOutput}
 * @see {@link GetLifecyclePolicyCommandInput} for command's `input` shape.
 * @see {@link GetLifecyclePolicyCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreClientResolvedConfig | config} for MediaStoreClient's `config` shape.
 *
 * @throws {@link ContainerInUseException} (client fault)
 *
 * The container that you specified in the request already exists or is being updated.
 *
 * @throws {@link ContainerNotFoundException} (client fault)
 *
 * The container that you specified in the request does not exist.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * The service is temporarily unavailable.
 *
 * @throws {@link PolicyNotFoundException} (client fault)
 *
 * The policy that you specified in the request does not exist.
 *
 * @throws {@link MediaStoreServiceException}
 *
 * Base exception class for all service exceptions from MediaStore service.
 *
 * @public
 */
export class GetLifecyclePolicyCommand extends command<GetLifecyclePolicyCommandInput, GetLifecyclePolicyCommandOutput>(
  _ep0,
  _mw0,
  "GetLifecyclePolicy",
  GetLifecyclePolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLifecyclePolicyInput;
      output: GetLifecyclePolicyOutput;
    };
    sdk: {
      input: GetLifecyclePolicyCommandInput;
      output: GetLifecyclePolicyCommandOutput;
    };
  };
}
