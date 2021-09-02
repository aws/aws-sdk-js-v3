import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { PutConformancePackRequest, PutConformancePackResponse } from "../models/models_0";
import {
  deserializeAws_json1_1PutConformancePackCommand,
  serializeAws_json1_1PutConformancePackCommand,
} from "../protocols/Aws_json1_1";
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

export interface PutConformancePackCommandInput extends PutConformancePackRequest {}
export interface PutConformancePackCommandOutput extends PutConformancePackResponse, __MetadataBearer {}

/**
 * <p>Creates or updates a conformance pack. A conformance pack is a collection of Config rules that can be easily deployed in an account and a region and across Amazon Web Services Organization.</p>
 * 		       <p>This API creates a service linked role <code>AWSServiceRoleForConfigConforms</code> in your account.
 * 		The service linked role is created only when the role does not exist in your account. </p>
 * 		       <note>
 *             <p>You must specify either the <code>TemplateS3Uri</code> or the <code>TemplateBody</code> parameter, but not both.
 * 			If you provide both Config uses the <code>TemplateS3Uri</code> parameter and ignores the <code>TemplateBody</code> parameter.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, PutConformancePackCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, PutConformancePackCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new PutConformancePackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutConformancePackCommandInput} for command's `input` shape.
 * @see {@link PutConformancePackCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class PutConformancePackCommand extends $Command<
  PutConformancePackCommandInput,
  PutConformancePackCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutConformancePackCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutConformancePackCommandInput, PutConformancePackCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "PutConformancePackCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutConformancePackRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutConformancePackResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutConformancePackCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutConformancePackCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutConformancePackCommandOutput> {
    return deserializeAws_json1_1PutConformancePackCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
