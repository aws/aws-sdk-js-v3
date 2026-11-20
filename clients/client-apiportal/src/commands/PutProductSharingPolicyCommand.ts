// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutProductSharingPolicyRequest } from "../models/models_0";
import { PutProductSharingPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutProductSharingPolicyCommand}.
 */
export interface PutProductSharingPolicyCommandInput extends PutProductSharingPolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutProductSharingPolicyCommand}.
 */
export interface PutProductSharingPolicyCommandOutput extends __MetadataBearer {}

/**
 * Creates or replaces the sharing policy of a product. The policy controls which other accounts can read the product.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIPortalClient, PutProductSharingPolicyCommand } from "@aws-sdk/client-apiportal"; // ES Modules import
 * // const { APIPortalClient, PutProductSharingPolicyCommand } = require("@aws-sdk/client-apiportal"); // CommonJS import
 * // import type { APIPortalClientConfig } from "@aws-sdk/client-apiportal";
 * const config = {}; // type is APIPortalClientConfig
 * const client = new APIPortalClient(config);
 * const input = { // PutProductSharingPolicyRequest
 *   productId: "STRING_VALUE", // required
 *   policyDocument: "STRING_VALUE", // required
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new PutProductSharingPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutProductSharingPolicyCommandInput - {@link PutProductSharingPolicyCommandInput}
 * @returns {@link PutProductSharingPolicyCommandOutput}
 * @see {@link PutProductSharingPolicyCommandInput} for command's `input` shape.
 * @see {@link PutProductSharingPolicyCommandOutput} for command's `response` shape.
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
export class PutProductSharingPolicyCommand extends command<PutProductSharingPolicyCommandInput, PutProductSharingPolicyCommandOutput>(
  _ep0,
  _mw0,
  "PutProductSharingPolicy",
  PutProductSharingPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutProductSharingPolicyRequest;
      output: {};
    };
    sdk: {
      input: PutProductSharingPolicyCommandInput;
      output: PutProductSharingPolicyCommandOutput;
    };
  };
}
