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
  DeleteConfiguredTableAnalysisRuleInput,
  DeleteConfiguredTableAnalysisRuleInputFilterSensitiveLog,
  DeleteConfiguredTableAnalysisRuleOutput,
  DeleteConfiguredTableAnalysisRuleOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteConfiguredTableAnalysisRuleCommand,
  serializeAws_restJson1DeleteConfiguredTableAnalysisRuleCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteConfiguredTableAnalysisRuleCommandInput extends DeleteConfiguredTableAnalysisRuleInput {}
export interface DeleteConfiguredTableAnalysisRuleCommandOutput
  extends DeleteConfiguredTableAnalysisRuleOutput,
    __MetadataBearer {}

/**
 * <p>Deletes a configured table analysis rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, DeleteConfiguredTableAnalysisRuleCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, DeleteConfiguredTableAnalysisRuleCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * const client = new CleanRoomsClient(config);
 * const command = new DeleteConfiguredTableAnalysisRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteConfiguredTableAnalysisRuleCommandInput} for command's `input` shape.
 * @see {@link DeleteConfiguredTableAnalysisRuleCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 */
export class DeleteConfiguredTableAnalysisRuleCommand extends $Command<
  DeleteConfiguredTableAnalysisRuleCommandInput,
  DeleteConfiguredTableAnalysisRuleCommandOutput,
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

  constructor(readonly input: DeleteConfiguredTableAnalysisRuleCommandInput) {
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
  ): Handler<DeleteConfiguredTableAnalysisRuleCommandInput, DeleteConfiguredTableAnalysisRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteConfiguredTableAnalysisRuleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CleanRoomsClient";
    const commandName = "DeleteConfiguredTableAnalysisRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteConfiguredTableAnalysisRuleInputFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteConfiguredTableAnalysisRuleOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteConfiguredTableAnalysisRuleCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteConfiguredTableAnalysisRuleCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteConfiguredTableAnalysisRuleCommandOutput> {
    return deserializeAws_restJson1DeleteConfiguredTableAnalysisRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
