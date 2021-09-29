import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { TestRenderTemplateRequest, TestRenderTemplateResponse } from "../models/models_0";
import {
  deserializeAws_queryTestRenderTemplateCommand,
  serializeAws_queryTestRenderTemplateCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface TestRenderTemplateCommandInput extends TestRenderTemplateRequest {}
export interface TestRenderTemplateCommandOutput extends TestRenderTemplateResponse, __MetadataBearer {}

/**
 * <p>Creates a preview of the MIME content of an email when provided with a template and a
 *             set of replacement data.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, TestRenderTemplateCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, TestRenderTemplateCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const command = new TestRenderTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TestRenderTemplateCommandInput} for command's `input` shape.
 * @see {@link TestRenderTemplateCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class TestRenderTemplateCommand extends $Command<
  TestRenderTemplateCommandInput,
  TestRenderTemplateCommandOutput,
  SESClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: TestRenderTemplateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TestRenderTemplateCommandInput, TestRenderTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "TestRenderTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TestRenderTemplateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: TestRenderTemplateResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: TestRenderTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryTestRenderTemplateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TestRenderTemplateCommandOutput> {
    return deserializeAws_queryTestRenderTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
