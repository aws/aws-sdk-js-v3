// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentCoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentCoreClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateEventInput,
  CreateEventInputFilterSensitiveLog,
  CreateEventOutput,
  CreateEventOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateEventCommand, se_CreateEventCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateEventCommand}.
 */
export interface CreateEventCommandInput extends CreateEventInput {}
/**
 * @public
 *
 * The output of {@link CreateEventCommand}.
 */
export interface CreateEventCommandOutput extends CreateEventOutput, __MetadataBearer {}

/**
 * <p>Creates an event in an AgentCore Memory resource. Events represent interactions or activities that occur within a session and are associated with specific actors.</p> <p>To use this operation, you must have the <code>bedrock-agentcore:CreateEvent</code> permission.</p> <p>This operation is subject to request rate limiting.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, CreateEventCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, CreateEventCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * // import type { BedrockAgentCoreClientConfig } from "@aws-sdk/client-bedrock-agentcore";
 * const config = {}; // type is BedrockAgentCoreClientConfig
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // CreateEventInput
 *   memoryId: "STRING_VALUE", // required
 *   actorId: "STRING_VALUE", // required
 *   sessionId: "STRING_VALUE",
 *   eventTimestamp: new Date("TIMESTAMP"), // required
 *   payload: [ // PayloadTypeList // required
 *     { // PayloadType Union: only one key present
 *       conversational: { // Conversational
 *         content: { // Content Union: only one key present
 *           text: "STRING_VALUE",
 *         },
 *         role: "ASSISTANT" || "USER" || "TOOL" || "OTHER", // required
 *       },
 *       blob: "DOCUMENT_VALUE",
 *     },
 *   ],
 *   branch: { // Branch
 *     rootEventId: "STRING_VALUE",
 *     name: "STRING_VALUE", // required
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateEventCommand(input);
 * const response = await client.send(command);
 * // { // CreateEventOutput
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
 * //       },
 * //     ],
 * //     branch: { // Branch
 * //       rootEventId: "STRING_VALUE",
 * //       name: "STRING_VALUE", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateEventCommandInput - {@link CreateEventCommandInput}
 * @returns {@link CreateEventCommandOutput}
 * @see {@link CreateEventCommandInput} for command's `input` shape.
 * @see {@link CreateEventCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreClientResolvedConfig | config} for BedrockAgentCoreClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The exception that occurs when you do not have sufficient permissions to perform an action. Verify that your IAM policy includes the necessary permissions for the operation you are trying to perform.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by AgentCore. Check your input values and try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The exception that occurs when the specified resource does not exist. This can happen when using an invalid identifier or when trying to access a resource that has been deleted.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>The service encountered an internal error. Try your request again later.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The exception that occurs when the request would cause a service quota to be exceeded. Review your service quotas and either reduce your request rate or request a quota increase.</p>
 *
 * @throws {@link ThrottledException} (client fault)
 *  <p>The request was denied due to request throttling. Reduce the frequency of requests and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The exception that occurs when the input fails to satisfy the constraints specified by the service. Check the error message for details about which input parameter is invalid and correct your request.</p>
 *
 * @throws {@link BedrockAgentCoreServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgentCore service.</p>
 *
 *
 * @public
 */
export class CreateEventCommand extends $Command
  .classBuilder<
    CreateEventCommandInput,
    CreateEventCommandOutput,
    BedrockAgentCoreClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockAgentCore", "CreateEvent", {})
  .n("BedrockAgentCoreClient", "CreateEventCommand")
  .f(CreateEventInputFilterSensitiveLog, CreateEventOutputFilterSensitiveLog)
  .ser(se_CreateEventCommand)
  .de(de_CreateEventCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateEventInput;
      output: CreateEventOutput;
    };
    sdk: {
      input: CreateEventCommandInput;
      output: CreateEventCommandOutput;
    };
  };
}
