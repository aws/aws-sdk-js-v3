// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetTrafficDistributionRequest, GetTrafficDistributionResponse } from "../models/models_1";
import { de_GetTrafficDistributionCommand, se_GetTrafficDistributionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTrafficDistributionCommand}.
 */
export interface GetTrafficDistributionCommandInput extends GetTrafficDistributionRequest {}
/**
 * @public
 *
 * The output of {@link GetTrafficDistributionCommand}.
 */
export interface GetTrafficDistributionCommandOutput extends GetTrafficDistributionResponse, __MetadataBearer {}

/**
 * <p>Retrieves the current traffic distribution for a given traffic distribution group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, GetTrafficDistributionCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, GetTrafficDistributionCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // GetTrafficDistributionRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetTrafficDistributionCommand(input);
 * const response = await client.send(command);
 * // { // GetTrafficDistributionResponse
 * //   TelephonyConfig: { // TelephonyConfig
 * //     Distributions: [ // DistributionList // required
 * //       { // Distribution
 * //         Region: "STRING_VALUE", // required
 * //         Percentage: Number("int"), // required
 * //       },
 * //     ],
 * //   },
 * //   Id: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * //   SignInConfig: { // SignInConfig
 * //     Distributions: [ // SignInDistributionList // required
 * //       { // SignInDistribution
 * //         Region: "STRING_VALUE", // required
 * //         Enabled: true || false, // required
 * //       },
 * //     ],
 * //   },
 * //   AgentConfig: { // AgentConfig
 * //     Distributions: [ // required
 * //       {
 * //         Region: "STRING_VALUE", // required
 * //         Percentage: Number("int"), // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTrafficDistributionCommandInput - {@link GetTrafficDistributionCommandInput}
 * @returns {@link GetTrafficDistributionCommandOutput}
 * @see {@link GetTrafficDistributionCommandInput} for command's `input` shape.
 * @see {@link GetTrafficDistributionCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
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
export class GetTrafficDistributionCommand extends $Command
  .classBuilder<
    GetTrafficDistributionCommandInput,
    GetTrafficDistributionCommandOutput,
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
  .s("AmazonConnectService", "GetTrafficDistribution", {})
  .n("ConnectClient", "GetTrafficDistributionCommand")
  .f(void 0, void 0)
  .ser(se_GetTrafficDistributionCommand)
  .de(de_GetTrafficDistributionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTrafficDistributionRequest;
      output: GetTrafficDistributionResponse;
    };
    sdk: {
      input: GetTrafficDistributionCommandInput;
      output: GetTrafficDistributionCommandOutput;
    };
  };
}
