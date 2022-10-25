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
  GetCodeBindingSourceRequest,
  GetCodeBindingSourceRequestFilterSensitiveLog,
  GetCodeBindingSourceResponse,
  GetCodeBindingSourceResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetCodeBindingSourceCommand,
  serializeAws_restJson1GetCodeBindingSourceCommand,
} from "../protocols/Aws_restJson1";
import { SchemasClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchemasClient";

export interface GetCodeBindingSourceCommandInput extends GetCodeBindingSourceRequest {}
export interface GetCodeBindingSourceCommandOutput extends GetCodeBindingSourceResponse, __MetadataBearer {}

/**
 * <p>Get the code binding source URI.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, GetCodeBindingSourceCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, GetCodeBindingSourceCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * const client = new SchemasClient(config);
 * const command = new GetCodeBindingSourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCodeBindingSourceCommandInput} for command's `input` shape.
 * @see {@link GetCodeBindingSourceCommandOutput} for command's `response` shape.
 * @see {@link SchemasClientResolvedConfig | config} for SchemasClient's `config` shape.
 *
 */
export class GetCodeBindingSourceCommand extends $Command<
  GetCodeBindingSourceCommandInput,
  GetCodeBindingSourceCommandOutput,
  SchemasClientResolvedConfig
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

  constructor(readonly input: GetCodeBindingSourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SchemasClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCodeBindingSourceCommandInput, GetCodeBindingSourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetCodeBindingSourceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SchemasClient";
    const commandName = "GetCodeBindingSourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCodeBindingSourceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetCodeBindingSourceResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetCodeBindingSourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetCodeBindingSourceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCodeBindingSourceCommandOutput> {
    return deserializeAws_restJson1GetCodeBindingSourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
