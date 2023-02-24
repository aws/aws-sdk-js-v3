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

import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import {
  CreateCustomActionTypeInput,
  CreateCustomActionTypeInputFilterSensitiveLog,
  CreateCustomActionTypeOutput,
  CreateCustomActionTypeOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateCustomActionTypeCommand,
  serializeAws_json1_1CreateCustomActionTypeCommand,
} from "../protocols/Aws_json1_1";

export interface CreateCustomActionTypeCommandInput extends CreateCustomActionTypeInput {}
export interface CreateCustomActionTypeCommandOutput extends CreateCustomActionTypeOutput, __MetadataBearer {}

/**
 * <p>Creates a new custom action that can be used in all pipelines associated with the
 *             AWS account. Only used for custom actions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, CreateCustomActionTypeCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, CreateCustomActionTypeCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new CreateCustomActionTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCustomActionTypeCommandInput} for command's `input` shape.
 * @see {@link CreateCustomActionTypeCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 */
export class CreateCustomActionTypeCommand extends $Command<
  CreateCustomActionTypeCommandInput,
  CreateCustomActionTypeCommandOutput,
  CodePipelineClientResolvedConfig
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

  constructor(readonly input: CreateCustomActionTypeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodePipelineClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateCustomActionTypeCommandInput, CreateCustomActionTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateCustomActionTypeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodePipelineClient";
    const commandName = "CreateCustomActionTypeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateCustomActionTypeInputFilterSensitiveLog,
      outputFilterSensitiveLog: CreateCustomActionTypeOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateCustomActionTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateCustomActionTypeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateCustomActionTypeCommandOutput> {
    return deserializeAws_json1_1CreateCustomActionTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
