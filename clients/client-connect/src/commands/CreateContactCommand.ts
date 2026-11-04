// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateContactResponse } from "../models/models_0";
import type { CreateContactRequest } from "../models/models_4";
import { CreateContact$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateContactCommand}.
 */
export interface CreateContactCommandInput extends CreateContactRequest {}
/**
 * @public
 *
 * The output of {@link CreateContactCommand}.
 */
export interface CreateContactCommandOutput extends CreateContactResponse, __MetadataBearer {}

/**
 * > **Important:**
 * >
 * > Only the VOICE, EMAIL, and TASK channels are supported.
 * >
 * > - For VOICE: The supported initiation method is `TRANSFER`. The contacts created with this initiation method have a subtype `connect:ExternalAudio`.
 * > - For EMAIL: The supported initiation methods are `OUTBOUND`, `AGENT_REPLY`, and `FLOW`.
 * > - For TASK: The supported initiation method is `API`. Contacts created with this API have a sub-type of `connect:ExternalTask`.
 *
 * Creates a new VOICE, EMAIL, or TASK contact.
 *
 * After a contact is created, you can move it to the desired state by using the `InitiateAs` parameter. While you can use API to create task contacts that are in the `COMPLETED` state, you must contact Amazon Web Services Support before using it for bulk import use cases. Bulk import causes your requests to be throttled or fail if your CreateContact limits aren't high enough.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateContactCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateContactCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // CreateContactRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 *   RelatedContactId: "STRING_VALUE",
 *   Attributes: { // Attributes
 *     "<keys>": "STRING_VALUE",
 *   },
 *   References: { // ContactReferences
 *     "<keys>": { // Reference
 *       Value: "STRING_VALUE",
 *       Type: "URL" || "ATTACHMENT" || "CONTACT_ANALYSIS" || "NUMBER" || "STRING" || "DATE" || "EMAIL" || "EMAIL_MESSAGE" || "EMAIL_MESSAGE_PLAIN_TEXT" || "EMAIL_MESSAGE_PLAIN_TEXT_REDACTED" || "EMAIL_MESSAGE_REDACTED", // required
 *       Status: "AVAILABLE" || "DELETED" || "APPROVED" || "REJECTED" || "PROCESSING" || "FAILED" || "DRAFTING",
 *       Arn: "STRING_VALUE",
 *       StatusReason: "STRING_VALUE",
 *     },
 *   },
 *   Channel: "VOICE" || "CHAT" || "TASK" || "EMAIL", // required
 *   InitiationMethod: "INBOUND" || "OUTBOUND" || "TRANSFER" || "QUEUE_TRANSFER" || "CALLBACK" || "API" || "DISCONNECT" || "MONITOR" || "EXTERNAL_OUTBOUND" || "WEBRTC_API" || "AGENT_REPLY" || "FLOW", // required
 *   ExpiryDurationInMinutes: Number("int"),
 *   UserInfo: { // UserInfo
 *     UserId: "STRING_VALUE",
 *   },
 *   InitiateAs: "CONNECTED_TO_USER" || "COMPLETED",
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   SegmentAttributes: { // SegmentAttributes
 *     "<keys>": { // SegmentAttributeValue
 *       ValueString: "STRING_VALUE",
 *       ValueMap: { // SegmentAttributeValueMap
 *         "<keys>": {
 *           ValueString: "STRING_VALUE",
 *           ValueMap: {
 *             "<keys>": "<SegmentAttributeValue>",
 *           },
 *           ValueInteger: Number("int"),
 *           ValueList: [ // SegmentAttributeValueList
 *             "<SegmentAttributeValue>",
 *           ],
 *           ValueArn: "STRING_VALUE",
 *         },
 *       },
 *       ValueInteger: Number("int"),
 *       ValueList: [
 *         "<SegmentAttributeValue>",
 *       ],
 *       ValueArn: "STRING_VALUE",
 *     },
 *   },
 *   PreviousContactId: "STRING_VALUE",
 * };
 * const command = new CreateContactCommand(input);
 * const response = await client.send(command);
 * // { // CreateContactResponse
 * //   ContactId: "STRING_VALUE",
 * //   ContactArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateContactCommandInput - {@link CreateContactCommandInput}
 * @returns {@link CreateContactCommandOutput}
 * @see {@link CreateContactCommandInput} for command's `input` shape.
 * @see {@link CreateContactCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient permissions to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Operation cannot be performed at this time as there is a conflict with another operation or contact state.
 *
 * @throws {@link IdempotencyException} (client fault)
 *
 * An entity with the same name already exists.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the specified parameters are not valid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The service quota has been exceeded.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class CreateContactCommand extends command<CreateContactCommandInput, CreateContactCommandOutput>(
  _ep0,
  _mw0,
  "CreateContact",
  CreateContact$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateContactRequest;
      output: CreateContactResponse;
    };
    sdk: {
      input: CreateContactCommandInput;
      output: CreateContactCommandOutput;
    };
  };
}
