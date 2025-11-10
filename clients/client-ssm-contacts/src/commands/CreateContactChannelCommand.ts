// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateContactChannelRequest, CreateContactChannelResult } from "../models/models_0";
import { CreateContactChannel } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, SSMContactsClientResolvedConfig } from "../SSMContactsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateContactChannelCommand}.
 */
export interface CreateContactChannelCommandInput extends CreateContactChannelRequest {}
/**
 * @public
 *
 * The output of {@link CreateContactChannelCommand}.
 */
export interface CreateContactChannelCommandOutput extends CreateContactChannelResult, __MetadataBearer {}

/**
 * <p>A contact channel is the method that Incident Manager uses to engage your contact.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, CreateContactChannelCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, CreateContactChannelCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * // import type { SSMContactsClientConfig } from "@aws-sdk/client-ssm-contacts";
 * const config = {}; // type is SSMContactsClientConfig
 * const client = new SSMContactsClient(config);
 * const input = { // CreateContactChannelRequest
 *   ContactId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Type: "SMS" || "VOICE" || "EMAIL", // required
 *   DeliveryAddress: { // ContactChannelAddress
 *     SimpleAddress: "STRING_VALUE",
 *   },
 *   DeferActivation: true || false,
 *   IdempotencyToken: "STRING_VALUE",
 * };
 * const command = new CreateContactChannelCommand(input);
 * const response = await client.send(command);
 * // { // CreateContactChannelResult
 * //   ContactChannelArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateContactChannelCommandInput - {@link CreateContactChannelCommandInput}
 * @returns {@link CreateContactChannelCommandOutput}
 * @see {@link CreateContactChannelCommandInput} for command's `input` shape.
 * @see {@link CreateContactChannelCommandOutput} for command's `response` shape.
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
export class CreateContactChannelCommand extends $Command
  .classBuilder<
    CreateContactChannelCommandInput,
    CreateContactChannelCommandOutput,
    SSMContactsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMContactsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SSMContacts", "CreateContactChannel", {})
  .n("SSMContactsClient", "CreateContactChannelCommand")
  .sc(CreateContactChannel)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateContactChannelRequest;
      output: CreateContactChannelResult;
    };
    sdk: {
      input: CreateContactChannelCommandInput;
      output: CreateContactChannelCommandOutput;
    };
  };
}
