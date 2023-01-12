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

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import {
  CreateConfiguredTableAnalysisRuleInput,
  CreateConfiguredTableAnalysisRuleInputFilterSensitiveLog,
  CreateConfiguredTableAnalysisRuleOutput,
  CreateConfiguredTableAnalysisRuleOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateConfiguredTableAnalysisRuleCommand,
  serializeAws_restJson1CreateConfiguredTableAnalysisRuleCommand,
} from "../protocols/Aws_restJson1";

export interface CreateConfiguredTableAnalysisRuleCommandInput extends CreateConfiguredTableAnalysisRuleInput {}
export interface CreateConfiguredTableAnalysisRuleCommandOutput
  extends CreateConfiguredTableAnalysisRuleOutput,
    __MetadataBearer {}

/**
 * <p>Creates a new analysis rule for a configured table. Currently, only one analysis rule
 *          can be created for a given configured table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, CreateConfiguredTableAnalysisRuleCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, CreateConfiguredTableAnalysisRuleCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * const client = new CleanRoomsClient(config);
 * const command = new CreateConfiguredTableAnalysisRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateConfiguredTableAnalysisRuleCommandInput} for command's `input` shape.
 * @see {@link CreateConfiguredTableAnalysisRuleCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 */
export class CreateConfiguredTableAnalysisRuleCommand extends $Command<
  CreateConfiguredTableAnalysisRuleCommandInput,
  CreateConfiguredTableAnalysisRuleCommandOutput,
  CleanRoomsClientResolvedConfig
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

  constructor(readonly input: CreateConfiguredTableAnalysisRuleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CleanRoomsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateConfiguredTableAnalysisRuleCommandInput, CreateConfiguredTableAnalysisRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateConfiguredTableAnalysisRuleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CleanRoomsClient";
    const commandName = "CreateConfiguredTableAnalysisRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateConfiguredTableAnalysisRuleInputFilterSensitiveLog,
      outputFilterSensitiveLog: CreateConfiguredTableAnalysisRuleOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateConfiguredTableAnalysisRuleCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateConfiguredTableAnalysisRuleCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateConfiguredTableAnalysisRuleCommandOutput> {
    return deserializeAws_restJson1CreateConfiguredTableAnalysisRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
