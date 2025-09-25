// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetContactPolicyRequest, GetContactPolicyResult } from "../models/models_0";
import { GetContactPolicy } from "../schemas/schemas_15_Policy";
import { ServiceInputTypes, ServiceOutputTypes, SSMContactsClientResolvedConfig } from "../SSMContactsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetContactPolicyCommand}.
 */
export interface GetContactPolicyCommandInput extends GetContactPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetContactPolicyCommand}.
 */
export interface GetContactPolicyCommandOutput extends GetContactPolicyResult, __MetadataBearer {}

/**
 * <p>Retrieves the resource policies attached to the specified contact or escalation
 *          plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, GetContactPolicyCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, GetContactPolicyCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * // import type { SSMContactsClientConfig } from "@aws-sdk/client-ssm-contacts";
 * const config = {}; // type is SSMContactsClientConfig
 * const client = new SSMContactsClient(config);
 * const input = { // GetContactPolicyRequest
 *   ContactArn: "STRING_VALUE", // required
 * };
 * const command = new GetContactPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetContactPolicyResult
 * //   ContactArn: "STRING_VALUE",
 * //   Policy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetContactPolicyCommandInput - {@link GetContactPolicyCommandInput}
 * @returns {@link GetContactPolicyCommandOutput}
 * @see {@link GetContactPolicyCommandInput} for command's `input` shape.
 * @see {@link GetContactPolicyCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for SSMContactsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource that doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *          service.</p>
 *
 * @throws {@link SSMContactsServiceException}
 * <p>Base exception class for all service exceptions from SSMContacts service.</p>
 *
 *
 * @public
 */
export class GetContactPolicyCommand extends $Command
  .classBuilder<
    GetContactPolicyCommandInput,
    GetContactPolicyCommandOutput,
    SSMContactsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMContactsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SSMContacts", "GetContactPolicy", {})
  .n("SSMContactsClient", "GetContactPolicyCommand")
  .sc(GetContactPolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetContactPolicyRequest;
      output: GetContactPolicyResult;
    };
    sdk: {
      input: GetContactPolicyCommandInput;
      output: GetContactPolicyCommandOutput;
    };
  };
}
