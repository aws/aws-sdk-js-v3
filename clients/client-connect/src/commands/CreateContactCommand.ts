// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateContactResponse } from "../models/models_0";
import { CreateContactRequest, CreateContactRequestFilterSensitiveLog } from "../models/models_3";
import { de_CreateContactCommand, se_CreateContactCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <important>
 *             <p>Only the VOICE, EMAIL, and TASK channels are supported. </p>
 *             <ul>
 *                <li>
 *                   <p>For VOICE: The supported initiation method is <code>TRANSFER</code>. The contacts created
 *       with this initiation method have a subtype <code>connect:ExternalAudio</code>. </p>
 *                </li>
 *                <li>
 *                   <p>For EMAIL: The supported initiation methods are <code>OUTBOUND</code>,
 *        <code>AGENT_REPLY</code>, and <code>FLOW</code>. </p>
 *                </li>
 *                <li>
 *                   <p>For TASK: The supported initiation method is <code>API</code>. Contacts created with this
 *       API have a sub-type of <code>connect:ExternalTask</code>.</p>
 *                </li>
 *             </ul>
 *          </important>
 *          <p>Creates a new VOICE, EMAIL, or TASK contact. </p>
 *          <p>After a contact is created, you can move it to the desired state by using the
 *     <code>InitiateAs</code> parameter. While you can use API to create task contacts that are in the
 *     <code>COMPLETED</code> state, you must contact Amazon Web Services Support before using it for
 *    bulk import use cases. Bulk import causes your requests to be throttled or fail if your
 *    CreateContact limits aren't high enough. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateContactCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateContactCommand } = require("@aws-sdk/client-connect"); // CommonJS import
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
 *       Type: "URL" || "ATTACHMENT" || "CONTACT_ANALYSIS" || "NUMBER" || "STRING" || "DATE" || "EMAIL" || "EMAIL_MESSAGE", // required
 *       Status: "AVAILABLE" || "DELETED" || "APPROVED" || "REJECTED" || "PROCESSING" || "FAILED",
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
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Operation cannot be performed at this time as there is a conflict with another operation or
 *    contact state.</p>
 *
 * @throws {@link IdempotencyException} (client fault)
 *  <p>An entity with the same name already exists.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota has been exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class CreateContactCommand extends $Command
  .classBuilder<
    CreateContactCommandInput,
    CreateContactCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "CreateContact", {})
  .n("ConnectClient", "CreateContactCommand")
  .f(CreateContactRequestFilterSensitiveLog, void 0)
  .ser(se_CreateContactCommand)
  .de(de_CreateContactCommand)
  .build() {
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
