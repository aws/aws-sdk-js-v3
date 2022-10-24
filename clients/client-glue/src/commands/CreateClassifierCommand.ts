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

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import {
  CreateClassifierRequest,
  CreateClassifierRequestFilterSensitiveLog,
  CreateClassifierResponse,
  CreateClassifierResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateClassifierCommand,
  serializeAws_json1_1CreateClassifierCommand,
} from "../protocols/Aws_json1_1";

export interface CreateClassifierCommandInput extends CreateClassifierRequest {}
export interface CreateClassifierCommandOutput extends CreateClassifierResponse, __MetadataBearer {}

/**
 * <p>Creates a classifier in the user's account. This can be a <code>GrokClassifier</code>, an
 *         <code>XMLClassifier</code>, a <code>JsonClassifier</code>, or a <code>CsvClassifier</code>,
 *       depending on which field of the request is present.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateClassifierCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateClassifierCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new CreateClassifierCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateClassifierCommandInput} for command's `input` shape.
 * @see {@link CreateClassifierCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 */
export class CreateClassifierCommand extends $Command<
  CreateClassifierCommandInput,
  CreateClassifierCommandOutput,
  GlueClientResolvedConfig
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

  constructor(readonly input: CreateClassifierCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateClassifierCommandInput, CreateClassifierCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateClassifierCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "CreateClassifierCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateClassifierRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateClassifierResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateClassifierCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateClassifierCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateClassifierCommandOutput> {
    return deserializeAws_json1_1CreateClassifierCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
