// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetContactRequest, GetContactResult } from "../models/models_0";
import { de_GetContactCommand, se_GetContactCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMContactsClientResolvedConfig } from "../SSMContactsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetContactCommand}.
 */
export interface GetContactCommandInput extends GetContactRequest {}
/**
 * @public
 *
 * The output of {@link GetContactCommand}.
 */
export interface GetContactCommandOutput extends GetContactResult, __MetadataBearer {}

/**
 * <p>Retrieves information about the specified contact or escalation plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, GetContactCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, GetContactCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const input = { // GetContactRequest
 *   ContactId: "STRING_VALUE", // required
 * };
 * const command = new GetContactCommand(input);
 * const response = await client.send(command);
 * // { // GetContactResult
 * //   ContactArn: "STRING_VALUE", // required
 * //   Alias: "STRING_VALUE", // required
 * //   DisplayName: "STRING_VALUE",
 * //   Type: "PERSONAL" || "ESCALATION" || "ONCALL_SCHEDULE", // required
 * //   Plan: { // Plan
 * //     Stages: [ // StagesList
 * //       { // Stage
 * //         DurationInMinutes: Number("int"), // required
 * //         Targets: [ // TargetsList // required
 * //           { // Target
 * //             ChannelTargetInfo: { // ChannelTargetInfo
 * //               ContactChannelId: "STRING_VALUE", // required
 * //               RetryIntervalInMinutes: Number("int"),
 * //             },
 * //             ContactTargetInfo: { // ContactTargetInfo
 * //               ContactId: "STRING_VALUE",
 * //               IsEssential: true || false, // required
 * //             },
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     RotationIds: [ // SsmContactsArnList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetContactCommandInput - {@link GetContactCommandInput}
 * @returns {@link GetContactCommandOutput}
 * @see {@link GetContactCommandInput} for command's `input` shape.
 * @see {@link GetContactCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for SSMContactsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation.</p>
 *
 * @throws {@link DataEncryptionException} (client fault)
 *  <p>The operation failed to due an encryption key error.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource that doesn't exist.</p>
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
 *
 * @public
 */
export class GetContactCommand extends $Command
  .classBuilder<
    GetContactCommandInput,
    GetContactCommandOutput,
    SSMContactsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMContactsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SSMContacts", "GetContact", {})
  .n("SSMContactsClient", "GetContactCommand")
  .f(void 0, void 0)
  .ser(se_GetContactCommand)
  .de(de_GetContactCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetContactRequest;
      output: GetContactResult;
    };
    sdk: {
      input: GetContactCommandInput;
      output: GetContactCommandOutput;
    };
  };
}
