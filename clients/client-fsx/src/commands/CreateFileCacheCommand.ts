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
import { CreateFileCacheRequest, CreateFileCacheResponse } from "../models/models_0";
import { de_CreateFileCacheCommand, se_CreateFileCacheCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateFileCacheCommand}.
 */
export interface CreateFileCacheCommandInput extends CreateFileCacheRequest {}
/**
 * @public
 *
 * The output of {@link CreateFileCacheCommand}.
 */
export interface CreateFileCacheCommandOutput extends CreateFileCacheResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new Amazon File Cache resource.</p>
 *          <p>You can use this operation with a client request token in the request that
 *             Amazon File Cache uses to ensure idempotent creation.
 *             If a cache with the specified client request token exists and the parameters
 *             match, <code>CreateFileCache</code> returns the description of the existing
 *             cache. If a cache with the specified client request token exists and the
 *             parameters don't match, this call returns <code>IncompatibleParameterError</code>.
 *             If a file cache with the specified client request token doesn't exist,
 *             <code>CreateFileCache</code> does the following: </p>
 *          <ul>
 *             <li>
 *                <p>Creates a new, empty Amazon File Cache resourcewith an assigned ID, and
 *                     an initial lifecycle state of <code>CREATING</code>.</p>
 *             </li>
 *             <li>
 *                <p>Returns the description of the cache in JSON format.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>The <code>CreateFileCache</code> call returns while the cache's lifecycle
 *                 state is still <code>CREATING</code>. You can check the cache creation status
 *                 by calling the <a href="https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileCaches.html">DescribeFileCaches</a> operation, which returns the cache state
 *                 along with other information.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, CreateFileCacheCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, CreateFileCacheCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const input = { // CreateFileCacheRequest
 *   ClientRequestToken: "STRING_VALUE",
 *   FileCacheType: "LUSTRE", // required
 *   FileCacheTypeVersion: "STRING_VALUE", // required
 *   StorageCapacity: Number("int"), // required
 *   SubnetIds: [ // SubnetIds // required
 *     "STRING_VALUE",
 *   ],
 *   SecurityGroupIds: [ // SecurityGroupIds
 *     "STRING_VALUE",
 *   ],
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   CopyTagsToDataRepositoryAssociations: true || false,
 *   KmsKeyId: "STRING_VALUE",
 *   LustreConfiguration: { // CreateFileCacheLustreConfiguration
 *     PerUnitStorageThroughput: Number("int"), // required
 *     DeploymentType: "CACHE_1", // required
 *     WeeklyMaintenanceStartTime: "STRING_VALUE",
 *     MetadataConfiguration: { // FileCacheLustreMetadataConfiguration
 *       StorageCapacity: Number("int"), // required
 *     },
 *   },
 *   DataRepositoryAssociations: [ // CreateFileCacheDataRepositoryAssociations
 *     { // FileCacheDataRepositoryAssociation
 *       FileCachePath: "STRING_VALUE", // required
 *       DataRepositoryPath: "STRING_VALUE", // required
 *       DataRepositorySubdirectories: [ // SubDirectoriesPaths
 *         "STRING_VALUE",
 *       ],
 *       NFS: { // FileCacheNFSConfiguration
 *         Version: "NFS3", // required
 *         DnsIps: [ // RepositoryDnsIps
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *   ],
 * };
 * const command = new CreateFileCacheCommand(input);
 * const response = await client.send(command);
 * // { // CreateFileCacheResponse
 * //   FileCache: { // FileCacheCreating
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
 * //     Tags: [ // Tags
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     CopyTagsToDataRepositoryAssociations: true || false,
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
 * @param CreateFileCacheCommandInput - {@link CreateFileCacheCommandInput}
 * @returns {@link CreateFileCacheCommandOutput}
 * @see {@link CreateFileCacheCommandInput} for command's `input` shape.
 * @see {@link CreateFileCacheCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>A generic error indicating a failure with a client request.</p>
 *
 * @throws {@link IncompatibleParameterError} (client fault)
 *  <p>The error returned when a second request is received with the same client request
 *             token but different parameters settings. A client request token should always uniquely
 *             identify a single request.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>A generic error indicating a server-side failure.</p>
 *
 * @throws {@link InvalidNetworkSettings} (client fault)
 *  <p>One or more network settings specified in the request are invalid.</p>
 *
 * @throws {@link InvalidPerUnitStorageThroughput} (client fault)
 *  <p>An invalid value for <code>PerUnitStorageThroughput</code> was provided. Please create your file system again, using a valid value.</p>
 *
 * @throws {@link MissingFileCacheConfiguration} (client fault)
 *  <p>A cache configuration is required for this operation.</p>
 *
 * @throws {@link ServiceLimitExceeded} (client fault)
 *  <p>An error indicating that a particular service limit was exceeded. You can increase
 *             some service limits by contacting Amazon Web Services Support.</p>
 *
 * @throws {@link FSxServiceException}
 * <p>Base exception class for all service exceptions from FSx service.</p>
 *
 */
export class CreateFileCacheCommand extends $Command<
  CreateFileCacheCommandInput,
  CreateFileCacheCommandOutput,
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
  constructor(readonly input: CreateFileCacheCommandInput) {
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
  ): Handler<CreateFileCacheCommandInput, CreateFileCacheCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateFileCacheCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FSxClient";
    const commandName = "CreateFileCacheCommand";
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
  private serialize(input: CreateFileCacheCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateFileCacheCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateFileCacheCommandOutput> {
    return de_CreateFileCacheCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
