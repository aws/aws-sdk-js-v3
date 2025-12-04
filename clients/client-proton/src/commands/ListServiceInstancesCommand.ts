// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListServiceInstancesInput, ListServiceInstancesOutput } from "../models/models_0";
import type { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";
import { ListServiceInstances } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListServiceInstancesCommand}.
 */
export interface ListServiceInstancesCommandInput extends ListServiceInstancesInput {}
/**
 * @public
 *
 * The output of {@link ListServiceInstancesCommand}.
 */
export interface ListServiceInstancesCommandOutput extends ListServiceInstancesOutput, __MetadataBearer {}

/**
 * <p>List service instances with summary data. This action lists service instances of all
 *       services in the Amazon Web Services account.</p>
 *
 * @deprecated AWS Proton is not accepting new customers.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, ListServiceInstancesCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, ListServiceInstancesCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // import type { ProtonClientConfig } from "@aws-sdk/client-proton";
 * const config = {}; // type is ProtonClientConfig
 * const client = new ProtonClient(config);
 * const input = { // ListServiceInstancesInput
 *   serviceName: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   filters: [ // ListServiceInstancesFilterList
 *     { // ListServiceInstancesFilter
 *       key: "STRING_VALUE",
 *       value: "STRING_VALUE",
 *     },
 *   ],
 *   sortBy: "STRING_VALUE",
 *   sortOrder: "STRING_VALUE",
 * };
 * const command = new ListServiceInstancesCommand(input);
 * const response = await client.send(command);
 * // { // ListServiceInstancesOutput
 * //   nextToken: "STRING_VALUE",
 * //   serviceInstances: [ // ServiceInstanceSummaryList // required
 * //     { // ServiceInstanceSummary
 * //       name: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       lastDeploymentAttemptedAt: new Date("TIMESTAMP"), // required
 * //       lastDeploymentSucceededAt: new Date("TIMESTAMP"), // required
 * //       serviceName: "STRING_VALUE", // required
 * //       environmentName: "STRING_VALUE", // required
 * //       templateName: "STRING_VALUE", // required
 * //       templateMajorVersion: "STRING_VALUE", // required
 * //       templateMinorVersion: "STRING_VALUE", // required
 * //       deploymentStatus: "STRING_VALUE", // required
 * //       deploymentStatusMessage: "STRING_VALUE",
 * //       lastAttemptedDeploymentId: "STRING_VALUE",
 * //       lastSucceededDeploymentId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListServiceInstancesCommandInput - {@link ListServiceInstancesCommandInput}
 * @returns {@link ListServiceInstancesCommandOutput}
 * @see {@link ListServiceInstancesCommandInput} for command's `input` shape.
 * @see {@link ListServiceInstancesCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>There <i>isn't</i> sufficient access for performing this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed to register with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource <i>wasn't</i> found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input is invalid or an out-of-range value was supplied for the input parameter.</p>
 *
 * @throws {@link ProtonServiceException}
 * <p>Base exception class for all service exceptions from Proton service.</p>
 *
 *
 * @public
 */
export class ListServiceInstancesCommand extends $Command
  .classBuilder<
    ListServiceInstancesCommandInput,
    ListServiceInstancesCommandOutput,
    ProtonClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ProtonClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsProton20200720", "ListServiceInstances", {})
  .n("ProtonClient", "ListServiceInstancesCommand")
  .sc(ListServiceInstances)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListServiceInstancesInput;
      output: ListServiceInstancesOutput;
    };
    sdk: {
      input: ListServiceInstancesCommandInput;
      output: ListServiceInstancesCommandOutput;
    };
  };
}
