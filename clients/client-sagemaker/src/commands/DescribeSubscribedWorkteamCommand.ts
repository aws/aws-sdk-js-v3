// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeSubscribedWorkteamRequest, DescribeSubscribedWorkteamResponse } from "../models/models_2";
import { de_DescribeSubscribedWorkteamCommand, se_DescribeSubscribedWorkteamCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeSubscribedWorkteamCommand}.
 */
export interface DescribeSubscribedWorkteamCommandInput extends DescribeSubscribedWorkteamRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSubscribedWorkteamCommand}.
 */
export interface DescribeSubscribedWorkteamCommandOutput extends DescribeSubscribedWorkteamResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about a work team provided by a vendor. It returns details about the
 *             subscription with a vendor in the Amazon Web Services Marketplace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeSubscribedWorkteamCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeSubscribedWorkteamCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DescribeSubscribedWorkteamRequest
 *   WorkteamArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeSubscribedWorkteamCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSubscribedWorkteamResponse
 * //   SubscribedWorkteam: { // SubscribedWorkteam
 * //     WorkteamArn: "STRING_VALUE", // required
 * //     MarketplaceTitle: "STRING_VALUE",
 * //     SellerName: "STRING_VALUE",
 * //     MarketplaceDescription: "STRING_VALUE",
 * //     ListingId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeSubscribedWorkteamCommandInput - {@link DescribeSubscribedWorkteamCommandInput}
 * @returns {@link DescribeSubscribedWorkteamCommandOutput}
 * @see {@link DescribeSubscribedWorkteamCommandInput} for command's `input` shape.
 * @see {@link DescribeSubscribedWorkteamCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class DescribeSubscribedWorkteamCommand extends $Command
  .classBuilder<
    DescribeSubscribedWorkteamCommandInput,
    DescribeSubscribedWorkteamCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any /*Command*/, Command: any /*static*/, config: SageMakerClientResolvedConfig) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMaker", "DescribeSubscribedWorkteam", {})
  .n("SageMakerClient", "DescribeSubscribedWorkteamCommand")
  .f(void 0, void 0)
  .ser(se_DescribeSubscribedWorkteamCommand)
  .de(de_DescribeSubscribedWorkteamCommand)
  .build() {}
