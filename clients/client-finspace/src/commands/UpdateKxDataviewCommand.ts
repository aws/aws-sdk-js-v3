// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FinspaceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceClient";
import { UpdateKxDataviewRequest, UpdateKxDataviewResponse } from "../models/models_0";
import { de_UpdateKxDataviewCommand, se_UpdateKxDataviewCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateKxDataviewCommand}.
 */
export interface UpdateKxDataviewCommandInput extends UpdateKxDataviewRequest {}
/**
 * @public
 *
 * The output of {@link UpdateKxDataviewCommand}.
 */
export interface UpdateKxDataviewCommandOutput extends UpdateKxDataviewResponse, __MetadataBearer {}

/**
 * <p>
 * Updates the specified dataview. The dataviews get automatically updated when any new changesets are ingested. Each update of the dataview creates a new version, including changeset details and cache configurations</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceClient, UpdateKxDataviewCommand } from "@aws-sdk/client-finspace"; // ES Modules import
 * // const { FinspaceClient, UpdateKxDataviewCommand } = require("@aws-sdk/client-finspace"); // CommonJS import
 * const client = new FinspaceClient(config);
 * const input = { // UpdateKxDataviewRequest
 *   environmentId: "STRING_VALUE", // required
 *   databaseName: "STRING_VALUE", // required
 *   dataviewName: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   changesetId: "STRING_VALUE",
 *   segmentConfigurations: [ // KxDataviewSegmentConfigurationList
 *     { // KxDataviewSegmentConfiguration
 *       dbPaths: [ // SegmentConfigurationDbPathList // required
 *         "STRING_VALUE",
 *       ],
 *       volumeName: "STRING_VALUE", // required
 *       onDemand: true || false,
 *     },
 *   ],
 *   clientToken: "STRING_VALUE", // required
 * };
 * const command = new UpdateKxDataviewCommand(input);
 * const response = await client.send(command);
 * // { // UpdateKxDataviewResponse
 * //   environmentId: "STRING_VALUE",
 * //   databaseName: "STRING_VALUE",
 * //   dataviewName: "STRING_VALUE",
 * //   azMode: "SINGLE" || "MULTI",
 * //   availabilityZoneId: "STRING_VALUE",
 * //   changesetId: "STRING_VALUE",
 * //   segmentConfigurations: [ // KxDataviewSegmentConfigurationList
 * //     { // KxDataviewSegmentConfiguration
 * //       dbPaths: [ // SegmentConfigurationDbPathList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       volumeName: "STRING_VALUE", // required
 * //       onDemand: true || false,
 * //     },
 * //   ],
 * //   activeVersions: [ // KxDataviewActiveVersionList
 * //     { // KxDataviewActiveVersion
 * //       changesetId: "STRING_VALUE",
 * //       segmentConfigurations: [
 * //         {
 * //           dbPaths: [ // required
 * //             "STRING_VALUE",
 * //           ],
 * //           volumeName: "STRING_VALUE", // required
 * //           onDemand: true || false,
 * //         },
 * //       ],
 * //       attachedClusters: [ // AttachedClusterList
 * //         "STRING_VALUE",
 * //       ],
 * //       createdTimestamp: new Date("TIMESTAMP"),
 * //       versionId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   status: "CREATING" || "ACTIVE" || "UPDATING" || "FAILED" || "DELETING",
 * //   autoUpdate: true || false,
 * //   readWrite: true || false,
 * //   description: "STRING_VALUE",
 * //   createdTimestamp: new Date("TIMESTAMP"),
 * //   lastModifiedTimestamp: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateKxDataviewCommandInput - {@link UpdateKxDataviewCommandInput}
 * @returns {@link UpdateKxDataviewCommandOutput}
 * @see {@link UpdateKxDataviewCommandInput} for command's `input` shape.
 * @see {@link UpdateKxDataviewCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The specified resource group already exists.</p>
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
export class UpdateKxDataviewCommand extends $Command
  .classBuilder<
    UpdateKxDataviewCommandInput,
    UpdateKxDataviewCommandOutput,
    FinspaceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FinspaceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSHabaneroManagementService", "UpdateKxDataview", {})
  .n("FinspaceClient", "UpdateKxDataviewCommand")
  .f(void 0, void 0)
  .ser(se_UpdateKxDataviewCommand)
  .de(de_UpdateKxDataviewCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateKxDataviewRequest;
      output: UpdateKxDataviewResponse;
    };
    sdk: {
      input: UpdateKxDataviewCommandInput;
      output: UpdateKxDataviewCommandOutput;
    };
  };
}
