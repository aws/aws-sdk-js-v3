// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import { UpdateFileCacheRequest, UpdateFileCacheResponse } from "../models/models_0";
import { de_UpdateFileCacheCommand, se_UpdateFileCacheCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateFileCacheCommand}.
 */
export interface UpdateFileCacheCommandInput extends UpdateFileCacheRequest {}
/**
 * @public
 *
 * The output of {@link UpdateFileCacheCommand}.
 */
export interface UpdateFileCacheCommandOutput extends UpdateFileCacheResponse, __MetadataBearer {}

/**
 * <p>Updates the configuration of an existing Amazon File Cache resource.
 *             You can update multiple properties in a single request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, UpdateFileCacheCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, UpdateFileCacheCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const input = { // UpdateFileCacheRequest
 *   FileCacheId: "STRING_VALUE", // required
 *   ClientRequestToken: "STRING_VALUE",
 *   LustreConfiguration: { // UpdateFileCacheLustreConfiguration
 *     WeeklyMaintenanceStartTime: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateFileCacheCommand(input);
 * const response = await client.send(command);
 * // { // UpdateFileCacheResponse
 * //   FileCache: { // FileCache
 * //     OwnerId: "STRING_VALUE",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     FileCacheId: "STRING_VALUE",
 * //     FileCacheType: "LUSTRE",
 * //     FileCacheTypeVersion: "STRING_VALUE",
 * //     Lifecycle: "AVAILABLE" || "CREATING" || "DELETING" || "UPDATING" || "FAILED",
 * //     FailureDetails: { // FileCacheFailureDetails
 * //       Message: "STRING_VALUE",
 * //     },
 * //     StorageCapacity: Number("int"),
 * //     VpcId: "STRING_VALUE",
 * //     SubnetIds: [ // SubnetIds
 * //       "STRING_VALUE",
 * //     ],
 * //     NetworkInterfaceIds: [ // NetworkInterfaceIds
 * //       "STRING_VALUE",
 * //     ],
 * //     DNSName: "STRING_VALUE",
 * //     KmsKeyId: "STRING_VALUE",
 * //     ResourceARN: "STRING_VALUE",
 * //     LustreConfiguration: { // FileCacheLustreConfiguration
 * //       PerUnitStorageThroughput: Number("int"),
 * //       DeploymentType: "CACHE_1",
 * //       MountName: "STRING_VALUE",
 * //       WeeklyMaintenanceStartTime: "STRING_VALUE",
 * //       MetadataConfiguration: { // FileCacheLustreMetadataConfiguration
 * //         StorageCapacity: Number("int"), // required
 * //       },
 * //       LogConfiguration: { // LustreLogConfiguration
 * //         Level: "DISABLED" || "WARN_ONLY" || "ERROR_ONLY" || "WARN_ERROR", // required
 * //         Destination: "STRING_VALUE",
 * //       },
 * //     },
 * //     DataRepositoryAssociationIds: [ // DataRepositoryAssociationIds
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateFileCacheCommandInput - {@link UpdateFileCacheCommandInput}
 * @returns {@link UpdateFileCacheCommandOutput}
 * @see {@link UpdateFileCacheCommandInput} for command's `input` shape.
 * @see {@link UpdateFileCacheCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>A generic error indicating a failure with a client request.</p>
 *
 * @throws {@link FileCacheNotFound} (client fault)
 *  <p>No caches were found based upon supplied parameters.</p>
 *
 * @throws {@link IncompatibleParameterError} (client fault)
 *  <p>The error returned when a second request is received with the same client request
 *             token but different parameters settings. A client request token should always uniquely
 *             identify a single request.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>A generic error indicating a server-side failure.</p>
 *
 * @throws {@link MissingFileCacheConfiguration} (client fault)
 *  <p>A cache configuration is required for this operation.</p>
 *
 * @throws {@link ServiceLimitExceeded} (client fault)
 *  <p>An error indicating that a particular service limit was exceeded. You can increase
 *             some service limits by contacting Amazon Web Services Support.</p>
 *
 * @throws {@link UnsupportedOperation} (client fault)
 *  <p>The requested operation is not supported for this resource or API.</p>
 *
 * @throws {@link FSxServiceException}
 * <p>Base exception class for all service exceptions from FSx service.</p>
 *
 * @public
 */
export class UpdateFileCacheCommand extends $Command
  .classBuilder<
    UpdateFileCacheCommandInput,
    UpdateFileCacheCommandOutput,
    FSxClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: FSxClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSSimbaAPIService_v20180301", "UpdateFileCache", {})
  .n("FSxClient", "UpdateFileCacheCommand")
  .f(void 0, void 0)
  .ser(se_UpdateFileCacheCommand)
  .de(de_UpdateFileCacheCommand)
  .build() {}
