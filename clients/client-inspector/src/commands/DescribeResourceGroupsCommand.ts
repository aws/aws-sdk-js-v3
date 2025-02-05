// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { DescribeResourceGroupsRequest, DescribeResourceGroupsResponse } from "../models/models_0";
import { de_DescribeResourceGroupsCommand, se_DescribeResourceGroupsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeResourceGroupsCommand}.
 */
export interface DescribeResourceGroupsCommandInput extends DescribeResourceGroupsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeResourceGroupsCommand}.
 */
export interface DescribeResourceGroupsCommandOutput extends DescribeResourceGroupsResponse, __MetadataBearer {}

/**
 * <p>Describes the resource groups that are specified by the ARNs of the resource
 *          groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, DescribeResourceGroupsCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, DescribeResourceGroupsCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new InspectorClient(config);
 * const input = { // DescribeResourceGroupsRequest
 *   resourceGroupArns: [ // BatchDescribeArnList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeResourceGroupsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeResourceGroupsResponse
 * //   resourceGroups: [ // ResourceGroupList // required
 * //     { // ResourceGroup
 * //       arn: "STRING_VALUE", // required
 * //       tags: [ // ResourceGroupTags // required
 * //         { // ResourceGroupTag
 * //           key: "STRING_VALUE", // required
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   failedItems: { // FailedItems // required
 * //     "<keys>": { // FailedItemDetails
 * //       failureCode: "INVALID_ARN" || "DUPLICATE_ARN" || "ITEM_DOES_NOT_EXIST" || "ACCESS_DENIED" || "LIMIT_EXCEEDED" || "INTERNAL_ERROR", // required
 * //       retryable: true || false, // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeResourceGroupsCommandInput - {@link DescribeResourceGroupsCommandInput}
 * @returns {@link DescribeResourceGroupsCommandOutput}
 * @see {@link DescribeResourceGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeResourceGroupsCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for InspectorClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *          input parameter.</p>
 *
 * @throws {@link InspectorServiceException}
 * <p>Base exception class for all service exceptions from Inspector service.</p>
 *
 * @public
 * @example Describe resource groups
 * ```javascript
 * // Describes the resource groups that are specified by the ARNs of the resource groups.
 * const input = {
 *   "resourceGroupArns": [
 *     "arn:aws:inspector:us-west-2:123456789012:resourcegroup/0-PyGXopAI"
 *   ]
 * };
 * const command = new DescribeResourceGroupsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "failedItems": {},
 *   "resourceGroups": [
 *     {
 *       "arn": "arn:aws:inspector:us-west-2:123456789012:resourcegroup/0-PyGXopAI",
 *       "createdAt": "1458074191.098",
 *       "tags": [
 *         {
 *           "key": "Name",
 *           "value": "example"
 *         }
 *       ]
 *     }
 *   ]
 * }
 * *\/
 * // example id: describe-resource-groups-1481065787743
 * ```
 *
 */
export class DescribeResourceGroupsCommand extends $Command
  .classBuilder<
    DescribeResourceGroupsCommandInput,
    DescribeResourceGroupsCommandOutput,
    InspectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: InspectorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("InspectorService", "DescribeResourceGroups", {})
  .n("InspectorClient", "DescribeResourceGroupsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeResourceGroupsCommand)
  .de(de_DescribeResourceGroupsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeResourceGroupsRequest;
      output: DescribeResourceGroupsResponse;
    };
    sdk: {
      input: DescribeResourceGroupsCommandInput;
      output: DescribeResourceGroupsCommandOutput;
    };
  };
}
