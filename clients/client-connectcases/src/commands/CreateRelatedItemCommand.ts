// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateRelatedItemRequest, CreateRelatedItemResponse } from "../models/models_0";
import { CreateRelatedItem$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateRelatedItemCommand}.
 */
export interface CreateRelatedItemCommandInput extends CreateRelatedItemRequest {}
/**
 * @public
 *
 * The output of {@link CreateRelatedItemCommand}.
 */
export interface CreateRelatedItemCommandOutput extends CreateRelatedItemResponse, __MetadataBearer {}

/**
 * Creates a related item (comments, tasks, and contacts) and associates it with a case.
 *
 * There's a quota for the number of fields allowed in a Custom type related item. See [Amazon Connect Cases quotas](https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html#cases-quotas).
 *
 * **Use cases**
 *
 * Following are examples of related items that you may want to associate with a case:
 *
 * - Related contacts, such as calls, chats, emails tasks
 * - Comments, for agent notes
 * - SLAs, to capture target resolution goals
 * - Cases, to capture related Amazon Connect Cases
 * - Files, such as policy documentation or customer-provided attachments
 * - Custom related items, which provide flexibility for you to define related items that such as bookings, orders, products, notices, and more
 *
 * **Important things to know**
 *
 * - If you are associating a contact to a case by passing in `Contact` for a `type`, you must have [DescribeContact](https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeContact.html) permission on the ARN of the contact that you provide in `content.contact.contactArn`.
 * - A Related Item is a resource that is associated with a case. It may or may not have an external identifier linking it to an external resource (for example, a `contactArn`). All Related Items have their own internal identifier, the `relatedItemArn`. Examples of related items include `comments` and `contacts`.
 * - If you provide a value for `performedBy.userArn` you must also have [DescribeUser](https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeUser.html) permission on the ARN of the user that you provide.
 * - The `type` field is reserved for internal use only.
 *
 * **Endpoints**: See [Amazon Connect endpoints and quotas](https://docs.aws.amazon.com/general/latest/gr/connect_region.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCasesClient, CreateRelatedItemCommand } from "@aws-sdk/client-connectcases"; // ES Modules import
 * // const { ConnectCasesClient, CreateRelatedItemCommand } = require("@aws-sdk/client-connectcases"); // CommonJS import
 * // import type { ConnectCasesClientConfig } from "@aws-sdk/client-connectcases";
 * const config = {}; // type is ConnectCasesClientConfig
 * const client = new ConnectCasesClient(config);
 * const input = { // CreateRelatedItemRequest
 *   domainId: "STRING_VALUE", // required
 *   caseId: "STRING_VALUE", // required
 *   type: "STRING_VALUE", // required
 *   content: { // RelatedItemInputContent Union: only one key present
 *     contact: { // Contact
 *       contactArn: "STRING_VALUE", // required
 *     },
 *     comment: { // CommentContent
 *       body: "STRING_VALUE", // required
 *       contentType: "STRING_VALUE", // required
 *     },
 *     file: { // FileContent
 *       fileArn: "STRING_VALUE", // required
 *     },
 *     sla: { // SlaInputContent Union: only one key present
 *       slaInputConfiguration: { // SlaInputConfiguration
 *         name: "STRING_VALUE", // required
 *         type: "STRING_VALUE", // required
 *         fieldId: "STRING_VALUE",
 *         targetFieldValues: [ // SlaFieldValueUnionList
 *           { // FieldValueUnion Union: only one key present
 *             stringValue: "STRING_VALUE",
 *             doubleValue: Number("double"),
 *             booleanValue: true || false,
 *             emptyValue: {},
 *             userArnValue: "STRING_VALUE",
 *           },
 *         ],
 *         targetSlaMinutes: Number("long"), // required
 *       },
 *     },
 *     connectCase: { // ConnectCaseInputContent
 *       caseId: "STRING_VALUE", // required
 *     },
 *     custom: { // CustomInputContent
 *       fields: [ // FieldValueList // required
 *         { // FieldValue
 *           id: "STRING_VALUE", // required
 *           value: {//  Union: only one key present
 *             stringValue: "STRING_VALUE",
 *             doubleValue: Number("double"),
 *             booleanValue: true || false,
 *             emptyValue: {},
 *             userArnValue: "STRING_VALUE",
 *           },
 *         },
 *       ],
 *     },
 *   },
 *   performedBy: { // UserUnion Union: only one key present
 *     userArn: "STRING_VALUE",
 *     customEntity: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateRelatedItemCommand(input);
 * const response = await client.send(command);
 * // { // CreateRelatedItemResponse
 * //   relatedItemId: "STRING_VALUE", // required
 * //   relatedItemArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateRelatedItemCommandInput - {@link CreateRelatedItemCommandInput}
 * @returns {@link CreateRelatedItemCommandOutput}
 * @see {@link CreateRelatedItemCommandInput} for command's `input` shape.
 * @see {@link CreateRelatedItemCommandOutput} for command's `response` shape.
 * @see {@link ConnectCasesClientResolvedConfig | config} for ConnectCasesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * We couldn't process your request because of an issue with the server. Try again later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * We couldn't find the requested resource. Check that your resources exists and were created in the same Amazon Web Services Region as your request, and try your request again.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The service quota has been exceeded. For a list of service quotas, see [Amazon Connect Service Quotas](https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html) in the *Amazon Connect Administrator Guide*.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate has been exceeded for this API. Please try again after a few minutes.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request isn't valid. Check the syntax and try again.
 *
 * @throws {@link ConnectCasesServiceException}
 *
 * Base exception class for all service exceptions from ConnectCases service.
 *
 * @public
 */
export class CreateRelatedItemCommand extends command<CreateRelatedItemCommandInput, CreateRelatedItemCommandOutput>(
  _ep0,
  _mw0,
  "CreateRelatedItem",
  CreateRelatedItem$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRelatedItemRequest;
      output: CreateRelatedItemResponse;
    };
    sdk: {
      input: CreateRelatedItemCommandInput;
      output: CreateRelatedItemCommandOutput;
    };
  };
}
