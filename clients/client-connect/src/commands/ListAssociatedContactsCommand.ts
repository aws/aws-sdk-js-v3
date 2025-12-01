// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListAssociatedContactsRequest, ListAssociatedContactsResponse } from "../models/models_1";
import { ListAssociatedContacts } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAssociatedContactsCommand}.
 */
export interface ListAssociatedContactsCommandInput extends ListAssociatedContactsRequest {}
/**
 * @public
 *
 * The output of {@link ListAssociatedContactsCommand}.
 */
export interface ListAssociatedContactsCommandOutput extends ListAssociatedContactsResponse, __MetadataBearer {}

/**
 * <p>Provides information about contact tree, a list of associated contacts with a unique identifier.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListAssociatedContactsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListAssociatedContactsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // ListAssociatedContactsRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ContactId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListAssociatedContactsCommand(input);
 * const response = await client.send(command);
 * // { // ListAssociatedContactsResponse
 * //   ContactSummaryList: [ // AssociatedContactSummaryList
 * //     { // AssociatedContactSummary
 * //       ContactId: "STRING_VALUE",
 * //       ContactArn: "STRING_VALUE",
 * //       InitiationTimestamp: new Date("TIMESTAMP"),
 * //       DisconnectTimestamp: new Date("TIMESTAMP"),
 * //       InitialContactId: "STRING_VALUE",
 * //       PreviousContactId: "STRING_VALUE",
 * //       RelatedContactId: "STRING_VALUE",
 * //       InitiationMethod: "INBOUND" || "OUTBOUND" || "TRANSFER" || "QUEUE_TRANSFER" || "CALLBACK" || "API" || "DISCONNECT" || "MONITOR" || "EXTERNAL_OUTBOUND" || "WEBRTC_API" || "AGENT_REPLY" || "FLOW",
 * //       Channel: "VOICE" || "CHAT" || "TASK" || "EMAIL",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAssociatedContactsCommandInput - {@link ListAssociatedContactsCommandInput}
 * @returns {@link ListAssociatedContactsCommandOutput}
 * @see {@link ListAssociatedContactsCommandInput} for command's `input` shape.
 * @see {@link ListAssociatedContactsCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
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
export class ListAssociatedContactsCommand extends $Command
  .classBuilder<
    ListAssociatedContactsCommandInput,
    ListAssociatedContactsCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "ListAssociatedContacts", {})
  .n("ConnectClient", "ListAssociatedContactsCommand")
  .sc(ListAssociatedContacts)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAssociatedContactsRequest;
      output: ListAssociatedContactsResponse;
    };
    sdk: {
      input: ListAssociatedContactsCommandInput;
      output: ListAssociatedContactsCommandOutput;
    };
  };
}
