// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateDomainRequest,
  UpdateDomainRequestFilterSensitiveLog,
  UpdateDomainResponse,
  UpdateDomainResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_UpdateDomainCommand, se_UpdateDomainCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, VoiceIDClientResolvedConfig } from "../VoiceIDClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDomainCommand}.
 */
export interface UpdateDomainCommandInput extends UpdateDomainRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDomainCommand}.
 */
export interface UpdateDomainCommandOutput extends UpdateDomainResponse, __MetadataBearer {}

/**
 * <p>Updates the specified domain. This API has clobber behavior, and clears and replaces
 *             all attributes. If an optional field, such as 'Description' is not provided, it is
 *             removed from the domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VoiceIDClient, UpdateDomainCommand } from "@aws-sdk/client-voice-id"; // ES Modules import
 * // const { VoiceIDClient, UpdateDomainCommand } = require("@aws-sdk/client-voice-id"); // CommonJS import
 * // import type { VoiceIDClientConfig } from "@aws-sdk/client-voice-id";
 * const config = {}; // type is VoiceIDClientConfig
 * const client = new VoiceIDClient(config);
 * const input = { // UpdateDomainRequest
 *   DomainId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   ServerSideEncryptionConfiguration: { // ServerSideEncryptionConfiguration
 *     KmsKeyId: "STRING_VALUE", // required
 *   },
 * };
 * const command = new UpdateDomainCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDomainResponse
 * //   Domain: { // Domain
 * //     DomainId: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     DomainStatus: "STRING_VALUE",
 * //     ServerSideEncryptionConfiguration: { // ServerSideEncryptionConfiguration
 * //       KmsKeyId: "STRING_VALUE", // required
 * //     },
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     UpdatedAt: new Date("TIMESTAMP"),
 * //     ServerSideEncryptionUpdateDetails: { // ServerSideEncryptionUpdateDetails
 * //       OldKmsKeyId: "STRING_VALUE",
 * //       UpdateStatus: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //     },
 * //     WatchlistDetails: { // WatchlistDetails
 * //       DefaultWatchlistId: "STRING_VALUE", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateDomainCommandInput - {@link UpdateDomainCommandInput}
 * @returns {@link UpdateDomainCommandOutput}
 * @see {@link UpdateDomainCommandInput} for command's `input` shape.
 * @see {@link UpdateDomainCommandOutput} for command's `response` shape.
 * @see {@link VoiceIDClientResolvedConfig | config} for VoiceIDClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action. Check the error message
 *             and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request failed due to a conflict. Check the <code>ConflictType</code> and error
 *             message for more details.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed due to an unknown error on the server side.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found. Check the <code>ResourceType</code> and error
 *             message for more details.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. Please slow down your request rate.
 *             Refer to <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html##voiceid-api-quotas">
 *                 Amazon Connect Voice ID Service API throttling quotas </a> and try your
 *             request again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed one or more validations; check the error message for more
 *             details.</p>
 *
 * @throws {@link VoiceIDServiceException}
 * <p>Base exception class for all service exceptions from VoiceID service.</p>
 *
 *
 * @public
 */
export class UpdateDomainCommand extends $Command
  .classBuilder<
    UpdateDomainCommandInput,
    UpdateDomainCommandOutput,
    VoiceIDClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: VoiceIDClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("VoiceID", "UpdateDomain", {})
  .n("VoiceIDClient", "UpdateDomainCommand")
  .f(UpdateDomainRequestFilterSensitiveLog, UpdateDomainResponseFilterSensitiveLog)
  .ser(se_UpdateDomainCommand)
  .de(de_UpdateDomainCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDomainRequest;
      output: UpdateDomainResponse;
    };
    sdk: {
      input: UpdateDomainCommandInput;
      output: UpdateDomainCommandOutput;
    };
  };
}
