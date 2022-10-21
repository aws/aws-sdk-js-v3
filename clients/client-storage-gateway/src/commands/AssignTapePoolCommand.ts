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
  AssignTapePoolInput,
  AssignTapePoolInputFilterSensitiveLog,
  AssignTapePoolOutput,
  AssignTapePoolOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1AssignTapePoolCommand,
  serializeAws_json1_1AssignTapePoolCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

export interface AssignTapePoolCommandInput extends AssignTapePoolInput {}
export interface AssignTapePoolCommandOutput extends AssignTapePoolOutput, __MetadataBearer {}

/**
 * <p>Assigns a tape to a tape pool for archiving. The tape assigned to a pool is archived in
 *          the S3 storage class that is associated with the pool. When you use your backup application
 *          to eject the tape, the tape is archived directly into the S3 storage class (S3 Glacier or
 *          S3 Glacier Deep Archive) that corresponds to the pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, AssignTapePoolCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, AssignTapePoolCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new AssignTapePoolCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssignTapePoolCommandInput} for command's `input` shape.
 * @see {@link AssignTapePoolCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 */
export class AssignTapePoolCommand extends $Command<
  AssignTapePoolCommandInput,
  AssignTapePoolCommandOutput,
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

  constructor(readonly input: AssignTapePoolCommandInput) {
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
  ): Handler<AssignTapePoolCommandInput, AssignTapePoolCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssignTapePoolCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "AssignTapePoolCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssignTapePoolInputFilterSensitiveLog,
      outputFilterSensitiveLog: AssignTapePoolOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssignTapePoolCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AssignTapePoolCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssignTapePoolCommandOutput> {
    return deserializeAws_json1_1AssignTapePoolCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
