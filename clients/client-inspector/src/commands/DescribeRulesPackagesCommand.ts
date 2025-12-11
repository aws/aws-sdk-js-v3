// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import type { DescribeRulesPackagesRequest, DescribeRulesPackagesResponse } from "../models/models_0";
import { DescribeRulesPackages } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeRulesPackagesCommand}.
 */
export interface DescribeRulesPackagesCommandInput extends DescribeRulesPackagesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRulesPackagesCommand}.
 */
export interface DescribeRulesPackagesCommandOutput extends DescribeRulesPackagesResponse, __MetadataBearer {}

/**
 * <p>Describes the rules packages that are specified by the ARNs of the rules
 *          packages.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, DescribeRulesPackagesCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, DescribeRulesPackagesCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * // import type { InspectorClientConfig } from "@aws-sdk/client-inspector";
 * const config = {}; // type is InspectorClientConfig
 * const client = new InspectorClient(config);
 * const input = { // DescribeRulesPackagesRequest
 *   rulesPackageArns: [ // BatchDescribeArnList // required
 *     "STRING_VALUE",
 *   ],
 *   locale: "EN_US",
 * };
 * const command = new DescribeRulesPackagesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRulesPackagesResponse
 * //   rulesPackages: [ // RulesPackageList // required
 * //     { // RulesPackage
 * //       arn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       version: "STRING_VALUE", // required
 * //       provider: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
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
 * @param DescribeRulesPackagesCommandInput - {@link DescribeRulesPackagesCommandInput}
 * @returns {@link DescribeRulesPackagesCommandOutput}
 * @see {@link DescribeRulesPackagesCommandInput} for command's `input` shape.
 * @see {@link DescribeRulesPackagesCommandOutput} for command's `response` shape.
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
 * @example Describe rules packages
 * ```javascript
 * // Describes the rules packages that are specified by the ARNs of the rules packages.
 * const input = {
 *   rulesPackageArns: [
 *     "arn:aws:inspector:us-west-2:758058086616:rulespackage/0-JJOtZiqQ"
 *   ]
 * };
 * const command = new DescribeRulesPackagesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   failedItems:   { /* empty *\/ },
 *   rulesPackages: [
 *     {
 *       arn: "arn:aws:inspector:us-west-2:758058086616:rulespackage/0-JJOtZiqQ",
 *       description: "The rules in this package help determine whether your systems are configured securely.",
 *       name: "Security Best Practices",
 *       provider: "Amazon Web Services, Inc.",
 *       version: "1.1"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeRulesPackagesCommand extends $Command
  .classBuilder<
    DescribeRulesPackagesCommandInput,
    DescribeRulesPackagesCommandOutput,
    InspectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: InspectorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("InspectorService", "DescribeRulesPackages", {})
  .n("InspectorClient", "DescribeRulesPackagesCommand")
  .sc(DescribeRulesPackages)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeRulesPackagesRequest;
      output: DescribeRulesPackagesResponse;
    };
    sdk: {
      input: DescribeRulesPackagesCommandInput;
      output: DescribeRulesPackagesCommandOutput;
    };
  };
}
