// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import type {
  ListBulkDeploymentDetailedReportsRequest,
  ListBulkDeploymentDetailedReportsResponse,
} from "../models/models_0";
import { ListBulkDeploymentDetailedReports$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListBulkDeploymentDetailedReportsCommand}.
 */
export interface ListBulkDeploymentDetailedReportsCommandInput extends ListBulkDeploymentDetailedReportsRequest {}
/**
 * @public
 *
 * The output of {@link ListBulkDeploymentDetailedReportsCommand}.
 */
export interface ListBulkDeploymentDetailedReportsCommandOutput
  extends ListBulkDeploymentDetailedReportsResponse,
    __MetadataBearer {}

/**
 * Gets a paginated list of the deployments that have been started in a bulk deployment operation, and their current deployment status.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, ListBulkDeploymentDetailedReportsCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, ListBulkDeploymentDetailedReportsCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * // import type { GreengrassClientConfig } from "@aws-sdk/client-greengrass";
 * const config = {}; // type is GreengrassClientConfig
 * const client = new GreengrassClient(config);
 * const input = { // ListBulkDeploymentDetailedReportsRequest
 *   BulkDeploymentId: "STRING_VALUE", // required
 *   MaxResults: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListBulkDeploymentDetailedReportsCommand(input);
 * const response = await client.send(command);
 * // { // ListBulkDeploymentDetailedReportsResponse
 * //   Deployments: [ // BulkDeploymentResults
 * //     { // BulkDeploymentResult
 * //       CreatedAt: "STRING_VALUE",
 * //       DeploymentArn: "STRING_VALUE",
 * //       DeploymentId: "STRING_VALUE",
 * //       DeploymentStatus: "STRING_VALUE",
 * //       DeploymentType: "NewDeployment" || "Redeployment" || "ResetDeployment" || "ForceResetDeployment",
 * //       ErrorDetails: [ // ErrorDetails
 * //         { // ErrorDetail
 * //           DetailedErrorCode: "STRING_VALUE",
 * //           DetailedErrorMessage: "STRING_VALUE",
 * //         },
 * //       ],
 * //       ErrorMessage: "STRING_VALUE",
 * //       GroupArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBulkDeploymentDetailedReportsCommandInput - {@link ListBulkDeploymentDetailedReportsCommandInput}
 * @returns {@link ListBulkDeploymentDetailedReportsCommandOutput}
 * @see {@link ListBulkDeploymentDetailedReportsCommandInput} for command's `input` shape.
 * @see {@link ListBulkDeploymentDetailedReportsCommandOutput} for command's `response` shape.
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
export class ListBulkDeploymentDetailedReportsCommand extends $Command
  .classBuilder<
    ListBulkDeploymentDetailedReportsCommandInput,
    ListBulkDeploymentDetailedReportsCommandOutput,
    GreengrassClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GreengrassClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Greengrass", "ListBulkDeploymentDetailedReports", {})
  .n("GreengrassClient", "ListBulkDeploymentDetailedReportsCommand")
  .sc(ListBulkDeploymentDetailedReports$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBulkDeploymentDetailedReportsRequest;
      output: ListBulkDeploymentDetailedReportsResponse;
    };
    sdk: {
      input: ListBulkDeploymentDetailedReportsCommandInput;
      output: ListBulkDeploymentDetailedReportsCommandOutput;
    };
  };
}
