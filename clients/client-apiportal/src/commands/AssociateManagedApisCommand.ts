// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateManagedApisRequest, AssociateManagedApisResponse } from "../models/models_0";
import { AssociateManagedApis$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateManagedApisCommand}.
 */
export interface AssociateManagedApisCommandInput extends AssociateManagedApisRequest {}
/**
 * @public
 *
 * The output of {@link AssociateManagedApisCommand}.
 */
export interface AssociateManagedApisCommandOutput extends AssociateManagedApisResponse, __MetadataBearer {}

/**
 * Associate one or more Managed APIs with a product. Best-effort — IDs that fail are returned in
 * \{@link AssociateManagedApisResponse#failedItems\}; IDs that succeed are omitted. Associating an
 * already-associated Managed API is a no-op (not reported as failure).
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIPortalClient, AssociateManagedApisCommand } from "@aws-sdk/client-apiportal"; // ES Modules import
 * // const { APIPortalClient, AssociateManagedApisCommand } = require("@aws-sdk/client-apiportal"); // CommonJS import
 * // import type { APIPortalClientConfig } from "@aws-sdk/client-apiportal";
 * const config = {}; // type is APIPortalClientConfig
 * const client = new APIPortalClient(config);
 * const input = { // AssociateManagedApisRequest
 *   productId: "STRING_VALUE", // required
 *   managedApiIds: [ // ManagedApiIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new AssociateManagedApisCommand(input);
 * const response = await client.send(command);
 * // { // AssociateManagedApisResponse
 * //   failedItems: [ // FailedManagedApiItemList // required
 * //     { // FailedManagedApiItem
 * //       managedApiId: "STRING_VALUE", // required
 * //       errorCode: "MANAGED_API_NOT_FOUND" || "INTERNAL_ERROR", // required
 * //       errorMessage: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param AssociateManagedApisCommandInput - {@link AssociateManagedApisCommandInput}
 * @returns {@link AssociateManagedApisCommandOutput}
 * @see {@link AssociateManagedApisCommandInput} for command's `input` shape.
 * @see {@link AssociateManagedApisCommandOutput} for command's `response` shape.
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
export class AssociateManagedApisCommand extends command<AssociateManagedApisCommandInput, AssociateManagedApisCommandOutput>(
  _ep0,
  _mw0,
  "AssociateManagedApis",
  AssociateManagedApis$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateManagedApisRequest;
      output: AssociateManagedApisResponse;
    };
    sdk: {
      input: AssociateManagedApisCommandInput;
      output: AssociateManagedApisCommandOutput;
    };
  };
}
