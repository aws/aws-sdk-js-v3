// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListContactChannelsRequest, ListContactChannelsResult } from "../models/models_0";
import { ListContactChannels$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SSMContactsClientResolvedConfig } from "../SSMContactsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListContactChannelsCommand}.
 */
export interface ListContactChannelsCommandInput extends ListContactChannelsRequest {}
/**
 * @public
 *
 * The output of {@link ListContactChannelsCommand}.
 */
export interface ListContactChannelsCommandOutput extends ListContactChannelsResult, __MetadataBearer {}

/**
 * <p>Lists all contact channels for the specified contact.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, ListContactChannelsCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, ListContactChannelsCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * // import type { SSMContactsClientConfig } from "@aws-sdk/client-ssm-contacts";
 * const config = {}; // type is SSMContactsClientConfig
 * const client = new SSMContactsClient(config);
 * const input = { // ListContactChannelsRequest
 *   ContactId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListContactChannelsCommand(input);
 * const response = await client.send(command);
 * // { // ListContactChannelsResult
 * //   NextToken: "STRING_VALUE",
 * //   ContactChannels: [ // ContactChannelList // required
 * //     { // ContactChannel
 * //       ContactChannelArn: "STRING_VALUE", // required
 * //       ContactArn: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       Type: "SMS" || "VOICE" || "EMAIL",
 * //       DeliveryAddress: { // ContactChannelAddress
 * //         SimpleAddress: "STRING_VALUE",
 * //       },
 * //       ActivationStatus: "ACTIVATED" || "NOT_ACTIVATED", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListContactChannelsCommandInput - {@link ListContactChannelsCommandInput}
 * @returns {@link ListContactChannelsCommandOutput}
 * @see {@link ListContactChannelsCommandInput} for command's `input` shape.
 * @see {@link ListContactChannelsCommandOutput} for command's `response` shape.
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
export class ListContactChannelsCommand extends $Command
  .classBuilder<
    ListContactChannelsCommandInput,
    ListContactChannelsCommandOutput,
    SSMContactsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMContactsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SSMContacts", "ListContactChannels", {})
  .n("SSMContactsClient", "ListContactChannelsCommand")
  .sc(ListContactChannels$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListContactChannelsRequest;
      output: ListContactChannelsResult;
    };
    sdk: {
      input: ListContactChannelsCommandInput;
      output: ListContactChannelsCommandOutput;
    };
  };
}
