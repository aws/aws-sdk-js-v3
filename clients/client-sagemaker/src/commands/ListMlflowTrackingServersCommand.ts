// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListMlflowTrackingServersRequest, ListMlflowTrackingServersResponse } from "../models/models_3";
import { de_ListMlflowTrackingServersCommand, se_ListMlflowTrackingServersCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListMlflowTrackingServersCommand}.
 */
export interface ListMlflowTrackingServersCommandInput extends ListMlflowTrackingServersRequest {}
/**
 * @public
 *
 * The output of {@link ListMlflowTrackingServersCommand}.
 */
export interface ListMlflowTrackingServersCommandOutput extends ListMlflowTrackingServersResponse, __MetadataBearer {}

/**
 * <p>Lists all MLflow Tracking Servers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListMlflowTrackingServersCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListMlflowTrackingServersCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // ListMlflowTrackingServersRequest
 *   CreatedAfter: new Date("TIMESTAMP"),
 *   CreatedBefore: new Date("TIMESTAMP"),
 *   TrackingServerStatus: "Creating" || "Created" || "CreateFailed" || "Updating" || "Updated" || "UpdateFailed" || "Deleting" || "DeleteFailed" || "Stopping" || "Stopped" || "StopFailed" || "Starting" || "Started" || "StartFailed" || "MaintenanceInProgress" || "MaintenanceComplete" || "MaintenanceFailed",
 *   MlflowVersion: "STRING_VALUE",
 *   SortBy: "Name" || "CreationTime" || "Status",
 *   SortOrder: "Ascending" || "Descending",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListMlflowTrackingServersCommand(input);
 * const response = await client.send(command);
 * // { // ListMlflowTrackingServersResponse
 * //   TrackingServerSummaries: [ // TrackingServerSummaryList
 * //     { // TrackingServerSummary
 * //       TrackingServerArn: "STRING_VALUE",
 * //       TrackingServerName: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       TrackingServerStatus: "Creating" || "Created" || "CreateFailed" || "Updating" || "Updated" || "UpdateFailed" || "Deleting" || "DeleteFailed" || "Stopping" || "Stopped" || "StopFailed" || "Starting" || "Started" || "StartFailed" || "MaintenanceInProgress" || "MaintenanceComplete" || "MaintenanceFailed",
 * //       IsActive: "Active" || "Inactive",
 * //       MlflowVersion: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMlflowTrackingServersCommandInput - {@link ListMlflowTrackingServersCommandInput}
 * @returns {@link ListMlflowTrackingServersCommandOutput}
 * @see {@link ListMlflowTrackingServersCommandInput} for command's `input` shape.
 * @see {@link ListMlflowTrackingServersCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 * @public
 */
export class ListMlflowTrackingServersCommand extends $Command
  .classBuilder<
    ListMlflowTrackingServersCommandInput,
    ListMlflowTrackingServersCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMaker", "ListMlflowTrackingServers", {})
  .n("SageMakerClient", "ListMlflowTrackingServersCommand")
  .f(void 0, void 0)
  .ser(se_ListMlflowTrackingServersCommand)
  .de(de_ListMlflowTrackingServersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMlflowTrackingServersRequest;
      output: ListMlflowTrackingServersResponse;
    };
    sdk: {
      input: ListMlflowTrackingServersCommandInput;
      output: ListMlflowTrackingServersCommandOutput;
    };
  };
}
