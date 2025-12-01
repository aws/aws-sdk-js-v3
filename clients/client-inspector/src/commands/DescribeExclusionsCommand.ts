// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import type { DescribeExclusionsRequest, DescribeExclusionsResponse } from "../models/models_0";
import { DescribeExclusions } from "../schemas/schemas_0";

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
 * // import type { InspectorClientConfig } from "@aws-sdk/client-inspector";
 * const config = {}; // type is InspectorClientConfig
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
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: InspectorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("InspectorService", "DescribeExclusions", {})
  .n("InspectorClient", "DescribeExclusionsCommand")
  .sc(DescribeExclusions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeExclusionsRequest;
      output: DescribeExclusionsResponse;
    };
    sdk: {
      input: DescribeExclusionsCommandInput;
      output: DescribeExclusionsCommandOutput;
    };
  };
}
