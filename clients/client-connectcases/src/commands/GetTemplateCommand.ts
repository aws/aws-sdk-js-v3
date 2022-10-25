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
  GetTemplateRequest,
  GetTemplateRequestFilterSensitiveLog,
  GetTemplateResponse,
  GetTemplateResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetTemplateCommand,
  serializeAws_restJson1GetTemplateCommand,
} from "../protocols/Aws_restJson1";

export interface GetTemplateCommandInput extends GetTemplateRequest {}
export interface GetTemplateCommandOutput extends GetTemplateResponse, __MetadataBearer {}

/**
 * <p>Returns the details for the requested template. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCasesClient, GetTemplateCommand } from "@aws-sdk/client-connectcases"; // ES Modules import
 * // const { ConnectCasesClient, GetTemplateCommand } = require("@aws-sdk/client-connectcases"); // CommonJS import
 * const client = new ConnectCasesClient(config);
 * const command = new GetTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTemplateCommandInput} for command's `input` shape.
 * @see {@link GetTemplateCommandOutput} for command's `response` shape.
 * @see {@link ConnectCasesClientResolvedConfig | config} for ConnectCasesClient's `config` shape.
 *
 */
export class GetTemplateCommand extends $Command<
  GetTemplateCommandInput,
  GetTemplateCommandOutput,
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

  constructor(readonly input: GetTemplateCommandInput) {
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
  ): Handler<GetTemplateCommandInput, GetTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetTemplateCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectCasesClient";
    const commandName = "GetTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetTemplateRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetTemplateResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetTemplateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetTemplateCommandOutput> {
    return deserializeAws_restJson1GetTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
