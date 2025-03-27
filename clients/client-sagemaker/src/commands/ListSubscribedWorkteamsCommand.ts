// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListSubscribedWorkteamsRequest, ListSubscribedWorkteamsResponse } from "../models/models_4";
import { de_ListSubscribedWorkteamsCommand, se_ListSubscribedWorkteamsCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSubscribedWorkteamsCommand}.
 */
export interface ListSubscribedWorkteamsCommandInput extends ListSubscribedWorkteamsRequest {}
/**
 * @public
 *
 * The output of {@link ListSubscribedWorkteamsCommand}.
 */
export interface ListSubscribedWorkteamsCommandOutput extends ListSubscribedWorkteamsResponse, __MetadataBearer {}

/**
 * <p>Gets a list of the work teams that you are subscribed to in the Amazon Web Services Marketplace. The
 *             list may be empty if no work team satisfies the filter specified in the
 *                 <code>NameContains</code> parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListSubscribedWorkteamsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListSubscribedWorkteamsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // ListSubscribedWorkteamsRequest
 *   NameContains: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListSubscribedWorkteamsCommand(input);
 * const response = await client.send(command);
 * // { // ListSubscribedWorkteamsResponse
 * //   SubscribedWorkteams: [ // SubscribedWorkteams // required
 * //     { // SubscribedWorkteam
 * //       WorkteamArn: "STRING_VALUE", // required
 * //       MarketplaceTitle: "STRING_VALUE",
 * //       SellerName: "STRING_VALUE",
 * //       MarketplaceDescription: "STRING_VALUE",
 * //       ListingId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSubscribedWorkteamsCommandInput - {@link ListSubscribedWorkteamsCommandInput}
 * @returns {@link ListSubscribedWorkteamsCommandOutput}
 * @see {@link ListSubscribedWorkteamsCommandInput} for command's `input` shape.
 * @see {@link ListSubscribedWorkteamsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class ListSubscribedWorkteamsCommand extends $Command
  .classBuilder<
    ListSubscribedWorkteamsCommandInput,
    ListSubscribedWorkteamsCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMaker", "ListSubscribedWorkteams", {})
  .n("SageMakerClient", "ListSubscribedWorkteamsCommand")
  .f(void 0, void 0)
  .ser(se_ListSubscribedWorkteamsCommand)
  .de(de_ListSubscribedWorkteamsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSubscribedWorkteamsRequest;
      output: ListSubscribedWorkteamsResponse;
    };
    sdk: {
      input: ListSubscribedWorkteamsCommandInput;
      output: ListSubscribedWorkteamsCommandOutput;
    };
  };
}
