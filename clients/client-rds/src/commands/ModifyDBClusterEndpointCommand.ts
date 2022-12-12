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

import { DBClusterEndpoint, DBClusterEndpointFilterSensitiveLog } from "../models/models_0";
import { ModifyDBClusterEndpointMessage, ModifyDBClusterEndpointMessageFilterSensitiveLog } from "../models/models_1";
import {
  deserializeAws_queryModifyDBClusterEndpointCommand,
  serializeAws_queryModifyDBClusterEndpointCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

export interface ModifyDBClusterEndpointCommandInput extends ModifyDBClusterEndpointMessage {}
export interface ModifyDBClusterEndpointCommandOutput extends DBClusterEndpoint, __MetadataBearer {}

/**
 * <p>Modifies the properties of an endpoint in an Amazon Aurora DB cluster.</p>
 *          <note>
 *             <p>This action only applies to Aurora DB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyDBClusterEndpointCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyDBClusterEndpointCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new ModifyDBClusterEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyDBClusterEndpointCommandInput} for command's `input` shape.
 * @see {@link ModifyDBClusterEndpointCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 */
export class ModifyDBClusterEndpointCommand extends $Command<
  ModifyDBClusterEndpointCommandInput,
  ModifyDBClusterEndpointCommandOutput,
  RDSClientResolvedConfig
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

  constructor(readonly input: ModifyDBClusterEndpointCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyDBClusterEndpointCommandInput, ModifyDBClusterEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyDBClusterEndpointCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "ModifyDBClusterEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyDBClusterEndpointMessageFilterSensitiveLog,
      outputFilterSensitiveLog: DBClusterEndpointFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyDBClusterEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryModifyDBClusterEndpointCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyDBClusterEndpointCommandOutput> {
    return deserializeAws_queryModifyDBClusterEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
