// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListQueueEmailAddressesRequest, ListQueueEmailAddressesResponse } from "../models/models_2";
import { ListQueueEmailAddresses$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListQueueEmailAddressesCommand}.
 */
export interface ListQueueEmailAddressesCommandInput extends ListQueueEmailAddressesRequest {}
/**
 * @public
 *
 * The output of {@link ListQueueEmailAddressesCommand}.
 */
export interface ListQueueEmailAddressesCommandOutput extends ListQueueEmailAddressesResponse, __MetadataBearer {}

/**
 * <p>Lists all email addresses that are currently associated with a specific queue, providing details about which "From" email addresses agents can select when handling email contacts. This helps administrators manage agent email address options and understand the available choices for different brands and business units.</p>
 *          <p>
 *             <b>Important things to know</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>The response includes metadata about each email address available for agent selection, including whether it's configured as the default outbound email.</p>
 *             </li>
 *             <li>
 *                <p>Agents can select from these email addresses when replying to inbound contacts or initiating outbound contacts in this queue.</p>
 *             </li>
 *             <li>
 *                <p>The list includes both explicitly associated email addresses and any default outbound email address configured for the queue.</p>
 *             </li>
 *             <li>
 *                <p>Results are paginated to handle queues with many associated email addresses (up to 50 per queue).</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListQueueEmailAddressesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListQueueEmailAddressesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // ListQueueEmailAddressesRequest
 *   InstanceId: "STRING_VALUE", // required
 *   QueueId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListQueueEmailAddressesCommand(input);
 * const response = await client.send(command);
 * // { // ListQueueEmailAddressesResponse
 * //   NextToken: "STRING_VALUE",
 * //   EmailAddressMetadataList: [ // EmailAddressMetadataList
 * //     { // EmailAddressSummary
 * //       Id: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       IsDefaultOutboundEmail: true || false,
 * //     },
 * //   ],
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * //   LastModifiedRegion: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListQueueEmailAddressesCommandInput - {@link ListQueueEmailAddressesCommandInput}
 * @returns {@link ListQueueEmailAddressesCommandOutput}
 * @see {@link ListQueueEmailAddressesCommandInput} for command's `input` shape.
 * @see {@link ListQueueEmailAddressesCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class ListQueueEmailAddressesCommand extends $Command
  .classBuilder<
    ListQueueEmailAddressesCommandInput,
    ListQueueEmailAddressesCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "ListQueueEmailAddresses", {})
  .n("ConnectClient", "ListQueueEmailAddressesCommand")
  .sc(ListQueueEmailAddresses$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListQueueEmailAddressesRequest;
      output: ListQueueEmailAddressesResponse;
    };
    sdk: {
      input: ListQueueEmailAddressesCommandInput;
      output: ListQueueEmailAddressesCommandOutput;
    };
  };
}
