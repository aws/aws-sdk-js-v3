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
  RegisterDBProxyTargetsRequest,
  RegisterDBProxyTargetsRequestFilterSensitiveLog,
  RegisterDBProxyTargetsResponse,
  RegisterDBProxyTargetsResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_queryRegisterDBProxyTargetsCommand,
  serializeAws_queryRegisterDBProxyTargetsCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

export interface RegisterDBProxyTargetsCommandInput extends RegisterDBProxyTargetsRequest {}
export interface RegisterDBProxyTargetsCommandOutput extends RegisterDBProxyTargetsResponse, __MetadataBearer {}

/**
 * <p>Associate one or more <code>DBProxyTarget</code> data structures with a <code>DBProxyTargetGroup</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, RegisterDBProxyTargetsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, RegisterDBProxyTargetsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new RegisterDBProxyTargetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterDBProxyTargetsCommandInput} for command's `input` shape.
 * @see {@link RegisterDBProxyTargetsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 */
export class RegisterDBProxyTargetsCommand extends $Command<
  RegisterDBProxyTargetsCommandInput,
  RegisterDBProxyTargetsCommandOutput,
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

  constructor(readonly input: RegisterDBProxyTargetsCommandInput) {
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
  ): Handler<RegisterDBProxyTargetsCommandInput, RegisterDBProxyTargetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RegisterDBProxyTargetsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "RegisterDBProxyTargetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterDBProxyTargetsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RegisterDBProxyTargetsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RegisterDBProxyTargetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryRegisterDBProxyTargetsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RegisterDBProxyTargetsCommandOutput> {
    return deserializeAws_queryRegisterDBProxyTargetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
