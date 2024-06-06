// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { DeletePrincipalMappingRequest } from "../models/models_0";
import { de_DeletePrincipalMappingCommand, se_DeletePrincipalMappingCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeletePrincipalMappingCommand}.
 */
export interface DeletePrincipalMappingCommandInput extends DeletePrincipalMappingRequest {}
/**
 * @public
 *
 * The output of {@link DeletePrincipalMappingCommand}.
 */
export interface DeletePrincipalMappingCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a group so that all users and sub groups that belong to the group can no
 *             longer access documents only available to that group.</p>
 *          <p>For example, after deleting the group "Summer Interns", all interns who belonged to
 *             that group no longer see intern-only documents in their search results.</p>
 *          <p>If you want to delete or replace users or sub groups of a group, you need to use the
 *                 <code>PutPrincipalMapping</code> operation. For example, if a user in the group
 *             "Engineering" leaves the engineering team and another user takes their place, you
 *             provide an updated list of users or sub groups that belong to the "Engineering" group
 *             when calling <code>PutPrincipalMapping</code>. You can update your internal list of
 *             users or sub groups and input this list when calling
 *             <code>PutPrincipalMapping</code>.</p>
 *          <p>
 *             <code>DeletePrincipalMapping</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, DeletePrincipalMappingCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, DeletePrincipalMappingCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const input = { // DeletePrincipalMappingRequest
 *   IndexId: "STRING_VALUE", // required
 *   DataSourceId: "STRING_VALUE",
 *   GroupId: "STRING_VALUE", // required
 *   OrderingId: Number("long"),
 * };
 * const command = new DeletePrincipalMappingCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePrincipalMappingCommandInput - {@link DeletePrincipalMappingCommandInput}
 * @returns {@link DeletePrincipalMappingCommandOutput}
 * @see {@link DeletePrincipalMappingCommandInput} for command's `input` shape.
 * @see {@link DeletePrincipalMappingCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for KendraClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action. Please ensure you have the
 *             required permission policies and user accounts and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflict occurred with the request. Please fix any inconsistences with your
 *             resources and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Kendra service.
 *             Please wait a few minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you want to use doesn’t exist. Please check you have provided the correct
 *             resource and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. Please reduce the number of requests
 *             and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints set by the Amazon Kendra service.
 *             Please provide the correct input and try again.</p>
 *
 * @throws {@link KendraServiceException}
 * <p>Base exception class for all service exceptions from Kendra service.</p>
 *
 * @public
 */
export class DeletePrincipalMappingCommand extends $Command
  .classBuilder<
    DeletePrincipalMappingCommandInput,
    DeletePrincipalMappingCommandOutput,
    KendraClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: KendraClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSKendraFrontendService", "DeletePrincipalMapping", {})
  .n("KendraClient", "DeletePrincipalMappingCommand")
  .f(void 0, void 0)
  .ser(se_DeletePrincipalMappingCommand)
  .de(de_DeletePrincipalMappingCommand)
  .build() {}
