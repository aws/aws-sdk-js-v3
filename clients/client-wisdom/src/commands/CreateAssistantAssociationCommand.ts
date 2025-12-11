// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateAssistantAssociationRequest, CreateAssistantAssociationResponse } from "../models/models_0";
import { CreateAssistantAssociation } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WisdomClientResolvedConfig } from "../WisdomClient";

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
 * <p>Creates an association between an Amazon Connect Wisdom assistant and another resource. Currently, the
 *       only supported association is with a knowledge base. An assistant can have only a single
 *       association.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WisdomClient, CreateAssistantAssociationCommand } from "@aws-sdk/client-wisdom"; // ES Modules import
 * // const { WisdomClient, CreateAssistantAssociationCommand } = require("@aws-sdk/client-wisdom"); // CommonJS import
 * // import type { WisdomClientConfig } from "@aws-sdk/client-wisdom";
 * const config = {}; // type is WisdomClientConfig
 * const client = new WisdomClient(config);
 * const input = { // CreateAssistantAssociationRequest
 *   assistantId: "STRING_VALUE", // required
 *   associationType: "STRING_VALUE", // required
 *   association: { // AssistantAssociationInputData Union: only one key present
 *     knowledgeBaseId: "STRING_VALUE",
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
 * @see {@link WisdomClientResolvedConfig | config} for WisdomClient's `config` shape.
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
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by a service.</p>
 *
 * @throws {@link WisdomServiceException}
 * <p>Base exception class for all service exceptions from Wisdom service.</p>
 *
 *
 * @public
 */
export class CreateAssistantAssociationCommand extends $Command
  .classBuilder<
    CreateAssistantAssociationCommandInput,
    CreateAssistantAssociationCommandOutput,
    WisdomClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WisdomClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WisdomService", "CreateAssistantAssociation", {})
  .n("WisdomClient", "CreateAssistantAssociationCommand")
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
