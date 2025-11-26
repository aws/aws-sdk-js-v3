// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { FinspaceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceClient";
import type { GetKxDataviewRequest, GetKxDataviewResponse } from "../models/models_0";
import { GetKxDataview } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetKxDataviewCommand}.
 */
export interface GetKxDataviewCommandInput extends GetKxDataviewRequest {}
/**
 * @public
 *
 * The output of {@link GetKxDataviewCommand}.
 */
export interface GetKxDataviewCommandOutput extends GetKxDataviewResponse, __MetadataBearer {}

/**
 * <p>
 * Retrieves details of the dataview.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceClient, GetKxDataviewCommand } from "@aws-sdk/client-finspace"; // ES Modules import
 * // const { FinspaceClient, GetKxDataviewCommand } = require("@aws-sdk/client-finspace"); // CommonJS import
 * // import type { FinspaceClientConfig } from "@aws-sdk/client-finspace";
 * const config = {}; // type is FinspaceClientConfig
 * const client = new FinspaceClient(config);
 * const input = { // GetKxDataviewRequest
 *   environmentId: "STRING_VALUE", // required
 *   databaseName: "STRING_VALUE", // required
 *   dataviewName: "STRING_VALUE", // required
 * };
 * const command = new GetKxDataviewCommand(input);
 * const response = await client.send(command);
 * // { // GetKxDataviewResponse
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
 * //   description: "STRING_VALUE",
 * //   autoUpdate: true || false,
 * //   readWrite: true || false,
 * //   environmentId: "STRING_VALUE",
 * //   createdTimestamp: new Date("TIMESTAMP"),
 * //   lastModifiedTimestamp: new Date("TIMESTAMP"),
 * //   status: "CREATING" || "ACTIVE" || "UPDATING" || "FAILED" || "DELETING",
 * //   statusReason: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetKxDataviewCommandInput - {@link GetKxDataviewCommandInput}
 * @returns {@link GetKxDataviewCommandOutput}
 * @see {@link GetKxDataviewCommandInput} for command's `input` shape.
 * @see {@link GetKxDataviewCommandOutput} for command's `response` shape.
 * @see {@link FinspaceClientResolvedConfig | config} for FinspaceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *          failure.</p>
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
export class GetKxDataviewCommand extends $Command
  .classBuilder<
    GetKxDataviewCommandInput,
    GetKxDataviewCommandOutput,
    FinspaceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FinspaceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSHabaneroManagementService", "GetKxDataview", {})
  .n("FinspaceClient", "GetKxDataviewCommand")
  .sc(GetKxDataview)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetKxDataviewRequest;
      output: GetKxDataviewResponse;
    };
    sdk: {
      input: GetKxDataviewCommandInput;
      output: GetKxDataviewCommandOutput;
    };
  };
}
