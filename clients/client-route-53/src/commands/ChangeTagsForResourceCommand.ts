// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw2, command } from "../commandBuilder";
import type { ChangeTagsForResourceRequest, ChangeTagsForResourceResponse } from "../models/models_0";
import { ChangeTagsForResource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ChangeTagsForResourceCommand}.
 */
export interface ChangeTagsForResourceCommandInput extends ChangeTagsForResourceRequest {}
/**
 * @public
 *
 * The output of {@link ChangeTagsForResourceCommand}.
 */
export interface ChangeTagsForResourceCommandOutput extends ChangeTagsForResourceResponse, __MetadataBearer {}

/**
 * Adds, edits, or deletes tags for a health check or a hosted zone.
 *
 * For information about using tags for cost allocation, see [Using Cost Allocation Tags](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html) in the *Billing and Cost Management User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ChangeTagsForResourceCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ChangeTagsForResourceCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // ChangeTagsForResourceRequest
 *   ResourceType: "healthcheck" || "hostedzone", // required
 *   ResourceId: "STRING_VALUE", // required
 *   AddTags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   RemoveTagKeys: [ // TagKeyList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ChangeTagsForResourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ChangeTagsForResourceCommandInput - {@link ChangeTagsForResourceCommandInput}
 * @returns {@link ChangeTagsForResourceCommandOutput}
 * @see {@link ChangeTagsForResourceCommandInput} for command's `input` shape.
 * @see {@link ChangeTagsForResourceCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *
 * The input is not valid.
 *
 * @throws {@link NoSuchHealthCheck} (client fault)
 *
 * No health check exists with the specified ID.
 *
 * @throws {@link NoSuchHostedZone} (client fault)
 *
 * No hosted zone exists with the ID that you specified.
 *
 * @throws {@link PriorRequestNotComplete} (client fault)
 *
 * If Amazon Route 53 can't process a request before the next request arrives, it will reject subsequent requests for the same hosted zone and return an `HTTP 400 error` (`Bad request`). If Route 53 returns this error repeatedly for the same request, we recommend that you wait, in intervals of increasing duration, before you try the request again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The limit on the number of requests per second was exceeded.
 *
 * @throws {@link Route53ServiceException}
 *
 * Base exception class for all service exceptions from Route53 service.
 *
 * @example To add or remove tags from a hosted zone or health check
 * ```javascript
 * // The following example adds two tags and removes one tag from the hosted zone with ID Z3M3LMPEXAMPLE.
 * const input = {
 *   AddTags: [
 *     {
 *       Key: "apex",
 *       Value: "3874"
 *     },
 *     {
 *       Key: "acme",
 *       Value: "4938"
 *     }
 *   ],
 *   RemoveTagKeys: [
 *     "Nadir"
 *   ],
 *   ResourceId: "Z3M3LMPEXAMPLE",
 *   ResourceType: "hostedzone"
 * };
 * const command = new ChangeTagsForResourceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class ChangeTagsForResourceCommand extends command<ChangeTagsForResourceCommandInput, ChangeTagsForResourceCommandOutput>(
  _ep0,
  _mw2,
  "ChangeTagsForResource",
  ChangeTagsForResource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ChangeTagsForResourceRequest;
      output: {};
    };
    sdk: {
      input: ChangeTagsForResourceCommandInput;
      output: ChangeTagsForResourceCommandOutput;
    };
  };
}
