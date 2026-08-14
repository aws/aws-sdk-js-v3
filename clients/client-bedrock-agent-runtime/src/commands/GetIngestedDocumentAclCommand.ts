// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetIngestedDocumentAclRequest, GetIngestedDocumentAclResponse } from "../models/models_0";
import { GetIngestedDocumentAcl$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetIngestedDocumentAclCommand}.
 */
export interface GetIngestedDocumentAclCommandInput extends GetIngestedDocumentAclRequest {}
/**
 * @public
 *
 * The output of {@link GetIngestedDocumentAclCommand}.
 */
export interface GetIngestedDocumentAclCommandOutput extends GetIngestedDocumentAclResponse, __MetadataBearer {}

/**
 * <p>Retrieves the ingested access control list (ACL) for a specific document in a knowledge base. Use this operation to inspect the allow and deny lists that were ingested for a document to troubleshoot access control issues. To use this operation, you must have the <code>bedrock:GetIngestedDocumentAcl</code> permission.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentRuntimeClient, GetIngestedDocumentAclCommand } from "@aws-sdk/client-bedrock-agent-runtime"; // ES Modules import
 * // const { BedrockAgentRuntimeClient, GetIngestedDocumentAclCommand } = require("@aws-sdk/client-bedrock-agent-runtime"); // CommonJS import
 * // import type { BedrockAgentRuntimeClientConfig } from "@aws-sdk/client-bedrock-agent-runtime";
 * const config = {}; // type is BedrockAgentRuntimeClientConfig
 * const client = new BedrockAgentRuntimeClient(config);
 * const input = { // GetIngestedDocumentAclRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   dataSourceId: "STRING_VALUE", // required
 *   documentId: "STRING_VALUE", // required
 * };
 * const command = new GetIngestedDocumentAclCommand(input);
 * const response = await client.send(command);
 * // { // GetIngestedDocumentAclResponse
 * //   documentAcl: { // DocumentAcl
 * //     allowList: { // DocumentAclMembership
 * //       memberRelation: "AND" || "OR",
 * //       conditions: [ // DocumentAclConditionList
 * //         { // DocumentAclCondition
 * //           conditionOperator: "AND" || "OR",
 * //           users: [ // DocumentAclUserList
 * //             { // DocumentAclUser
 * //               id: "STRING_VALUE", // required
 * //               type: "KNOWLEDGE_BASE" || "DATA_SOURCE", // required
 * //             },
 * //           ],
 * //           groups: [ // DocumentAclGroupList
 * //             { // DocumentAclGroup
 * //               id: "STRING_VALUE", // required
 * //               type: "KNOWLEDGE_BASE" || "DATA_SOURCE", // required
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //     denyList: {
 * //       memberRelation: "AND" || "OR",
 * //       conditions: [
 * //         {
 * //           conditionOperator: "AND" || "OR",
 * //           users: [
 * //             {
 * //               id: "STRING_VALUE", // required
 * //               type: "KNOWLEDGE_BASE" || "DATA_SOURCE", // required
 * //             },
 * //           ],
 * //           groups: [
 * //             {
 * //               id: "STRING_VALUE", // required
 * //               type: "KNOWLEDGE_BASE" || "DATA_SOURCE", // required
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetIngestedDocumentAclCommandInput - {@link GetIngestedDocumentAclCommandInput}
 * @returns {@link GetIngestedDocumentAclCommandOutput}
 * @see {@link GetIngestedDocumentAclCommandInput} for command's `input` shape.
 * @see {@link GetIngestedDocumentAclCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentRuntimeClientResolvedConfig | config} for BedrockAgentRuntimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions. Check your permissions and retry your request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Input validation failed. Check your request parameters and retry the request.</p>
 *
 * @throws {@link BedrockAgentRuntimeServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgentRuntime service.</p>
 *
 *
 * @public
 */
export class GetIngestedDocumentAclCommand extends command<GetIngestedDocumentAclCommandInput, GetIngestedDocumentAclCommandOutput>(
  _ep0,
  _mw0,
  "GetIngestedDocumentAcl",
  GetIngestedDocumentAcl$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetIngestedDocumentAclRequest;
      output: GetIngestedDocumentAclResponse;
    };
    sdk: {
      input: GetIngestedDocumentAclCommandInput;
      output: GetIngestedDocumentAclCommandOutput;
    };
  };
}
