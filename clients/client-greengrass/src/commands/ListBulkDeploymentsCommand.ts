// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { ListBulkDeploymentsRequest, ListBulkDeploymentsResponse } from "../models/models_0";
import { ListBulkDeployments } from "../schemas/schemas_53_ListBulkDeployments";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListBulkDeploymentsCommand}.
 */
export interface ListBulkDeploymentsCommandInput extends ListBulkDeploymentsRequest {}
/**
 * @public
 *
 * The output of {@link ListBulkDeploymentsCommand}.
 */
export interface ListBulkDeploymentsCommandOutput extends ListBulkDeploymentsResponse, __MetadataBearer {}

/**
 * Returns a list of bulk deployments.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, ListBulkDeploymentsCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, ListBulkDeploymentsCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * // import type { GreengrassClientConfig } from "@aws-sdk/client-greengrass";
 * const config = {}; // type is GreengrassClientConfig
 * const client = new GreengrassClient(config);
 * const input = { // ListBulkDeploymentsRequest
 *   MaxResults: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListBulkDeploymentsCommand(input);
 * const response = await client.send(command);
 * // { // ListBulkDeploymentsResponse
 * //   BulkDeployments: [ // BulkDeployments
 * //     { // BulkDeployment
 * //       BulkDeploymentArn: "STRING_VALUE",
 * //       BulkDeploymentId: "STRING_VALUE",
 * //       CreatedAt: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBulkDeploymentsCommandInput - {@link ListBulkDeploymentsCommandInput}
 * @returns {@link ListBulkDeploymentsCommandOutput}
 * @see {@link ListBulkDeploymentsCommandInput} for command's `input` shape.
 * @see {@link ListBulkDeploymentsCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for GreengrassClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  General error information.
 *
 * @throws {@link GreengrassServiceException}
 * <p>Base exception class for all service exceptions from Greengrass service.</p>
 *
 *
 * @public
 */
export class ListBulkDeploymentsCommand extends $Command
  .classBuilder<
    ListBulkDeploymentsCommandInput,
    ListBulkDeploymentsCommandOutput,
    GreengrassClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GreengrassClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Greengrass", "ListBulkDeployments", {})
  .n("GreengrassClient", "ListBulkDeploymentsCommand")
  .sc(ListBulkDeployments)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBulkDeploymentsRequest;
      output: ListBulkDeploymentsResponse;
    };
    sdk: {
      input: ListBulkDeploymentsCommandInput;
      output: ListBulkDeploymentsCommandOutput;
    };
  };
}
