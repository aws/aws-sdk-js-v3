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

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import {
  CreateEntityRecognizerRequest,
  CreateEntityRecognizerRequestFilterSensitiveLog,
  CreateEntityRecognizerResponse,
  CreateEntityRecognizerResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateEntityRecognizerCommand,
  serializeAws_json1_1CreateEntityRecognizerCommand,
} from "../protocols/Aws_json1_1";

export interface CreateEntityRecognizerCommandInput extends CreateEntityRecognizerRequest {}
export interface CreateEntityRecognizerCommandOutput extends CreateEntityRecognizerResponse, __MetadataBearer {}

/**
 * <p>Creates an entity recognizer using submitted files. After your
 *         <code>CreateEntityRecognizer</code> request is submitted, you can check job status using the
 *          API. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, CreateEntityRecognizerCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, CreateEntityRecognizerCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new CreateEntityRecognizerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateEntityRecognizerCommandInput} for command's `input` shape.
 * @see {@link CreateEntityRecognizerCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 */
export class CreateEntityRecognizerCommand extends $Command<
  CreateEntityRecognizerCommandInput,
  CreateEntityRecognizerCommandOutput,
  ComprehendClientResolvedConfig
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

  constructor(readonly input: CreateEntityRecognizerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComprehendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateEntityRecognizerCommandInput, CreateEntityRecognizerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateEntityRecognizerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "CreateEntityRecognizerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateEntityRecognizerRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateEntityRecognizerResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateEntityRecognizerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateEntityRecognizerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateEntityRecognizerCommandOutput> {
    return deserializeAws_json1_1CreateEntityRecognizerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
