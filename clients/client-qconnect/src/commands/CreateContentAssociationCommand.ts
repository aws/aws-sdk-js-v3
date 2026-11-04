// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateContentAssociationRequest, CreateContentAssociationResponse } from "../models/models_0";
import { CreateContentAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates an association between a content resource in a knowledge base and [step-by-step guides](https://docs.aws.amazon.com/connect/latest/adminguide/step-by-step-guided-experiences.html). Step-by-step guides offer instructions to agents for resolving common customer issues. You create a content association to integrate Amazon Q in Connect and step-by-step guides.
 *
 * After you integrate Amazon Q and step-by-step guides, when Amazon Q provides a recommendation to an agent based on the intent that it's detected, it also provides them with the option to start the step-by-step guide that you have associated with the content.
 *
 * Note the following limitations:
 *
 * - You can create only one content association for each content resource in a knowledge base.
 * - You can associate a step-by-step guide with multiple content resources.
 *
 * For more information, see [Integrate Amazon Q in Connect with step-by-step guides](https://docs.aws.amazon.com/connect/latest/adminguide/integrate-q-with-guides.html) in the *Connect Customer Administrator Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, CreateContentAssociationCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, CreateContentAssociationCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // import type { QConnectClientConfig } from "@aws-sdk/client-qconnect";
 * const config = {}; // type is QConnectClientConfig
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
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You do not have permission to perform this action.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by a service.
 *
 * @throws {@link QConnectServiceException}
 *
 * Base exception class for all service exceptions from QConnect service.
 *
 * @public
 */
export class CreateContentAssociationCommand extends command<CreateContentAssociationCommandInput, CreateContentAssociationCommandOutput>(
  _ep0,
  _mw0,
  "CreateContentAssociation",
  CreateContentAssociation$
) {
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
