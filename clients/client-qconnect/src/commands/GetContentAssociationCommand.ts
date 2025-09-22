// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetContentAssociationRequest, GetContentAssociationResponse } from "../models/models_0";
import { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";
import { GetContentAssociation } from "../schemas/schemas_21_Content";

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
 * <p>Returns the content association.</p> <p>For more information about content associations--what they are and when they are used--see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/integrate-q-with-guides.html">Integrate Amazon Q in Connect with step-by-step guides</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, GetContentAssociationCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, GetContentAssociationCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // import type { QConnectClientConfig } from "@aws-sdk/client-qconnect";
 * const config = {}; // type is QConnectClientConfig
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
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by a service.</p>
 *
 * @throws {@link QConnectServiceException}
 * <p>Base exception class for all service exceptions from QConnect service.</p>
 *
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WisdomService", "GetContentAssociation", {})
  .n("QConnectClient", "GetContentAssociationCommand")
  .sc(GetContentAssociation)
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
