// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetProductApiPageRequest, GetProductApiPageResponse } from "../models/models_0";
import { GetProductApiPage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetProductApiPageCommand}.
 */
export interface GetProductApiPageCommandInput extends GetProductApiPageRequest {}
/**
 * @public
 *
 * The output of {@link GetProductApiPageCommand}.
 */
export interface GetProductApiPageCommandOutput extends GetProductApiPageResponse, __MetadataBearer {}

/**
 * Returns an API page, including its body.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIPortalClient, GetProductApiPageCommand } from "@aws-sdk/client-apiportal"; // ES Modules import
 * // const { APIPortalClient, GetProductApiPageCommand } = require("@aws-sdk/client-apiportal"); // CommonJS import
 * // import type { APIPortalClientConfig } from "@aws-sdk/client-apiportal";
 * const config = {}; // type is APIPortalClientConfig
 * const client = new APIPortalClient(config);
 * const input = { // GetProductApiPageRequest
 *   productId: "STRING_VALUE", // required
 *   productApiPageId: "STRING_VALUE", // required
 *   resourceOwnerAccountId: "STRING_VALUE",
 *   includeRawDisplayContent: true || false,
 * };
 * const command = new GetProductApiPageCommand(input);
 * const response = await client.send(command);
 * // { // GetProductApiPageResponse
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
 * //   rawDisplayContent: "STRING_VALUE",
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
 * @param GetProductApiPageCommandInput - {@link GetProductApiPageCommandInput}
 * @returns {@link GetProductApiPageCommandOutput}
 * @see {@link GetProductApiPageCommandInput} for command's `input` shape.
 * @see {@link GetProductApiPageCommandOutput} for command's `response` shape.
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
export class GetProductApiPageCommand extends command<GetProductApiPageCommandInput, GetProductApiPageCommandOutput>(
  _ep0,
  _mw0,
  "GetProductApiPage",
  GetProductApiPage$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetProductApiPageRequest;
      output: GetProductApiPageResponse;
    };
    sdk: {
      input: GetProductApiPageCommandInput;
      output: GetProductApiPageCommandOutput;
    };
  };
}
