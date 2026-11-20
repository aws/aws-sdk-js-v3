// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListProductPagesRequest, ListProductPagesResponse } from "../models/models_0";
import { ListProductPages$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListProductPagesCommand}.
 */
export interface ListProductPagesCommandInput extends ListProductPagesRequest {}
/**
 * @public
 *
 * The output of {@link ListProductPagesCommand}.
 */
export interface ListProductPagesCommandOutput extends ListProductPagesResponse, __MetadataBearer {}

/**
 * Lists the product pages in a product. The results do not include page bodies.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIPortalClient, ListProductPagesCommand } from "@aws-sdk/client-apiportal"; // ES Modules import
 * // const { APIPortalClient, ListProductPagesCommand } = require("@aws-sdk/client-apiportal"); // CommonJS import
 * // import type { APIPortalClientConfig } from "@aws-sdk/client-apiportal";
 * const config = {}; // type is APIPortalClientConfig
 * const client = new APIPortalClient(config);
 * const input = { // ListProductPagesRequest
 *   productId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   resourceOwnerAccountId: "STRING_VALUE",
 * };
 * const command = new ListProductPagesCommand(input);
 * const response = await client.send(command);
 * // { // ListProductPagesResponse
 * //   nextToken: "STRING_VALUE",
 * //   items: [ // ProductPageList // required
 * //     { // ProductPageSummaryNoBody
 * //       productPageId: "STRING_VALUE", // required
 * //       productPageArn: "STRING_VALUE", // required
 * //       pageTitle: "STRING_VALUE", // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListProductPagesCommandInput - {@link ListProductPagesCommandInput}
 * @returns {@link ListProductPagesCommandOutput}
 * @see {@link ListProductPagesCommandInput} for command's `input` shape.
 * @see {@link ListProductPagesCommandOutput} for command's `response` shape.
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
export class ListProductPagesCommand extends command<ListProductPagesCommandInput, ListProductPagesCommandOutput>(
  _ep0,
  _mw0,
  "ListProductPages",
  ListProductPages$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListProductPagesRequest;
      output: ListProductPagesResponse;
    };
    sdk: {
      input: ListProductPagesCommandInput;
      output: ListProductPagesCommandOutput;
    };
  };
}
