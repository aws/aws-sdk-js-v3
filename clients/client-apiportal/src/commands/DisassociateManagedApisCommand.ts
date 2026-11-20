// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociateManagedApisRequest, DisassociateManagedApisResponse } from "../models/models_0";
import { DisassociateManagedApis$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateManagedApisCommand}.
 */
export interface DisassociateManagedApisCommandInput extends DisassociateManagedApisRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateManagedApisCommand}.
 */
export interface DisassociateManagedApisCommandOutput extends DisassociateManagedApisResponse, __MetadataBearer {}

/**
 * Disassociate one or more Managed APIs from a product. Best-effort — IDs that fail are returned
 * in \{@link DisassociateManagedApisResponse#failedItems\}; IDs that succeed are omitted.
 * Disassociating an unmapped Managed API is a no-op (not reported as failure).
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIPortalClient, DisassociateManagedApisCommand } from "@aws-sdk/client-apiportal"; // ES Modules import
 * // const { APIPortalClient, DisassociateManagedApisCommand } = require("@aws-sdk/client-apiportal"); // CommonJS import
 * // import type { APIPortalClientConfig } from "@aws-sdk/client-apiportal";
 * const config = {}; // type is APIPortalClientConfig
 * const client = new APIPortalClient(config);
 * const input = { // DisassociateManagedApisRequest
 *   productId: "STRING_VALUE", // required
 *   managedApiIds: [ // ManagedApiIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DisassociateManagedApisCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateManagedApisResponse
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
 * @param DisassociateManagedApisCommandInput - {@link DisassociateManagedApisCommandInput}
 * @returns {@link DisassociateManagedApisCommandOutput}
 * @see {@link DisassociateManagedApisCommandInput} for command's `input` shape.
 * @see {@link DisassociateManagedApisCommandOutput} for command's `response` shape.
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
export class DisassociateManagedApisCommand extends command<DisassociateManagedApisCommandInput, DisassociateManagedApisCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateManagedApis",
  DisassociateManagedApis$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateManagedApisRequest;
      output: DisassociateManagedApisResponse;
    };
    sdk: {
      input: DisassociateManagedApisCommandInput;
      output: DisassociateManagedApisCommandOutput;
    };
  };
}
