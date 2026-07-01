// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteMetricPolicyInput, DeleteMetricPolicyOutput } from "../models/models_0";
import { DeleteMetricPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteMetricPolicyCommand}.
 */
export interface DeleteMetricPolicyCommandInput extends DeleteMetricPolicyInput {}
/**
 * @public
 *
 * The output of {@link DeleteMetricPolicyCommand}.
 */
export interface DeleteMetricPolicyCommandOutput extends DeleteMetricPolicyOutput, __MetadataBearer {}

/**
 * <p>Deletes the metric policy that is associated with the specified container. If there is no metric policy associated with the container, MediaStore doesn't send metrics to CloudWatch.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreClient, DeleteMetricPolicyCommand } from "@aws-sdk/client-mediastore"; // ES Modules import
 * // const { MediaStoreClient, DeleteMetricPolicyCommand } = require("@aws-sdk/client-mediastore"); // CommonJS import
 * // import type { MediaStoreClientConfig } from "@aws-sdk/client-mediastore";
 * const config = {}; // type is MediaStoreClientConfig
 * const client = new MediaStoreClient(config);
 * const input = { // DeleteMetricPolicyInput
 *   ContainerName: "STRING_VALUE", // required
 * };
 * const command = new DeleteMetricPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteMetricPolicyCommandInput - {@link DeleteMetricPolicyCommandInput}
 * @returns {@link DeleteMetricPolicyCommandOutput}
 * @see {@link DeleteMetricPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteMetricPolicyCommandOutput} for command's `response` shape.
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
export class DeleteMetricPolicyCommand extends command<DeleteMetricPolicyCommandInput, DeleteMetricPolicyCommandOutput>(
  _ep0,
  _mw0,
  "DeleteMetricPolicy",
  DeleteMetricPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteMetricPolicyInput;
      output: {};
    };
    sdk: {
      input: DeleteMetricPolicyCommandInput;
      output: DeleteMetricPolicyCommandOutput;
    };
  };
}
