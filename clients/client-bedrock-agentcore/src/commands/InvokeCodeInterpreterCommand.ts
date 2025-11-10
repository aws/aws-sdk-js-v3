// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentCoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentCoreClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { InvokeCodeInterpreterRequest, InvokeCodeInterpreterResponse } from "../models/models_0";
import { InvokeCodeInterpreter } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link InvokeCodeInterpreterCommand}.
 */
export interface InvokeCodeInterpreterCommandInput extends InvokeCodeInterpreterRequest {}
/**
 * @public
 *
 * The output of {@link InvokeCodeInterpreterCommand}.
 */
export interface InvokeCodeInterpreterCommandOutput extends InvokeCodeInterpreterResponse, __MetadataBearer {}

/**
 * <p>Executes code within an active code interpreter session in Amazon Bedrock. This operation processes the provided code, runs it in a secure environment, and returns the execution results including output, errors, and generated visualizations.</p> <p>To execute code, you must specify the code interpreter identifier, session ID, and the code to run in the arguments parameter. The operation returns a stream containing the execution results, which can include text output, error messages, and data visualizations.</p> <p>This operation is subject to request rate limiting based on your account's service quotas.</p> <p>The following operations are related to <code>InvokeCodeInterpreter</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/API_StartCodeInterpreterSession.html">StartCodeInterpreterSession</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/API_GetCodeInterpreterSession.html">GetCodeInterpreterSession</a> </p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, InvokeCodeInterpreterCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, InvokeCodeInterpreterCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * // import type { BedrockAgentCoreClientConfig } from "@aws-sdk/client-bedrock-agentcore";
 * const config = {}; // type is BedrockAgentCoreClientConfig
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // InvokeCodeInterpreterRequest
 *   codeInterpreterIdentifier: "STRING_VALUE", // required
 *   sessionId: "STRING_VALUE",
 *   traceId: "STRING_VALUE",
 *   traceParent: "STRING_VALUE",
 *   name: "executeCode" || "executeCommand" || "readFiles" || "listFiles" || "removeFiles" || "writeFiles" || "startCommandExecution" || "getTask" || "stopTask", // required
 *   arguments: { // ToolArguments
 *     code: "STRING_VALUE",
 *     language: "python" || "javascript" || "typescript",
 *     clearContext: true || false,
 *     command: "STRING_VALUE",
 *     path: "STRING_VALUE",
 *     paths: [ // StringList
 *       "STRING_VALUE",
 *     ],
 *     content: [ // InputContentBlockList
 *       { // InputContentBlock
 *         path: "STRING_VALUE", // required
 *         text: "STRING_VALUE",
 *         blob: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *       },
 *     ],
 *     directoryPath: "STRING_VALUE",
 *     taskId: "STRING_VALUE",
 *   },
 * };
 * const command = new InvokeCodeInterpreterCommand(input);
 * const response = await client.send(command);
 * // { // InvokeCodeInterpreterResponse
 * //   sessionId: "STRING_VALUE",
 * //   stream: { // CodeInterpreterStreamOutput Union: only one key present
 * //     result: { // CodeInterpreterResult
 * //       content: [ // ContentBlockList // required
 * //         { // ContentBlock
 * //           type: "text" || "image" || "resource" || "resource_link", // required
 * //           text: "STRING_VALUE",
 * //           data: new Uint8Array(),
 * //           mimeType: "STRING_VALUE",
 * //           uri: "STRING_VALUE",
 * //           name: "STRING_VALUE",
 * //           description: "STRING_VALUE",
 * //           size: Number("long"),
 * //           resource: { // ResourceContent
 * //             type: "text" || "blob", // required
 * //             uri: "STRING_VALUE",
 * //             mimeType: "STRING_VALUE",
 * //             text: "STRING_VALUE",
 * //             blob: new Uint8Array(),
 * //           },
 * //         },
 * //       ],
 * //       structuredContent: { // ToolResultStructuredContent
 * //         taskId: "STRING_VALUE",
 * //         taskStatus: "submitted" || "working" || "completed" || "canceled" || "failed",
 * //         stdout: "STRING_VALUE",
 * //         stderr: "STRING_VALUE",
 * //         exitCode: Number("int"),
 * //         executionTime: Number("double"),
 * //       },
 * //       isError: true || false,
 * //     },
 * //     accessDeniedException: { // AccessDeniedException
 * //       message: "STRING_VALUE",
 * //     },
 * //     conflictException: { // ConflictException
 * //       message: "STRING_VALUE",
 * //     },
 * //     internalServerException: { // InternalServerException
 * //       message: "STRING_VALUE",
 * //     },
 * //     resourceNotFoundException: { // ResourceNotFoundException
 * //       message: "STRING_VALUE",
 * //     },
 * //     serviceQuotaExceededException: { // ServiceQuotaExceededException
 * //       message: "STRING_VALUE",
 * //     },
 * //     throttlingException: { // ThrottlingException
 * //       message: "STRING_VALUE",
 * //     },
 * //     validationException: { // ValidationException
 * //       message: "STRING_VALUE", // required
 * //       reason: "CannotParse" || "FieldValidationFailed" || "IdempotentParameterMismatchException" || "EventInOtherSession" || "ResourceConflict", // required
 * //       fieldList: [ // ValidationExceptionFieldList
 * //         { // ValidationExceptionField
 * //           name: "STRING_VALUE", // required
 * //           message: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param InvokeCodeInterpreterCommandInput - {@link InvokeCodeInterpreterCommandInput}
 * @returns {@link InvokeCodeInterpreterCommandOutput}
 * @see {@link InvokeCodeInterpreterCommandInput} for command's `input` shape.
 * @see {@link InvokeCodeInterpreterCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreClientResolvedConfig | config} for BedrockAgentCoreClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The exception that occurs when you do not have sufficient permissions to perform an action. Verify that your IAM policy includes the necessary permissions for the operation you are trying to perform.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The exception that occurs when the request conflicts with the current state of the resource. This can happen when trying to modify a resource that is currently being modified by another request, or when trying to create a resource that already exists.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The exception that occurs when the service encounters an unexpected internal error. This is a temporary condition that will resolve itself with retries. We recommend implementing exponential backoff retry logic in your application.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The exception that occurs when the specified resource does not exist. This can happen when using an invalid identifier or when trying to access a resource that has been deleted.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The exception that occurs when the request would cause a service quota to be exceeded. Review your service quotas and either reduce your request rate or request a quota increase.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The exception that occurs when the request was denied due to request throttling. This happens when you exceed the allowed request rate for an operation. Reduce the frequency of requests or implement exponential backoff retry logic in your application.</p>
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
export class InvokeCodeInterpreterCommand extends $Command
  .classBuilder<
    InvokeCodeInterpreterCommandInput,
    InvokeCodeInterpreterCommandOutput,
    BedrockAgentCoreClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCore", "InvokeCodeInterpreter", {
    /**
     * @internal
     */
    eventStream: {
      output: true,
    },
  })
  .n("BedrockAgentCoreClient", "InvokeCodeInterpreterCommand")
  .sc(InvokeCodeInterpreter)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: InvokeCodeInterpreterRequest;
      output: InvokeCodeInterpreterResponse;
    };
    sdk: {
      input: InvokeCodeInterpreterCommandInput;
      output: InvokeCodeInterpreterCommandOutput;
    };
  };
}
