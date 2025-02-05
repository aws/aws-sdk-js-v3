// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateContentAssociationRequest, CreateContentAssociationResponse } from "../models/models_0";
import { de_CreateContentAssociationCommand, se_CreateContentAssociationCommand } from "../protocols/Aws_restJson1";
import { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateContentAssociationCommand}.
 */
export interface CreateContentAssociationCommandInput extends CreateContentAssociationRequest {}
/**
 * @public
 *
 * The output of {@link CreateContentAssociationCommand}.
 */
export interface CreateContentAssociationCommandOutput extends CreateContentAssociationResponse, __MetadataBearer {}

/**
 * <p>Creates an association between a content resource in a knowledge base and <a href="https://docs.aws.amazon.com/connect/latest/adminguide/step-by-step-guided-experiences.html">step-by-step guides</a>. Step-by-step guides offer instructions to agents for resolving
 *       common customer issues. You create a content association to integrate Amazon Q in Connect and
 *       step-by-step guides. </p>
 *          <p>After you integrate Amazon Q and step-by-step guides, when Amazon Q provides a
 *       recommendation to an agent based on the intent that it's detected, it also provides them with
 *       the option to start the step-by-step guide that you have associated with the content.</p>
 *          <p>Note the following limitations:</p>
 *          <ul>
 *             <li>
 *                <p>You can create only one content association for each content resource in a knowledge
 *           base.</p>
 *             </li>
 *             <li>
 *                <p>You can associate a step-by-step guide with multiple content resources.</p>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/integrate-q-with-guides.html">Integrate Amazon Q in Connect with
 *         step-by-step guides</a> in the <i>Amazon Connect Administrator
 *         Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, CreateContentAssociationCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, CreateContentAssociationCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new QConnectClient(config);
 * const input = { // CreateContentAssociationRequest
 *   clientToken: "STRING_VALUE",
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   contentId: "STRING_VALUE", // required
 *   associationType: "STRING_VALUE", // required
 *   association: { // ContentAssociationContents Union: only one key present
 *     amazonConnectGuideAssociation: { // AmazonConnectGuideAssociationData
 *       flowId: "STRING_VALUE",
 *     },
 *   },
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateContentAssociationCommand(input);
 * const response = await client.send(command);
 * // { // CreateContentAssociationResponse
 * //   contentAssociation: { // ContentAssociationData
 * //     knowledgeBaseId: "STRING_VALUE", // required
 * //     knowledgeBaseArn: "STRING_VALUE", // required
 * //     contentId: "STRING_VALUE", // required
 * //     contentArn: "STRING_VALUE", // required
 * //     contentAssociationId: "STRING_VALUE", // required
 * //     contentAssociationArn: "STRING_VALUE", // required
 * //     associationType: "STRING_VALUE", // required
 * //     associationData: { // ContentAssociationContents Union: only one key present
 * //       amazonConnectGuideAssociation: { // AmazonConnectGuideAssociationData
 * //         flowId: "STRING_VALUE",
 * //       },
 * //     },
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateContentAssociationCommandInput - {@link CreateContentAssociationCommandInput}
 * @returns {@link CreateContentAssociationCommandOutput}
 * @see {@link CreateContentAssociationCommandInput} for command's `input` shape.
 * @see {@link CreateContentAssociationCommandOutput} for command's `response` shape.
 * @see {@link QConnectClientResolvedConfig | config} for QConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the
 *       resource. For example, if you're using a <code>Create</code> API (such as
 *         <code>CreateAssistant</code>) that accepts name, a conflicting resource (usually with the
 *       same name) is being created or mutated.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You've exceeded your service quota. To perform the requested action, remove some of the
 *       relevant resources, or use service quotas to request a service quota increase.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by a service.</p>
 *
 * @throws {@link QConnectServiceException}
 * <p>Base exception class for all service exceptions from QConnect service.</p>
 *
 * @public
 */
export class CreateContentAssociationCommand extends $Command
  .classBuilder<
    CreateContentAssociationCommandInput,
    CreateContentAssociationCommandOutput,
    QConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WisdomService", "CreateContentAssociation", {})
  .n("QConnectClient", "CreateContentAssociationCommand")
  .f(void 0, void 0)
  .ser(se_CreateContentAssociationCommand)
  .de(de_CreateContentAssociationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateContentAssociationRequest;
      output: CreateContentAssociationResponse;
    };
    sdk: {
      input: CreateContentAssociationCommandInput;
      output: CreateContentAssociationCommandOutput;
    };
  };
}
