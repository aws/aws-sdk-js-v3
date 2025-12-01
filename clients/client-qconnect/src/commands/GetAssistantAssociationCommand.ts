// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetAssistantAssociationRequest, GetAssistantAssociationResponse } from "../models/models_0";
import { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";
import { GetAssistantAssociation } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAssistantAssociationCommand}.
 */
export interface GetAssistantAssociationCommandInput extends GetAssistantAssociationRequest {}
/**
 * @public
 *
 * The output of {@link GetAssistantAssociationCommand}.
 */
export interface GetAssistantAssociationCommandOutput extends GetAssistantAssociationResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about an assistant association.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, GetAssistantAssociationCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, GetAssistantAssociationCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // import type { QConnectClientConfig } from "@aws-sdk/client-qconnect";
 * const config = {}; // type is QConnectClientConfig
 * const client = new QConnectClient(config);
 * const input = { // GetAssistantAssociationRequest
 *   assistantAssociationId: "STRING_VALUE", // required
 *   assistantId: "STRING_VALUE", // required
 * };
 * const command = new GetAssistantAssociationCommand(input);
 * const response = await client.send(command);
 * // { // GetAssistantAssociationResponse
 * //   assistantAssociation: { // AssistantAssociationData
 * //     assistantAssociationId: "STRING_VALUE", // required
 * //     assistantAssociationArn: "STRING_VALUE", // required
 * //     assistantId: "STRING_VALUE", // required
 * //     assistantArn: "STRING_VALUE", // required
 * //     associationType: "STRING_VALUE", // required
 * //     associationData: { // AssistantAssociationOutputData Union: only one key present
 * //       knowledgeBaseAssociation: { // KnowledgeBaseAssociationData
 * //         knowledgeBaseId: "STRING_VALUE",
 * //         knowledgeBaseArn: "STRING_VALUE",
 * //       },
 * //       externalBedrockKnowledgeBaseConfig: { // ExternalBedrockKnowledgeBaseConfig
 * //         bedrockKnowledgeBaseArn: "STRING_VALUE", // required
 * //         accessRoleArn: "STRING_VALUE", // required
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
 * @param GetAssistantAssociationCommandInput - {@link GetAssistantAssociationCommandInput}
 * @returns {@link GetAssistantAssociationCommandOutput}
 * @see {@link GetAssistantAssociationCommandInput} for command's `input` shape.
 * @see {@link GetAssistantAssociationCommandOutput} for command's `response` shape.
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
export class GetAssistantAssociationCommand extends $Command
  .classBuilder<
    GetAssistantAssociationCommandInput,
    GetAssistantAssociationCommandOutput,
    QConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WisdomService", "GetAssistantAssociation", {})
  .n("QConnectClient", "GetAssistantAssociationCommand")
  .sc(GetAssistantAssociation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAssistantAssociationRequest;
      output: GetAssistantAssociationResponse;
    };
    sdk: {
      input: GetAssistantAssociationCommandInput;
      output: GetAssistantAssociationCommandOutput;
    };
  };
}
