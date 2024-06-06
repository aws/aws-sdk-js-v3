// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { DescribeExclusionsRequest, DescribeExclusionsResponse } from "../models/models_0";
import { de_DescribeExclusionsCommand, se_DescribeExclusionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeExclusionsCommand}.
 */
export interface DescribeExclusionsCommandInput extends DescribeExclusionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeExclusionsCommand}.
 */
export interface DescribeExclusionsCommandOutput extends DescribeExclusionsResponse, __MetadataBearer {}

/**
 * <p>Describes the exclusions that are specified by the exclusions' ARNs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, DescribeExclusionsCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, DescribeExclusionsCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const input = { // DescribeExclusionsRequest
 *   exclusionArns: [ // BatchDescribeExclusionsArnList // required
 *     "STRING_VALUE",
 *   ],
 *   locale: "EN_US",
 * };
 * const command = new DescribeExclusionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeExclusionsResponse
 * //   exclusions: { // ExclusionMap // required
 * //     "<keys>": { // Exclusion
 * //       arn: "STRING_VALUE", // required
 * //       title: "STRING_VALUE", // required
 * //       description: "STRING_VALUE", // required
 * //       recommendation: "STRING_VALUE", // required
 * //       scopes: [ // ScopeList // required
 * //         { // Scope
 * //           key: "INSTANCE_ID" || "RULES_PACKAGE_ARN",
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       attributes: [ // AttributeList
 * //         { // Attribute
 * //           key: "STRING_VALUE", // required
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   },
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
 * @param DescribeExclusionsCommandInput - {@link DescribeExclusionsCommandInput}
 * @returns {@link DescribeExclusionsCommandOutput}
 * @see {@link DescribeExclusionsCommandInput} for command's `input` shape.
 * @see {@link DescribeExclusionsCommandOutput} for command's `response` shape.
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
 */
export class DescribeExclusionsCommand extends $Command
  .classBuilder<
    DescribeExclusionsCommandInput,
    DescribeExclusionsCommandOutput,
    InspectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: InspectorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("InspectorService", "DescribeExclusions", {})
  .n("InspectorClient", "DescribeExclusionsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeExclusionsCommand)
  .de(de_DescribeExclusionsCommand)
  .build() {}
