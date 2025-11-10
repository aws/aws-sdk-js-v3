// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteTemplateShareInput } from "../models/models_0";
import { DeleteTemplateShare } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTemplateShareCommand}.
 */
export interface DeleteTemplateShareCommandInput extends DeleteTemplateShareInput {}
/**
 * @public
 *
 * The output of {@link DeleteTemplateShareCommand}.
 */
export interface DeleteTemplateShareCommandOutput extends __MetadataBearer {}

/**
 * <p>Delete a review template share.</p>
 *          <p>After the review template share is deleted, Amazon Web Services accounts, users,
 *             organizations, and organizational units (OUs) that you shared the review template with
 *             will no longer be able to apply it to new workloads.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, DeleteTemplateShareCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, DeleteTemplateShareCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // DeleteTemplateShareInput
 *   ShareId: "STRING_VALUE", // required
 *   TemplateArn: "STRING_VALUE", // required
 *   ClientRequestToken: "STRING_VALUE", // required
 * };
 * const command = new DeleteTemplateShareCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTemplateShareCommandInput - {@link DeleteTemplateShareCommandInput}
 * @returns {@link DeleteTemplateShareCommandOutput}
 * @see {@link DeleteTemplateShareCommandInput} for command's `input` shape.
 * @see {@link DeleteTemplateShareCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The resource has already been processed, was deleted, or is too large.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is a problem with the Well-Architected Tool API service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The user input is not valid.</p>
 *
 * @throws {@link WellArchitectedServiceException}
 * <p>Base exception class for all service exceptions from WellArchitected service.</p>
 *
 *
 * @public
 */
export class DeleteTemplateShareCommand extends $Command
  .classBuilder<
    DeleteTemplateShareCommandInput,
    DeleteTemplateShareCommandOutput,
    WellArchitectedClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WellArchitectedClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WellArchitectedApiServiceLambda", "DeleteTemplateShare", {})
  .n("WellArchitectedClient", "DeleteTemplateShareCommand")
  .sc(DeleteTemplateShare)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTemplateShareInput;
      output: {};
    };
    sdk: {
      input: DeleteTemplateShareCommandInput;
      output: DeleteTemplateShareCommandOutput;
    };
  };
}
