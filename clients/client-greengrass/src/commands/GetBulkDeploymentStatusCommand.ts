// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetBulkDeploymentStatusRequest, GetBulkDeploymentStatusResponse } from "../models/models_0";
import { de_GetBulkDeploymentStatusCommand, se_GetBulkDeploymentStatusCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBulkDeploymentStatusCommand}.
 */
export interface GetBulkDeploymentStatusCommandInput extends GetBulkDeploymentStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetBulkDeploymentStatusCommand}.
 */
export interface GetBulkDeploymentStatusCommandOutput extends GetBulkDeploymentStatusResponse, __MetadataBearer {}

/**
 * Returns the status of a bulk deployment.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetBulkDeploymentStatusCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetBulkDeploymentStatusCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new GreengrassClient(config);
 * const input = { // GetBulkDeploymentStatusRequest
 *   BulkDeploymentId: "STRING_VALUE", // required
 * };
 * const command = new GetBulkDeploymentStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetBulkDeploymentStatusResponse
 * //   BulkDeploymentMetrics: { // BulkDeploymentMetrics
 * //     InvalidInputRecords: Number("int"),
 * //     RecordsProcessed: Number("int"),
 * //     RetryAttempts: Number("int"),
 * //   },
 * //   BulkDeploymentStatus: "Initializing" || "Running" || "Completed" || "Stopping" || "Stopped" || "Failed",
 * //   CreatedAt: "STRING_VALUE",
 * //   ErrorDetails: [ // ErrorDetails
 * //     { // ErrorDetail
 * //       DetailedErrorCode: "STRING_VALUE",
 * //       DetailedErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   ErrorMessage: "STRING_VALUE",
 * //   tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetBulkDeploymentStatusCommandInput - {@link GetBulkDeploymentStatusCommandInput}
 * @returns {@link GetBulkDeploymentStatusCommandOutput}
 * @see {@link GetBulkDeploymentStatusCommandInput} for command's `input` shape.
 * @see {@link GetBulkDeploymentStatusCommandOutput} for command's `response` shape.
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
export class GetBulkDeploymentStatusCommand extends $Command
  .classBuilder<
    GetBulkDeploymentStatusCommandInput,
    GetBulkDeploymentStatusCommandOutput,
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
  .s("Greengrass", "GetBulkDeploymentStatus", {})
  .n("GreengrassClient", "GetBulkDeploymentStatusCommand")
  .f(void 0, void 0)
  .ser(se_GetBulkDeploymentStatusCommand)
  .de(de_GetBulkDeploymentStatusCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBulkDeploymentStatusRequest;
      output: GetBulkDeploymentStatusResponse;
    };
    sdk: {
      input: GetBulkDeploymentStatusCommandInput;
      output: GetBulkDeploymentStatusCommandOutput;
    };
  };
}
