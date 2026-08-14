// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CheckIngestedDocumentAclRequest, CheckIngestedDocumentAclResponse } from "../models/models_0";
import { CheckIngestedDocumentAcl$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CheckIngestedDocumentAclCommand}.
 */
export interface CheckIngestedDocumentAclCommandInput extends CheckIngestedDocumentAclRequest {}
/**
 * @public
 *
 * The output of {@link CheckIngestedDocumentAclCommand}.
 */
export interface CheckIngestedDocumentAclCommandOutput extends CheckIngestedDocumentAclResponse, __MetadataBearer {}

/**
 * <p>Checks whether a user has access to a specific document by verifying against the ingested access control list (ACL) in a knowledge base. Use this operation to validate that document-level access control is working as expected after ingestion. To use this operation, you must have the <code>bedrock:CheckIngestedDocumentAcl</code> permission.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentRuntimeClient, CheckIngestedDocumentAclCommand } from "@aws-sdk/client-bedrock-agent-runtime"; // ES Modules import
 * // const { BedrockAgentRuntimeClient, CheckIngestedDocumentAclCommand } = require("@aws-sdk/client-bedrock-agent-runtime"); // CommonJS import
 * // import type { BedrockAgentRuntimeClientConfig } from "@aws-sdk/client-bedrock-agent-runtime";
 * const config = {}; // type is BedrockAgentRuntimeClientConfig
 * const client = new BedrockAgentRuntimeClient(config);
 * const input = { // CheckIngestedDocumentAclRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   dataSourceId: "STRING_VALUE", // required
 *   documentId: "STRING_VALUE", // required
 *   userContext: { // UserContext
 *     userId: "STRING_VALUE", // required
 *   },
 * };
 * const command = new CheckIngestedDocumentAclCommand(input);
 * const response = await client.send(command);
 * // { // CheckIngestedDocumentAclResponse
 * //   hasAccess: true || false, // required
 * // };
 *
 * ```
 *
 * @param CheckIngestedDocumentAclCommandInput - {@link CheckIngestedDocumentAclCommandInput}
 * @returns {@link CheckIngestedDocumentAclCommandOutput}
 * @see {@link CheckIngestedDocumentAclCommandInput} for command's `input` shape.
 * @see {@link CheckIngestedDocumentAclCommandOutput} for command's `response` shape.
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
export class CheckIngestedDocumentAclCommand extends command<CheckIngestedDocumentAclCommandInput, CheckIngestedDocumentAclCommandOutput>(
  _ep0,
  _mw0,
  "CheckIngestedDocumentAcl",
  CheckIngestedDocumentAcl$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CheckIngestedDocumentAclRequest;
      output: CheckIngestedDocumentAclResponse;
    };
    sdk: {
      input: CheckIngestedDocumentAclCommandInput;
      output: CheckIngestedDocumentAclCommandOutput;
    };
  };
}
