// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw2, command } from "../commandBuilder";
import type { ListTagsForResourcesRequest, ListTagsForResourcesResponse } from "../models/models_0";
import { ListTagsForResources$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListTagsForResourcesCommand}.
 */
export interface ListTagsForResourcesCommandInput extends ListTagsForResourcesRequest {}
/**
 * @public
 *
 * The output of {@link ListTagsForResourcesCommand}.
 */
export interface ListTagsForResourcesCommandOutput extends ListTagsForResourcesResponse, __MetadataBearer {}

/**
 * Lists tags for up to 10 health checks or hosted zones.
 *
 * For information about using tags for cost allocation, see [Using Cost Allocation Tags](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html) in the *Billing and Cost Management User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ListTagsForResourcesCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ListTagsForResourcesCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // ListTagsForResourcesRequest
 *   ResourceType: "healthcheck" || "hostedzone", // required
 *   ResourceIds: [ // TagResourceIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ListTagsForResourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListTagsForResourcesResponse
 * //   ResourceTagSets: [ // ResourceTagSetList // required
 * //     { // ResourceTagSet
 * //       ResourceType: "healthcheck" || "hostedzone",
 * //       ResourceId: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListTagsForResourcesCommandInput - {@link ListTagsForResourcesCommandInput}
 * @returns {@link ListTagsForResourcesCommandOutput}
 * @see {@link ListTagsForResourcesCommandInput} for command's `input` shape.
 * @see {@link ListTagsForResourcesCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListTagsForResourcesCommand extends command<ListTagsForResourcesCommandInput, ListTagsForResourcesCommandOutput>(
  _ep0,
  _mw2,
  "ListTagsForResources",
  ListTagsForResources$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTagsForResourcesRequest;
      output: ListTagsForResourcesResponse;
    };
    sdk: {
      input: ListTagsForResourcesCommandInput;
      output: ListTagsForResourcesCommandOutput;
    };
  };
}
