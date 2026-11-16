// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateEventInput, CreateEventOutput } from "../models/models_0";
import { CreateEvent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * <p>Submits an event (conversation turns, structured data, or a PDF document stored in Amazon S3) to a session in a space.</p> <p>The operation returns as soon as the event is saved. <code>GetEvent</code> and <code>ListEvents</code> return it immediately. <code>SearchEvents</code> returns it after it's indexed. <code>SearchMemories</code> returns memories extracted from it only after a strategy's extraction trigger fires and the memories are indexed.</p> <p>If the space uses a customer managed AWS KMS key, the call can also fail because of the key. It fails with <code>AccessDeniedException</code> if you aren't allowed to use the key, and with <code>ThrottlingException</code> if AWS KMS throttles the request. It fails with <code>ValidationException</code> if the key is disabled, pending deletion, or deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchMemoryClient, CreateEventCommand } from "@aws-sdk/client-opensearchmemory"; // ES Modules import
 * // const { OpenSearchMemoryClient, CreateEventCommand } = require("@aws-sdk/client-opensearchmemory"); // CommonJS import
 * // import type { OpenSearchMemoryClientConfig } from "@aws-sdk/client-opensearchmemory";
 * const config = {}; // type is OpenSearchMemoryClientConfig
 * const client = new OpenSearchMemoryClient(config);
 * const input = { // CreateEventInput
 *   spaceId: "STRING_VALUE", // required
 *   actorId: "STRING_VALUE", // required
 *   sessionId: "STRING_VALUE",
 *   eventTimestamp: new Date("TIMESTAMP"),
 *   payload: { // EventPayload Union: only one key present
 *     conversational: { // ConversationalPayload Union: only one key present
 *       unified: { // UnifiedConversational
 *         source: { // UnifiedConversationalSource Union: only one key present
 *           object: { // UnifiedConversationalObject
 *             messages: [ // MessageList // required
 *               { // Message
 *                 role: "USER" || "ASSISTANT" || "SYSTEM", // required
 *                 content: { // MessageContent
 *                   text: "STRING_VALUE", // required
 *                 },
 *               },
 *             ],
 *           },
 *         },
 *       },
 *     },
 *     structuredData: { // StructuredDataPayload
 *       source: { // StructuredDataSource Union: only one key present
 *         json: "DOCUMENT_VALUE",
 *       },
 *     },
 *     blob: { // BlobPayload
 *       contentType: "application/pdf" || "image/png" || "image/jpeg", // required
 *       source: { // BlobSource Union: only one key present
 *         s3Location: { // S3Location
 *           uri: "STRING_VALUE", // required
 *         },
 *       },
 *     },
 *   },
 *   metadata: { // MetadataMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE",
 *   infer: true || false,
 * };
 * const command = new CreateEventCommand(input);
 * const response = await client.send(command);
 * // { // CreateEventOutput
 * //   event: { // EventDetail
 * //     eventId: "STRING_VALUE", // required
 * //     spaceId: "STRING_VALUE", // required
 * //     actorId: "STRING_VALUE", // required
 * //     sessionId: "STRING_VALUE", // required
 * //     eventTimestamp: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateEventCommandInput - {@link CreateEventCommandInput}
 * @returns {@link CreateEventCommandOutput}
 * @see {@link CreateEventCommandInput} for command's `input` shape.
 * @see {@link CreateEventCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchMemoryClientResolvedConfig | config} for OpenSearchMemoryClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation. To use this operation, you must have AWS Identity and Access Management (IAM) permissions for the operation, and on the resource it acts on. If the space uses a customer managed AWS Key Management Service (AWS KMS) key, you must also have permission to use the key.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource. For example, the space is being created, updated, or deleted, a space with the same name already exists, or you reused a client token with different parameters. Wait for the space to finish being created, updated, or deleted, or use a different name or client token, and then retry.</p>
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
export class CreateEventCommand extends command<CreateEventCommandInput, CreateEventCommandOutput>(
  _ep0,
  _mw0,
  "CreateEvent",
  CreateEvent$
) {
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
