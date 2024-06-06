// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { DeleteIndexRequest } from "../models/models_0";
import { de_DeleteIndexCommand, se_DeleteIndexCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteIndexCommand}.
 */
export interface DeleteIndexCommandInput extends DeleteIndexRequest {}
/**
 * @public
 *
 * The output of {@link DeleteIndexCommand}.
 */
export interface DeleteIndexCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes an Amazon Kendra index. An exception is not thrown if the index is
 *       already being deleted. While the index is being deleted, the <code>Status</code> field
 *       returned by a call to the <code>DescribeIndex</code> API is set to
 *       <code>DELETING</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, DeleteIndexCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, DeleteIndexCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const input = { // DeleteIndexRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new DeleteIndexCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteIndexCommandInput - {@link DeleteIndexCommandInput}
 * @returns {@link DeleteIndexCommandOutput}
 * @see {@link DeleteIndexCommandInput} for command's `input` shape.
 * @see {@link DeleteIndexCommandOutput} for command's `response` shape.
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
export class DeleteIndexCommand extends $Command
  .classBuilder<
    DeleteIndexCommandInput,
    DeleteIndexCommandOutput,
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
  .s("AWSKendraFrontendService", "DeleteIndex", {})
  .n("KendraClient", "DeleteIndexCommand")
  .f(void 0, void 0)
  .ser(se_DeleteIndexCommand)
  .de(de_DeleteIndexCommand)
  .build() {}
