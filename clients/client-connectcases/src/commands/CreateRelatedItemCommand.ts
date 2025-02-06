// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectCasesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectCasesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateRelatedItemRequest, CreateRelatedItemResponse } from "../models/models_0";
import { de_CreateRelatedItemCommand, se_CreateRelatedItemCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateRelatedItemCommand}.
 */
export interface CreateRelatedItemCommandInput extends CreateRelatedItemRequest {}
/**
 * @public
 *
 * The output of {@link CreateRelatedItemCommand}.
 */
export interface CreateRelatedItemCommandOutput extends CreateRelatedItemResponse, __MetadataBearer {}

/**
 * <p>Creates a related item (comments, tasks, and contacts) and associates it with a
 *       case.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>A Related Item is a resource that is associated with a case. It may or may not have
 *             an external identifier linking it to an external resource (for example, a
 *               <code>contactArn</code>). All Related Items have their own internal identifier, the
 *               <code>relatedItemArn</code>. Examples of related items include <code>comments</code>
 *             and <code>contacts</code>.</p>
 *                </li>
 *                <li>
 *                   <p>If you provide a value for <code>performedBy.userArn</code> you must also have
 *               <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeUser.html">DescribeUser</a> permission on the ARN of the user that you provide.</p>
 *                </li>
 *                <li>
 *                   <p>The <code>type</code> field is reserved for internal use only.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCasesClient, CreateRelatedItemCommand } from "@aws-sdk/client-connectcases"; // ES Modules import
 * // const { ConnectCasesClient, CreateRelatedItemCommand } = require("@aws-sdk/client-connectcases"); // CommonJS import
 * const client = new ConnectCasesClient(config);
 * const input = { // CreateRelatedItemRequest
 *   domainId: "STRING_VALUE", // required
 *   caseId: "STRING_VALUE", // required
 *   type: "STRING_VALUE", // required
 *   content: { // RelatedItemInputContent Union: only one key present
 *     contact: { // Contact
 *       contactArn: "STRING_VALUE", // required
 *     },
 *     comment: { // CommentContent
 *       body: "STRING_VALUE", // required
 *       contentType: "STRING_VALUE", // required
 *     },
 *     file: { // FileContent
 *       fileArn: "STRING_VALUE", // required
 *     },
 *   },
 *   performedBy: { // UserUnion Union: only one key present
 *     userArn: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateRelatedItemCommand(input);
 * const response = await client.send(command);
 * // { // CreateRelatedItemResponse
 * //   relatedItemId: "STRING_VALUE", // required
 * //   relatedItemArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateRelatedItemCommandInput - {@link CreateRelatedItemCommandInput}
 * @returns {@link CreateRelatedItemCommandOutput}
 * @see {@link CreateRelatedItemCommandInput} for command's `input` shape.
 * @see {@link CreateRelatedItemCommandOutput} for command's `response` shape.
 * @see {@link ConnectCasesClientResolvedConfig | config} for ConnectCasesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>We couldn't process your request because of an issue with the server. Try again
 *       later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We couldn't find the requested resource. Check that your resources exists and were created
 *       in the same Amazon Web Services Region as your request, and try your request again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota has been exceeded. For a list of service quotas, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html">Amazon Connect Service Quotas</a> in the <i>Amazon Connect
 *         Administrator Guide</i>.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate has been exceeded for this API. Please try again after a few minutes.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. Check the syntax and try again.</p>
 *
 * @throws {@link ConnectCasesServiceException}
 * <p>Base exception class for all service exceptions from ConnectCases service.</p>
 *
 * @public
 */
export class CreateRelatedItemCommand extends $Command
  .classBuilder<
    CreateRelatedItemCommandInput,
    CreateRelatedItemCommandOutput,
    ConnectCasesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectCasesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectCases", "CreateRelatedItem", {})
  .n("ConnectCasesClient", "CreateRelatedItemCommand")
  .f(void 0, void 0)
  .ser(se_CreateRelatedItemCommand)
  .de(de_CreateRelatedItemCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRelatedItemRequest;
      output: CreateRelatedItemResponse;
    };
    sdk: {
      input: CreateRelatedItemCommandInput;
      output: CreateRelatedItemCommandOutput;
    };
  };
}
