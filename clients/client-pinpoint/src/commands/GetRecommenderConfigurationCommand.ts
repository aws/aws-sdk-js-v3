// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetRecommenderConfigurationRequest, GetRecommenderConfigurationResponse } from "../models/models_1";
import type { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { GetRecommenderConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRecommenderConfigurationCommand}.
 */
export interface GetRecommenderConfigurationCommandInput extends GetRecommenderConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetRecommenderConfigurationCommand}.
 */
export interface GetRecommenderConfigurationCommandOutput extends GetRecommenderConfigurationResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about an Amazon Pinpoint configuration for a recommender model.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetRecommenderConfigurationCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetRecommenderConfigurationCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
 * const client = new PinpointClient(config);
 * const input = { // GetRecommenderConfigurationRequest
 *   RecommenderId: "STRING_VALUE", // required
 * };
 * const command = new GetRecommenderConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetRecommenderConfigurationResponse
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
 * @param GetRecommenderConfigurationCommandInput - {@link GetRecommenderConfigurationCommandInput}
 * @returns {@link GetRecommenderConfigurationCommandOutput}
 * @see {@link GetRecommenderConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetRecommenderConfigurationCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class GetRecommenderConfigurationCommand extends $Command
  .classBuilder<
    GetRecommenderConfigurationCommandInput,
    GetRecommenderConfigurationCommandOutput,
    PinpointClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Pinpoint", "GetRecommenderConfiguration", {})
  .n("PinpointClient", "GetRecommenderConfigurationCommand")
  .sc(GetRecommenderConfiguration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRecommenderConfigurationRequest;
      output: GetRecommenderConfigurationResponse;
    };
    sdk: {
      input: GetRecommenderConfigurationCommandInput;
      output: GetRecommenderConfigurationCommandOutput;
    };
  };
}
