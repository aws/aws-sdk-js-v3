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
  ModifyDBClusterEndpointMessage,
  ModifyDBClusterEndpointMessageFilterSensitiveLog,
  ModifyDBClusterEndpointOutput,
  ModifyDBClusterEndpointOutputFilterSensitiveLog,
} from "../models/models_0";
import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import {
  deserializeAws_queryModifyDBClusterEndpointCommand,
  serializeAws_queryModifyDBClusterEndpointCommand,
} from "../protocols/Aws_query";

export interface ModifyDBClusterEndpointCommandInput extends ModifyDBClusterEndpointMessage {}
export interface ModifyDBClusterEndpointCommandOutput extends ModifyDBClusterEndpointOutput, __MetadataBearer {}

/**
 * <p>Modifies the properties of an endpoint in an Amazon Neptune DB cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, ModifyDBClusterEndpointCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, ModifyDBClusterEndpointCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new ModifyDBClusterEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyDBClusterEndpointCommandInput} for command's `input` shape.
 * @see {@link ModifyDBClusterEndpointCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for NeptuneClient's `config` shape.
 *
 */
export class ModifyDBClusterEndpointCommand extends $Command<
  ModifyDBClusterEndpointCommandInput,
  ModifyDBClusterEndpointCommandOutput,
  NeptuneClientResolvedConfig
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
    configuration: NeptuneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyDBClusterEndpointCommandInput, ModifyDBClusterEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyDBClusterEndpointCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptuneClient";
    const commandName = "ModifyDBClusterEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyDBClusterEndpointMessageFilterSensitiveLog,
      outputFilterSensitiveLog: ModifyDBClusterEndpointOutputFilterSensitiveLog,
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
