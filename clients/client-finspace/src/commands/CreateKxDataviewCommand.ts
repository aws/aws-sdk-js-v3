// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FinspaceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceClient";
import { CreateKxDataviewRequest, CreateKxDataviewResponse } from "../models/models_0";
import { CreateKxDataview } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateKxDataviewCommand}.
 */
export interface CreateKxDataviewCommandInput extends CreateKxDataviewRequest {}
/**
 * @public
 *
 * The output of {@link CreateKxDataviewCommand}.
 */
export interface CreateKxDataviewCommandOutput extends CreateKxDataviewResponse, __MetadataBearer {}

/**
 * <p>
 * Creates a snapshot of kdb database with tiered storage capabilities and a pre-warmed cache, ready for mounting on kdb clusters.  Dataviews are only available for clusters running on a scaling group. They are not supported on dedicated clusters. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceClient, CreateKxDataviewCommand } from "@aws-sdk/client-finspace"; // ES Modules import
 * // const { FinspaceClient, CreateKxDataviewCommand } = require("@aws-sdk/client-finspace"); // CommonJS import
 * // import type { FinspaceClientConfig } from "@aws-sdk/client-finspace";
 * const config = {}; // type is FinspaceClientConfig
 * const client = new FinspaceClient(config);
 * const input = { // CreateKxDataviewRequest
 *   environmentId: "STRING_VALUE", // required
 *   databaseName: "STRING_VALUE", // required
 *   dataviewName: "STRING_VALUE", // required
 *   azMode: "SINGLE" || "MULTI", // required
 *   availabilityZoneId: "STRING_VALUE",
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
 *   autoUpdate: true || false,
 *   readWrite: true || false,
 *   description: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE", // required
 * };
 * const command = new CreateKxDataviewCommand(input);
 * const response = await client.send(command);
 * // { // CreateKxDataviewResponse
 * //   dataviewName: "STRING_VALUE",
 * //   databaseName: "STRING_VALUE",
 * //   environmentId: "STRING_VALUE",
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
 * //   description: "STRING_VALUE",
 * //   autoUpdate: true || false,
 * //   readWrite: true || false,
 * //   createdTimestamp: new Date("TIMESTAMP"),
 * //   lastModifiedTimestamp: new Date("TIMESTAMP"),
 * //   status: "CREATING" || "ACTIVE" || "UPDATING" || "FAILED" || "DELETING",
 * // };
 *
 * ```
 *
 * @param CreateKxDataviewCommandInput - {@link CreateKxDataviewCommandInput}
 * @returns {@link CreateKxDataviewCommandOutput}
 * @see {@link CreateKxDataviewCommandInput} for command's `input` shape.
 * @see {@link CreateKxDataviewCommandOutput} for command's `response` shape.
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
export class CreateKxDataviewCommand extends $Command
  .classBuilder<
    CreateKxDataviewCommandInput,
    CreateKxDataviewCommandOutput,
    FinspaceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FinspaceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSHabaneroManagementService", "CreateKxDataview", {})
  .n("FinspaceClient", "CreateKxDataviewCommand")
  .sc(CreateKxDataview)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateKxDataviewRequest;
      output: CreateKxDataviewResponse;
    };
    sdk: {
      input: CreateKxDataviewCommandInput;
      output: CreateKxDataviewCommandOutput;
    };
  };
}
