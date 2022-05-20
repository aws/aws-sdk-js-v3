// smithy-typescript generated code
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

import { GetRuleRequest, GetRuleResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetRuleCommand,
  serializeAws_restJson1GetRuleCommand,
} from "../protocols/Aws_restJson1";
import { RbinClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RbinClient";

export interface GetRuleCommandInput extends GetRuleRequest {}
export interface GetRuleCommandOutput extends GetRuleResponse, __MetadataBearer {}

/**
 * <p>Gets information about a Recycle Bin retention rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RbinClient, GetRuleCommand } from "@aws-sdk/client-rbin"; // ES Modules import
 * // const { RbinClient, GetRuleCommand } = require("@aws-sdk/client-rbin"); // CommonJS import
 * const client = new RbinClient(config);
 * const command = new GetRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRuleCommandInput} for command's `input` shape.
 * @see {@link GetRuleCommandOutput} for command's `response` shape.
 * @see {@link RbinClientResolvedConfig | config} for RbinClient's `config` shape.
 *
 */
export class GetRuleCommand extends $Command<GetRuleCommandInput, GetRuleCommandOutput, RbinClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetRuleCommandInput) {
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
  ): Handler<GetRuleCommandInput, GetRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RbinClient";
    const commandName = "GetRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetRuleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetRuleResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetRuleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetRuleCommandOutput> {
    return deserializeAws_restJson1GetRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
