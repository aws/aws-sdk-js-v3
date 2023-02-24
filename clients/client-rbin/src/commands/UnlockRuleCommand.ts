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
  UnlockRuleRequest,
  UnlockRuleRequestFilterSensitiveLog,
  UnlockRuleResponse,
  UnlockRuleResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UnlockRuleCommand,
  serializeAws_restJson1UnlockRuleCommand,
} from "../protocols/Aws_restJson1";
import { RbinClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RbinClient";

export interface UnlockRuleCommandInput extends UnlockRuleRequest {}
export interface UnlockRuleCommandOutput extends UnlockRuleResponse, __MetadataBearer {}

/**
 * <p>Unlocks a retention rule. After a retention rule is unlocked, it can be modified or deleted
 *       only after the unlock delay period expires.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RbinClient, UnlockRuleCommand } from "@aws-sdk/client-rbin"; // ES Modules import
 * // const { RbinClient, UnlockRuleCommand } = require("@aws-sdk/client-rbin"); // CommonJS import
 * const client = new RbinClient(config);
 * const command = new UnlockRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UnlockRuleCommandInput} for command's `input` shape.
 * @see {@link UnlockRuleCommandOutput} for command's `response` shape.
 * @see {@link RbinClientResolvedConfig | config} for RbinClient's `config` shape.
 *
 */
export class UnlockRuleCommand extends $Command<
  UnlockRuleCommandInput,
  UnlockRuleCommandOutput,
  RbinClientResolvedConfig
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

  constructor(readonly input: UnlockRuleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RbinClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UnlockRuleCommandInput, UnlockRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UnlockRuleCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RbinClient";
    const commandName = "UnlockRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UnlockRuleRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UnlockRuleResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UnlockRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UnlockRuleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UnlockRuleCommandOutput> {
    return deserializeAws_restJson1UnlockRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
