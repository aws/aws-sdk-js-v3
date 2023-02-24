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
  GetEnvironmentTemplateVersionInput,
  GetEnvironmentTemplateVersionInputFilterSensitiveLog,
  GetEnvironmentTemplateVersionOutput,
  GetEnvironmentTemplateVersionOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0GetEnvironmentTemplateVersionCommand,
  serializeAws_json1_0GetEnvironmentTemplateVersionCommand,
} from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

export interface GetEnvironmentTemplateVersionCommandInput extends GetEnvironmentTemplateVersionInput {}
export interface GetEnvironmentTemplateVersionCommandOutput
  extends GetEnvironmentTemplateVersionOutput,
    __MetadataBearer {}

/**
 * <p>Get detailed data for a major or minor version of an environment template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, GetEnvironmentTemplateVersionCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, GetEnvironmentTemplateVersionCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const command = new GetEnvironmentTemplateVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEnvironmentTemplateVersionCommandInput} for command's `input` shape.
 * @see {@link GetEnvironmentTemplateVersionCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 */
export class GetEnvironmentTemplateVersionCommand extends $Command<
  GetEnvironmentTemplateVersionCommandInput,
  GetEnvironmentTemplateVersionCommandOutput,
  ProtonClientResolvedConfig
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

  constructor(readonly input: GetEnvironmentTemplateVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ProtonClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetEnvironmentTemplateVersionCommandInput, GetEnvironmentTemplateVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetEnvironmentTemplateVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ProtonClient";
    const commandName = "GetEnvironmentTemplateVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetEnvironmentTemplateVersionInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetEnvironmentTemplateVersionOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetEnvironmentTemplateVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0GetEnvironmentTemplateVersionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetEnvironmentTemplateVersionCommandOutput> {
    return deserializeAws_json1_0GetEnvironmentTemplateVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
