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
  UpdatePipelineInput,
  UpdatePipelineInputFilterSensitiveLog,
  UpdatePipelineOutput,
  UpdatePipelineOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdatePipelineCommand,
  serializeAws_json1_1UpdatePipelineCommand,
} from "../protocols/Aws_json1_1";

export interface UpdatePipelineCommandInput extends UpdatePipelineInput {}
export interface UpdatePipelineCommandOutput extends UpdatePipelineOutput, __MetadataBearer {}

/**
 * <p>Updates a specified pipeline with edits or changes to its structure. Use a JSON
 *             file with the pipeline structure and <code>UpdatePipeline</code> to provide the full
 *             structure of the pipeline. Updating the pipeline increases the version number of the
 *             pipeline by 1.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, UpdatePipelineCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, UpdatePipelineCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new UpdatePipelineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePipelineCommandInput} for command's `input` shape.
 * @see {@link UpdatePipelineCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 */
export class UpdatePipelineCommand extends $Command<
  UpdatePipelineCommandInput,
  UpdatePipelineCommandOutput,
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

  constructor(readonly input: UpdatePipelineCommandInput) {
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
  ): Handler<UpdatePipelineCommandInput, UpdatePipelineCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdatePipelineCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodePipelineClient";
    const commandName = "UpdatePipelineCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdatePipelineInputFilterSensitiveLog,
      outputFilterSensitiveLog: UpdatePipelineOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdatePipelineCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdatePipelineCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdatePipelineCommandOutput> {
    return deserializeAws_json1_1UpdatePipelineCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
