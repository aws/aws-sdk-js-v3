// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import type {
  UpdateDataRepositoryAssociationRequest,
  UpdateDataRepositoryAssociationResponse,
} from "../models/models_0";
import { UpdateDataRepositoryAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDataRepositoryAssociationCommand}.
 */
export interface UpdateDataRepositoryAssociationCommandInput extends UpdateDataRepositoryAssociationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDataRepositoryAssociationCommand}.
 */
export interface UpdateDataRepositoryAssociationCommandOutput
  extends UpdateDataRepositoryAssociationResponse,
    __MetadataBearer {}

/**
 * <p>Updates the configuration of an existing data repository association
 *             on an Amazon FSx for Lustre file system. Data repository associations
 *             are supported on all FSx for Lustre 2.12 and 2.15 file systems,
 *             excluding <code>scratch_1</code> deployment type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, UpdateDataRepositoryAssociationCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, UpdateDataRepositoryAssociationCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * // import type { FSxClientConfig } from "@aws-sdk/client-fsx";
 * const config = {}; // type is FSxClientConfig
 * const client = new FSxClient(config);
 * const input = { // UpdateDataRepositoryAssociationRequest
 *   AssociationId: "STRING_VALUE", // required
 *   ClientRequestToken: "STRING_VALUE",
 *   ImportedFileChunkSize: Number("int"),
 *   S3: { // S3DataRepositoryConfiguration
 *     AutoImportPolicy: { // AutoImportPolicy
 *       Events: [ // EventTypes
 *         "NEW" || "CHANGED" || "DELETED",
 *       ],
 *     },
 *     AutoExportPolicy: { // AutoExportPolicy
 *       Events: [
 *         "NEW" || "CHANGED" || "DELETED",
 *       ],
 *     },
 *   },
 * };
 * const command = new UpdateDataRepositoryAssociationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDataRepositoryAssociationResponse
 * //   Association: { // DataRepositoryAssociation
 * //     AssociationId: "STRING_VALUE",
 * //     ResourceARN: "STRING_VALUE",
 * //     FileSystemId: "STRING_VALUE",
 * //     Lifecycle: "CREATING" || "AVAILABLE" || "MISCONFIGURED" || "UPDATING" || "DELETING" || "FAILED",
 * //     FailureDetails: { // DataRepositoryFailureDetails
 * //       Message: "STRING_VALUE",
 * //     },
 * //     FileSystemPath: "STRING_VALUE",
 * //     DataRepositoryPath: "STRING_VALUE",
 * //     BatchImportMetaDataOnCreate: true || false,
 * //     ImportedFileChunkSize: Number("int"),
 * //     S3: { // S3DataRepositoryConfiguration
 * //       AutoImportPolicy: { // AutoImportPolicy
 * //         Events: [ // EventTypes
 * //           "NEW" || "CHANGED" || "DELETED",
 * //         ],
 * //       },
 * //       AutoExportPolicy: { // AutoExportPolicy
 * //         Events: [
 * //           "NEW" || "CHANGED" || "DELETED",
 * //         ],
 * //       },
 * //     },
 * //     Tags: [ // Tags
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     FileCacheId: "STRING_VALUE",
 * //     FileCachePath: "STRING_VALUE",
 * //     DataRepositorySubdirectories: [ // SubDirectoriesPaths
 * //       "STRING_VALUE",
 * //     ],
 * //     NFS: { // NFSDataRepositoryConfiguration
 * //       Version: "NFS3", // required
 * //       DnsIps: [ // RepositoryDnsIps
 * //         "STRING_VALUE",
 * //       ],
 * //       AutoExportPolicy: {
 * //         Events: [
 * //           "NEW" || "CHANGED" || "DELETED",
 * //         ],
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateDataRepositoryAssociationCommandInput - {@link UpdateDataRepositoryAssociationCommandInput}
 * @returns {@link UpdateDataRepositoryAssociationCommandOutput}
 * @see {@link UpdateDataRepositoryAssociationCommandInput} for command's `input` shape.
 * @see {@link UpdateDataRepositoryAssociationCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>A generic error indicating a failure with a client request.</p>
 *
 * @throws {@link DataRepositoryAssociationNotFound} (client fault)
 *  <p>No data repository associations were found based upon the supplied parameters.</p>
 *
 * @throws {@link IncompatibleParameterError} (client fault)
 *  <p>The error returned when a second request is received with the same client request
 *             token but different parameters settings. A client request token should always uniquely
 *             identify a single request.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>A generic error indicating a server-side failure.</p>
 *
 * @throws {@link ServiceLimitExceeded} (client fault)
 *  <p>An error indicating that a particular service limit was exceeded. You can increase
 *             some service limits by contacting Amazon Web Services Support.</p>
 *
 * @throws {@link FSxServiceException}
 * <p>Base exception class for all service exceptions from FSx service.</p>
 *
 *
 * @public
 */
export class UpdateDataRepositoryAssociationCommand extends $Command
  .classBuilder<
    UpdateDataRepositoryAssociationCommandInput,
    UpdateDataRepositoryAssociationCommandOutput,
    FSxClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FSxClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSSimbaAPIService_v20180301", "UpdateDataRepositoryAssociation", {})
  .n("FSxClient", "UpdateDataRepositoryAssociationCommand")
  .sc(UpdateDataRepositoryAssociation$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDataRepositoryAssociationRequest;
      output: UpdateDataRepositoryAssociationResponse;
    };
    sdk: {
      input: UpdateDataRepositoryAssociationCommandInput;
      output: UpdateDataRepositoryAssociationCommandOutput;
    };
  };
}
