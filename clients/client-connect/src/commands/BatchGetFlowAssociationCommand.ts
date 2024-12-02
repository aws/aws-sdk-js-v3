// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { BatchGetFlowAssociationRequest, BatchGetFlowAssociationResponse } from "../models/models_0";
import { de_BatchGetFlowAssociationCommand, se_BatchGetFlowAssociationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetFlowAssociationCommand}.
 */
export interface BatchGetFlowAssociationCommandInput extends BatchGetFlowAssociationRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetFlowAssociationCommand}.
 */
export interface BatchGetFlowAssociationCommandOutput extends BatchGetFlowAssociationResponse, __MetadataBearer {}

/**
 * <p>Retrieve the flow associations for the given resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, BatchGetFlowAssociationCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, BatchGetFlowAssociationCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // BatchGetFlowAssociationRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ResourceIds: [ // resourceArnListMaxLimit100 // required
 *     "STRING_VALUE",
 *   ],
 *   ResourceType: "WHATSAPP_MESSAGING_PHONE_NUMBER" || "VOICE_PHONE_NUMBER" || "INBOUND_EMAIL" || "OUTBOUND_EMAIL" || "ANALYTICS_CONNECTOR",
 * };
 * const command = new BatchGetFlowAssociationCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetFlowAssociationResponse
 * //   FlowAssociationSummaryList: [ // FlowAssociationSummaryList
 * //     { // FlowAssociationSummary
 * //       ResourceId: "STRING_VALUE",
 * //       FlowId: "STRING_VALUE",
 * //       ResourceType: "WHATSAPP_MESSAGING_PHONE_NUMBER" || "VOICE_PHONE_NUMBER" || "INBOUND_EMAIL" || "OUTBOUND_EMAIL" || "ANALYTICS_CONNECTOR",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetFlowAssociationCommandInput - {@link BatchGetFlowAssociationCommandInput}
 * @returns {@link BatchGetFlowAssociationCommandOutput}
 * @see {@link BatchGetFlowAssociationCommandInput} for command's `input` shape.
 * @see {@link BatchGetFlowAssociationCommandOutput} for command's `response` shape.
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
export class BatchGetFlowAssociationCommand extends $Command
  .classBuilder<
    BatchGetFlowAssociationCommandInput,
    BatchGetFlowAssociationCommandOutput,
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
  .s("AmazonConnectService", "BatchGetFlowAssociation", {})
  .n("ConnectClient", "BatchGetFlowAssociationCommand")
  .f(void 0, void 0)
  .ser(se_BatchGetFlowAssociationCommand)
  .de(de_BatchGetFlowAssociationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetFlowAssociationRequest;
      output: BatchGetFlowAssociationResponse;
    };
    sdk: {
      input: BatchGetFlowAssociationCommandInput;
      output: BatchGetFlowAssociationCommandOutput;
    };
  };
}
