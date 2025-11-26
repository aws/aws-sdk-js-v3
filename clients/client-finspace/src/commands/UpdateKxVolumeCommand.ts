// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { FinspaceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceClient";
import type { UpdateKxVolumeRequest, UpdateKxVolumeResponse } from "../models/models_0";
import { UpdateKxVolume } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateKxVolumeCommand}.
 */
export interface UpdateKxVolumeCommandInput extends UpdateKxVolumeRequest {}
/**
 * @public
 *
 * The output of {@link UpdateKxVolumeCommand}.
 */
export interface UpdateKxVolumeCommandOutput extends UpdateKxVolumeResponse, __MetadataBearer {}

/**
 * <p>
 * Updates the throughput or capacity of a volume. During the update process, the filesystem
 * might be unavailable for a few minutes. You can retry any operations after the update is complete.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceClient, UpdateKxVolumeCommand } from "@aws-sdk/client-finspace"; // ES Modules import
 * // const { FinspaceClient, UpdateKxVolumeCommand } = require("@aws-sdk/client-finspace"); // CommonJS import
 * // import type { FinspaceClientConfig } from "@aws-sdk/client-finspace";
 * const config = {}; // type is FinspaceClientConfig
 * const client = new FinspaceClient(config);
 * const input = { // UpdateKxVolumeRequest
 *   environmentId: "STRING_VALUE", // required
 *   volumeName: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 *   nas1Configuration: { // KxNAS1Configuration
 *     type: "SSD_1000" || "SSD_250" || "HDD_12",
 *     size: Number("int"),
 *   },
 * };
 * const command = new UpdateKxVolumeCommand(input);
 * const response = await client.send(command);
 * // { // UpdateKxVolumeResponse
 * //   environmentId: "STRING_VALUE",
 * //   volumeName: "STRING_VALUE",
 * //   volumeType: "NAS_1",
 * //   volumeArn: "STRING_VALUE",
 * //   nas1Configuration: { // KxNAS1Configuration
 * //     type: "SSD_1000" || "SSD_250" || "HDD_12",
 * //     size: Number("int"),
 * //   },
 * //   status: "CREATING" || "CREATE_FAILED" || "ACTIVE" || "UPDATING" || "UPDATED" || "UPDATE_FAILED" || "DELETING" || "DELETED" || "DELETE_FAILED",
 * //   description: "STRING_VALUE",
 * //   statusReason: "STRING_VALUE",
 * //   createdTimestamp: new Date("TIMESTAMP"),
 * //   azMode: "SINGLE" || "MULTI",
 * //   availabilityZoneIds: [ // AvailabilityZoneIds
 * //     "STRING_VALUE",
 * //   ],
 * //   lastModifiedTimestamp: new Date("TIMESTAMP"),
 * //   attachedClusters: [ // KxAttachedClusters
 * //     { // KxAttachedCluster
 * //       clusterName: "STRING_VALUE",
 * //       clusterType: "HDB" || "RDB" || "GATEWAY" || "GP" || "TICKERPLANT",
 * //       clusterStatus: "PENDING" || "CREATING" || "CREATE_FAILED" || "RUNNING" || "UPDATING" || "DELETING" || "DELETED" || "DELETE_FAILED",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param UpdateKxVolumeCommandInput - {@link UpdateKxVolumeCommandInput}
 * @returns {@link UpdateKxVolumeCommandOutput}
 * @see {@link UpdateKxVolumeCommandInput} for command's `input` shape.
 * @see {@link UpdateKxVolumeCommandOutput} for command's `response` shape.
 * @see {@link FinspaceClientResolvedConfig | config} for FinspaceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict with this action, and it could not be completed.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *          failure.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A service limit or quota is exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link FinspaceServiceException}
 * <p>Base exception class for all service exceptions from Finspace service.</p>
 *
 *
 * @public
 */
export class UpdateKxVolumeCommand extends $Command
  .classBuilder<
    UpdateKxVolumeCommandInput,
    UpdateKxVolumeCommandOutput,
    FinspaceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FinspaceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSHabaneroManagementService", "UpdateKxVolume", {})
  .n("FinspaceClient", "UpdateKxVolumeCommand")
  .sc(UpdateKxVolume)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateKxVolumeRequest;
      output: UpdateKxVolumeResponse;
    };
    sdk: {
      input: UpdateKxVolumeCommandInput;
      output: UpdateKxVolumeCommandOutput;
    };
  };
}
