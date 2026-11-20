// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetProductSharingPolicyRequest, GetProductSharingPolicyResponse } from "../models/models_0";
import { GetProductSharingPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetProductSharingPolicyCommand}.
 */
export interface GetProductSharingPolicyCommandInput extends GetProductSharingPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetProductSharingPolicyCommand}.
 */
export interface GetProductSharingPolicyCommandOutput extends GetProductSharingPolicyResponse, __MetadataBearer {}

/**
 * Returns the sharing policy of a product.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIPortalClient, GetProductSharingPolicyCommand } from "@aws-sdk/client-apiportal"; // ES Modules import
 * // const { APIPortalClient, GetProductSharingPolicyCommand } = require("@aws-sdk/client-apiportal"); // CommonJS import
 * // import type { APIPortalClientConfig } from "@aws-sdk/client-apiportal";
 * const config = {}; // type is APIPortalClientConfig
 * const client = new APIPortalClient(config);
 * const input = { // GetProductSharingPolicyRequest
 *   productId: "STRING_VALUE", // required
 * };
 * const command = new GetProductSharingPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetProductSharingPolicyResponse
 * //   productId: "STRING_VALUE", // required
 * //   policyDocument: "STRING_VALUE", // required
 * //   tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetProductSharingPolicyCommandInput - {@link GetProductSharingPolicyCommandInput}
 * @returns {@link GetProductSharingPolicyCommandOutput}
 * @see {@link GetProductSharingPolicyCommandInput} for command's `input` shape.
 * @see {@link GetProductSharingPolicyCommandOutput} for command's `response` shape.
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
export class GetProductSharingPolicyCommand extends command<GetProductSharingPolicyCommandInput, GetProductSharingPolicyCommandOutput>(
  _ep0,
  _mw0,
  "GetProductSharingPolicy",
  GetProductSharingPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetProductSharingPolicyRequest;
      output: GetProductSharingPolicyResponse;
    };
    sdk: {
      input: GetProductSharingPolicyCommandInput;
      output: GetProductSharingPolicyCommandOutput;
    };
  };
}
