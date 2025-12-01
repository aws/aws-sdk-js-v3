// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateAssistantAssociationRequest, CreateAssistantAssociationResponse } from "../models/models_0";
import { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";
import { CreateAssistantAssociation } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAssistantAssociationCommand}.
 */
export interface CreateAssistantAssociationCommandInput extends CreateAssistantAssociationRequest {}
/**
 * @public
 *
 * The output of {@link CreateAssistantAssociationCommand}.
 */
export interface CreateAssistantAssociationCommandOutput extends CreateAssistantAssociationResponse, __MetadataBearer {}

/**
 * <p>Creates an association between an Amazon Q in Connect assistant and another resource. Currently, the only supported association is with a knowledge base. An assistant can have only a single association.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, CreateAssistantAssociationCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, CreateAssistantAssociationCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // import type { QConnectClientConfig } from "@aws-sdk/client-qconnect";
 * const config = {}; // type is QConnectClientConfig
 * const client = new QConnectClient(config);
 * const input = { // CreateAssistantAssociationRequest
 *   assistantId: "STRING_VALUE", // required
 *   associationType: "STRING_VALUE", // required
 *   association: { // AssistantAssociationInputData Union: only one key present
 *     knowledgeBaseId: "STRING_VALUE",
 *     externalBedrockKnowledgeBaseConfig: { // ExternalBedrockKnowledgeBaseConfig
 *       bedrockKnowledgeBaseArn: "STRING_VALUE", // required
 *       accessRoleArn: "STRING_VALUE", // required
 *     },
 *   },
 *   clientToken: "STRING_VALUE",
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateAssistantAssociationCommand(input);
 * const response = await client.send(command);
 * // { // CreateAssistantAssociationResponse
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
 * @param CreateAssistantAssociationCommandInput - {@link CreateAssistantAssociationCommandInput}
 * @returns {@link CreateAssistantAssociationCommandOutput}
 * @see {@link CreateAssistantAssociationCommandInput} for command's `input` shape.
 * @see {@link CreateAssistantAssociationCommandOutput} for command's `response` shape.
 * @see {@link QConnectClientResolvedConfig | config} for QConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the resource. For example, if you're using a <code>Create</code> API (such as <code>CreateAssistant</code>) that accepts name, a conflicting resource (usually with the same name) is being created or mutated.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You've exceeded your service quota. To perform the requested action, remove some of the relevant resources, or use service quotas to request a service quota increase.</p>
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
export class CreateAssistantAssociationCommand extends $Command
  .classBuilder<
    CreateAssistantAssociationCommandInput,
    CreateAssistantAssociationCommandOutput,
    QConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WisdomService", "CreateAssistantAssociation", {})
  .n("QConnectClient", "CreateAssistantAssociationCommand")
  .sc(CreateAssistantAssociation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAssistantAssociationRequest;
      output: CreateAssistantAssociationResponse;
    };
    sdk: {
      input: CreateAssistantAssociationCommandInput;
      output: CreateAssistantAssociationCommandOutput;
    };
  };
}
