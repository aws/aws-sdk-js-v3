// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import {
  ListBulkDeploymentDetailedReportsRequest,
  ListBulkDeploymentDetailedReportsResponse,
} from "../models/models_0";
import {
  de_ListBulkDeploymentDetailedReportsCommand,
  se_ListBulkDeploymentDetailedReportsCommand,
} from "../protocols/Aws_restJson1";

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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: GreengrassClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Greengrass", "ListBulkDeploymentDetailedReports", {})
  .n("GreengrassClient", "ListBulkDeploymentDetailedReportsCommand")
  .f(void 0, void 0)
  .ser(se_ListBulkDeploymentDetailedReportsCommand)
  .de(de_ListBulkDeploymentDetailedReportsCommand)
  .build() {}
