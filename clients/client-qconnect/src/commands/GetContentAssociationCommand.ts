// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetContentAssociationRequest, GetContentAssociationResponse } from "../models/models_0";
import { de_GetContentAssociationCommand, se_GetContentAssociationCommand } from "../protocols/Aws_restJson1";
import { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetContentAssociationCommand}.
 */
export interface GetContentAssociationCommandInput extends GetContentAssociationRequest {}
/**
 * @public
 *
 * The output of {@link GetContentAssociationCommand}.
 */
export interface GetContentAssociationCommandOutput extends GetContentAssociationResponse, __MetadataBearer {}

/**
 * <p>Returns the content association.</p>
 *          <p>For more information about content associations--what they are and when they are used--see
 *         <a href="https://docs.aws.amazon.com/connect/latest/adminguide/integrate-q-with-guides.html">Integrate Amazon Q in Connect with step-by-step guides</a> in the <i>Amazon Connect
 *         Administrator Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, GetContentAssociationCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, GetContentAssociationCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new QConnectClient(config);
 * const input = { // GetContentAssociationRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   contentId: "STRING_VALUE", // required
 *   contentAssociationId: "STRING_VALUE", // required
 * };
 * const command = new GetContentAssociationCommand(input);
 * const response = await client.send(command);
 * // { // GetContentAssociationResponse
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
 * @param GetContentAssociationCommandInput - {@link GetContentAssociationCommandInput}
 * @returns {@link GetContentAssociationCommandOutput}
 * @see {@link GetContentAssociationCommandInput} for command's `input` shape.
 * @see {@link GetContentAssociationCommandOutput} for command's `response` shape.
 * @see {@link QConnectClientResolvedConfig | config} for QConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by a service.</p>
 *
 * @throws {@link QConnectServiceException}
 * <p>Base exception class for all service exceptions from QConnect service.</p>
 *
 * @public
 */
export class GetContentAssociationCommand extends $Command
  .classBuilder<
    GetContentAssociationCommandInput,
    GetContentAssociationCommandOutput,
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
  .s("WisdomService", "GetContentAssociation", {})
  .n("QConnectClient", "GetContentAssociationCommand")
  .f(void 0, void 0)
  .ser(se_GetContentAssociationCommand)
  .de(de_GetContentAssociationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetContentAssociationRequest;
      output: GetContentAssociationResponse;
    };
    sdk: {
      input: GetContentAssociationCommandInput;
      output: GetContentAssociationCommandOutput;
    };
  };
}
