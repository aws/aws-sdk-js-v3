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
import {
  DescribeDataRepositoryAssociationsRequest,
  DescribeDataRepositoryAssociationsResponse,
} from "../models/models_0";
import {
  de_DescribeDataRepositoryAssociationsCommand,
  se_DescribeDataRepositoryAssociationsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeDataRepositoryAssociationsCommand}.
 */
export interface DescribeDataRepositoryAssociationsCommandInput extends DescribeDataRepositoryAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDataRepositoryAssociationsCommand}.
 */
export interface DescribeDataRepositoryAssociationsCommandOutput
  extends DescribeDataRepositoryAssociationsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns the description of specific Amazon FSx for Lustre or Amazon File Cache
 *             data repository associations, if one or more <code>AssociationIds</code> values
 *             are provided in the request, or if filters are used in the request. Data repository
 *             associations are supported on Amazon File Cache resources and all FSx for Lustre
 *             2.12 and newer file systems, excluding <code>scratch_1</code> deployment type.</p>
 *          <p>You can use filters to narrow the response to include just data repository
 *             associations for specific file systems (use the <code>file-system-id</code> filter with
 *             the ID of the file system) or caches (use the <code>file-cache-id</code> filter with
 *             the ID of the cache), or data repository associations for a specific repository type
 *             (use the <code>data-repository-type</code> filter with a value of <code>S3</code>
 *             or <code>NFS</code>). If you don't use filters, the response returns all data
 *             repository associations owned by your Amazon Web Services account in the Amazon Web Services Region
 *             of the endpoint that you're calling.</p>
 *          <p>When retrieving all data repository associations, you can paginate the response by using
 *             the optional <code>MaxResults</code> parameter to limit the number of data repository associations
 *             returned in a response. If more data repository associations remain, a
 *             <code>NextToken</code> value is returned in the response. In this case, send a later
 *             request with the <code>NextToken</code> request parameter set to the value of
 *             <code>NextToken</code> from the last response.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, DescribeDataRepositoryAssociationsCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, DescribeDataRepositoryAssociationsCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const input = { // DescribeDataRepositoryAssociationsRequest
 *   AssociationIds: [ // DataRepositoryAssociationIds
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // Filters
 *     { // Filter
 *       Name: "file-system-id" || "backup-type" || "file-system-type" || "volume-id" || "data-repository-type" || "file-cache-id" || "file-cache-type",
 *       Values: [ // FilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeDataRepositoryAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDataRepositoryAssociationsResponse
 * //   Associations: [ // DataRepositoryAssociations
 * //     { // DataRepositoryAssociation
 * //       AssociationId: "STRING_VALUE",
 * //       ResourceARN: "STRING_VALUE",
 * //       FileSystemId: "STRING_VALUE",
 * //       Lifecycle: "CREATING" || "AVAILABLE" || "MISCONFIGURED" || "UPDATING" || "DELETING" || "FAILED",
 * //       FailureDetails: { // DataRepositoryFailureDetails
 * //         Message: "STRING_VALUE",
 * //       },
 * //       FileSystemPath: "STRING_VALUE",
 * //       DataRepositoryPath: "STRING_VALUE",
 * //       BatchImportMetaDataOnCreate: true || false,
 * //       ImportedFileChunkSize: Number("int"),
 * //       S3: { // S3DataRepositoryConfiguration
 * //         AutoImportPolicy: { // AutoImportPolicy
 * //           Events: [ // EventTypes
 * //             "NEW" || "CHANGED" || "DELETED",
 * //           ],
 * //         },
 * //         AutoExportPolicy: { // AutoExportPolicy
 * //           Events: [
 * //             "NEW" || "CHANGED" || "DELETED",
 * //           ],
 * //         },
 * //       },
 * //       Tags: [ // Tags
 * //         { // Tag
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       FileCacheId: "STRING_VALUE",
 * //       FileCachePath: "STRING_VALUE",
 * //       DataRepositorySubdirectories: [ // SubDirectoriesPaths
 * //         "STRING_VALUE",
 * //       ],
 * //       NFS: { // NFSDataRepositoryConfiguration
 * //         Version: "NFS3", // required
 * //         DnsIps: [ // RepositoryDnsIps
 * //           "STRING_VALUE",
 * //         ],
 * //         AutoExportPolicy: {
 * //           Events: [
 * //             "NEW" || "CHANGED" || "DELETED",
 * //           ],
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeDataRepositoryAssociationsCommandInput - {@link DescribeDataRepositoryAssociationsCommandInput}
 * @returns {@link DescribeDataRepositoryAssociationsCommandOutput}
 * @see {@link DescribeDataRepositoryAssociationsCommandInput} for command's `input` shape.
 * @see {@link DescribeDataRepositoryAssociationsCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>A generic error indicating a failure with a client request.</p>
 *
 * @throws {@link DataRepositoryAssociationNotFound} (client fault)
 *  <p>No data repository associations were found based upon the supplied parameters.</p>
 *
 * @throws {@link FileSystemNotFound} (client fault)
 *  <p>No Amazon FSx file systems were found based upon supplied parameters.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>A generic error indicating a server-side failure.</p>
 *
 * @throws {@link InvalidDataRepositoryType} (client fault)
 *  <p>You have filtered the response to a data repository type that is not supported.</p>
 *
 * @throws {@link FSxServiceException}
 * <p>Base exception class for all service exceptions from FSx service.</p>
 *
 */
export class DescribeDataRepositoryAssociationsCommand extends $Command<
  DescribeDataRepositoryAssociationsCommandInput,
  DescribeDataRepositoryAssociationsCommandOutput,
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
  constructor(readonly input: DescribeDataRepositoryAssociationsCommandInput) {
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
  ): Handler<DescribeDataRepositoryAssociationsCommandInput, DescribeDataRepositoryAssociationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDataRepositoryAssociationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FSxClient";
    const commandName = "DescribeDataRepositoryAssociationsCommand";
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
    input: DescribeDataRepositoryAssociationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeDataRepositoryAssociationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDataRepositoryAssociationsCommandOutput> {
    return de_DescribeDataRepositoryAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
