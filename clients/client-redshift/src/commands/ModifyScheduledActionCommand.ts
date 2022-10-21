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

import { ScheduledAction, ScheduledActionFilterSensitiveLog } from "../models/models_0";
import { ModifyScheduledActionMessage, ModifyScheduledActionMessageFilterSensitiveLog } from "../models/models_1";
import {
  deserializeAws_queryModifyScheduledActionCommand,
  serializeAws_queryModifyScheduledActionCommand,
} from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

export interface ModifyScheduledActionCommandInput extends ModifyScheduledActionMessage {}
export interface ModifyScheduledActionCommandOutput extends ScheduledAction, __MetadataBearer {}

/**
 * <p>Modifies a scheduled action.
 *             </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ModifyScheduledActionCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ModifyScheduledActionCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new ModifyScheduledActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyScheduledActionCommandInput} for command's `input` shape.
 * @see {@link ModifyScheduledActionCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 */
export class ModifyScheduledActionCommand extends $Command<
  ModifyScheduledActionCommandInput,
  ModifyScheduledActionCommandOutput,
  RedshiftClientResolvedConfig
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

  constructor(readonly input: ModifyScheduledActionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyScheduledActionCommandInput, ModifyScheduledActionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyScheduledActionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "ModifyScheduledActionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyScheduledActionMessageFilterSensitiveLog,
      outputFilterSensitiveLog: ScheduledActionFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyScheduledActionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryModifyScheduledActionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyScheduledActionCommandOutput> {
    return deserializeAws_queryModifyScheduledActionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
