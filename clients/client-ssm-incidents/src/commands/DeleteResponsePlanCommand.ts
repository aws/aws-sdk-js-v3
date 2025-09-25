// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteResponsePlanInput, DeleteResponsePlanOutput } from "../models/models_0";
import { DeleteResponsePlan } from "../schemas/schemas_13_DeleteResponsePlan";
import { ServiceInputTypes, ServiceOutputTypes, SSMIncidentsClientResolvedConfig } from "../SSMIncidentsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteResponsePlanCommand}.
 */
export interface DeleteResponsePlanCommandInput extends DeleteResponsePlanInput {}
/**
 * @public
 *
 * The output of {@link DeleteResponsePlanCommand}.
 */
export interface DeleteResponsePlanCommandOutput extends DeleteResponsePlanOutput, __MetadataBearer {}

/**
 * <p>Deletes the specified response plan. Deleting a response plan stops all linked CloudWatch alarms and EventBridge events from creating an incident with this response
 *       plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, DeleteResponsePlanCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, DeleteResponsePlanCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * // import type { SSMIncidentsClientConfig } from "@aws-sdk/client-ssm-incidents";
 * const config = {}; // type is SSMIncidentsClientConfig
 * const client = new SSMIncidentsClient(config);
 * const input = { // DeleteResponsePlanInput
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new DeleteResponsePlanCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteResponsePlanCommandInput - {@link DeleteResponsePlanCommandInput}
 * @returns {@link DeleteResponsePlanCommandOutput}
 * @see {@link DeleteResponsePlanCommandInput} for command's `input` shape.
 * @see {@link DeleteResponsePlanCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for SSMIncidentsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
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
export class DeleteResponsePlanCommand extends $Command
  .classBuilder<
    DeleteResponsePlanCommandInput,
    DeleteResponsePlanCommandOutput,
    SSMIncidentsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMIncidentsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SSMIncidents", "DeleteResponsePlan", {})
  .n("SSMIncidentsClient", "DeleteResponsePlanCommand")
  .sc(DeleteResponsePlan)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteResponsePlanInput;
      output: {};
    };
    sdk: {
      input: DeleteResponsePlanCommandInput;
      output: DeleteResponsePlanCommandOutput;
    };
  };
}
