// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AddTagsInput, AddTagsOutput } from "../models/models_0";
import { AddTags$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AddTagsCommand}.
 */
export interface AddTagsCommandInput extends AddTagsInput {}
/**
 * @public
 *
 * The output of {@link AddTagsCommand}.
 */
export interface AddTagsCommandOutput extends AddTagsOutput, __MetadataBearer {}

/**
 * Adds the specified tags to the specified load balancer. Each load balancer can have a maximum of 10 tags.
 *
 *
 *
 * Each tag consists of a key and an optional value. If a tag with the same key is already associated with the load balancer, `AddTags` updates its value.
 *
 *
 *
 *
 * For more information, see [Tag Your Classic Load Balancer](https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/add-remove-tags.html) in the *Classic Load Balancers Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, AddTagsCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, AddTagsCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * // import type { ElasticLoadBalancingClientConfig } from "@aws-sdk/client-elastic-load-balancing";
 * const config = {}; // type is ElasticLoadBalancingClientConfig
 * const client = new ElasticLoadBalancingClient(config);
 * const input = { // AddTagsInput
 *   LoadBalancerNames: [ // LoadBalancerNames // required
 *     "STRING_VALUE",
 *   ],
 *   Tags: [ // TagList // required
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new AddTagsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AddTagsCommandInput - {@link AddTagsCommandInput}
 * @returns {@link AddTagsCommandOutput}
 * @see {@link AddTagsCommandInput} for command's `input` shape.
 * @see {@link AddTagsCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for ElasticLoadBalancingClient's `config` shape.
 *
 * @throws {@link AccessPointNotFoundException} (client fault)
 *
 * The specified load balancer does not exist.
 *
 * @throws {@link DuplicateTagKeysException} (client fault)
 *
 * A tag key was specified more than once.
 *
 * @throws {@link TooManyTagsException} (client fault)
 *
 * The quota for the number of tags that can be assigned to a load balancer has been reached.
 *
 * @throws {@link ElasticLoadBalancingServiceException}
 *
 * Base exception class for all service exceptions from ElasticLoadBalancing service.
 *
 * @example To add tags to a load balancer
 * ```javascript
 * // This example adds two tags to the specified load balancer.
 * const input = {
 *   LoadBalancerNames: [
 *     "my-load-balancer"
 *   ],
 *   Tags: [
 *     {
 *       Key: "project",
 *       Value: "lima"
 *     },
 *     {
 *       Key: "department",
 *       Value: "digital-media"
 *     }
 *   ]
 * };
 * const command = new AddTagsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class AddTagsCommand extends command<AddTagsCommandInput, AddTagsCommandOutput>(
  _ep0,
  _mw0,
  "AddTags",
  AddTags$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddTagsInput;
      output: {};
    };
    sdk: {
      input: AddTagsCommandInput;
      output: AddTagsCommandOutput;
    };
  };
}
