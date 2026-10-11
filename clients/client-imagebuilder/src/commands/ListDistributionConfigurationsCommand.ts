// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListDistributionConfigurationsRequest, ListDistributionConfigurationsResponse } from "../models/models_0";
import { ListDistributionConfigurations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface ListDistributionConfigurationsCommandOutput extends ListDistributionConfigurationsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of distribution configurations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ListDistributionConfigurationsCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ListDistributionConfigurationsCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
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
 *  <p>You have exceeded the permitted request rate for the Amazon EC2 APIs that Image Builder
 * 			calls on your behalf. Retry with an increasing or variable delay between
 * 			requests.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A generic client error. This error usually indicates that the request
 * 			failed a validation check, such as when a downstream service rejects a
 * 			configured value.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You are not authorized to perform the requested operation.</p>
 *
 * @throws {@link InvalidPaginationTokenException} (client fault)
 *  <p>You have provided an invalid pagination token in your request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is malformed or otherwise invalid. Verify the request and try
 * 			again.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An internal server error occurred while Image Builder processed the request.
 * 			Retrying the request may succeed.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unable to process your request at this time.</p>
 *
 * @throws {@link ImagebuilderServiceException}
 * <p>Base exception class for all service exceptions from Imagebuilder service.</p>
 *
 *
 * @example List distribution configurations that match a name filter
 * ```javascript
 * // The following example lists the distribution configurations whose name matches the filter value.
 * const input = {
 *   filters: [
 *     {
 *       name: "name",
 *       values: [
 *         "my-example-distribution-configuration"
 *       ]
 *     }
 *   ]
 * };
 * const command = new ListDistributionConfigurationsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   distributionConfigurationSummaryList: [
 *     {
 *       arn: "arn:aws:imagebuilder:us-west-2:111122223333:distribution-configuration/my-example-distribution-configuration",
 *       dateCreated: "2026-09-09T21:09:02.581Z",
 *       description: "Distributes AMIs to us-west-2",
 *       name: "my-example-distribution-configuration",
 *       regions: [
 *         "us-west-2"
 *       ]
 *     }
 *   ],
 *   requestId: "1057325c-6b4a-4e16-ac6e-12f1d8fcc6f9"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListDistributionConfigurationsCommand extends command<ListDistributionConfigurationsCommandInput, ListDistributionConfigurationsCommandOutput>(
  _ep0,
  _mw0,
  "ListDistributionConfigurations",
  ListDistributionConfigurations$
) {
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
