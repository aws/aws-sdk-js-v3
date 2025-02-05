// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { ListBulkDeploymentsRequest, ListBulkDeploymentsResponse } from "../models/models_0";
import { de_ListBulkDeploymentsCommand, se_ListBulkDeploymentsCommand } from "../protocols/Aws_restJson1";

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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Greengrass", "ListBulkDeployments", {})
  .n("GreengrassClient", "ListBulkDeploymentsCommand")
  .f(void 0, void 0)
  .ser(se_ListBulkDeploymentsCommand)
  .de(de_ListBulkDeploymentsCommand)
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
