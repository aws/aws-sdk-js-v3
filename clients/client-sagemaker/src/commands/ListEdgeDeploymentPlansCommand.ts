// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListEdgeDeploymentPlansRequest, ListEdgeDeploymentPlansResponse } from "../models/models_3";
import type { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListEdgeDeploymentPlans$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEdgeDeploymentPlansCommand}.
 */
export interface ListEdgeDeploymentPlansCommandInput extends ListEdgeDeploymentPlansRequest {}
/**
 * @public
 *
 * The output of {@link ListEdgeDeploymentPlansCommand}.
 */
export interface ListEdgeDeploymentPlansCommandOutput extends ListEdgeDeploymentPlansResponse, __MetadataBearer {}

/**
 * <p>Lists all edge deployment plans.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListEdgeDeploymentPlansCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListEdgeDeploymentPlansCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // ListEdgeDeploymentPlansRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   LastModifiedTimeAfter: new Date("TIMESTAMP"),
 *   LastModifiedTimeBefore: new Date("TIMESTAMP"),
 *   NameContains: "STRING_VALUE",
 *   DeviceFleetNameContains: "STRING_VALUE",
 *   SortBy: "NAME" || "DEVICE_FLEET_NAME" || "CREATION_TIME" || "LAST_MODIFIED_TIME",
 *   SortOrder: "Ascending" || "Descending",
 * };
 * const command = new ListEdgeDeploymentPlansCommand(input);
 * const response = await client.send(command);
 * // { // ListEdgeDeploymentPlansResponse
 * //   EdgeDeploymentPlanSummaries: [ // EdgeDeploymentPlanSummaries // required
 * //     { // EdgeDeploymentPlanSummary
 * //       EdgeDeploymentPlanArn: "STRING_VALUE", // required
 * //       EdgeDeploymentPlanName: "STRING_VALUE", // required
 * //       DeviceFleetName: "STRING_VALUE", // required
 * //       EdgeDeploymentSuccess: Number("int"), // required
 * //       EdgeDeploymentPending: Number("int"), // required
 * //       EdgeDeploymentFailed: Number("int"), // required
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEdgeDeploymentPlansCommandInput - {@link ListEdgeDeploymentPlansCommandInput}
 * @returns {@link ListEdgeDeploymentPlansCommandOutput}
 * @see {@link ListEdgeDeploymentPlansCommandInput} for command's `input` shape.
 * @see {@link ListEdgeDeploymentPlansCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class ListEdgeDeploymentPlansCommand extends $Command
  .classBuilder<
    ListEdgeDeploymentPlansCommandInput,
    ListEdgeDeploymentPlansCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "ListEdgeDeploymentPlans", {})
  .n("SageMakerClient", "ListEdgeDeploymentPlansCommand")
  .sc(ListEdgeDeploymentPlans$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEdgeDeploymentPlansRequest;
      output: ListEdgeDeploymentPlansResponse;
    };
    sdk: {
      input: ListEdgeDeploymentPlansCommandInput;
      output: ListEdgeDeploymentPlansCommandOutput;
    };
  };
}
