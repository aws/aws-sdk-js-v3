// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListProductsRequest, ListProductsResponse } from "../models/models_0";
import { ListProducts$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListProductsCommand}.
 */
export interface ListProductsCommandInput extends ListProductsRequest {}
/**
 * @public
 *
 * The output of {@link ListProductsCommand}.
 */
export interface ListProductsCommandOutput extends ListProductsResponse, __MetadataBearer {}

/**
 * Lists products you own, products shared with you, or both.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIPortalClient, ListProductsCommand } from "@aws-sdk/client-apiportal"; // ES Modules import
 * // const { APIPortalClient, ListProductsCommand } = require("@aws-sdk/client-apiportal"); // CommonJS import
 * // import type { APIPortalClientConfig } from "@aws-sdk/client-apiportal";
 * const config = {}; // type is APIPortalClientConfig
 * const client = new APIPortalClient(config);
 * const input = { // ListProductsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   resourceOwner: "ALL" || "SELF" || "OTHER_ACCOUNTS",
 *   managedApiId: "STRING_VALUE",
 * };
 * const command = new ListProductsCommand(input);
 * const response = await client.send(command);
 * // { // ListProductsResponse
 * //   nextToken: "STRING_VALUE",
 * //   items: [ // ProductList
 * //     { // ProductSummary
 * //       productId: "STRING_VALUE", // required
 * //       productArn: "STRING_VALUE", // required
 * //       displayName: "STRING_VALUE", // required
 * //       description: "STRING_VALUE", // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //       apiSelectionConfiguration: { // ApiSelectionConfiguration
 * //         apiSelectionMode: "CUSTOM" || "RULE_BASED", // required
 * //         ruleFilters: [ // RuleFilterList
 * //           { // RuleFilter
 * //             key: "RESOURCE_ARN" || "HOST" || "METHOD" || "PATH" || "PORT" || "ACCOUNT", // required
 * //             values: [ // RuleFilterValueList // required
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //       status: "ACTIVE" || "IN_PROGRESS" || "FAILED",
 * //       failureReason: "API_PAGE_ATTACHED" || "EVALUATION_ERROR",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListProductsCommandInput - {@link ListProductsCommandInput}
 * @returns {@link ListProductsCommandOutput}
 * @see {@link ListProductsCommandInput} for command's `input` shape.
 * @see {@link ListProductsCommandOutput} for command's `response` shape.
 * @see {@link APIPortalClientResolvedConfig | config} for APIPortalClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  You do not have permission to perform this operation.
 *
 * @throws {@link BadRequestException} (client fault)
 *  The request is not valid. The message identifies the field or value that failed validation.
 *
 * @throws {@link LimitExceededException} (client fault)
 *  The request rate or a service quota was exceeded. Reduce the request rate or the number of resources and try again.
 *
 * @throws {@link APIPortalServiceException}
 * <p>Base exception class for all service exceptions from APIPortal service.</p>
 *
 *
 * @public
 */
export class ListProductsCommand extends command<ListProductsCommandInput, ListProductsCommandOutput>(
  _ep0,
  _mw0,
  "ListProducts",
  ListProducts$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListProductsRequest;
      output: ListProductsResponse;
    };
    sdk: {
      input: ListProductsCommandInput;
      output: ListProductsCommandOutput;
    };
  };
}
