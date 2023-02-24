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
  ImportModelRequest,
  ImportModelRequestFilterSensitiveLog,
  ImportModelResponse,
  ImportModelResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ImportModelCommand,
  serializeAws_json1_1ImportModelCommand,
} from "../protocols/Aws_json1_1";

export interface ImportModelCommandInput extends ImportModelRequest {}
export interface ImportModelCommandOutput extends ImportModelResponse, __MetadataBearer {}

/**
 * <p>Creates a new custom model that replicates a source custom model that you import. The
 *       source model can be in your AWS account or another one.</p>
 *          <p>If the source model is in another AWS account, then it must have a resource-based policy
 *       that authorizes you to import it.</p>
 *          <p>The source model must be in the same AWS region that you're using when you import. You
 *       can't import a model that's in a different region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, ImportModelCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, ImportModelCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new ImportModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportModelCommandInput} for command's `input` shape.
 * @see {@link ImportModelCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 */
export class ImportModelCommand extends $Command<
  ImportModelCommandInput,
  ImportModelCommandOutput,
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

  constructor(readonly input: ImportModelCommandInput) {
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
  ): Handler<ImportModelCommandInput, ImportModelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ImportModelCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "ImportModelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ImportModelRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ImportModelResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ImportModelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ImportModelCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ImportModelCommandOutput> {
    return deserializeAws_json1_1ImportModelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
