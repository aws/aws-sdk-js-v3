// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteResourcePolicyInput, DeleteResourcePolicyOutput } from "../models/models_0";
import { DeleteResourcePolicy } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, SSMIncidentsClientResolvedConfig } from "../SSMIncidentsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteResourcePolicyCommand}.
 */
export interface DeleteResourcePolicyCommandInput extends DeleteResourcePolicyInput {}
/**
 * @public
 *
 * The output of {@link DeleteResourcePolicyCommand}.
 */
export interface DeleteResourcePolicyCommandOutput extends DeleteResourcePolicyOutput, __MetadataBearer {}

/**
 * <p>Deletes the resource policy that Resource Access Manager uses to share your Incident Manager
 *       resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, DeleteResourcePolicyCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, DeleteResourcePolicyCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * // import type { SSMIncidentsClientConfig } from "@aws-sdk/client-ssm-incidents";
 * const config = {}; // type is SSMIncidentsClientConfig
 * const client = new SSMIncidentsClient(config);
 * const input = { // DeleteResourcePolicyInput
 *   resourceArn: "STRING_VALUE", // required
 *   policyId: "STRING_VALUE", // required
 * };
 * const command = new DeleteResourcePolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteResourcePolicyCommandInput - {@link DeleteResourcePolicyCommandInput}
 * @returns {@link DeleteResourcePolicyCommandOutput}
 * @see {@link DeleteResourcePolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteResourcePolicyCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for SSMIncidentsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which doesn't exist. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *       service.</p>
 *
 * @throws {@link SSMIncidentsServiceException}
 * <p>Base exception class for all service exceptions from SSMIncidents service.</p>
 *
 *
 * @public
 */
export class DeleteResourcePolicyCommand extends $Command
  .classBuilder<
    DeleteResourcePolicyCommandInput,
    DeleteResourcePolicyCommandOutput,
    SSMIncidentsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMIncidentsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SSMIncidents", "DeleteResourcePolicy", {})
  .n("SSMIncidentsClient", "DeleteResourcePolicyCommand")
  .sc(DeleteResourcePolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteResourcePolicyInput;
      output: {};
    };
    sdk: {
      input: DeleteResourcePolicyCommandInput;
      output: DeleteResourcePolicyCommandOutput;
    };
  };
}
