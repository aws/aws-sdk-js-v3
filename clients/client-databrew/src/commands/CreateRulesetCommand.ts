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

import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import {
  CreateRulesetRequest,
  CreateRulesetRequestFilterSensitiveLog,
  CreateRulesetResponse,
  CreateRulesetResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateRulesetCommand,
  serializeAws_restJson1CreateRulesetCommand,
} from "../protocols/Aws_restJson1";

export interface CreateRulesetCommandInput extends CreateRulesetRequest {}
export interface CreateRulesetCommandOutput extends CreateRulesetResponse, __MetadataBearer {}

/**
 * <p>Creates a new ruleset that can be used in a profile job to validate
 *             the data quality of a dataset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, CreateRulesetCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, CreateRulesetCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const command = new CreateRulesetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRulesetCommandInput} for command's `input` shape.
 * @see {@link CreateRulesetCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for DataBrewClient's `config` shape.
 *
 */
export class CreateRulesetCommand extends $Command<
  CreateRulesetCommandInput,
  CreateRulesetCommandOutput,
  DataBrewClientResolvedConfig
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

  constructor(readonly input: CreateRulesetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataBrewClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateRulesetCommandInput, CreateRulesetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateRulesetCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataBrewClient";
    const commandName = "CreateRulesetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateRulesetRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateRulesetResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateRulesetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateRulesetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateRulesetCommandOutput> {
    return deserializeAws_restJson1CreateRulesetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
