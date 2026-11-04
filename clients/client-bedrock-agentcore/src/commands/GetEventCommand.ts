// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetEventInput, GetEventOutput } from "../models/models_1";
import { GetEvent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetEventCommand}.
 */
export interface GetEventCommandInput extends GetEventInput {}
/**
 * @public
 *
 * The output of {@link GetEventCommand}.
 */
export interface GetEventCommandOutput extends GetEventOutput, __MetadataBearer {}

/**
 * Retrieves information about a specific event in an AgentCore Memory resource.
 *
 * To use this operation, you must have the `bedrock-agentcore:GetEvent` permission.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, GetEventCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, GetEventCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * // import type { BedrockAgentCoreClientConfig } from "@aws-sdk/client-bedrock-agentcore";
 * const config = {}; // type is BedrockAgentCoreClientConfig
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // GetEventInput
 *   memoryId: "STRING_VALUE", // required
 *   sessionId: "STRING_VALUE", // required
 *   actorId: "STRING_VALUE", // required
 *   eventId: "STRING_VALUE", // required
 * };
 * const command = new GetEventCommand(input);
 * const response = await client.send(command);
 * // { // GetEventOutput
 * //   event: { // Event
 * //     memoryId: "STRING_VALUE", // required
 * //     actorId: "STRING_VALUE", // required
 * //     sessionId: "STRING_VALUE", // required
 * //     eventId: "STRING_VALUE", // required
 * //     eventTimestamp: new Date("TIMESTAMP"), // required
 * //     payload: [ // PayloadTypeList // required
 * //       { // PayloadType Union: only one key present
 * //         conversational: { // Conversational
 * //           content: { // Content Union: only one key present
 * //             text: "STRING_VALUE",
 * //           },
 * //           role: "ASSISTANT" || "USER" || "TOOL" || "OTHER", // required
 * //         },
 * //         blob: "DOCUMENT_VALUE",
 * //         json: { // MemoryJsonData
 * //           content: "DOCUMENT_VALUE", // required
 * //         },
 * //       },
 * //     ],
 * //     branch: { // Branch
 * //       rootEventId: "STRING_VALUE",
 * //       name: "STRING_VALUE", // required
 * //     },
 * //     metadata: { // MetadataMap
 * //       "<keys>": { // MetadataValue Union: only one key present
 * //         stringValue: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetEventCommandInput - {@link GetEventCommandInput}
 * @returns {@link GetEventCommandOutput}
 * @see {@link GetEventCommandInput} for command's `input` shape.
 * @see {@link GetEventCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreClientResolvedConfig | config} for BedrockAgentCoreClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The exception that occurs when you do not have sufficient permissions to perform an action. Verify that your IAM policy includes the necessary permissions for the operation you are trying to perform.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input fails to satisfy the constraints specified by AgentCore. Check your input values and try again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The exception that occurs when the specified resource does not exist. This can happen when using an invalid identifier or when trying to access a resource that has been deleted.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * The service encountered an internal error. Try your request again later.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The exception that occurs when the request would cause a service quota to be exceeded. Review your service quotas and either reduce your request rate or request a quota increase.
 *
 * @throws {@link ThrottledException} (client fault)
 *
 * The request was denied due to request throttling. Reduce the frequency of requests and try again.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The exception that occurs when the input fails to satisfy the constraints specified by the service. Check the error message for details about which input parameter is invalid and correct your request.
 *
 * @throws {@link BedrockAgentCoreServiceException}
 *
 * Base exception class for all service exceptions from BedrockAgentCore service.
 *
 * @public
 */
export class GetEventCommand extends command<GetEventCommandInput, GetEventCommandOutput>(
  _ep0,
  _mw0,
  "GetEvent",
  GetEvent$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEventInput;
      output: GetEventOutput;
    };
    sdk: {
      input: GetEventCommandInput;
      output: GetEventCommandOutput;
    };
  };
}
