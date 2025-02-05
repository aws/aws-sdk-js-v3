// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { ListDistributionConfigurationsRequest, ListDistributionConfigurationsResponse } from "../models/models_0";
import {
  de_ListDistributionConfigurationsCommand,
  se_ListDistributionConfigurationsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDistributionConfigurationsCommand}.
 */
export interface ListDistributionConfigurationsCommandInput extends ListDistributionConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListDistributionConfigurationsCommand}.
 */
export interface ListDistributionConfigurationsCommandOutput
  extends ListDistributionConfigurationsResponse,
    __MetadataBearer {}

/**
 * <p>Returns a list of distribution configurations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ListDistributionConfigurationsCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ListDistributionConfigurationsCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ImagebuilderClient(config);
 * const input = { // ListDistributionConfigurationsRequest
 *   filters: [ // FilterList
 *     { // Filter
 *       name: "STRING_VALUE",
 *       values: [ // FilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListDistributionConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListDistributionConfigurationsResponse
 * //   requestId: "STRING_VALUE",
 * //   distributionConfigurationSummaryList: [ // DistributionConfigurationSummaryList
 * //     { // DistributionConfigurationSummary
 * //       arn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       dateCreated: "STRING_VALUE",
 * //       dateUpdated: "STRING_VALUE",
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       regions: [ // RegionList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDistributionConfigurationsCommandInput - {@link ListDistributionConfigurationsCommandInput}
 * @returns {@link ListDistributionConfigurationsCommandOutput}
 * @see {@link ListDistributionConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListDistributionConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for ImagebuilderClient's `config` shape.
 *
 * @throws {@link CallRateLimitExceededException} (client fault)
 *  <p>You have exceeded the permitted request rate for the specific operation.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action, such as using an action or
 * 			resource on behalf of a user that doesn't have permissions to use the action or
 * 			resource, or specifying an invalid resource identifier.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You are not authorized to perform the requested operation.</p>
 *
 * @throws {@link InvalidPaginationTokenException} (client fault)
 *  <p>You have provided an invalid pagination token in your request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>You have requested an action that that the service doesn't support.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>This exception is thrown when the service encounters an unrecoverable
 * 			exception.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unable to process your request at this time.</p>
 *
 * @throws {@link ImagebuilderServiceException}
 * <p>Base exception class for all service exceptions from Imagebuilder service.</p>
 *
 * @public
 */
export class ListDistributionConfigurationsCommand extends $Command
  .classBuilder<
    ListDistributionConfigurationsCommandInput,
    ListDistributionConfigurationsCommandOutput,
    ImagebuilderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ImagebuilderClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("imagebuilder", "ListDistributionConfigurations", {})
  .n("ImagebuilderClient", "ListDistributionConfigurationsCommand")
  .f(void 0, void 0)
  .ser(se_ListDistributionConfigurationsCommand)
  .de(de_ListDistributionConfigurationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDistributionConfigurationsRequest;
      output: ListDistributionConfigurationsResponse;
    };
    sdk: {
      input: ListDistributionConfigurationsCommandInput;
      output: ListDistributionConfigurationsCommandOutput;
    };
  };
}
