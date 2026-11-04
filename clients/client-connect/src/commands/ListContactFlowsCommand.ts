// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListContactFlowsRequest, ListContactFlowsResponse } from "../models/models_2";
import { ListContactFlows$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListContactFlowsCommand}.
 */
export interface ListContactFlowsCommandInput extends ListContactFlowsRequest {}
/**
 * @public
 *
 * The output of {@link ListContactFlowsCommand}.
 */
export interface ListContactFlowsCommandOutput extends ListContactFlowsResponse, __MetadataBearer {}

/**
 * Provides information about the flows for the specified Connect Customer instance.
 *
 * You can also create and update flows using the [Connect Customer Flow language](https://docs.aws.amazon.com/connect/latest/APIReference/flow-language.html).
 *
 * For more information about flows, see [Flows](https://docs.aws.amazon.com/connect/latest/adminguide/concepts-contact-flows.html) in the *Connect Customer Administrator Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListContactFlowsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListContactFlowsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // ListContactFlowsRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ContactFlowTypes: [ // ContactFlowTypes
 *     "CONTACT_FLOW" || "CUSTOMER_QUEUE" || "CUSTOMER_HOLD" || "CUSTOMER_WHISPER" || "AGENT_HOLD" || "AGENT_WHISPER" || "OUTBOUND_WHISPER" || "AGENT_TRANSFER" || "QUEUE_TRANSFER" || "CAMPAIGN",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListContactFlowsCommand(input);
 * const response = await client.send(command);
 * // { // ListContactFlowsResponse
 * //   ContactFlowSummaryList: [ // ContactFlowSummaryList
 * //     { // ContactFlowSummary
 * //       Id: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       ContactFlowType: "CONTACT_FLOW" || "CUSTOMER_QUEUE" || "CUSTOMER_HOLD" || "CUSTOMER_WHISPER" || "AGENT_HOLD" || "AGENT_WHISPER" || "OUTBOUND_WHISPER" || "AGENT_TRANSFER" || "QUEUE_TRANSFER" || "CAMPAIGN",
 * //       ContactFlowState: "ACTIVE" || "ARCHIVED",
 * //       ContactFlowStatus: "PUBLISHED" || "SAVED",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListContactFlowsCommandInput - {@link ListContactFlowsCommandInput}
 * @returns {@link ListContactFlowsCommandOutput}
 * @see {@link ListContactFlowsCommandInput} for command's `input` shape.
 * @see {@link ListContactFlowsCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
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
export class ListContactFlowsCommand extends command<ListContactFlowsCommandInput, ListContactFlowsCommandOutput>(
  _ep0,
  _mw0,
  "ListContactFlows",
  ListContactFlows$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListContactFlowsRequest;
      output: ListContactFlowsResponse;
    };
    sdk: {
      input: ListContactFlowsCommandInput;
      output: ListContactFlowsCommandOutput;
    };
  };
}
