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
  GetMLTaskRunRequest,
  GetMLTaskRunRequestFilterSensitiveLog,
  GetMLTaskRunResponse,
  GetMLTaskRunResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1GetMLTaskRunCommand,
  serializeAws_json1_1GetMLTaskRunCommand,
} from "../protocols/Aws_json1_1";

export interface GetMLTaskRunCommandInput extends GetMLTaskRunRequest {}
export interface GetMLTaskRunCommandOutput extends GetMLTaskRunResponse, __MetadataBearer {}

/**
 * <p>Gets details for a specific task run on a machine learning transform. Machine learning
 *       task runs are asynchronous tasks that Glue runs on your behalf as part of various machine
 *       learning workflows. You can check the stats of any task run by calling
 *         <code>GetMLTaskRun</code> with the <code>TaskRunID</code> and its parent transform's
 *         <code>TransformID</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetMLTaskRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetMLTaskRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetMLTaskRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMLTaskRunCommandInput} for command's `input` shape.
 * @see {@link GetMLTaskRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 */
export class GetMLTaskRunCommand extends $Command<
  GetMLTaskRunCommandInput,
  GetMLTaskRunCommandOutput,
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

  constructor(readonly input: GetMLTaskRunCommandInput) {
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
  ): Handler<GetMLTaskRunCommandInput, GetMLTaskRunCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetMLTaskRunCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetMLTaskRunCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetMLTaskRunRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetMLTaskRunResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetMLTaskRunCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetMLTaskRunCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMLTaskRunCommandOutput> {
    return deserializeAws_json1_1GetMLTaskRunCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
