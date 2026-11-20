// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateProductApiPageRequest, UpdateProductApiPageResponse } from "../models/models_0";
import { UpdateProductApiPage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateProductApiPageCommand}.
 */
export interface UpdateProductApiPageCommandInput extends UpdateProductApiPageRequest {}
/**
 * @public
 *
 * The output of {@link UpdateProductApiPageCommand}.
 */
export interface UpdateProductApiPageCommandOutput extends UpdateProductApiPageResponse, __MetadataBearer {}

/**
 * Updates an API page. Only the fields supplied in the request are changed.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIPortalClient, UpdateProductApiPageCommand } from "@aws-sdk/client-apiportal"; // ES Modules import
 * // const { APIPortalClient, UpdateProductApiPageCommand } = require("@aws-sdk/client-apiportal"); // CommonJS import
 * // import type { APIPortalClientConfig } from "@aws-sdk/client-apiportal";
 * const config = {}; // type is APIPortalClientConfig
 * const client = new APIPortalClient(config);
 * const input = { // UpdateProductApiPageRequest
 *   productId: "STRING_VALUE", // required
 *   productApiPageId: "STRING_VALUE", // required
 *   displayContent: { // ApiPageDisplayContent Union: only one key present
 *     none: {},
 *     overrides: { // DisplayContentOverrides
 *       operationName: "STRING_VALUE",
 *       apiUrl: "STRING_VALUE",
 *       body: "STRING_VALUE",
 *     },
 *   },
 *   tryItState: "ENABLED" || "DISABLED",
 * };
 * const command = new UpdateProductApiPageCommand(input);
 * const response = await client.send(command);
 * // { // UpdateProductApiPageResponse
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
 * // };
 *
 * ```
 *
 * @param UpdateProductApiPageCommandInput - {@link UpdateProductApiPageCommandInput}
 * @returns {@link UpdateProductApiPageCommandOutput}
 * @see {@link UpdateProductApiPageCommandInput} for command's `input` shape.
 * @see {@link UpdateProductApiPageCommandOutput} for command's `response` shape.
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
export class UpdateProductApiPageCommand extends command<UpdateProductApiPageCommandInput, UpdateProductApiPageCommandOutput>(
  _ep0,
  _mw0,
  "UpdateProductApiPage",
  UpdateProductApiPage$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateProductApiPageRequest;
      output: UpdateProductApiPageResponse;
    };
    sdk: {
      input: UpdateProductApiPageCommandInput;
      output: UpdateProductApiPageCommandOutput;
    };
  };
}
