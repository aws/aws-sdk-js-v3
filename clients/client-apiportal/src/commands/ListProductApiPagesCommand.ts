// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListProductApiPagesRequest, ListProductApiPagesResponse } from "../models/models_0";
import { ListProductApiPages$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListProductApiPagesCommand}.
 */
export interface ListProductApiPagesCommandInput extends ListProductApiPagesRequest {}
/**
 * @public
 *
 * The output of {@link ListProductApiPagesCommand}.
 */
export interface ListProductApiPagesCommandOutput extends ListProductApiPagesResponse, __MetadataBearer {}

/**
 * Lists the API pages in a product. The results do not include page bodies.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIPortalClient, ListProductApiPagesCommand } from "@aws-sdk/client-apiportal"; // ES Modules import
 * // const { APIPortalClient, ListProductApiPagesCommand } = require("@aws-sdk/client-apiportal"); // CommonJS import
 * // import type { APIPortalClientConfig } from "@aws-sdk/client-apiportal";
 * const config = {}; // type is APIPortalClientConfig
 * const client = new APIPortalClient(config);
 * const input = { // ListProductApiPagesRequest
 *   productId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   resourceOwnerAccountId: "STRING_VALUE",
 * };
 * const command = new ListProductApiPagesCommand(input);
 * const response = await client.send(command);
 * // { // ListProductApiPagesResponse
 * //   nextToken: "STRING_VALUE",
 * //   items: [ // ProductApiPageList // required
 * //     { // ProductApiPageSummaryNoBody
 * //       productApiPageId: "STRING_VALUE", // required
 * //       productApiPageArn: "STRING_VALUE", // required
 * //       apiId: { // ApiId
 * //         identifierParts: { // IdentifierParts
 * //           path: "STRING_VALUE", // required
 * //           method: "STRING_VALUE", // required
 * //           resourceArn: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       operationName: "STRING_VALUE",
 * //       apiUrl: "STRING_VALUE", // required
 * //       tryItState: "ENABLED" || "DISABLED", // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //       status: "AVAILABLE" || "IN_PROGRESS" || "FAILED", // required
 * //       statusException: { // ProductApiPageStatusException
 * //         exception: "INTERNAL_FAILURE" || "RESOURCE_DELETED" || "MEMBER_LEFT_ORG",
 * //         message: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListProductApiPagesCommandInput - {@link ListProductApiPagesCommandInput}
 * @returns {@link ListProductApiPagesCommandOutput}
 * @see {@link ListProductApiPagesCommandInput} for command's `input` shape.
 * @see {@link ListProductApiPagesCommandOutput} for command's `response` shape.
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
export class ListProductApiPagesCommand extends command<ListProductApiPagesCommandInput, ListProductApiPagesCommandOutput>(
  _ep0,
  _mw0,
  "ListProductApiPages",
  ListProductApiPages$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListProductApiPagesRequest;
      output: ListProductApiPagesResponse;
    };
    sdk: {
      input: ListProductApiPagesCommandInput;
      output: ListProductApiPagesCommandOutput;
    };
  };
}
