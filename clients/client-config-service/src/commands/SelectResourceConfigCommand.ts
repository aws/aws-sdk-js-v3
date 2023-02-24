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

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import {
  SelectResourceConfigRequest,
  SelectResourceConfigRequestFilterSensitiveLog,
  SelectResourceConfigResponse,
  SelectResourceConfigResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1SelectResourceConfigCommand,
  serializeAws_json1_1SelectResourceConfigCommand,
} from "../protocols/Aws_json1_1";

export interface SelectResourceConfigCommandInput extends SelectResourceConfigRequest {}
export interface SelectResourceConfigCommandOutput extends SelectResourceConfigResponse, __MetadataBearer {}

/**
 * <p>Accepts a structured query language (SQL) <code>SELECT</code> command, performs the corresponding search, and returns resource configurations matching the properties.</p>
 * 		       <p>For more information about query components, see the
 * 			<a href="https://docs.aws.amazon.com/config/latest/developerguide/query-components.html">
 *                <b>Query Components</b>
 *             </a> section in the <i>Config Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, SelectResourceConfigCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, SelectResourceConfigCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new SelectResourceConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SelectResourceConfigCommandInput} for command's `input` shape.
 * @see {@link SelectResourceConfigCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 */
export class SelectResourceConfigCommand extends $Command<
  SelectResourceConfigCommandInput,
  SelectResourceConfigCommandOutput,
  ConfigServiceClientResolvedConfig
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

  constructor(readonly input: SelectResourceConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SelectResourceConfigCommandInput, SelectResourceConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SelectResourceConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "SelectResourceConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SelectResourceConfigRequestFilterSensitiveLog,
      outputFilterSensitiveLog: SelectResourceConfigResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SelectResourceConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SelectResourceConfigCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SelectResourceConfigCommandOutput> {
    return deserializeAws_json1_1SelectResourceConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
