// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetFlowAssociationRequest, GetFlowAssociationResponse } from "../models/models_1";
import { GetFlowAssociation } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetFlowAssociationCommand}.
 */
export interface GetFlowAssociationCommandInput extends GetFlowAssociationRequest {}
/**
 * @public
 *
 * The output of {@link GetFlowAssociationCommand}.
 */
export interface GetFlowAssociationCommandOutput extends GetFlowAssociationResponse, __MetadataBearer {}

/**
 * <p>Retrieves the flow associated for a given resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, GetFlowAssociationCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, GetFlowAssociationCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // GetFlowAssociationRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ResourceId: "STRING_VALUE", // required
 *   ResourceType: "SMS_PHONE_NUMBER" || "INBOUND_EMAIL" || "OUTBOUND_EMAIL" || "ANALYTICS_CONNECTOR" || "WHATSAPP_MESSAGING_PHONE_NUMBER", // required
 * };
 * const command = new GetFlowAssociationCommand(input);
 * const response = await client.send(command);
 * // { // GetFlowAssociationResponse
 * //   ResourceId: "STRING_VALUE",
 * //   FlowId: "STRING_VALUE",
 * //   ResourceType: "SMS_PHONE_NUMBER" || "INBOUND_EMAIL" || "OUTBOUND_EMAIL" || "ANALYTICS_CONNECTOR" || "WHATSAPP_MESSAGING_PHONE_NUMBER",
 * // };
 *
 * ```
 *
 * @param GetFlowAssociationCommandInput - {@link GetFlowAssociationCommandInput}
 * @returns {@link GetFlowAssociationCommandOutput}
 * @see {@link GetFlowAssociationCommandInput} for command's `input` shape.
 * @see {@link GetFlowAssociationCommandOutput} for command's `response` shape.
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
export class GetFlowAssociationCommand extends $Command
  .classBuilder<
    GetFlowAssociationCommandInput,
    GetFlowAssociationCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "GetFlowAssociation", {})
  .n("ConnectClient", "GetFlowAssociationCommand")
  .sc(GetFlowAssociation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetFlowAssociationRequest;
      output: GetFlowAssociationResponse;
    };
    sdk: {
      input: GetFlowAssociationCommandInput;
      output: GetFlowAssociationCommandOutput;
    };
  };
}
