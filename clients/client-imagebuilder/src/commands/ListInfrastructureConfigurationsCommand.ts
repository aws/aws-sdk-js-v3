// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListInfrastructureConfigurationsRequest,
  ListInfrastructureConfigurationsResponse,
} from "../models/models_0";
import { ListInfrastructureConfigurations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface ListInfrastructureConfigurationsCommandOutput extends ListInfrastructureConfigurationsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of infrastructure configurations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ListInfrastructureConfigurationsCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ListInfrastructureConfigurationsCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
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
 * @example List infrastructure configurations by name
 * ```javascript
 * // The following example lists your infrastructure configurations, filtered to a specific resource name.
 * const input = {
 *   filters: [
 *     {
 *       name: "name",
 *       values: [
 *         "my-example-infrastructure-configuration"
 *       ]
 *     }
 *   ]
 * };
 * const command = new ListInfrastructureConfigurationsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   infrastructureConfigurationSummaryList: [
 *     {
 *       arn: "arn:aws:imagebuilder:us-west-2:111122223333:infrastructure-configuration/my-example-infrastructure-configuration",
 *       dateCreated: "2026-09-09T19:37:17.350Z",
 *       description: "An example infrastructure configuration for Amazon Linux builds",
 *       instanceProfileName: "EC2InstanceProfileForImageBuilder",
 *       instanceTypes: [
 *         "m5.large",
 *         "m5.xlarge"
 *       ],
 *       name: "my-example-infrastructure-configuration",
 *       tags: {
 *         Environment: "test"
 *       }
 *     }
 *   ],
 *   requestId: "dbadaf86-3a9d-48fc-8e34-6062ef0a70f2"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListInfrastructureConfigurationsCommand extends command<ListInfrastructureConfigurationsCommandInput, ListInfrastructureConfigurationsCommandOutput>(
  _ep0,
  _mw0,
  "ListInfrastructureConfigurations",
  ListInfrastructureConfigurations$
) {
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
