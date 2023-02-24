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
  ResumeWorkflowRunRequest,
  ResumeWorkflowRunRequestFilterSensitiveLog,
  ResumeWorkflowRunResponse,
  ResumeWorkflowRunResponseFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_json1_1ResumeWorkflowRunCommand,
  serializeAws_json1_1ResumeWorkflowRunCommand,
} from "../protocols/Aws_json1_1";

export interface ResumeWorkflowRunCommandInput extends ResumeWorkflowRunRequest {}
export interface ResumeWorkflowRunCommandOutput extends ResumeWorkflowRunResponse, __MetadataBearer {}

/**
 * <p>Restarts selected nodes of a previous partially completed workflow run and resumes the workflow run. The selected nodes and all nodes that are downstream from the selected nodes are run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ResumeWorkflowRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ResumeWorkflowRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new ResumeWorkflowRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResumeWorkflowRunCommandInput} for command's `input` shape.
 * @see {@link ResumeWorkflowRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 */
export class ResumeWorkflowRunCommand extends $Command<
  ResumeWorkflowRunCommandInput,
  ResumeWorkflowRunCommandOutput,
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

  constructor(readonly input: ResumeWorkflowRunCommandInput) {
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
  ): Handler<ResumeWorkflowRunCommandInput, ResumeWorkflowRunCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ResumeWorkflowRunCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "ResumeWorkflowRunCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ResumeWorkflowRunRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ResumeWorkflowRunResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ResumeWorkflowRunCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ResumeWorkflowRunCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ResumeWorkflowRunCommandOutput> {
    return deserializeAws_json1_1ResumeWorkflowRunCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
