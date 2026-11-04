// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateContactRequest, CreateContactResult } from "../models/models_0";
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
export interface CreateContactCommandOutput extends CreateContactResult, __MetadataBearer {}

/**
 * Contacts are either the contacts that Incident Manager engages during an incident or the escalation plans that Incident Manager uses to engage contacts in phases during an incident.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, CreateContactCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, CreateContactCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * // import type { SSMContactsClientConfig } from "@aws-sdk/client-ssm-contacts";
 * const config = {}; // type is SSMContactsClientConfig
 * const client = new SSMContactsClient(config);
 * const input = { // CreateContactRequest
 *   Alias: "STRING_VALUE", // required
 *   DisplayName: "STRING_VALUE",
 *   Type: "PERSONAL" || "ESCALATION" || "ONCALL_SCHEDULE", // required
 *   Plan: { // Plan
 *     Stages: [ // StagesList
 *       { // Stage
 *         DurationInMinutes: Number("int"), // required
 *         Targets: [ // TargetsList // required
 *           { // Target
 *             ChannelTargetInfo: { // ChannelTargetInfo
 *               ContactChannelId: "STRING_VALUE", // required
 *               RetryIntervalInMinutes: Number("int"),
 *             },
 *             ContactTargetInfo: { // ContactTargetInfo
 *               ContactId: "STRING_VALUE",
 *               IsEssential: true || false, // required
 *             },
 *           },
 *         ],
 *       },
 *     ],
 *     RotationIds: [ // SsmContactsArnList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   Tags: [ // TagsList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   IdempotencyToken: "STRING_VALUE",
 * };
 * const command = new CreateContactCommand(input);
 * const response = await client.send(command);
 * // { // CreateContactResult
 * //   ContactArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateContactCommandInput - {@link CreateContactCommandInput}
 * @returns {@link CreateContactCommandOutput}
 * @see {@link CreateContactCommandInput} for command's `input` shape.
 * @see {@link CreateContactCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for SSMContactsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient access to perform this operation.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Updating or deleting a resource causes an inconsistent state.
 *
 * @throws {@link DataEncryptionException} (client fault)
 *
 * The operation failed to due an encryption key error.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Unexpected error occurred while processing the request.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * Request would cause a service quota to be exceeded.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link SSMContactsServiceException}
 *
 * Base exception class for all service exceptions from SSMContacts service.
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
      output: CreateContactResult;
    };
    sdk: {
      input: CreateContactCommandInput;
      output: CreateContactCommandOutput;
    };
  };
}
