// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListDeploymentsInput, ListDeploymentsOutput } from "../models/models_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";
import { ListDeployments } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDeploymentsCommand}.
 */
export interface ListDeploymentsCommandInput extends ListDeploymentsInput {}
/**
 * @public
 *
 * The output of {@link ListDeploymentsCommand}.
 */
export interface ListDeploymentsCommandOutput extends ListDeploymentsOutput, __MetadataBearer {}

/**
 * <p>List deployments. You can filter the result list by environment, service, or a single service instance.</p>
 *
 * @deprecated AWS Proton is not accepting new customers.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, ListDeploymentsCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, ListDeploymentsCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // import type { ProtonClientConfig } from "@aws-sdk/client-proton";
 * const config = {}; // type is ProtonClientConfig
 * const client = new ProtonClient(config);
 * const input = { // ListDeploymentsInput
 *   nextToken: "STRING_VALUE",
 *   environmentName: "STRING_VALUE",
 *   serviceName: "STRING_VALUE",
 *   serviceInstanceName: "STRING_VALUE",
 *   componentName: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListDeploymentsCommand(input);
 * const response = await client.send(command);
 * // { // ListDeploymentsOutput
 * //   nextToken: "STRING_VALUE",
 * //   deployments: [ // DeploymentSummaryList // required
 * //     { // DeploymentSummary
 * //       id: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       targetArn: "STRING_VALUE", // required
 * //       targetResourceCreatedAt: new Date("TIMESTAMP"), // required
 * //       targetResourceType: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       lastModifiedAt: new Date("TIMESTAMP"), // required
 * //       completedAt: new Date("TIMESTAMP"),
 * //       environmentName: "STRING_VALUE", // required
 * //       serviceName: "STRING_VALUE",
 * //       serviceInstanceName: "STRING_VALUE",
 * //       componentName: "STRING_VALUE",
 * //       lastAttemptedDeploymentId: "STRING_VALUE",
 * //       lastSucceededDeploymentId: "STRING_VALUE",
 * //       deploymentStatus: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListDeploymentsCommandInput - {@link ListDeploymentsCommandInput}
 * @returns {@link ListDeploymentsCommandOutput}
 * @see {@link ListDeploymentsCommandInput} for command's `input` shape.
 * @see {@link ListDeploymentsCommandOutput} for command's `response` shape.
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
export class ListDeploymentsCommand extends $Command
  .classBuilder<
    ListDeploymentsCommandInput,
    ListDeploymentsCommandOutput,
    ProtonClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ProtonClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsProton20200720", "ListDeployments", {})
  .n("ProtonClient", "ListDeploymentsCommand")
  .sc(ListDeployments)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDeploymentsInput;
      output: ListDeploymentsOutput;
    };
    sdk: {
      input: ListDeploymentsCommandInput;
      output: ListDeploymentsCommandOutput;
    };
  };
}
