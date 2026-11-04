// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartTaskContactResponse } from "../models/models_3";
import type { StartTaskContactRequest } from "../models/models_4";
import { StartTaskContact$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartTaskContactCommand}.
 */
export interface StartTaskContactCommandInput extends StartTaskContactRequest {}
/**
 * @public
 *
 * The output of {@link StartTaskContactCommand}.
 */
export interface StartTaskContactCommandOutput extends StartTaskContactResponse, __MetadataBearer {}

/**
 * Initiates a flow to start a new task contact. For more information about task contacts, see [Concepts: Tasks in Connect Customer](https://docs.aws.amazon.com/connect/latest/adminguide/tasks.html) in the *Connect Customer Administrator Guide*.
 *
 * When using `PreviousContactId` and `RelatedContactId` input parameters, note the following:
 *
 * - `PreviousContactId`
 *
 *   - Any updates to user-defined task contact attributes on any contact linked through the same `PreviousContactId` will affect every contact in the chain.
 *   - There can be a maximum of 12 linked task contacts in a chain. That is, 12 task contacts can be created that share the same `PreviousContactId`.
 * - `RelatedContactId`
 *
 *   - Copies contact attributes from the related task contact to the new contact.
 *   - Any update on attributes in a new task contact does not update attributes on previous contact.
 *   - There’s no limit on the number of task contacts that can be created that use the same `RelatedContactId`.
 *
 * In addition, when calling StartTaskContact include only one of these parameters: `ContactFlowID`, `QuickConnectID`, or `TaskTemplateID`. Only one parameter is required as long as the task template has a flow configured to run it. If more than one parameter is specified, or only the `TaskTemplateID` is specified but it does not have a flow configured, the request returns an error because Connect Customer cannot identify the unique flow to run when the task is created.
 *
 * A `ServiceQuotaExceededException` occurs when the number of open tasks exceeds the active tasks quota or there are already 12 tasks referencing the same `PreviousContactId`. For more information about service quotas for task contacts, see [Connect Customer service quotas](https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html) in the *Connect Customer Administrator Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, StartTaskContactCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, StartTaskContactCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // StartTaskContactRequest
 *   InstanceId: "STRING_VALUE", // required
 *   PreviousContactId: "STRING_VALUE",
 *   ContactFlowId: "STRING_VALUE",
 *   Attributes: { // Attributes
 *     "<keys>": "STRING_VALUE",
 *   },
 *   Name: "STRING_VALUE", // required
 *   References: { // ContactReferences
 *     "<keys>": { // Reference
 *       Value: "STRING_VALUE",
 *       Type: "URL" || "ATTACHMENT" || "CONTACT_ANALYSIS" || "NUMBER" || "STRING" || "DATE" || "EMAIL" || "EMAIL_MESSAGE" || "EMAIL_MESSAGE_PLAIN_TEXT" || "EMAIL_MESSAGE_PLAIN_TEXT_REDACTED" || "EMAIL_MESSAGE_REDACTED", // required
 *       Status: "AVAILABLE" || "DELETED" || "APPROVED" || "REJECTED" || "PROCESSING" || "FAILED" || "DRAFTING",
 *       Arn: "STRING_VALUE",
 *       StatusReason: "STRING_VALUE",
 *     },
 *   },
 *   Description: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE",
 *   ScheduledTime: new Date("TIMESTAMP"),
 *   TaskTemplateId: "STRING_VALUE",
 *   QuickConnectId: "STRING_VALUE",
 *   RelatedContactId: "STRING_VALUE",
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
 *   Attachments: [ // TaskAttachments
 *     { // TaskAttachment
 *       FileName: "STRING_VALUE", // required
 *       S3Url: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new StartTaskContactCommand(input);
 * const response = await client.send(command);
 * // { // StartTaskContactResponse
 * //   ContactId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartTaskContactCommandInput - {@link StartTaskContactCommandInput}
 * @returns {@link StartTaskContactCommandOutput}
 * @see {@link StartTaskContactCommandInput} for command's `input` shape.
 * @see {@link StartTaskContactCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
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
export class StartTaskContactCommand extends command<StartTaskContactCommandInput, StartTaskContactCommandOutput>(
  _ep0,
  _mw0,
  "StartTaskContact",
  StartTaskContact$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartTaskContactRequest;
      output: StartTaskContactResponse;
    };
    sdk: {
      input: StartTaskContactCommandInput;
      output: StartTaskContactCommandOutput;
    };
  };
}
