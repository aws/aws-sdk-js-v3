// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateTrafficPolicyCommentRequest, UpdateTrafficPolicyCommentResponse } from "../models/models_0";
import { UpdateTrafficPolicyComment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateTrafficPolicyCommentCommand}.
 */
export interface UpdateTrafficPolicyCommentCommandInput extends UpdateTrafficPolicyCommentRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTrafficPolicyCommentCommand}.
 */
export interface UpdateTrafficPolicyCommentCommandOutput extends UpdateTrafficPolicyCommentResponse, __MetadataBearer {}

/**
 * <p>Updates the comment for a specified traffic policy version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, UpdateTrafficPolicyCommentCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, UpdateTrafficPolicyCommentCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // UpdateTrafficPolicyCommentRequest
 *   Id: "STRING_VALUE", // required
 *   Version: Number("int"), // required
 *   Comment: "STRING_VALUE", // required
 * };
 * const command = new UpdateTrafficPolicyCommentCommand(input);
 * const response = await client.send(command);
 * // { // UpdateTrafficPolicyCommentResponse
 * //   TrafficPolicy: { // TrafficPolicy
 * //     Id: "STRING_VALUE", // required
 * //     Version: Number("int"), // required
 * //     Name: "STRING_VALUE", // required
 * //     Type: "SOA" || "A" || "TXT" || "NS" || "CNAME" || "MX" || "NAPTR" || "PTR" || "SRV" || "SPF" || "AAAA" || "CAA" || "DS" || "TLSA" || "SSHFP" || "SVCB" || "HTTPS", // required
 * //     Document: "STRING_VALUE", // required
 * //     Comment: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateTrafficPolicyCommentCommandInput - {@link UpdateTrafficPolicyCommentCommandInput}
 * @returns {@link UpdateTrafficPolicyCommentCommandOutput}
 * @see {@link UpdateTrafficPolicyCommentCommandInput} for command's `input` shape.
 * @see {@link UpdateTrafficPolicyCommentCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link ConcurrentModification} (client fault)
 *  <p>Another user submitted a request to create, update, or delete the object at the same
 * 			time that you did. Retry the request. </p>
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link NoSuchTrafficPolicy} (client fault)
 *  <p>No traffic policy exists with the specified ID.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 *
 * @public
 */
export class UpdateTrafficPolicyCommentCommand extends command<UpdateTrafficPolicyCommentCommandInput, UpdateTrafficPolicyCommentCommandOutput>(
  _ep0,
  _mw0,
  "UpdateTrafficPolicyComment",
  UpdateTrafficPolicyComment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateTrafficPolicyCommentRequest;
      output: UpdateTrafficPolicyCommentResponse;
    };
    sdk: {
      input: UpdateTrafficPolicyCommentCommandInput;
      output: UpdateTrafficPolicyCommentCommandOutput;
    };
  };
}
