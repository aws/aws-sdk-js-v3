// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { ListInfrastructureConfigurationsRequest, ListInfrastructureConfigurationsResponse } from "../models/models_0";
import {
  de_ListInfrastructureConfigurationsCommand,
  se_ListInfrastructureConfigurationsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListInfrastructureConfigurationsCommand}.
 */
export interface ListInfrastructureConfigurationsCommandInput extends ListInfrastructureConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListInfrastructureConfigurationsCommand}.
 */
export interface ListInfrastructureConfigurationsCommandOutput
  extends ListInfrastructureConfigurationsResponse,
    __MetadataBearer {}

/**
 * <p>Returns a list of infrastructure configurations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ListInfrastructureConfigurationsCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ListInfrastructureConfigurationsCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const input = { // ListInfrastructureConfigurationsRequest
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
 * const command = new ListInfrastructureConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListInfrastructureConfigurationsResponse
 * //   requestId: "STRING_VALUE",
 * //   infrastructureConfigurationSummaryList: [ // InfrastructureConfigurationSummaryList
 * //     { // InfrastructureConfigurationSummary
 * //       arn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       dateCreated: "STRING_VALUE",
 * //       dateUpdated: "STRING_VALUE",
 * //       resourceTags: { // ResourceTagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       instanceTypes: [ // InstanceTypeList
 * //         "STRING_VALUE",
 * //       ],
 * //       instanceProfileName: "STRING_VALUE",
 * //       placement: { // Placement
 * //         availabilityZone: "STRING_VALUE",
 * //         tenancy: "default" || "dedicated" || "host",
 * //         hostId: "STRING_VALUE",
 * //         hostResourceGroupArn: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListInfrastructureConfigurationsCommandInput - {@link ListInfrastructureConfigurationsCommandInput}
 * @returns {@link ListInfrastructureConfigurationsCommandOutput}
 * @see {@link ListInfrastructureConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListInfrastructureConfigurationsCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class ListInfrastructureConfigurationsCommand extends $Command
  .classBuilder<
    ListInfrastructureConfigurationsCommandInput,
    ListInfrastructureConfigurationsCommandOutput,
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
  .s("imagebuilder", "ListInfrastructureConfigurations", {})
  .n("ImagebuilderClient", "ListInfrastructureConfigurationsCommand")
  .f(void 0, void 0)
  .ser(se_ListInfrastructureConfigurationsCommand)
  .de(de_ListInfrastructureConfigurationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListInfrastructureConfigurationsRequest;
      output: ListInfrastructureConfigurationsResponse;
    };
    sdk: {
      input: ListInfrastructureConfigurationsCommandInput;
      output: ListInfrastructureConfigurationsCommandOutput;
    };
  };
}
