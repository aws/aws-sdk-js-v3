// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetProductRequest, GetProductResponse } from "../models/models_0";
import { GetProduct$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetProductCommand}.
 */
export interface GetProductCommandInput extends GetProductRequest {}
/**
 * @public
 *
 * The output of {@link GetProductCommand}.
 */
export interface GetProductCommandOutput extends GetProductResponse, __MetadataBearer {}

/**
 * Returns a product. To read a product shared with you by another account, supply `resourceOwnerAccountId`.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIPortalClient, GetProductCommand } from "@aws-sdk/client-apiportal"; // ES Modules import
 * // const { APIPortalClient, GetProductCommand } = require("@aws-sdk/client-apiportal"); // CommonJS import
 * // import type { APIPortalClientConfig } from "@aws-sdk/client-apiportal";
 * const config = {}; // type is APIPortalClientConfig
 * const client = new APIPortalClient(config);
 * const input = { // GetProductRequest
 *   productId: "STRING_VALUE", // required
 *   resourceOwnerAccountId: "STRING_VALUE",
 * };
 * const command = new GetProductCommand(input);
 * const response = await client.send(command);
 * // { // GetProductResponse
 * //   productId: "STRING_VALUE", // required
 * //   productArn: "STRING_VALUE", // required
 * //   displayName: "STRING_VALUE", // required
 * //   displayOrder: { // DisplayOrder
 * //     overviewPageArn: "STRING_VALUE",
 * //     productPageArns: [ // ProductPageArnList
 * //       "STRING_VALUE",
 * //     ],
 * //     contents: [ // Contents
 * //       { // Section
 * //         sectionName: "STRING_VALUE",
 * //         productApiPageArns: [ // ProductApiPageArnList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //   },
 * //   description: "STRING_VALUE", // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   apiSelectionConfiguration: { // ApiSelectionConfiguration
 * //     apiSelectionMode: "CUSTOM" || "RULE_BASED", // required
 * //     ruleFilters: [ // RuleFilterList
 * //       { // RuleFilter
 * //         key: "RESOURCE_ARN" || "HOST" || "METHOD" || "PATH" || "PORT" || "ACCOUNT", // required
 * //         values: [ // RuleFilterValueList // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //   },
 * //   status: "ACTIVE" || "IN_PROGRESS" || "FAILED",
 * //   failureReason: "API_PAGE_ATTACHED" || "EVALUATION_ERROR",
 * // };
 *
 * ```
 *
 * @param GetProductCommandInput - {@link GetProductCommandInput}
 * @returns {@link GetProductCommandOutput}
 * @see {@link GetProductCommandInput} for command's `input` shape.
 * @see {@link GetProductCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The requested resource does not exist, or you do not have access to it.
 *
 * @throws {@link APIPortalServiceException}
 * <p>Base exception class for all service exceptions from APIPortal service.</p>
 *
 *
 * @public
 */
export class GetProductCommand extends command<GetProductCommandInput, GetProductCommandOutput>(
  _ep0,
  _mw0,
  "GetProduct",
  GetProduct$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetProductRequest;
      output: GetProductResponse;
    };
    sdk: {
      input: GetProductCommandInput;
      output: GetProductCommandOutput;
    };
  };
}
