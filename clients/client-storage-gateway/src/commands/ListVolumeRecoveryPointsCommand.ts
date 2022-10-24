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

import {
  ListVolumeRecoveryPointsInput,
  ListVolumeRecoveryPointsInputFilterSensitiveLog,
  ListVolumeRecoveryPointsOutput,
  ListVolumeRecoveryPointsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListVolumeRecoveryPointsCommand,
  serializeAws_json1_1ListVolumeRecoveryPointsCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

export interface ListVolumeRecoveryPointsCommandInput extends ListVolumeRecoveryPointsInput {}
export interface ListVolumeRecoveryPointsCommandOutput extends ListVolumeRecoveryPointsOutput, __MetadataBearer {}

/**
 * <p>Lists the recovery points for a specified gateway. This operation is only supported in
 *          the cached volume gateway type.</p>
 *
 *          <p>Each cache volume has one recovery point. A volume recovery point is a point in time at
 *          which all data of the volume is consistent and from which you can create a snapshot or
 *          clone a new cached volume from a source volume. To create a snapshot from a volume recovery
 *          point use the <a>CreateSnapshotFromVolumeRecoveryPoint</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, ListVolumeRecoveryPointsCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, ListVolumeRecoveryPointsCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new ListVolumeRecoveryPointsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListVolumeRecoveryPointsCommandInput} for command's `input` shape.
 * @see {@link ListVolumeRecoveryPointsCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 */
export class ListVolumeRecoveryPointsCommand extends $Command<
  ListVolumeRecoveryPointsCommandInput,
  ListVolumeRecoveryPointsCommandOutput,
  StorageGatewayClientResolvedConfig
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

  constructor(readonly input: ListVolumeRecoveryPointsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListVolumeRecoveryPointsCommandInput, ListVolumeRecoveryPointsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListVolumeRecoveryPointsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "ListVolumeRecoveryPointsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListVolumeRecoveryPointsInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListVolumeRecoveryPointsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListVolumeRecoveryPointsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListVolumeRecoveryPointsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListVolumeRecoveryPointsCommandOutput> {
    return deserializeAws_json1_1ListVolumeRecoveryPointsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
