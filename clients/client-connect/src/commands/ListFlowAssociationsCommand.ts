// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListFlowAssociationsRequest, ListFlowAssociationsResponse } from "../models/models_1";
import { de_ListFlowAssociationsCommand, se_ListFlowAssociationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListFlowAssociationsCommand}.
 */
export interface ListFlowAssociationsCommandInput extends ListFlowAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListFlowAssociationsCommand}.
 */
export interface ListFlowAssociationsCommandOutput extends ListFlowAssociationsResponse, __MetadataBearer {}

/**
 * <p>List the flow association based on the filters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListFlowAssociationsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListFlowAssociationsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // ListFlowAssociationsRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ResourceType: "VOICE_PHONE_NUMBER" || "INBOUND_EMAIL" || "OUTBOUND_EMAIL",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListFlowAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListFlowAssociationsResponse
 * //   FlowAssociationSummaryList: [ // FlowAssociationSummaryList
 * //     { // FlowAssociationSummary
 * //       ResourceId: "STRING_VALUE",
 * //       FlowId: "STRING_VALUE",
 * //       ResourceType: "VOICE_PHONE_NUMBER" || "INBOUND_EMAIL" || "OUTBOUND_EMAIL",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFlowAssociationsCommandInput - {@link ListFlowAssociationsCommandInput}
 * @returns {@link ListFlowAssociationsCommandOutput}
 * @see {@link ListFlowAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListFlowAssociationsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListFlowAssociationsCommand extends $Command
  .classBuilder<
    ListFlowAssociationsCommandInput,
    ListFlowAssociationsCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "ListFlowAssociations", {})
  .n("ConnectClient", "ListFlowAssociationsCommand")
  .f(void 0, void 0)
  .ser(se_ListFlowAssociationsCommand)
  .de(de_ListFlowAssociationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFlowAssociationsRequest;
      output: ListFlowAssociationsResponse;
    };
    sdk: {
      input: ListFlowAssociationsCommandInput;
      output: ListFlowAssociationsCommandOutput;
    };
  };
}
