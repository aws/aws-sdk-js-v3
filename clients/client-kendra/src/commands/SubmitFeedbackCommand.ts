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

import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { SubmitFeedbackRequest, SubmitFeedbackRequestFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_json1_1SubmitFeedbackCommand,
  serializeAws_json1_1SubmitFeedbackCommand,
} from "../protocols/Aws_json1_1";

export interface SubmitFeedbackCommandInput extends SubmitFeedbackRequest {}
export interface SubmitFeedbackCommandOutput extends __MetadataBearer {}

/**
 * <p>Enables you to provide feedback to Amazon Kendra to improve the
 *             performance of your index.</p>
 *          <p>
 *             <code>SubmitFeedback</code> is currently not supported in the
 *             Amazon Web Services GovCloud (US-West) region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, SubmitFeedbackCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, SubmitFeedbackCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new SubmitFeedbackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SubmitFeedbackCommandInput} for command's `input` shape.
 * @see {@link SubmitFeedbackCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for KendraClient's `config` shape.
 *
 */
export class SubmitFeedbackCommand extends $Command<
  SubmitFeedbackCommandInput,
  SubmitFeedbackCommandOutput,
  KendraClientResolvedConfig
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

  constructor(readonly input: SubmitFeedbackCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KendraClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SubmitFeedbackCommandInput, SubmitFeedbackCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SubmitFeedbackCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KendraClient";
    const commandName = "SubmitFeedbackCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SubmitFeedbackRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SubmitFeedbackCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SubmitFeedbackCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SubmitFeedbackCommandOutput> {
    return deserializeAws_json1_1SubmitFeedbackCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
