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
import { DescribeFileCachesRequest, DescribeFileCachesResponse } from "../models/models_0";
import { de_DescribeFileCachesCommand, se_DescribeFileCachesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeFileCachesCommand}.
 */
export interface DescribeFileCachesCommandInput extends DescribeFileCachesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFileCachesCommand}.
 */
export interface DescribeFileCachesCommandOutput extends DescribeFileCachesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns the description of a specific Amazon File Cache resource, if a
 *             <code>FileCacheIds</code> value is provided for that cache. Otherwise, it
 *             returns descriptions of all caches owned by your Amazon Web Services account in the
 *             Amazon Web Services Region of the endpoint that you're calling.</p>
 *          <p>When retrieving all cache descriptions, you can optionally specify the
 *             <code>MaxResults</code> parameter to limit the number of descriptions in a response.
 *             If more cache descriptions remain, the operation returns a
 *             <code>NextToken</code> value in the response. In this case, send a later request
 *             with the <code>NextToken</code> request parameter set to the value of
 *             <code>NextToken</code> from the last response.</p>
 *          <p>This operation is used in an iterative process to retrieve a list of your cache
 *             descriptions. <code>DescribeFileCaches</code> is called first without a
 *             <code>NextToken</code>value. Then the operation continues to be called with the
 *             <code>NextToken</code> parameter set to the value of the last <code>NextToken</code>
 *             value until a response has no <code>NextToken</code>.</p>
 *          <p>When using this operation, keep the following in mind:</p>
 *          <ul>
 *             <li>
 *                <p>The implementation might return fewer than <code>MaxResults</code>
 *                     cache descriptions while still including a <code>NextToken</code>
 *                     value.</p>
 *             </li>
 *             <li>
 *                <p>The order of caches returned in the response of one
 *                     <code>DescribeFileCaches</code> call and the order of caches returned
 *                     across the responses of a multicall iteration is unspecified.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, DescribeFileCachesCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, DescribeFileCachesCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const input = { // DescribeFileCachesRequest
 *   FileCacheIds: [ // FileCacheIds
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeFileCachesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFileCachesResponse
 * //   FileCaches: [ // FileCaches
 * //     { // FileCache
 * //       OwnerId: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       FileCacheId: "STRING_VALUE",
 * //       FileCacheType: "LUSTRE",
 * //       FileCacheTypeVersion: "STRING_VALUE",
 * //       Lifecycle: "AVAILABLE" || "CREATING" || "DELETING" || "UPDATING" || "FAILED",
 * //       FailureDetails: { // FileCacheFailureDetails
 * //         Message: "STRING_VALUE",
 * //       },
 * //       StorageCapacity: Number("int"),
 * //       VpcId: "STRING_VALUE",
 * //       SubnetIds: [ // SubnetIds
 * //         "STRING_VALUE",
 * //       ],
 * //       NetworkInterfaceIds: [ // NetworkInterfaceIds
 * //         "STRING_VALUE",
 * //       ],
 * //       DNSName: "STRING_VALUE",
 * //       KmsKeyId: "STRING_VALUE",
 * //       ResourceARN: "STRING_VALUE",
 * //       LustreConfiguration: { // FileCacheLustreConfiguration
 * //         PerUnitStorageThroughput: Number("int"),
 * //         DeploymentType: "CACHE_1",
 * //         MountName: "STRING_VALUE",
 * //         WeeklyMaintenanceStartTime: "STRING_VALUE",
 * //         MetadataConfiguration: { // FileCacheLustreMetadataConfiguration
 * //           StorageCapacity: Number("int"), // required
 * //         },
 * //         LogConfiguration: { // LustreLogConfiguration
 * //           Level: "DISABLED" || "WARN_ONLY" || "ERROR_ONLY" || "WARN_ERROR", // required
 * //           Destination: "STRING_VALUE",
 * //         },
 * //       },
 * //       DataRepositoryAssociationIds: [ // DataRepositoryAssociationIds
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeFileCachesCommandInput - {@link DescribeFileCachesCommandInput}
 * @returns {@link DescribeFileCachesCommandOutput}
 * @see {@link DescribeFileCachesCommandInput} for command's `input` shape.
 * @see {@link DescribeFileCachesCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>A generic error indicating a failure with a client request.</p>
 *
 * @throws {@link FileCacheNotFound} (client fault)
 *  <p>No caches were found based upon supplied parameters.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>A generic error indicating a server-side failure.</p>
 *
 * @throws {@link FSxServiceException}
 * <p>Base exception class for all service exceptions from FSx service.</p>
 *
 */
export class DescribeFileCachesCommand extends $Command<
  DescribeFileCachesCommandInput,
  DescribeFileCachesCommandOutput,
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
  constructor(readonly input: DescribeFileCachesCommandInput) {
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
  ): Handler<DescribeFileCachesCommandInput, DescribeFileCachesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeFileCachesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FSxClient";
    const commandName = "DescribeFileCachesCommand";
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
  private serialize(input: DescribeFileCachesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeFileCachesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeFileCachesCommandOutput> {
    return de_DescribeFileCachesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
