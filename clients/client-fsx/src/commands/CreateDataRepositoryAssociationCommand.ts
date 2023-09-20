// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import { CreateDataRepositoryAssociationRequest, CreateDataRepositoryAssociationResponse } from "../models/models_0";
import {
  de_CreateDataRepositoryAssociationCommand,
  se_CreateDataRepositoryAssociationCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
export interface CreateDataRepositoryAssociationCommandOutput
  extends CreateDataRepositoryAssociationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Creates an Amazon FSx for Lustre data repository association (DRA). A data
 *             repository association is a link between a directory on the file system and
 *             an Amazon S3 bucket or prefix. You can have a maximum of 8 data repository
 *             associations on a file system. Data repository associations are supported
 *             on all FSx for Lustre 2.12 and 2.15 file systems, excluding
 *             <code>scratch_1</code> deployment type.</p>
 *          <p>Each data repository association must have a unique Amazon FSx file
 *             system directory and a unique S3 bucket or prefix associated with it. You
 *             can configure a data repository association for automatic import only,
 *             for automatic export only, or for both. To learn more about linking a
 *             data repository to your file system, see
 *             <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/create-dra-linked-data-repo.html">Linking your file system to an S3 bucket</a>.</p>
 *          <note>
 *             <p>
 *                <code>CreateDataRepositoryAssociation</code> isn't supported
 *             on Amazon File Cache resources. To create a DRA on Amazon File Cache,
 *             use the <code>CreateFileCache</code> operation.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, CreateDataRepositoryAssociationCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, CreateDataRepositoryAssociationCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
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
 *  <p>A generic error indicating a failure with a client request.</p>
 *
 * @throws {@link FileSystemNotFound} (client fault)
 *  <p>No Amazon FSx file systems were found based upon supplied parameters.</p>
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
 * @throws {@link UnsupportedOperation} (client fault)
 *  <p>The requested operation is not supported for this resource or API.</p>
 *
 * @throws {@link FSxServiceException}
 * <p>Base exception class for all service exceptions from FSx service.</p>
 *
 */
export class CreateDataRepositoryAssociationCommand extends $Command<
  CreateDataRepositoryAssociationCommandInput,
  CreateDataRepositoryAssociationCommandOutput,
  FSxClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: CreateDataRepositoryAssociationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FSxClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDataRepositoryAssociationCommandInput, CreateDataRepositoryAssociationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDataRepositoryAssociationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FSxClient";
    const commandName = "CreateDataRepositoryAssociationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSSimbaAPIService_v20180301",
        operation: "CreateDataRepositoryAssociation",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(
    input: CreateDataRepositoryAssociationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_CreateDataRepositoryAssociationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateDataRepositoryAssociationCommandOutput> {
    return de_CreateDataRepositoryAssociationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
