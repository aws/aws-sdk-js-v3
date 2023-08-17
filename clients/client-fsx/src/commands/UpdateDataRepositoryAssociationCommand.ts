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
} from "@smithy/types";

import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import { UpdateDataRepositoryAssociationRequest, UpdateDataRepositoryAssociationResponse } from "../models/models_0";
import {
  de_UpdateDataRepositoryAssociationCommand,
  se_UpdateDataRepositoryAssociationCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Updates the configuration of an existing data repository association
 *             on an Amazon FSx for Lustre file system. Data repository associations
 *             are supported on all FSx for Lustre 2.12 and newer file systems,
 *             excluding <code>scratch_1</code> deployment type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, UpdateDataRepositoryAssociationCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, UpdateDataRepositoryAssociationCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
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
 */
export class UpdateDataRepositoryAssociationCommand extends $Command<
  UpdateDataRepositoryAssociationCommandInput,
  UpdateDataRepositoryAssociationCommandOutput,
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
  constructor(readonly input: UpdateDataRepositoryAssociationCommandInput) {
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
  ): Handler<UpdateDataRepositoryAssociationCommandInput, UpdateDataRepositoryAssociationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateDataRepositoryAssociationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FSxClient";
    const commandName = "UpdateDataRepositoryAssociationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
    input: UpdateDataRepositoryAssociationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_UpdateDataRepositoryAssociationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateDataRepositoryAssociationCommandOutput> {
    return de_UpdateDataRepositoryAssociationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
