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

import { AmpClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmpClient";
import {
  CreateRuleGroupsNamespaceRequest,
  CreateRuleGroupsNamespaceRequestFilterSensitiveLog,
  CreateRuleGroupsNamespaceResponse,
  CreateRuleGroupsNamespaceResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateRuleGroupsNamespaceCommand,
  serializeAws_restJson1CreateRuleGroupsNamespaceCommand,
} from "../protocols/Aws_restJson1";

export interface CreateRuleGroupsNamespaceCommandInput extends CreateRuleGroupsNamespaceRequest {}
export interface CreateRuleGroupsNamespaceCommandOutput extends CreateRuleGroupsNamespaceResponse, __MetadataBearer {}

/**
 * Create a rule group namespace.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, CreateRuleGroupsNamespaceCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, CreateRuleGroupsNamespaceCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * const client = new AmpClient(config);
 * const command = new CreateRuleGroupsNamespaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRuleGroupsNamespaceCommandInput} for command's `input` shape.
 * @see {@link CreateRuleGroupsNamespaceCommandOutput} for command's `response` shape.
 * @see {@link AmpClientResolvedConfig | config} for AmpClient's `config` shape.
 *
 */
export class CreateRuleGroupsNamespaceCommand extends $Command<
  CreateRuleGroupsNamespaceCommandInput,
  CreateRuleGroupsNamespaceCommandOutput,
  AmpClientResolvedConfig
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

  constructor(readonly input: CreateRuleGroupsNamespaceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmpClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateRuleGroupsNamespaceCommandInput, CreateRuleGroupsNamespaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateRuleGroupsNamespaceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmpClient";
    const commandName = "CreateRuleGroupsNamespaceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateRuleGroupsNamespaceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateRuleGroupsNamespaceResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateRuleGroupsNamespaceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateRuleGroupsNamespaceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateRuleGroupsNamespaceCommandOutput> {
    return deserializeAws_restJson1CreateRuleGroupsNamespaceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
