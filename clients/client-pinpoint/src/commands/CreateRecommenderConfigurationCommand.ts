// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateRecommenderConfigurationRequest, CreateRecommenderConfigurationResponse } from "../models/models_0";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import {
  de_CreateRecommenderConfigurationCommand,
  se_CreateRecommenderConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateRecommenderConfigurationCommand}.
 */
export interface CreateRecommenderConfigurationCommandInput extends CreateRecommenderConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateRecommenderConfigurationCommand}.
 */
export interface CreateRecommenderConfigurationCommandOutput
  extends CreateRecommenderConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Creates an Amazon Pinpoint configuration for a recommender model.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, CreateRecommenderConfigurationCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, CreateRecommenderConfigurationCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new PinpointClient(config);
 * const input = { // CreateRecommenderConfigurationRequest
 *   CreateRecommenderConfiguration: { // CreateRecommenderConfigurationShape
 *     Attributes: { // MapOf__string
 *       "<keys>": "STRING_VALUE",
 *     },
 *     Description: "STRING_VALUE",
 *     Name: "STRING_VALUE",
 *     RecommendationProviderIdType: "STRING_VALUE",
 *     RecommendationProviderRoleArn: "STRING_VALUE", // required
 *     RecommendationProviderUri: "STRING_VALUE", // required
 *     RecommendationTransformerUri: "STRING_VALUE",
 *     RecommendationsDisplayName: "STRING_VALUE",
 *     RecommendationsPerMessage: Number("int"),
 *   },
 * };
 * const command = new CreateRecommenderConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateRecommenderConfigurationResponse
 * //   RecommenderConfigurationResponse: { // RecommenderConfigurationResponse
 * //     Attributes: { // MapOf__string
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     CreationDate: "STRING_VALUE", // required
 * //     Description: "STRING_VALUE",
 * //     Id: "STRING_VALUE", // required
 * //     LastModifiedDate: "STRING_VALUE", // required
 * //     Name: "STRING_VALUE",
 * //     RecommendationProviderIdType: "STRING_VALUE",
 * //     RecommendationProviderRoleArn: "STRING_VALUE", // required
 * //     RecommendationProviderUri: "STRING_VALUE", // required
 * //     RecommendationTransformerUri: "STRING_VALUE",
 * //     RecommendationsDisplayName: "STRING_VALUE",
 * //     RecommendationsPerMessage: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateRecommenderConfigurationCommandInput - {@link CreateRecommenderConfigurationCommandInput}
 * @returns {@link CreateRecommenderConfigurationCommandOutput}
 * @see {@link CreateRecommenderConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateRecommenderConfigurationCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for PinpointClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PayloadTooLargeException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PinpointServiceException}
 * <p>Base exception class for all service exceptions from Pinpoint service.</p>
 *
 * @public
 */
export class CreateRecommenderConfigurationCommand extends $Command
  .classBuilder<
    CreateRecommenderConfigurationCommandInput,
    CreateRecommenderConfigurationCommandOutput,
    PinpointClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Pinpoint", "CreateRecommenderConfiguration", {})
  .n("PinpointClient", "CreateRecommenderConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_CreateRecommenderConfigurationCommand)
  .de(de_CreateRecommenderConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRecommenderConfigurationRequest;
      output: CreateRecommenderConfigurationResponse;
    };
    sdk: {
      input: CreateRecommenderConfigurationCommandInput;
      output: CreateRecommenderConfigurationCommandOutput;
    };
  };
}
