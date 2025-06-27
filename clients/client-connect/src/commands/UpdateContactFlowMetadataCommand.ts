// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateContactFlowMetadataRequest, UpdateContactFlowMetadataResponse } from "../models/models_2";
import { de_UpdateContactFlowMetadataCommand, se_UpdateContactFlowMetadataCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateContactFlowMetadataCommand}.
 */
export interface UpdateContactFlowMetadataCommandInput extends UpdateContactFlowMetadataRequest {}
/**
 * @public
 *
 * The output of {@link UpdateContactFlowMetadataCommand}.
 */
export interface UpdateContactFlowMetadataCommandOutput extends UpdateContactFlowMetadataResponse, __MetadataBearer {}

/**
 * <p>Updates metadata about specified flow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateContactFlowMetadataCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateContactFlowMetadataCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // UpdateContactFlowMetadataRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ContactFlowId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   ContactFlowState: "ACTIVE" || "ARCHIVED",
 * };
 * const command = new UpdateContactFlowMetadataCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateContactFlowMetadataCommandInput - {@link UpdateContactFlowMetadataCommandInput}
 * @returns {@link UpdateContactFlowMetadataCommandOutput}
 * @see {@link UpdateContactFlowMetadataCommandInput} for command's `input` shape.
 * @see {@link UpdateContactFlowMetadataCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link DuplicateResourceException} (client fault)
 *  <p>A resource with the specified name already exists.</p>
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
export class UpdateContactFlowMetadataCommand extends $Command
  .classBuilder<
    UpdateContactFlowMetadataCommandInput,
    UpdateContactFlowMetadataCommandOutput,
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
  .s("AmazonConnectService", "UpdateContactFlowMetadata", {})
  .n("ConnectClient", "UpdateContactFlowMetadataCommand")
  .f(void 0, void 0)
  .ser(se_UpdateContactFlowMetadataCommand)
  .de(de_UpdateContactFlowMetadataCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateContactFlowMetadataRequest;
      output: {};
    };
    sdk: {
      input: UpdateContactFlowMetadataCommandInput;
      output: UpdateContactFlowMetadataCommandOutput;
    };
  };
}
