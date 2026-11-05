// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RegisterAssistantReplicaKeyRequest, RegisterAssistantReplicaKeyResponse } from "../models/models_0";
import { RegisterAssistantReplicaKey$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RegisterAssistantReplicaKeyCommand}.
 */
export interface RegisterAssistantReplicaKeyCommandInput extends RegisterAssistantReplicaKeyRequest {}
/**
 * @public
 *
 * The output of {@link RegisterAssistantReplicaKeyCommand}.
 */
export interface RegisterAssistantReplicaKeyCommandOutput extends RegisterAssistantReplicaKeyResponse, __MetadataBearer {}

/**
 * <p>Registers a replica Region KMS key for an Amazon Q in Connect assistant. To use this operation, you must have <code>kms:GenerateDataKey</code> permission on the replica key.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, RegisterAssistantReplicaKeyCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, RegisterAssistantReplicaKeyCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // import type { QConnectClientConfig } from "@aws-sdk/client-qconnect";
 * const config = {}; // type is QConnectClientConfig
 * const client = new QConnectClient(config);
 * const input = { // RegisterAssistantReplicaKeyRequest
 *   assistantId: "STRING_VALUE", // required
 *   replicaKmsKey: { // ReplicaKmsKey
 *     arn: "STRING_VALUE", // required
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new RegisterAssistantReplicaKeyCommand(input);
 * const response = await client.send(command);
 * // { // RegisterAssistantReplicaKeyResponse
 * //   assistant: { // AssistantData
 * //     assistantId: "STRING_VALUE", // required
 * //     assistantArn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     type: "STRING_VALUE", // required
 * //     status: "STRING_VALUE", // required
 * //     description: "STRING_VALUE",
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     serverSideEncryptionConfiguration: { // ServerSideEncryptionConfiguration
 * //       kmsKeyId: "STRING_VALUE",
 * //       replicaKmsKeys: [ // ReplicaKmsKeyList
 * //         { // ReplicaKmsKey
 * //           arn: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //     integrationConfiguration: { // AssistantIntegrationConfiguration
 * //       topicIntegrationArn: "STRING_VALUE",
 * //     },
 * //     capabilityConfiguration: { // AssistantCapabilityConfiguration
 * //       type: "STRING_VALUE",
 * //     },
 * //     aiAgentConfiguration: { // AIAgentConfigurationMap
 * //       "<keys>": { // AIAgentConfigurationData
 * //         aiAgentId: "STRING_VALUE", // required
 * //         enabled: true || false,
 * //       },
 * //     },
 * //     orchestratorConfigurationList: [ // OrchestratorConfigurationList
 * //       { // OrchestratorConfigurationEntry
 * //         aiAgentId: "STRING_VALUE",
 * //         orchestratorUseCase: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     lastModifiedTime: new Date("TIMESTAMP"),
 * //     lastModifiedRegion: "STRING_VALUE",
 * //     assistantGlobalResiliencyStatus: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param RegisterAssistantReplicaKeyCommandInput - {@link RegisterAssistantReplicaKeyCommandInput}
 * @returns {@link RegisterAssistantReplicaKeyCommandOutput}
 * @see {@link RegisterAssistantReplicaKeyCommandInput} for command's `input` shape.
 * @see {@link RegisterAssistantReplicaKeyCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
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
export class RegisterAssistantReplicaKeyCommand extends command<RegisterAssistantReplicaKeyCommandInput, RegisterAssistantReplicaKeyCommandOutput>(
  _ep0,
  _mw0,
  "RegisterAssistantReplicaKey",
  RegisterAssistantReplicaKey$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterAssistantReplicaKeyRequest;
      output: RegisterAssistantReplicaKeyResponse;
    };
    sdk: {
      input: RegisterAssistantReplicaKeyCommandInput;
      output: RegisterAssistantReplicaKeyCommandOutput;
    };
  };
}
