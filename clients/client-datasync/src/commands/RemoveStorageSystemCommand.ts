// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { RemoveStorageSystemRequest, RemoveStorageSystemResponse } from "../models/models_0";
import { de_RemoveStorageSystemCommand, se_RemoveStorageSystemCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link RemoveStorageSystemCommand}.
 */
export interface RemoveStorageSystemCommandInput extends RemoveStorageSystemRequest {}
/**
 * @public
 *
 * The output of {@link RemoveStorageSystemCommand}.
 */
export interface RemoveStorageSystemCommandOutput extends RemoveStorageSystemResponse, __MetadataBearer {}

/**
 * @public
 * <p>Permanently removes a storage system resource from DataSync Discovery, including the associated
 *       discovery jobs, collected data, and recommendations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, RemoveStorageSystemCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, RemoveStorageSystemCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const input = { // RemoveStorageSystemRequest
 *   StorageSystemArn: "STRING_VALUE", // required
 * };
 * const command = new RemoveStorageSystemCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param RemoveStorageSystemCommandInput - {@link RemoveStorageSystemCommandInput}
 * @returns {@link RemoveStorageSystemCommandOutput}
 * @see {@link RemoveStorageSystemCommandInput} for command's `input` shape.
 * @see {@link RemoveStorageSystemCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for DataSyncClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception is thrown when an error occurs in the DataSync
 *       service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 *
 */
export class RemoveStorageSystemCommand extends $Command<
  RemoveStorageSystemCommandInput,
  RemoveStorageSystemCommandOutput,
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
  constructor(readonly input: RemoveStorageSystemCommandInput) {
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
  ): Handler<RemoveStorageSystemCommandInput, RemoveStorageSystemCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RemoveStorageSystemCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataSyncClient";
    const commandName = "RemoveStorageSystemCommand";
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
  private serialize(input: RemoveStorageSystemCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RemoveStorageSystemCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RemoveStorageSystemCommandOutput> {
    return de_RemoveStorageSystemCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
