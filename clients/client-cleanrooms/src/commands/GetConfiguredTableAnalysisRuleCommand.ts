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
  GetConfiguredTableAnalysisRuleInput,
  GetConfiguredTableAnalysisRuleInputFilterSensitiveLog,
  GetConfiguredTableAnalysisRuleOutput,
  GetConfiguredTableAnalysisRuleOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetConfiguredTableAnalysisRuleCommand,
  serializeAws_restJson1GetConfiguredTableAnalysisRuleCommand,
} from "../protocols/Aws_restJson1";

export interface GetConfiguredTableAnalysisRuleCommandInput extends GetConfiguredTableAnalysisRuleInput {}
export interface GetConfiguredTableAnalysisRuleCommandOutput
  extends GetConfiguredTableAnalysisRuleOutput,
    __MetadataBearer {}

/**
 * <p>Retrieves a configured table analysis rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, GetConfiguredTableAnalysisRuleCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, GetConfiguredTableAnalysisRuleCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * const client = new CleanRoomsClient(config);
 * const command = new GetConfiguredTableAnalysisRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetConfiguredTableAnalysisRuleCommandInput} for command's `input` shape.
 * @see {@link GetConfiguredTableAnalysisRuleCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 */
export class GetConfiguredTableAnalysisRuleCommand extends $Command<
  GetConfiguredTableAnalysisRuleCommandInput,
  GetConfiguredTableAnalysisRuleCommandOutput,
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

  constructor(readonly input: GetConfiguredTableAnalysisRuleCommandInput) {
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
  ): Handler<GetConfiguredTableAnalysisRuleCommandInput, GetConfiguredTableAnalysisRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetConfiguredTableAnalysisRuleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CleanRoomsClient";
    const commandName = "GetConfiguredTableAnalysisRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetConfiguredTableAnalysisRuleInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetConfiguredTableAnalysisRuleOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetConfiguredTableAnalysisRuleCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetConfiguredTableAnalysisRuleCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetConfiguredTableAnalysisRuleCommandOutput> {
    return deserializeAws_restJson1GetConfiguredTableAnalysisRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
