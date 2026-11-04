// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { TagResourceRequest, TagResourceResponse } from "../models/models_0";
import { TagResource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link TagResourceCommand}.
 */
export interface TagResourceCommandInput extends TagResourceRequest {}
/**
 * @public
 *
 * The output of {@link TagResourceCommand}.
 */
export interface TagResourceCommandOutput extends TagResourceResponse, __MetadataBearer {}

/**
 * Associates the specified tags to an Amazon EVS resource with the specified `resourceArn`. If existing tags on a resource are not specified in the request parameters, they aren't changed. When a resource is deleted, the tags associated with that resource are also deleted. Tags that you create for Amazon EVS resources don't propagate to any other resources associated with the environment. For example, if you tag an environment with this operation, that tag doesn't automatically propagate to the VLAN subnets and hosts associated with the environment.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvsClient, TagResourceCommand } from "@aws-sdk/client-evs"; // ES Modules import
 * // const { EvsClient, TagResourceCommand } = require("@aws-sdk/client-evs"); // CommonJS import
 * // import type { EvsClientConfig } from "@aws-sdk/client-evs";
 * const config = {}; // type is EvsClientConfig
 * const client = new EvsClient(config);
 * const input = { // TagResourceRequest
 *   resourceArn: "STRING_VALUE", // required
 *   tags: { // RequestTagMap // required
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new TagResourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param TagResourceCommandInput - {@link TagResourceCommandInput}
 * @returns {@link TagResourceCommandOutput}
 * @see {@link TagResourceCommandInput} for command's `input` shape.
 * @see {@link TagResourceCommandOutput} for command's `response` shape.
 * @see {@link EvsClientResolvedConfig | config} for EvsClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * A service resource associated with the request could not be found. The resource might not be specified correctly, or it may have a `state` of `DELETED`.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The number of one or more Amazon EVS resources exceeds the maximum allowed. For a list of Amazon EVS quotas, see [Amazon EVS endpoints and quotas](https://docs.aws.amazon.com/evs/latest/userguide/service-quotas-evs.html) in the *Amazon EVS User Guide*. Delete some resources or request an increase in your service quota. To request an increase, see [Amazon Web Services Service Quotas](https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html) in the *Amazon Web Services General Reference Guide*.
 *
 * @throws {@link TagPolicyException} (client fault)
 *
 * > **Note:** `TagPolicyException` is deprecated. See [`ValidationException`](https://docs.aws.amazon.com/evs/latest/APIReference/API_ValidationException.html) instead.
 *
 * The request doesn't comply with IAM tag policy. Correct your request and then retry it.
 *
 * @throws {@link TooManyTagsException} (client fault)
 *
 * > **Note:** `TooManyTagsException` is deprecated. See [`ServiceQuotaExceededException`](https://docs.aws.amazon.com/evs/latest/APIReference/API_ServiceQuotaExceededException.html) instead.
 *
 * A service resource associated with the request has more than 200 tags.
 *
 * @throws {@link EvsServiceException}
 *
 * Base exception class for all service exceptions from Evs service.
 *
 * @public
 */
export class TagResourceCommand extends command<TagResourceCommandInput, TagResourceCommandOutput>(
  _ep0,
  _mw0,
  "TagResource",
  TagResource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TagResourceRequest;
      output: {};
    };
    sdk: {
      input: TagResourceCommandInput;
      output: TagResourceCommandOutput;
    };
  };
}
