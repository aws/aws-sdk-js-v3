// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListQueueEmailAddressesRequest, ListQueueEmailAddressesResponse } from "../models/models_2";
import { ListQueueEmailAddresses$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Lists all email addresses that are currently associated with a specific queue, providing details about which "From" email addresses agents can select when handling email contacts. This helps administrators manage agent email address options and understand the available choices for different brands and business units.
 *
 * **Important things to know**
 *
 * - The response includes metadata about each email address available for agent selection, including whether it's configured as the default outbound email.
 * - Agents can select from these email addresses when replying to inbound contacts or initiating outbound contacts in this queue.
 * - The list includes both explicitly associated email addresses and any default outbound email address configured for the queue.
 * - Results are paginated to handle queues with many associated email addresses (up to 50 per queue).
 *
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
 *
 * You do not have sufficient permissions to perform this action.
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
export class ListQueueEmailAddressesCommand extends command<ListQueueEmailAddressesCommandInput, ListQueueEmailAddressesCommandOutput>(
  _ep0,
  _mw0,
  "ListQueueEmailAddresses",
  ListQueueEmailAddresses$
) {
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
