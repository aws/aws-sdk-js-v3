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

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import {
  CreateSipRuleRequest,
  CreateSipRuleRequestFilterSensitiveLog,
  CreateSipRuleResponse,
  CreateSipRuleResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateSipRuleCommand,
  serializeAws_restJson1CreateSipRuleCommand,
} from "../protocols/Aws_restJson1";

export interface CreateSipRuleCommandInput extends CreateSipRuleRequest {}
export interface CreateSipRuleCommandOutput extends CreateSipRuleResponse, __MetadataBearer {}

/**
 * <p>Creates a SIP rule which can be used to run a SIP media application as a target for a specific trigger type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, CreateSipRuleCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, CreateSipRuleCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new CreateSipRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSipRuleCommandInput} for command's `input` shape.
 * @see {@link CreateSipRuleCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 */
export class CreateSipRuleCommand extends $Command<
  CreateSipRuleCommandInput,
  CreateSipRuleCommandOutput,
  ChimeClientResolvedConfig
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

  constructor(readonly input: CreateSipRuleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateSipRuleCommandInput, CreateSipRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateSipRuleCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "CreateSipRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateSipRuleRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateSipRuleResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateSipRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateSipRuleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSipRuleCommandOutput> {
    return deserializeAws_restJson1CreateSipRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
