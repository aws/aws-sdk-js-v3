// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetProductPageRequest, GetProductPageResponse } from "../models/models_0";
import { GetProductPage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetProductPageCommand}.
 */
export interface GetProductPageCommandInput extends GetProductPageRequest {}
/**
 * @public
 *
 * The output of {@link GetProductPageCommand}.
 */
export interface GetProductPageCommandOutput extends GetProductPageResponse, __MetadataBearer {}

/**
 * Returns a product page, including its body.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIPortalClient, GetProductPageCommand } from "@aws-sdk/client-apiportal"; // ES Modules import
 * // const { APIPortalClient, GetProductPageCommand } = require("@aws-sdk/client-apiportal"); // CommonJS import
 * // import type { APIPortalClientConfig } from "@aws-sdk/client-apiportal";
 * const config = {}; // type is APIPortalClientConfig
 * const client = new APIPortalClient(config);
 * const input = { // GetProductPageRequest
 *   productId: "STRING_VALUE", // required
 *   productPageId: "STRING_VALUE", // required
 *   resourceOwnerAccountId: "STRING_VALUE",
 * };
 * const command = new GetProductPageCommand(input);
 * const response = await client.send(command);
 * // { // GetProductPageResponse
 * //   productPageId: "STRING_VALUE", // required
 * //   productPageArn: "STRING_VALUE", // required
 * //   displayContent: { // DisplayContent
 * //     title: "STRING_VALUE", // required
 * //     body: "STRING_VALUE", // required
 * //   },
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetProductPageCommandInput - {@link GetProductPageCommandInput}
 * @returns {@link GetProductPageCommandOutput}
 * @see {@link GetProductPageCommandInput} for command's `input` shape.
 * @see {@link GetProductPageCommandOutput} for command's `response` shape.
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
export class GetProductPageCommand extends command<GetProductPageCommandInput, GetProductPageCommandOutput>(
  _ep0,
  _mw0,
  "GetProductPage",
  GetProductPage$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetProductPageRequest;
      output: GetProductPageResponse;
    };
    sdk: {
      input: GetProductPageCommandInput;
      output: GetProductPageCommandOutput;
    };
  };
}
