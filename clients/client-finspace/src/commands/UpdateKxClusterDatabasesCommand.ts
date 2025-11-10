// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FinspaceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceClient";
import { UpdateKxClusterDatabasesRequest, UpdateKxClusterDatabasesResponse } from "../models/models_0";
import { UpdateKxClusterDatabases } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateKxClusterDatabasesCommand}.
 */
export interface UpdateKxClusterDatabasesCommandInput extends UpdateKxClusterDatabasesRequest {}
/**
 * @public
 *
 * The output of {@link UpdateKxClusterDatabasesCommand}.
 */
export interface UpdateKxClusterDatabasesCommandOutput extends UpdateKxClusterDatabasesResponse, __MetadataBearer {}

/**
 * <p>Updates the databases mounted on a kdb cluster, which includes the <code>changesetId</code> and all the dbPaths to be cached. This API does not allow you to change a database name or add a database if you created a cluster without one. </p>
 *          <p>Using this API you can point a cluster to a different changeset and modify a list of partitions being cached.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceClient, UpdateKxClusterDatabasesCommand } from "@aws-sdk/client-finspace"; // ES Modules import
 * // const { FinspaceClient, UpdateKxClusterDatabasesCommand } = require("@aws-sdk/client-finspace"); // CommonJS import
 * // import type { FinspaceClientConfig } from "@aws-sdk/client-finspace";
 * const config = {}; // type is FinspaceClientConfig
 * const client = new FinspaceClient(config);
 * const input = { // UpdateKxClusterDatabasesRequest
 *   environmentId: "STRING_VALUE", // required
 *   clusterName: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   databases: [ // KxDatabaseConfigurations // required
 *     { // KxDatabaseConfiguration
 *       databaseName: "STRING_VALUE", // required
 *       cacheConfigurations: [ // KxDatabaseCacheConfigurations
 *         { // KxDatabaseCacheConfiguration
 *           cacheType: "STRING_VALUE", // required
 *           dbPaths: [ // DbPaths // required
 *             "STRING_VALUE",
 *           ],
 *           dataviewName: "STRING_VALUE",
 *         },
 *       ],
 *       changesetId: "STRING_VALUE",
 *       dataviewName: "STRING_VALUE",
 *       dataviewConfiguration: { // KxDataviewConfiguration
 *         dataviewName: "STRING_VALUE",
 *         dataviewVersionId: "STRING_VALUE",
 *         changesetId: "STRING_VALUE",
 *         segmentConfigurations: [ // KxDataviewSegmentConfigurationList
 *           { // KxDataviewSegmentConfiguration
 *             dbPaths: [ // SegmentConfigurationDbPathList // required
 *               "STRING_VALUE",
 *             ],
 *             volumeName: "STRING_VALUE", // required
 *             onDemand: true || false,
 *           },
 *         ],
 *       },
 *     },
 *   ],
 *   deploymentConfiguration: { // KxDeploymentConfiguration
 *     deploymentStrategy: "NO_RESTART" || "ROLLING", // required
 *   },
 * };
 * const command = new UpdateKxClusterDatabasesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateKxClusterDatabasesCommandInput - {@link UpdateKxClusterDatabasesCommandInput}
 * @returns {@link UpdateKxClusterDatabasesCommandOutput}
 * @see {@link UpdateKxClusterDatabasesCommandInput} for command's `input` shape.
 * @see {@link UpdateKxClusterDatabasesCommandOutput} for command's `response` shape.
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
export class UpdateKxClusterDatabasesCommand extends $Command
  .classBuilder<
    UpdateKxClusterDatabasesCommandInput,
    UpdateKxClusterDatabasesCommandOutput,
    FinspaceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FinspaceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSHabaneroManagementService", "UpdateKxClusterDatabases", {})
  .n("FinspaceClient", "UpdateKxClusterDatabasesCommand")
  .sc(UpdateKxClusterDatabases)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateKxClusterDatabasesRequest;
      output: {};
    };
    sdk: {
      input: UpdateKxClusterDatabasesCommandInput;
      output: UpdateKxClusterDatabasesCommandOutput;
    };
  };
}
