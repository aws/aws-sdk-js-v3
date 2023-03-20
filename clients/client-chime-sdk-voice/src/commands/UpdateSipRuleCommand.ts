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

import { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import { UpdateSipRuleRequest, UpdateSipRuleResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateSipRuleCommand,
  serializeAws_restJson1UpdateSipRuleCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link UpdateSipRuleCommand}.
 */
export interface UpdateSipRuleCommandInput extends UpdateSipRuleRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSipRuleCommand}.
 */
export interface UpdateSipRuleCommandOutput extends UpdateSipRuleResponse, __MetadataBearer {}

export class UpdateSipRuleCommand extends $Command<
  UpdateSipRuleCommandInput,
  UpdateSipRuleCommandOutput,
  ChimeSDKVoiceClientResolvedConfig
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
  constructor(readonly input: UpdateSipRuleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeSDKVoiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateSipRuleCommandInput, UpdateSipRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateSipRuleCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKVoiceClient";
    const commandName = "UpdateSipRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: UpdateSipRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateSipRuleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateSipRuleCommandOutput> {
    return deserializeAws_restJson1UpdateSipRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
