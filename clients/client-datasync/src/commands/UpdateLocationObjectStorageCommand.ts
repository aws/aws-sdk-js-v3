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

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import {
  UpdateLocationObjectStorageRequest,
  UpdateLocationObjectStorageRequestFilterSensitiveLog,
  UpdateLocationObjectStorageResponse,
} from "../models/models_0";
import { de_UpdateLocationObjectStorageCommand, se_UpdateLocationObjectStorageCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateLocationObjectStorageCommand}.
 */
export interface UpdateLocationObjectStorageCommandInput extends UpdateLocationObjectStorageRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLocationObjectStorageCommand}.
 */
export interface UpdateLocationObjectStorageCommandOutput
  extends UpdateLocationObjectStorageResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Updates some parameters of an existing object storage location that DataSync
 *       accesses for a transfer. For information about creating a self-managed object storage
 *       location, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-object-location.html">Creating a location for object
 *         storage</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, UpdateLocationObjectStorageCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, UpdateLocationObjectStorageCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const input = { // UpdateLocationObjectStorageRequest
 *   LocationArn: "STRING_VALUE", // required
 *   ServerPort: Number("int"),
 *   ServerProtocol: "HTTPS" || "HTTP",
 *   Subdirectory: "STRING_VALUE",
 *   AccessKey: "STRING_VALUE",
 *   SecretKey: "STRING_VALUE",
 *   AgentArns: [ // AgentArnList
 *     "STRING_VALUE",
 *   ],
 *   ServerCertificate: "BLOB_VALUE",
 * };
 * const command = new UpdateLocationObjectStorageCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateLocationObjectStorageCommandInput - {@link UpdateLocationObjectStorageCommandInput}
 * @returns {@link UpdateLocationObjectStorageCommandOutput}
 * @see {@link UpdateLocationObjectStorageCommandInput} for command's `input` shape.
 * @see {@link UpdateLocationObjectStorageCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for DataSyncClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception is thrown when an error occurs in the DataSync
 *       service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link DataSyncServiceException}
 * <p>Base exception class for all service exceptions from DataSync service.</p>
 *
 */
export class UpdateLocationObjectStorageCommand extends $Command<
  UpdateLocationObjectStorageCommandInput,
  UpdateLocationObjectStorageCommandOutput,
  DataSyncClientResolvedConfig
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
  constructor(readonly input: UpdateLocationObjectStorageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateLocationObjectStorageCommandInput, UpdateLocationObjectStorageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateLocationObjectStorageCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataSyncClient";
    const commandName = "UpdateLocationObjectStorageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateLocationObjectStorageRequestFilterSensitiveLog,
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
  private serialize(input: UpdateLocationObjectStorageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateLocationObjectStorageCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateLocationObjectStorageCommandOutput> {
    return de_UpdateLocationObjectStorageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
