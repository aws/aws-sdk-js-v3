// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FinspaceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceClient";
import { GetKxVolumeRequest, GetKxVolumeResponse } from "../models/models_0";
import { de_GetKxVolumeCommand, se_GetKxVolumeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetKxVolumeCommand}.
 */
export interface GetKxVolumeCommandInput extends GetKxVolumeRequest {}
/**
 * @public
 *
 * The output of {@link GetKxVolumeCommand}.
 */
export interface GetKxVolumeCommandOutput extends GetKxVolumeResponse, __MetadataBearer {}

/**
 * <p>
 * Retrieves the information about the volume. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceClient, GetKxVolumeCommand } from "@aws-sdk/client-finspace"; // ES Modules import
 * // const { FinspaceClient, GetKxVolumeCommand } = require("@aws-sdk/client-finspace"); // CommonJS import
 * const client = new FinspaceClient(config);
 * const input = { // GetKxVolumeRequest
 *   environmentId: "STRING_VALUE", // required
 *   volumeName: "STRING_VALUE", // required
 * };
 * const command = new GetKxVolumeCommand(input);
 * const response = await client.send(command);
 * // { // GetKxVolumeResponse
 * //   environmentId: "STRING_VALUE",
 * //   volumeName: "STRING_VALUE",
 * //   volumeType: "NAS_1",
 * //   volumeArn: "STRING_VALUE",
 * //   nas1Configuration: { // KxNAS1Configuration
 * //     type: "SSD_1000" || "SSD_250" || "HDD_12",
 * //     size: Number("int"),
 * //   },
 * //   status: "CREATING" || "CREATE_FAILED" || "ACTIVE" || "UPDATING" || "UPDATED" || "UPDATE_FAILED" || "DELETING" || "DELETED" || "DELETE_FAILED",
 * //   statusReason: "STRING_VALUE",
 * //   createdTimestamp: new Date("TIMESTAMP"),
 * //   description: "STRING_VALUE",
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
 * @param GetKxVolumeCommandInput - {@link GetKxVolumeCommandInput}
 * @returns {@link GetKxVolumeCommandOutput}
 * @see {@link GetKxVolumeCommandInput} for command's `input` shape.
 * @see {@link GetKxVolumeCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetKxVolumeCommand extends $Command
  .classBuilder<
    GetKxVolumeCommandInput,
    GetKxVolumeCommandOutput,
    FinspaceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: FinspaceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSHabaneroManagementService", "GetKxVolume", {})
  .n("FinspaceClient", "GetKxVolumeCommand")
  .f(void 0, void 0)
  .ser(se_GetKxVolumeCommand)
  .de(de_GetKxVolumeCommand)
  .build() {}
