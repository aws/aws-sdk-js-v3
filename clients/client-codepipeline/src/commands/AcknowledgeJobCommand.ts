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
  AcknowledgeJobInput,
  AcknowledgeJobInputFilterSensitiveLog,
  AcknowledgeJobOutput,
  AcknowledgeJobOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1AcknowledgeJobCommand,
  serializeAws_json1_1AcknowledgeJobCommand,
} from "../protocols/Aws_json1_1";

export interface AcknowledgeJobCommandInput extends AcknowledgeJobInput {}
export interface AcknowledgeJobCommandOutput extends AcknowledgeJobOutput, __MetadataBearer {}

/**
 * <p>Returns information about a specified job and whether that job has been received by
 *             the job worker. Used for custom actions only.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, AcknowledgeJobCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, AcknowledgeJobCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new AcknowledgeJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcknowledgeJobCommandInput} for command's `input` shape.
 * @see {@link AcknowledgeJobCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 */
export class AcknowledgeJobCommand extends $Command<
  AcknowledgeJobCommandInput,
  AcknowledgeJobCommandOutput,
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

  constructor(readonly input: AcknowledgeJobCommandInput) {
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
  ): Handler<AcknowledgeJobCommandInput, AcknowledgeJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AcknowledgeJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodePipelineClient";
    const commandName = "AcknowledgeJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AcknowledgeJobInputFilterSensitiveLog,
      outputFilterSensitiveLog: AcknowledgeJobOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AcknowledgeJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AcknowledgeJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AcknowledgeJobCommandOutput> {
    return deserializeAws_json1_1AcknowledgeJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
