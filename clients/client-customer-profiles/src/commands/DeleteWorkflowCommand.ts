// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteWorkflowRequest, DeleteWorkflowResponse } from "../models/models_0";
import { de_DeleteWorkflowCommand, se_DeleteWorkflowCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteWorkflowCommand}.
 */
export interface DeleteWorkflowCommandInput extends DeleteWorkflowRequest {}
/**
 * @public
 *
 * The output of {@link DeleteWorkflowCommand}.
 */
export interface DeleteWorkflowCommandOutput extends DeleteWorkflowResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified workflow and all its corresponding resources. This is an async process.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, DeleteWorkflowCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, DeleteWorkflowCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const input = { // DeleteWorkflowRequest
 *   DomainName: "STRING_VALUE", // required
 *   WorkflowId: "STRING_VALUE", // required
 * };
 * const command = new DeleteWorkflowCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteWorkflowCommandInput - {@link DeleteWorkflowCommandInput}
 * @returns {@link DeleteWorkflowCommandOutput}
 * @see {@link DeleteWorkflowCommandInput} for command's `input` shape.
 * @see {@link DeleteWorkflowCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for CustomerProfilesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource does not exist, or access was denied.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>You exceeded the maximum number of requests.</p>
 *
 * @throws {@link CustomerProfilesServiceException}
 * <p>Base exception class for all service exceptions from CustomerProfiles service.</p>
 *
 * @public
 */
export class DeleteWorkflowCommand extends $Command
  .classBuilder<
    DeleteWorkflowCommandInput,
    DeleteWorkflowCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CustomerProfiles_20200815", "DeleteWorkflow", {})
  .n("CustomerProfilesClient", "DeleteWorkflowCommand")
  .f(void 0, void 0)
  .ser(se_DeleteWorkflowCommand)
  .de(de_DeleteWorkflowCommand)
  .build() {}
