// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FinspaceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceClient";
import { ListKxDataviewsRequest, ListKxDataviewsResponse } from "../models/models_0";
import { ListKxDataviews } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListKxDataviewsCommand}.
 */
export interface ListKxDataviewsCommandInput extends ListKxDataviewsRequest {}
/**
 * @public
 *
 * The output of {@link ListKxDataviewsCommand}.
 */
export interface ListKxDataviewsCommandOutput extends ListKxDataviewsResponse, __MetadataBearer {}

/**
 * <p>
 * Returns a list of all the dataviews in the database.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceClient, ListKxDataviewsCommand } from "@aws-sdk/client-finspace"; // ES Modules import
 * // const { FinspaceClient, ListKxDataviewsCommand } = require("@aws-sdk/client-finspace"); // CommonJS import
 * // import type { FinspaceClientConfig } from "@aws-sdk/client-finspace";
 * const config = {}; // type is FinspaceClientConfig
 * const client = new FinspaceClient(config);
 * const input = { // ListKxDataviewsRequest
 *   environmentId: "STRING_VALUE", // required
 *   databaseName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListKxDataviewsCommand(input);
 * const response = await client.send(command);
 * // { // ListKxDataviewsResponse
 * //   kxDataviews: [ // KxDataviews
 * //     { // KxDataviewListEntry
 * //       environmentId: "STRING_VALUE",
 * //       databaseName: "STRING_VALUE",
 * //       dataviewName: "STRING_VALUE",
 * //       azMode: "SINGLE" || "MULTI",
 * //       availabilityZoneId: "STRING_VALUE",
 * //       changesetId: "STRING_VALUE",
 * //       segmentConfigurations: [ // KxDataviewSegmentConfigurationList
 * //         { // KxDataviewSegmentConfiguration
 * //           dbPaths: [ // SegmentConfigurationDbPathList // required
 * //             "STRING_VALUE",
 * //           ],
 * //           volumeName: "STRING_VALUE", // required
 * //           onDemand: true || false,
 * //         },
 * //       ],
 * //       activeVersions: [ // KxDataviewActiveVersionList
 * //         { // KxDataviewActiveVersion
 * //           changesetId: "STRING_VALUE",
 * //           segmentConfigurations: [
 * //             {
 * //               dbPaths: [ // required
 * //                 "STRING_VALUE",
 * //               ],
 * //               volumeName: "STRING_VALUE", // required
 * //               onDemand: true || false,
 * //             },
 * //           ],
 * //           attachedClusters: [ // AttachedClusterList
 * //             "STRING_VALUE",
 * //           ],
 * //           createdTimestamp: new Date("TIMESTAMP"),
 * //           versionId: "STRING_VALUE",
 * //         },
 * //       ],
 * //       status: "CREATING" || "ACTIVE" || "UPDATING" || "FAILED" || "DELETING",
 * //       description: "STRING_VALUE",
 * //       autoUpdate: true || false,
 * //       readWrite: true || false,
 * //       createdTimestamp: new Date("TIMESTAMP"),
 * //       lastModifiedTimestamp: new Date("TIMESTAMP"),
 * //       statusReason: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListKxDataviewsCommandInput - {@link ListKxDataviewsCommandInput}
 * @returns {@link ListKxDataviewsCommandOutput}
 * @see {@link ListKxDataviewsCommandInput} for command's `input` shape.
 * @see {@link ListKxDataviewsCommandOutput} for command's `response` shape.
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
export class ListKxDataviewsCommand extends $Command
  .classBuilder<
    ListKxDataviewsCommandInput,
    ListKxDataviewsCommandOutput,
    FinspaceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FinspaceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSHabaneroManagementService", "ListKxDataviews", {})
  .n("FinspaceClient", "ListKxDataviewsCommand")
  .sc(ListKxDataviews)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListKxDataviewsRequest;
      output: ListKxDataviewsResponse;
    };
    sdk: {
      input: ListKxDataviewsCommandInput;
      output: ListKxDataviewsCommandOutput;
    };
  };
}
