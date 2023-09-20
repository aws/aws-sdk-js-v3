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

import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import { FileSystemDescription, UpdateFileSystemRequest } from "../models/models_0";
import { de_UpdateFileSystemCommand, se_UpdateFileSystemCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateFileSystemCommand}.
 */
export interface UpdateFileSystemCommandInput extends UpdateFileSystemRequest {}
/**
 * @public
 *
 * The output of {@link UpdateFileSystemCommand}.
 */
export interface UpdateFileSystemCommandOutput extends FileSystemDescription, __MetadataBearer {}

/**
 * @public
 * <p>Updates the throughput mode or the amount of provisioned throughput of an existing file
 *       system.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, UpdateFileSystemCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, UpdateFileSystemCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const input = { // UpdateFileSystemRequest
 *   FileSystemId: "STRING_VALUE", // required
 *   ThroughputMode: "bursting" || "provisioned" || "elastic",
 *   ProvisionedThroughputInMibps: Number("double"),
 * };
 * const command = new UpdateFileSystemCommand(input);
 * const response = await client.send(command);
 * // { // FileSystemDescription
 * //   OwnerId: "STRING_VALUE", // required
 * //   CreationToken: "STRING_VALUE", // required
 * //   FileSystemId: "STRING_VALUE", // required
 * //   FileSystemArn: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"), // required
 * //   LifeCycleState: "creating" || "available" || "updating" || "deleting" || "deleted" || "error", // required
 * //   Name: "STRING_VALUE",
 * //   NumberOfMountTargets: Number("int"), // required
 * //   SizeInBytes: { // FileSystemSize
 * //     Value: Number("long"), // required
 * //     Timestamp: new Date("TIMESTAMP"),
 * //     ValueInIA: Number("long"),
 * //     ValueInStandard: Number("long"),
 * //   },
 * //   PerformanceMode: "generalPurpose" || "maxIO", // required
 * //   Encrypted: true || false,
 * //   KmsKeyId: "STRING_VALUE",
 * //   ThroughputMode: "bursting" || "provisioned" || "elastic",
 * //   ProvisionedThroughputInMibps: Number("double"),
 * //   AvailabilityZoneName: "STRING_VALUE",
 * //   AvailabilityZoneId: "STRING_VALUE",
 * //   Tags: [ // Tags // required
 * //     { // Tag
 * //       Key: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param UpdateFileSystemCommandInput - {@link UpdateFileSystemCommandInput}
 * @returns {@link UpdateFileSystemCommandOutput}
 * @see {@link UpdateFileSystemCommandInput} for command's `input` shape.
 * @see {@link UpdateFileSystemCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for EFSClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>Returned if the request is malformed or contains an error such as an invalid
 *             parameter value or a missing required parameter.</p>
 *
 * @throws {@link FileSystemNotFound} (client fault)
 *  <p>Returned if the specified <code>FileSystemId</code> value doesn't exist in the
 *             requester's Amazon Web Services account.</p>
 *
 * @throws {@link IncorrectFileSystemLifeCycleState} (client fault)
 *  <p>Returned if the file system's lifecycle state is not "available".</p>
 *
 * @throws {@link InsufficientThroughputCapacity} (server fault)
 *  <p>Returned if there's not enough capacity to provision additional throughput. This value
 *             might be returned when you try to create a file system in provisioned throughput mode,
 *             when you attempt to increase the provisioned throughput of an existing file system, or
 *             when you attempt to change an existing file system from Bursting Throughput to
 *             Provisioned Throughput mode. Try again later.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Returned if an error occurred on the server side.</p>
 *
 * @throws {@link ThroughputLimitExceeded} (client fault)
 *  <p>Returned if the throughput mode or amount of provisioned throughput can't be changed
 *             because the throughput limit of 1024 MiB/s has been reached.</p>
 *
 * @throws {@link TooManyRequests} (client fault)
 *  <p>Returned if you don’t wait at least 24 hours before either changing the throughput mode, or
 *             decreasing the Provisioned Throughput value.</p>
 *
 * @throws {@link EFSServiceException}
 * <p>Base exception class for all service exceptions from EFS service.</p>
 *
 */
export class UpdateFileSystemCommand extends $Command<
  UpdateFileSystemCommandInput,
  UpdateFileSystemCommandOutput,
  EFSClientResolvedConfig
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
  constructor(readonly input: UpdateFileSystemCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EFSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateFileSystemCommandInput, UpdateFileSystemCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateFileSystemCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EFSClient";
    const commandName = "UpdateFileSystemCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "MagnolioAPIService_v20150201",
        operation: "UpdateFileSystem",
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
  private serialize(input: UpdateFileSystemCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateFileSystemCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateFileSystemCommandOutput> {
    return de_UpdateFileSystemCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
