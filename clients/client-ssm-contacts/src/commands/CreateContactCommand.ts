// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateContactRequest, CreateContactResult } from "../models/models_0";
import { de_CreateContactCommand, se_CreateContactCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMContactsClientResolvedConfig } from "../SSMContactsClient";

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
export interface CreateContactCommandOutput extends CreateContactResult, __MetadataBearer {}

/**
 * <p>Contacts are either the contacts that Incident Manager engages during an incident or the
 *          escalation plans that Incident Manager uses to engage contacts in phases during an
 *          incident.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, CreateContactCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, CreateContactCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
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
 *  <p>You don't have sufficient access to perform this operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource causes an inconsistent state.</p>
 *
 * @throws {@link DataEncryptionException} (client fault)
 *  <p>The operation failed to due an encryption key error.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error occurred while processing the request.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Request would cause a service quota to be exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *          service.</p>
 *
 * @throws {@link SSMContactsServiceException}
 * <p>Base exception class for all service exceptions from SSMContacts service.</p>
 *
 * @public
 */
export class CreateContactCommand extends $Command
  .classBuilder<
    CreateContactCommandInput,
    CreateContactCommandOutput,
    SSMContactsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SSMContactsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SSMContacts", "CreateContact", {})
  .n("SSMContactsClient", "CreateContactCommand")
  .f(void 0, void 0)
  .ser(se_CreateContactCommand)
  .de(de_CreateContactCommand)
  .build() {}
