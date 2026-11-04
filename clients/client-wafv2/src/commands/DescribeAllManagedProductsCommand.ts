// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeAllManagedProductsRequest, DescribeAllManagedProductsResponse } from "../models/models_0";
import { DescribeAllManagedProducts$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeAllManagedProductsCommand}.
 */
export interface DescribeAllManagedProductsCommandInput extends DescribeAllManagedProductsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAllManagedProductsCommand}.
 */
export interface DescribeAllManagedProductsCommandOutput extends DescribeAllManagedProductsResponse, __MetadataBearer {}

/**
 * Provides high-level information for the Amazon Web Services Managed Rules rule groups and Amazon Web Services Marketplace managed rule groups.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, DescribeAllManagedProductsCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, DescribeAllManagedProductsCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * // import type { WAFV2ClientConfig } from "@aws-sdk/client-wafv2";
 * const config = {}; // type is WAFV2ClientConfig
 * const client = new WAFV2Client(config);
 * const input = { // DescribeAllManagedProductsRequest
 *   Scope: "CLOUDFRONT" || "REGIONAL", // required
 * };
 * const command = new DescribeAllManagedProductsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAllManagedProductsResponse
 * //   ManagedProducts: [ // ManagedProductDescriptors
 * //     { // ManagedProductDescriptor
 * //       VendorName: "STRING_VALUE",
 * //       ManagedRuleSetName: "STRING_VALUE",
 * //       ProductId: "STRING_VALUE",
 * //       ProductLink: "STRING_VALUE",
 * //       ProductTitle: "STRING_VALUE",
 * //       ProductDescription: "STRING_VALUE",
 * //       SnsTopicArn: "STRING_VALUE",
 * //       IsVersioningSupported: true || false,
 * //       IsAdvancedManagedRuleSet: true || false,
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeAllManagedProductsCommandInput - {@link DescribeAllManagedProductsCommandInput}
 * @returns {@link DescribeAllManagedProductsCommandOutput}
 * @see {@link DescribeAllManagedProductsCommandInput} for command's `input` shape.
 * @see {@link DescribeAllManagedProductsCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for WAFV2Client's `config` shape.
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *
 * Your request is valid, but WAF couldn’t perform the operation because of a system problem. Retry your request.
 *
 * @throws {@link WAFInvalidOperationException} (client fault)
 *
 * The operation isn't valid.
 *
 * @throws {@link WAFInvalidParameterException} (client fault)
 *
 * The operation failed because WAF didn't recognize a parameter in the request. For example:
 *
 * - You specified a parameter name or value that isn't valid.
 * - Your nested statement isn't valid. You might have tried to nest a statement that can’t be nested.
 * - You tried to update a `WebACL` with a `DefaultAction` that isn't among the types available at DefaultAction.
 * - Your request references an ARN that is malformed, or corresponds to a resource with which a web ACL can't be associated.
 *
 * @throws {@link WAFV2ServiceException}
 *
 * Base exception class for all service exceptions from WAFV2 service.
 *
 * @public
 */
export class DescribeAllManagedProductsCommand extends command<DescribeAllManagedProductsCommandInput, DescribeAllManagedProductsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeAllManagedProducts",
  DescribeAllManagedProducts$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAllManagedProductsRequest;
      output: DescribeAllManagedProductsResponse;
    };
    sdk: {
      input: DescribeAllManagedProductsCommandInput;
      output: DescribeAllManagedProductsCommandOutput;
    };
  };
}
