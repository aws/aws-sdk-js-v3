// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateProductApiPageRequest, CreateProductApiPageResponse } from "../models/models_0";
import { CreateProductApiPage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateProductApiPageCommand}.
 */
export interface CreateProductApiPageCommandInput extends CreateProductApiPageRequest {}
/**
 * @public
 *
 * The output of {@link CreateProductApiPageCommand}.
 */
export interface CreateProductApiPageCommandOutput extends CreateProductApiPageResponse, __MetadataBearer {}

/**
 * Creates an API page that documents a Managed API in a product. The page content is generated asynchronously. Use `status` to track it.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIPortalClient, CreateProductApiPageCommand } from "@aws-sdk/client-apiportal"; // ES Modules import
 * // const { APIPortalClient, CreateProductApiPageCommand } = require("@aws-sdk/client-apiportal"); // CommonJS import
 * // import type { APIPortalClientConfig } from "@aws-sdk/client-apiportal";
 * const config = {}; // type is APIPortalClientConfig
 * const client = new APIPortalClient(config);
 * const input = { // CreateProductApiPageRequest
 *   productId: "STRING_VALUE", // required
 *   managedApiId: "STRING_VALUE", // required
 *   displayContent: { // ApiPageDisplayContent Union: only one key present
 *     none: {},
 *     overrides: { // DisplayContentOverrides
 *       operationName: "STRING_VALUE",
 *       apiUrl: "STRING_VALUE",
 *       body: "STRING_VALUE",
 *     },
 *   },
 *   tryItState: "ENABLED" || "DISABLED",
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateProductApiPageCommand(input);
 * const response = await client.send(command);
 * // { // CreateProductApiPageResponse
 * //   productApiPageId: "STRING_VALUE", // required
 * //   productApiPageArn: "STRING_VALUE", // required
 * //   apiId: { // ApiId
 * //     identifierParts: { // IdentifierParts
 * //       path: "STRING_VALUE", // required
 * //       method: "STRING_VALUE", // required
 * //       resourceArn: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   displayContent: { // ApiPageDisplayContentResponse
 * //     operationName: "STRING_VALUE",
 * //     apiUrl: "STRING_VALUE", // required
 * //     body: "STRING_VALUE",
 * //   },
 * //   tryItState: "ENABLED" || "DISABLED", // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   status: "AVAILABLE" || "IN_PROGRESS" || "FAILED", // required
 * //   statusException: { // ProductApiPageStatusException
 * //     exception: "INTERNAL_FAILURE" || "RESOURCE_DELETED" || "MEMBER_LEFT_ORG",
 * //     message: "STRING_VALUE",
 * //   },
 * //   tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateProductApiPageCommandInput - {@link CreateProductApiPageCommandInput}
 * @returns {@link CreateProductApiPageCommandOutput}
 * @see {@link CreateProductApiPageCommandInput} for command's `input` shape.
 * @see {@link CreateProductApiPageCommandOutput} for command's `response` shape.
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
export class CreateProductApiPageCommand extends command<CreateProductApiPageCommandInput, CreateProductApiPageCommandOutput>(
  _ep0,
  _mw0,
  "CreateProductApiPage",
  CreateProductApiPage$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateProductApiPageRequest;
      output: CreateProductApiPageResponse;
    };
    sdk: {
      input: CreateProductApiPageCommandInput;
      output: CreateProductApiPageCommandOutput;
    };
  };
}
