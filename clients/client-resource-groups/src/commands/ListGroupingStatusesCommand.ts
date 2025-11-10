// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListGroupingStatusesInput, ListGroupingStatusesOutput } from "../models/models_0";
import { ResourceGroupsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResourceGroupsClient";
import { ListGroupingStatuses } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListGroupingStatusesCommand}.
 */
export interface ListGroupingStatusesCommandInput extends ListGroupingStatusesInput {}
/**
 * @public
 *
 * The output of {@link ListGroupingStatusesCommand}.
 */
export interface ListGroupingStatusesCommandOutput extends ListGroupingStatusesOutput, __MetadataBearer {}

/**
 * <p>Returns the status of the last grouping or ungrouping action for
 *             each resource in the specified application group. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceGroupsClient, ListGroupingStatusesCommand } from "@aws-sdk/client-resource-groups"; // ES Modules import
 * // const { ResourceGroupsClient, ListGroupingStatusesCommand } = require("@aws-sdk/client-resource-groups"); // CommonJS import
 * // import type { ResourceGroupsClientConfig } from "@aws-sdk/client-resource-groups";
 * const config = {}; // type is ResourceGroupsClientConfig
 * const client = new ResourceGroupsClient(config);
 * const input = { // ListGroupingStatusesInput
 *   Group: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   Filters: [ // ListGroupingStatusesFilterList
 *     { // ListGroupingStatusesFilter
 *       Name: "status" || "resource-arn", // required
 *       Values: [ // ListGroupingStatusesFilterValues // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListGroupingStatusesCommand(input);
 * const response = await client.send(command);
 * // { // ListGroupingStatusesOutput
 * //   Group: "STRING_VALUE",
 * //   GroupingStatuses: [ // GroupingStatusesList
 * //     { // GroupingStatusesItem
 * //       ResourceArn: "STRING_VALUE",
 * //       Action: "GROUP" || "UNGROUP",
 * //       Status: "SUCCESS" || "FAILED" || "IN_PROGRESS" || "SKIPPED",
 * //       ErrorMessage: "STRING_VALUE",
 * //       ErrorCode: "STRING_VALUE",
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListGroupingStatusesCommandInput - {@link ListGroupingStatusesCommandInput}
 * @returns {@link ListGroupingStatusesCommandOutput}
 * @see {@link ListGroupingStatusesCommandInput} for command's `input` shape.
 * @see {@link ListGroupingStatusesCommandOutput} for command's `response` shape.
 * @see {@link ResourceGroupsClientResolvedConfig | config} for ResourceGroupsClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request includes one or more parameters that violate validation rules.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The caller isn't authorized to make the request. Check permissions.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal error occurred while processing the request. Try again later.</p>
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *  <p>The request uses an HTTP method that isn't allowed for the specified resource.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>You've exceeded throttling limits by making too many requests in a period of
 *             time.</p>
 *
 * @throws {@link ResourceGroupsServiceException}
 * <p>Base exception class for all service exceptions from ResourceGroups service.</p>
 *
 *
 * @public
 */
export class ListGroupingStatusesCommand extends $Command
  .classBuilder<
    ListGroupingStatusesCommandInput,
    ListGroupingStatusesCommandOutput,
    ResourceGroupsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResourceGroupsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Ardi", "ListGroupingStatuses", {})
  .n("ResourceGroupsClient", "ListGroupingStatusesCommand")
  .sc(ListGroupingStatuses)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListGroupingStatusesInput;
      output: ListGroupingStatusesOutput;
    };
    sdk: {
      input: ListGroupingStatusesCommandInput;
      output: ListGroupingStatusesCommandOutput;
    };
  };
}
