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
import { FileSystemProtectionDescription, UpdateFileSystemProtectionRequest } from "../models/models_0";
import { de_UpdateFileSystemProtectionCommand, se_UpdateFileSystemProtectionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateFileSystemProtectionCommand}.
 */
export interface UpdateFileSystemProtectionCommandInput extends UpdateFileSystemProtectionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateFileSystemProtectionCommand}.
 */
export interface UpdateFileSystemProtectionCommandOutput extends FileSystemProtectionDescription, __MetadataBearer {}

/**
 * @public
 * <p>Updates protection on the file system.</p>
 *          <p>This operation requires permissions for the
 *         <code>elasticfilesystem:UpdateFileSystemProtection</code> action. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, UpdateFileSystemProtectionCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, UpdateFileSystemProtectionCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const input = { // UpdateFileSystemProtectionRequest
 *   FileSystemId: "STRING_VALUE", // required
 *   ReplicationOverwriteProtection: "ENABLED" || "DISABLED" || "REPLICATING",
 * };
 * const command = new UpdateFileSystemProtectionCommand(input);
 * const response = await client.send(command);
 * // { // FileSystemProtectionDescription
 * //   ReplicationOverwriteProtection: "ENABLED" || "DISABLED" || "REPLICATING",
 * // };
 *
 * ```
 *
 * @param UpdateFileSystemProtectionCommandInput - {@link UpdateFileSystemProtectionCommandInput}
 * @returns {@link UpdateFileSystemProtectionCommandOutput}
 * @see {@link UpdateFileSystemProtectionCommandInput} for command's `input` shape.
 * @see {@link UpdateFileSystemProtectionCommandOutput} for command's `response` shape.
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
 * @throws {@link ReplicationAlreadyExists} (client fault)
 *  <p>Returned if the file system is already included in a replication configuration.></p>
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
export class UpdateFileSystemProtectionCommand extends $Command<
  UpdateFileSystemProtectionCommandInput,
  UpdateFileSystemProtectionCommandOutput,
  EFSClientResolvedConfig
> {
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
  constructor(readonly input: UpdateFileSystemProtectionCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EFSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateFileSystemProtectionCommandInput, UpdateFileSystemProtectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateFileSystemProtectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EFSClient";
    const commandName = "UpdateFileSystemProtectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "MagnolioAPIService_v20150201",
        operation: "UpdateFileSystemProtection",
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
  private serialize(input: UpdateFileSystemProtectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateFileSystemProtectionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateFileSystemProtectionCommandOutput> {
    return de_UpdateFileSystemProtectionCommand(output, context);
  }
}
