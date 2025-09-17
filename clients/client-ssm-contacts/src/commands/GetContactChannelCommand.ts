// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetContactChannelRequest, GetContactChannelResult } from "../models/models_0";
import { de_GetContactChannelCommand, se_GetContactChannelCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMContactsClientResolvedConfig } from "../SSMContactsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetContactChannelCommand}.
 */
export interface GetContactChannelCommandInput extends GetContactChannelRequest {}
/**
 * @public
 *
 * The output of {@link GetContactChannelCommand}.
 */
export interface GetContactChannelCommandOutput extends GetContactChannelResult, __MetadataBearer {}

/**
 * <p>List details about a specific contact channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, GetContactChannelCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, GetContactChannelCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * // import type { SSMContactsClientConfig } from "@aws-sdk/client-ssm-contacts";
 * const config = {}; // type is SSMContactsClientConfig
 * const client = new SSMContactsClient(config);
 * const input = { // GetContactChannelRequest
 *   ContactChannelId: "STRING_VALUE", // required
 * };
 * const command = new GetContactChannelCommand(input);
 * const response = await client.send(command);
 * // { // GetContactChannelResult
 * //   ContactArn: "STRING_VALUE", // required
 * //   ContactChannelArn: "STRING_VALUE", // required
 * //   Name: "STRING_VALUE", // required
 * //   Type: "SMS" || "VOICE" || "EMAIL", // required
 * //   DeliveryAddress: { // ContactChannelAddress
 * //     SimpleAddress: "STRING_VALUE",
 * //   },
 * //   ActivationStatus: "ACTIVATED" || "NOT_ACTIVATED",
 * // };
 *
 * ```
 *
 * @param GetContactChannelCommandInput - {@link GetContactChannelCommandInput}
 * @returns {@link GetContactChannelCommandOutput}
 * @see {@link GetContactChannelCommandInput} for command's `input` shape.
 * @see {@link GetContactChannelCommandOutput} for command's `response` shape.
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
export class GetContactChannelCommand extends $Command
  .classBuilder<
    GetContactChannelCommandInput,
    GetContactChannelCommandOutput,
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
  .s("SSMContacts", "GetContactChannel", {})
  .n("SSMContactsClient", "GetContactChannelCommand")
  .f(void 0, void 0)
  .ser(se_GetContactChannelCommand)
  .de(de_GetContactChannelCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetContactChannelRequest;
      output: GetContactChannelResult;
    };
    sdk: {
      input: GetContactChannelCommandInput;
      output: GetContactChannelCommandOutput;
    };
  };
}
