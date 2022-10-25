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
  DeleteRuleRequest,
  DeleteRuleRequestFilterSensitiveLog,
  DeleteRuleResponse,
  DeleteRuleResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteRuleCommand,
  serializeAws_restJson1DeleteRuleCommand,
} from "../protocols/Aws_restJson1";
import { RbinClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RbinClient";

export interface DeleteRuleCommandInput extends DeleteRuleRequest {}
export interface DeleteRuleCommandOutput extends DeleteRuleResponse, __MetadataBearer {}

/**
 * <p>Deletes a Recycle Bin retention rule. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-working-with-rules.html#recycle-bin-delete-rule">
 *       Delete Recycle Bin retention rules</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RbinClient, DeleteRuleCommand } from "@aws-sdk/client-rbin"; // ES Modules import
 * // const { RbinClient, DeleteRuleCommand } = require("@aws-sdk/client-rbin"); // CommonJS import
 * const client = new RbinClient(config);
 * const command = new DeleteRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRuleCommandInput} for command's `input` shape.
 * @see {@link DeleteRuleCommandOutput} for command's `response` shape.
 * @see {@link RbinClientResolvedConfig | config} for RbinClient's `config` shape.
 *
 */
export class DeleteRuleCommand extends $Command<
  DeleteRuleCommandInput,
  DeleteRuleCommandOutput,
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

  constructor(readonly input: DeleteRuleCommandInput) {
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
  ): Handler<DeleteRuleCommandInput, DeleteRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteRuleCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RbinClient";
    const commandName = "DeleteRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteRuleRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteRuleResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteRuleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteRuleCommandOutput> {
    return deserializeAws_restJson1DeleteRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
