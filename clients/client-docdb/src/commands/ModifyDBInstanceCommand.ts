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

import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import {
  ModifyDBInstanceMessage,
  ModifyDBInstanceMessageFilterSensitiveLog,
  ModifyDBInstanceResult,
  ModifyDBInstanceResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryModifyDBInstanceCommand,
  serializeAws_queryModifyDBInstanceCommand,
} from "../protocols/Aws_query";

export interface ModifyDBInstanceCommandInput extends ModifyDBInstanceMessage {}
export interface ModifyDBInstanceCommandOutput extends ModifyDBInstanceResult, __MetadataBearer {}

/**
 * <p>Modifies settings for an instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, ModifyDBInstanceCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, ModifyDBInstanceCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * const client = new DocDBClient(config);
 * const command = new ModifyDBInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyDBInstanceCommandInput} for command's `input` shape.
 * @see {@link ModifyDBInstanceCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for DocDBClient's `config` shape.
 *
 */
export class ModifyDBInstanceCommand extends $Command<
  ModifyDBInstanceCommandInput,
  ModifyDBInstanceCommandOutput,
  DocDBClientResolvedConfig
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

  constructor(readonly input: ModifyDBInstanceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DocDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyDBInstanceCommandInput, ModifyDBInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyDBInstanceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DocDBClient";
    const commandName = "ModifyDBInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyDBInstanceMessageFilterSensitiveLog,
      outputFilterSensitiveLog: ModifyDBInstanceResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyDBInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryModifyDBInstanceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyDBInstanceCommandOutput> {
    return deserializeAws_queryModifyDBInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
