// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchGetEventInput, BatchGetEventOutput } from "../models/models_0";
import { BatchGetEvent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchGetEventCommand}.
 */
export interface BatchGetEventCommandInput extends BatchGetEventInput {}
/**
 * @public
 *
 * The output of {@link BatchGetEventCommand}.
 */
export interface BatchGetEventCommandOutput extends BatchGetEventOutput, __MetadataBearer {}

/**
 * <p>Gets up to 10 events by ID, each as <code>GetEvent</code> returns it, including its payload.</p> <p>If you supply <code>actorId</code> or <code>sessionId</code>, every requested event must match it. Each event has its own outcome. The operation reports an event that it can't return in <code>errors</code> instead of failing, with an error code named for the exception that <code>GetEvent</code> would return for it. The operation reports both an event that doesn't exist and an event outside the supplied scope as <code>RESOURCE_NOT_FOUND</code>.</p> <p>The exception is the space's customer managed AWS KMS key: if it is disabled, pending deletion, can't be used for decryption, or was deleted, the whole call fails with <code>ValidationException</code>, as <code>GetEvent</code> does.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchMemoryClient, BatchGetEventCommand } from "@aws-sdk/client-opensearchmemory"; // ES Modules import
 * // const { OpenSearchMemoryClient, BatchGetEventCommand } = require("@aws-sdk/client-opensearchmemory"); // CommonJS import
 * // import type { OpenSearchMemoryClientConfig } from "@aws-sdk/client-opensearchmemory";
 * const config = {}; // type is OpenSearchMemoryClientConfig
 * const client = new OpenSearchMemoryClient(config);
 * const input = { // BatchGetEventInput
 *   spaceId: "STRING_VALUE", // required
 *   actorId: "STRING_VALUE",
 *   sessionId: "STRING_VALUE",
 *   eventIds: [ // BatchGetEventIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetEventCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetEventOutput
 * //   events: [ // EventList // required
 * //     { // Event
 * //       eventId: "STRING_VALUE", // required
 * //       spaceId: "STRING_VALUE", // required
 * //       actorId: "STRING_VALUE", // required
 * //       sessionId: "STRING_VALUE", // required
 * //       payload: { // EventPayload Union: only one key present
 * //         conversational: { // ConversationalPayload Union: only one key present
 * //           unified: { // UnifiedConversational
 * //             source: { // UnifiedConversationalSource Union: only one key present
 * //               object: { // UnifiedConversationalObject
 * //                 messages: [ // MessageList // required
 * //                   { // Message
 * //                     role: "USER" || "ASSISTANT" || "SYSTEM", // required
 * //                     content: { // MessageContent
 * //                       text: "STRING_VALUE", // required
 * //                     },
 * //                   },
 * //                 ],
 * //               },
 * //             },
 * //           },
 * //         },
 * //         structuredData: { // StructuredDataPayload
 * //           source: { // StructuredDataSource Union: only one key present
 * //             json: "DOCUMENT_VALUE",
 * //           },
 * //         },
 * //         blob: { // BlobPayload
 * //           contentType: "application/pdf" || "image/png" || "image/jpeg", // required
 * //           source: { // BlobSource Union: only one key present
 * //             s3Location: { // S3Location
 * //               uri: "STRING_VALUE", // required
 * //             },
 * //           },
 * //         },
 * //       },
 * //       metadata: { // MetadataMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       eventTimestamp: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   errors: [ // BatchGetEventErrorList // required
 * //     { // BatchGetEventError
 * //       eventId: "STRING_VALUE", // required
 * //       errorCode: "RESOURCE_NOT_FOUND" || "THROTTLING" || "ACCESS_DENIED" || "INTERNAL_SERVER", // required
 * //       message: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetEventCommandInput - {@link BatchGetEventCommandInput}
 * @returns {@link BatchGetEventCommandOutput}
 * @see {@link BatchGetEventCommandInput} for command's `input` shape.
 * @see {@link BatchGetEventCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchMemoryClientResolvedConfig | config} for OpenSearchMemoryClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation. To use this operation, you must have AWS Identity and Access Management (IAM) permissions for the operation, and on the resource it acts on. If the space uses a customer managed AWS Key Management Service (AWS KMS) key, you must also have permission to use the key.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service couldn't process the request because of an internal error. Retry the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist. Check the IDs in the request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The service throttled the request. Retry the request with exponential backoff.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. The <code>reason</code>, <code>message</code>, and <code>fieldList</code> members describe the problem. Fix the request, and then try again.</p>
 *
 * @throws {@link OpenSearchMemoryServiceException}
 * <p>Base exception class for all service exceptions from OpenSearchMemory service.</p>
 *
 *
 * @public
 */
export class BatchGetEventCommand extends command<BatchGetEventCommandInput, BatchGetEventCommandOutput>(
  _ep0,
  _mw0,
  "BatchGetEvent",
  BatchGetEvent$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetEventInput;
      output: BatchGetEventOutput;
    };
    sdk: {
      input: BatchGetEventCommandInput;
      output: BatchGetEventCommandOutput;
    };
  };
}
