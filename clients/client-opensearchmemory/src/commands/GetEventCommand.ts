// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetEventInput, GetEventOutput } from "../models/models_0";
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
 * <p>Gets an event by ID, including its payload.</p> <p>If the space uses a customer managed AWS KMS key, the call can also fail because of the key. It fails with <code>AccessDeniedException</code> if you aren't allowed to use the key, and with <code>ThrottlingException</code> if AWS KMS throttles the request. It fails with <code>ValidationException</code> if the key is disabled, pending deletion, or deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchMemoryClient, GetEventCommand } from "@aws-sdk/client-opensearchmemory"; // ES Modules import
 * // const { OpenSearchMemoryClient, GetEventCommand } = require("@aws-sdk/client-opensearchmemory"); // CommonJS import
 * // import type { OpenSearchMemoryClientConfig } from "@aws-sdk/client-opensearchmemory";
 * const config = {}; // type is OpenSearchMemoryClientConfig
 * const client = new OpenSearchMemoryClient(config);
 * const input = { // GetEventInput
 *   spaceId: "STRING_VALUE", // required
 *   eventId: "STRING_VALUE", // required
 *   actorId: "STRING_VALUE",
 *   sessionId: "STRING_VALUE",
 * };
 * const command = new GetEventCommand(input);
 * const response = await client.send(command);
 * // { // GetEventOutput
 * //   event: { // Event
 * //     eventId: "STRING_VALUE", // required
 * //     spaceId: "STRING_VALUE", // required
 * //     actorId: "STRING_VALUE", // required
 * //     sessionId: "STRING_VALUE", // required
 * //     payload: { // EventPayload Union: only one key present
 * //       conversational: { // ConversationalPayload Union: only one key present
 * //         unified: { // UnifiedConversational
 * //           source: { // UnifiedConversationalSource Union: only one key present
 * //             object: { // UnifiedConversationalObject
 * //               messages: [ // MessageList // required
 * //                 { // Message
 * //                   role: "USER" || "ASSISTANT" || "SYSTEM", // required
 * //                   content: { // MessageContent
 * //                     text: "STRING_VALUE", // required
 * //                   },
 * //                 },
 * //               ],
 * //             },
 * //           },
 * //         },
 * //       },
 * //       structuredData: { // StructuredDataPayload
 * //         source: { // StructuredDataSource Union: only one key present
 * //           json: "DOCUMENT_VALUE",
 * //         },
 * //       },
 * //       blob: { // BlobPayload
 * //         contentType: "application/pdf" || "image/png" || "image/jpeg", // required
 * //         source: { // BlobSource Union: only one key present
 * //           s3Location: { // S3Location
 * //             uri: "STRING_VALUE", // required
 * //           },
 * //         },
 * //       },
 * //     },
 * //     metadata: { // MetadataMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     eventTimestamp: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetEventCommandInput - {@link GetEventCommandInput}
 * @returns {@link GetEventCommandOutput}
 * @see {@link GetEventCommandInput} for command's `input` shape.
 * @see {@link GetEventCommandOutput} for command's `response` shape.
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
