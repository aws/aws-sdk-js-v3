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

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import {
  UpdateStorageSystemRequest,
  UpdateStorageSystemRequestFilterSensitiveLog,
  UpdateStorageSystemResponse,
} from "../models/models_0";
import { de_UpdateStorageSystemCommand, se_UpdateStorageSystemCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateStorageSystemCommand}.
 */
export interface UpdateStorageSystemCommandInput extends UpdateStorageSystemRequest {}
/**
 * @public
 *
 * The output of {@link UpdateStorageSystemCommand}.
 */
export interface UpdateStorageSystemCommandOutput extends UpdateStorageSystemResponse, __MetadataBearer {}

/**
 * @public
 * <p>Modifies some configurations of an on-premises storage system resource that you're using
 *       with DataSync Discovery.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, UpdateStorageSystemCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, UpdateStorageSystemCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const input = { // UpdateStorageSystemRequest
 *   StorageSystemArn: "STRING_VALUE", // required
 *   ServerConfiguration: { // DiscoveryServerConfiguration
 *     ServerHostname: "STRING_VALUE", // required
 *     ServerPort: Number("int"),
 *   },
 *   AgentArns: [ // DiscoveryAgentArnList
 *     "STRING_VALUE",
 *   ],
 *   Name: "STRING_VALUE",
 *   CloudWatchLogGroupArn: "STRING_VALUE",
 *   Credentials: { // Credentials
 *     Username: "STRING_VALUE", // required
 *     Password: "STRING_VALUE", // required
 *   },
 * };
 * const command = new UpdateStorageSystemCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateStorageSystemCommandInput - {@link UpdateStorageSystemCommandInput}
 * @returns {@link UpdateStorageSystemCommandOutput}
 * @see {@link UpdateStorageSystemCommandInput} for command's `input` shape.
 * @see {@link UpdateStorageSystemCommandOutput} for command's `response` shape.
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
export class UpdateStorageSystemCommand extends $Command<
  UpdateStorageSystemCommandInput,
  UpdateStorageSystemCommandOutput,
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
  constructor(readonly input: UpdateStorageSystemCommandInput) {
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
  ): Handler<UpdateStorageSystemCommandInput, UpdateStorageSystemCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateStorageSystemCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataSyncClient";
    const commandName = "UpdateStorageSystemCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateStorageSystemRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "FmrsService",
        operation: "UpdateStorageSystem",
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
  private serialize(input: UpdateStorageSystemCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateStorageSystemCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateStorageSystemCommandOutput> {
    return de_UpdateStorageSystemCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
