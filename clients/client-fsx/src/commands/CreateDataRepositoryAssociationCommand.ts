// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  CreateDataRepositoryAssociationRequest,
  CreateDataRepositoryAssociationResponse,
} from "../models/models_0";
import { CreateDataRepositoryAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateDataRepositoryAssociationCommand}.
 */
export interface CreateDataRepositoryAssociationCommandInput extends CreateDataRepositoryAssociationRequest {}
/**
 * @public
 *
 * The output of {@link CreateDataRepositoryAssociationCommand}.
 */
export interface CreateDataRepositoryAssociationCommandOutput extends CreateDataRepositoryAssociationResponse, __MetadataBearer {}

/**
 * Creates an Amazon FSx for Lustre data repository association (DRA). A data repository association is a link between a directory on the file system and an Amazon S3 bucket or prefix. You can have a maximum of 8 data repository associations on a file system. Data repository associations are supported on all FSx for Lustre 2.12 and 2.15 file systems, excluding `scratch_1` deployment type.
 *
 * Each data repository association must have a unique Amazon FSx file system directory and a unique S3 bucket or prefix associated with it. You can configure a data repository association for automatic import only, for automatic export only, or for both. To learn more about linking a data repository to your file system, see [Linking your file system to an S3 bucket](https://docs.aws.amazon.com/fsx/latest/LustreGuide/create-dra-linked-data-repo.html).
 *
 * > **Note:** `CreateDataRepositoryAssociation` isn't supported on Amazon File Cache resources. To create a DRA on Amazon File Cache, use the `CreateFileCache` operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, CreateDataRepositoryAssociationCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, CreateDataRepositoryAssociationCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * // import type { FSxClientConfig } from "@aws-sdk/client-fsx";
 * const config = {}; // type is FSxClientConfig
 * const client = new FSxClient(config);
 * const input = { // CreateDataRepositoryAssociationRequest
 *   FileSystemId: "STRING_VALUE", // required
 *   FileSystemPath: "STRING_VALUE",
 *   DataRepositoryPath: "STRING_VALUE", // required
 *   BatchImportMetaDataOnCreate: true || false,
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
 *   ClientRequestToken: "STRING_VALUE",
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateDataRepositoryAssociationCommand(input);
 * const response = await client.send(command);
 * // { // CreateDataRepositoryAssociationResponse
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
 * @param CreateDataRepositoryAssociationCommandInput - {@link CreateDataRepositoryAssociationCommandInput}
 * @returns {@link CreateDataRepositoryAssociationCommandOutput}
 * @see {@link CreateDataRepositoryAssociationCommandInput} for command's `input` shape.
 * @see {@link CreateDataRepositoryAssociationCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *
 * A generic error indicating a failure with a client request.
 *
 * @throws {@link FileSystemNotFound} (client fault)
 *
 * No Amazon FSx file systems were found based upon supplied parameters.
 *
 * @throws {@link IncompatibleParameterError} (client fault)
 *
 * The error returned when a second request is received with the same client request token but different parameters settings. A client request token should always uniquely identify a single request.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * A generic error indicating a server-side failure.
 *
 * @throws {@link ServiceLimitExceeded} (client fault)
 *
 * An error indicating that a particular service limit was exceeded. You can increase some service limits by contacting Amazon Web Services Support.
 *
 * @throws {@link UnsupportedOperation} (client fault)
 *
 * The requested operation is not supported for this resource or API.
 *
 * @throws {@link FSxServiceException}
 *
 * Base exception class for all service exceptions from FSx service.
 *
 * @public
 */
export class CreateDataRepositoryAssociationCommand extends command<CreateDataRepositoryAssociationCommandInput, CreateDataRepositoryAssociationCommandOutput>(
  _ep0,
  _mw0,
  "CreateDataRepositoryAssociation",
  CreateDataRepositoryAssociation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDataRepositoryAssociationRequest;
      output: CreateDataRepositoryAssociationResponse;
    };
    sdk: {
      input: CreateDataRepositoryAssociationCommandInput;
      output: CreateDataRepositoryAssociationCommandOutput;
    };
  };
}
