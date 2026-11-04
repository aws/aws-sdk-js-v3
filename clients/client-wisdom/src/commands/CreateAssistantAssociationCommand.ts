// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateAssistantAssociationRequest, CreateAssistantAssociationResponse } from "../models/models_0";
import { CreateAssistantAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates an association between an Amazon Connect Wisdom assistant and another resource. Currently, the only supported association is with a knowledge base. An assistant can have only a single association.
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be processed because of conflict in the current state of the resource. For example, if you're using a `Create` API (such as `CreateAssistant`) that accepts name, a conflicting resource (usually with the same name) is being created or mutated.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * You've exceeded your service quota. To perform the requested action, remove some of the relevant resources, or use service quotas to request a service quota increase.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by a service.
 *
 * @throws {@link WisdomServiceException}
 *
 * Base exception class for all service exceptions from Wisdom service.
 *
 * @public
 */
export class CreateAssistantAssociationCommand extends command<CreateAssistantAssociationCommandInput, CreateAssistantAssociationCommandOutput>(
  _ep0,
  _mw0,
  "CreateAssistantAssociation",
  CreateAssistantAssociation$
) {
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
