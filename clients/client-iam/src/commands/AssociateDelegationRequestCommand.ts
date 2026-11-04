// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateDelegationRequestRequest } from "../models/models_0";
import { AssociateDelegationRequest$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateDelegationRequestCommand}.
 */
export interface AssociateDelegationRequestCommandInput extends AssociateDelegationRequestRequest {}
/**
 * @public
 *
 * The output of {@link AssociateDelegationRequestCommand}.
 */
export interface AssociateDelegationRequestCommandOutput extends __MetadataBearer {}

/**
 * Associates a delegation request with the current identity.
 *
 * If the partner that created the delegation request has specified the owner account during creation, only an identity from that owner account can call the `AssociateDelegationRequest` API for the specified delegation request. Once the `AssociateDelegationRequest` API call is successful, the ARN of the current calling identity will be stored as the `ownerId` of the request.
 *
 * If the partner that created the delegation request has not specified the owner account during creation, any caller from any account can call the `AssociateDelegationRequest` API for the delegation request. Once this API call is successful, the ARN of the current calling identity will be stored as the `ownerId` and the Amazon Web Services account ID of the current calling identity will be stored as the `ownerAccount` of the request.
 *
 * For more details, see [Managing Permissions for Delegation Requests](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies-temporary-delegation.html#temporary-delegation-managing-permissions).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, AssociateDelegationRequestCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, AssociateDelegationRequestCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // AssociateDelegationRequestRequest
 *   DelegationRequestId: "STRING_VALUE", // required
 * };
 * const command = new AssociateDelegationRequestCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateDelegationRequestCommandInput - {@link AssociateDelegationRequestCommandInput}
 * @returns {@link AssociateDelegationRequestCommandOutput}
 * @see {@link AssociateDelegationRequestCommandInput} for command's `input` shape.
 * @see {@link AssociateDelegationRequestCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * The request was rejected because multiple requests to change this object were submitted simultaneously. Wait a few minutes and submit your request again.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The request was rejected because an invalid or out-of-range value was supplied for an input parameter.
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *
 * The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link IAMServiceException}
 *
 * Base exception class for all service exceptions from IAM service.
 *
 * @public
 */
export class AssociateDelegationRequestCommand extends command<AssociateDelegationRequestCommandInput, AssociateDelegationRequestCommandOutput>(
  _ep0,
  _mw0,
  "AssociateDelegationRequest",
  AssociateDelegationRequest$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateDelegationRequestRequest;
      output: {};
    };
    sdk: {
      input: AssociateDelegationRequestCommandInput;
      output: AssociateDelegationRequestCommandOutput;
    };
  };
}
