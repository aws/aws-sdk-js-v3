// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetRecommenderConfigurationsRequest, GetRecommenderConfigurationsResponse } from "../models/models_1";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import {
  de_GetRecommenderConfigurationsCommand,
  se_GetRecommenderConfigurationsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRecommenderConfigurationsCommand}.
 */
export interface GetRecommenderConfigurationsCommandInput extends GetRecommenderConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link GetRecommenderConfigurationsCommand}.
 */
export interface GetRecommenderConfigurationsCommandOutput
  extends GetRecommenderConfigurationsResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves information about all the recommender model configurations that are associated with your Amazon Pinpoint account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetRecommenderConfigurationsCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetRecommenderConfigurationsCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const input = { // GetRecommenderConfigurationsRequest
 *   PageSize: "STRING_VALUE",
 *   Token: "STRING_VALUE",
 * };
 * const command = new GetRecommenderConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // GetRecommenderConfigurationsResponse
 * //   ListRecommenderConfigurationsResponse: { // ListRecommenderConfigurationsResponse
 * //     Item: [ // ListOfRecommenderConfigurationResponse // required
 * //       { // RecommenderConfigurationResponse
 * //         Attributes: { // MapOf__string
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         CreationDate: "STRING_VALUE", // required
 * //         Description: "STRING_VALUE",
 * //         Id: "STRING_VALUE", // required
 * //         LastModifiedDate: "STRING_VALUE", // required
 * //         Name: "STRING_VALUE",
 * //         RecommendationProviderIdType: "STRING_VALUE",
 * //         RecommendationProviderRoleArn: "STRING_VALUE", // required
 * //         RecommendationProviderUri: "STRING_VALUE", // required
 * //         RecommendationTransformerUri: "STRING_VALUE",
 * //         RecommendationsDisplayName: "STRING_VALUE",
 * //         RecommendationsPerMessage: Number("int"),
 * //       },
 * //     ],
 * //     NextToken: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetRecommenderConfigurationsCommandInput - {@link GetRecommenderConfigurationsCommandInput}
 * @returns {@link GetRecommenderConfigurationsCommandOutput}
 * @see {@link GetRecommenderConfigurationsCommandInput} for command's `input` shape.
 * @see {@link GetRecommenderConfigurationsCommandOutput} for command's `response` shape.
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
export class GetRecommenderConfigurationsCommand extends $Command
  .classBuilder<
    GetRecommenderConfigurationsCommandInput,
    GetRecommenderConfigurationsCommandOutput,
    PinpointClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: PinpointClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Pinpoint", "GetRecommenderConfigurations", {})
  .n("PinpointClient", "GetRecommenderConfigurationsCommand")
  .f(void 0, void 0)
  .ser(se_GetRecommenderConfigurationsCommand)
  .de(de_GetRecommenderConfigurationsCommand)
  .build() {}
