// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectCampaignsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectCampaignsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetConnectInstanceConfigRequest, GetConnectInstanceConfigResponse } from "../models/models_0";
import { GetConnectInstanceConfig } from "../schemas/schemas_3_Instance";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetConnectInstanceConfigCommand}.
 */
export interface GetConnectInstanceConfigCommandInput extends GetConnectInstanceConfigRequest {}
/**
 * @public
 *
 * The output of {@link GetConnectInstanceConfigCommand}.
 */
export interface GetConnectInstanceConfigCommandOutput extends GetConnectInstanceConfigResponse, __MetadataBearer {}

/**
 * Get the specific Connect instance config.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCampaignsClient, GetConnectInstanceConfigCommand } from "@aws-sdk/client-connectcampaigns"; // ES Modules import
 * // const { ConnectCampaignsClient, GetConnectInstanceConfigCommand } = require("@aws-sdk/client-connectcampaigns"); // CommonJS import
 * // import type { ConnectCampaignsClientConfig } from "@aws-sdk/client-connectcampaigns";
 * const config = {}; // type is ConnectCampaignsClientConfig
 * const client = new ConnectCampaignsClient(config);
 * const input = { // GetConnectInstanceConfigRequest
 *   connectInstanceId: "STRING_VALUE", // required
 * };
 * const command = new GetConnectInstanceConfigCommand(input);
 * const response = await client.send(command);
 * // { // GetConnectInstanceConfigResponse
 * //   connectInstanceConfig: { // InstanceConfig
 * //     connectInstanceId: "STRING_VALUE", // required
 * //     serviceLinkedRoleArn: "STRING_VALUE", // required
 * //     encryptionConfig: { // EncryptionConfig
 * //       enabled: true || false, // required
 * //       encryptionType: "STRING_VALUE",
 * //       keyArn: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetConnectInstanceConfigCommandInput - {@link GetConnectInstanceConfigCommandInput}
 * @returns {@link GetConnectInstanceConfigCommandOutput}
 * @see {@link GetConnectInstanceConfigCommandInput} for command's `input` shape.
 * @see {@link GetConnectInstanceConfigCommandOutput} for command's `response` shape.
 * @see {@link ConnectCampaignsClientResolvedConfig | config} for ConnectCampaignsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  Request processing failed because of an error or failure with the service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The specified resource was not found.
 *
 * @throws {@link ValidationException} (client fault)
 *  The input fails to satisfy the constraints specified by an AWS service.
 *
 * @throws {@link ConnectCampaignsServiceException}
 * <p>Base exception class for all service exceptions from ConnectCampaigns service.</p>
 *
 *
 * @public
 */
export class GetConnectInstanceConfigCommand extends $Command
  .classBuilder<
    GetConnectInstanceConfigCommandInput,
    GetConnectInstanceConfigCommandOutput,
    ConnectCampaignsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectCampaignsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectCampaignService", "GetConnectInstanceConfig", {})
  .n("ConnectCampaignsClient", "GetConnectInstanceConfigCommand")
  .sc(GetConnectInstanceConfig)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetConnectInstanceConfigRequest;
      output: GetConnectInstanceConfigResponse;
    };
    sdk: {
      input: GetConnectInstanceConfigCommandInput;
      output: GetConnectInstanceConfigCommandOutput;
    };
  };
}
