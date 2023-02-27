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

import { ConnectCasesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectCasesClient";
import {
  CreateTemplateRequest,
  CreateTemplateRequestFilterSensitiveLog,
  CreateTemplateResponse,
  CreateTemplateResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateTemplateCommand,
  serializeAws_restJson1CreateTemplateCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link CreateTemplateCommand}.
 */
export interface CreateTemplateCommandInput extends CreateTemplateRequest {}
/**
 * The output of {@link CreateTemplateCommand}.
 */
export interface CreateTemplateCommandOutput extends CreateTemplateResponse, __MetadataBearer {}

/**
 * <p>Creates a template in the Cases domain. This template is used to define the case object
 *       model (that is, to define what data can be captured on cases) in a Cases domain. A template
 *       must have a unique name within a domain, and it must reference existing field IDs and layout
 *       IDs. Additionally, multiple fields with same IDs are not allowed within the same Template. A
 *       template can be either Active or Inactive, as indicated by its status. Inactive templates
 *       cannot be used to create cases.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCasesClient, CreateTemplateCommand } from "@aws-sdk/client-connectcases"; // ES Modules import
 * // const { ConnectCasesClient, CreateTemplateCommand } = require("@aws-sdk/client-connectcases"); // CommonJS import
 * const client = new ConnectCasesClient(config);
 * const command = new CreateTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateTemplateCommandOutput} for command's `response` shape.
 * @see {@link ConnectCasesClientResolvedConfig | config} for ConnectCasesClient's `config` shape.
 *
 */
export class CreateTemplateCommand extends $Command<
  CreateTemplateCommandInput,
  CreateTemplateCommandOutput,
  ConnectCasesClientResolvedConfig
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

  constructor(readonly input: CreateTemplateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectCasesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateTemplateCommandInput, CreateTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectCasesClient";
    const commandName = "CreateTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateTemplateRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateTemplateResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateTemplateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateTemplateCommandOutput> {
    return deserializeAws_restJson1CreateTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
