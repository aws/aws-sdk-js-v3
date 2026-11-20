// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateProductRequest, CreateProductResponse } from "../models/models_0";
import { CreateProduct$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateProductCommand}.
 */
export interface CreateProductCommandInput extends CreateProductRequest {}
/**
 * @public
 *
 * The output of {@link CreateProductCommand}.
 */
export interface CreateProductCommandOutput extends CreateProductResponse, __MetadataBearer {}

/**
 * Creates a product. A product groups Managed APIs with their API pages and product pages so a portal can publish them together.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIPortalClient, CreateProductCommand } from "@aws-sdk/client-apiportal"; // ES Modules import
 * // const { APIPortalClient, CreateProductCommand } = require("@aws-sdk/client-apiportal"); // CommonJS import
 * // import type { APIPortalClientConfig } from "@aws-sdk/client-apiportal";
 * const config = {}; // type is APIPortalClientConfig
 * const client = new APIPortalClient(config);
 * const input = { // CreateProductRequest
 *   displayName: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 *   apiSelectionConfiguration: { // ApiSelectionConfiguration
 *     apiSelectionMode: "CUSTOM" || "RULE_BASED", // required
 *     ruleFilters: [ // RuleFilterList
 *       { // RuleFilter
 *         key: "RESOURCE_ARN" || "HOST" || "METHOD" || "PATH" || "PORT" || "ACCOUNT", // required
 *         values: [ // RuleFilterValueList // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *     ],
 *   },
 * };
 * const command = new CreateProductCommand(input);
 * const response = await client.send(command);
 * // { // CreateProductResponse
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
 * //   description: "STRING_VALUE",
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
 * @param CreateProductCommandInput - {@link CreateProductCommandInput}
 * @returns {@link CreateProductCommandOutput}
 * @see {@link CreateProductCommandInput} for command's `input` shape.
 * @see {@link CreateProductCommandOutput} for command's `response` shape.
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
export class CreateProductCommand extends command<CreateProductCommandInput, CreateProductCommandOutput>(
  _ep0,
  _mw0,
  "CreateProduct",
  CreateProduct$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateProductRequest;
      output: CreateProductResponse;
    };
    sdk: {
      input: CreateProductCommandInput;
      output: CreateProductCommandOutput;
    };
  };
}
