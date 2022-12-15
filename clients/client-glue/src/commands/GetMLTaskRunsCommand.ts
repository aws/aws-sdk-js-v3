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
  GetMLTaskRunsRequest,
  GetMLTaskRunsRequestFilterSensitiveLog,
  GetMLTaskRunsResponse,
  GetMLTaskRunsResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1GetMLTaskRunsCommand,
  serializeAws_json1_1GetMLTaskRunsCommand,
} from "../protocols/Aws_json1_1";

export interface GetMLTaskRunsCommandInput extends GetMLTaskRunsRequest {}
export interface GetMLTaskRunsCommandOutput extends GetMLTaskRunsResponse, __MetadataBearer {}

/**
 * <p>Gets a list of runs for a machine learning transform. Machine learning task runs are
 *       asynchronous tasks that Glue runs on your behalf as part of various machine learning
 *       workflows. You can get a sortable, filterable list of machine learning task runs by calling
 *         <code>GetMLTaskRuns</code> with their parent transform's <code>TransformID</code> and other
 *       optional parameters as documented in this section.</p>
 *          <p>This operation returns a list of historic runs and must be paginated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetMLTaskRunsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetMLTaskRunsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetMLTaskRunsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMLTaskRunsCommandInput} for command's `input` shape.
 * @see {@link GetMLTaskRunsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 */
export class GetMLTaskRunsCommand extends $Command<
  GetMLTaskRunsCommandInput,
  GetMLTaskRunsCommandOutput,
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

  constructor(readonly input: GetMLTaskRunsCommandInput) {
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
  ): Handler<GetMLTaskRunsCommandInput, GetMLTaskRunsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetMLTaskRunsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetMLTaskRunsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetMLTaskRunsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetMLTaskRunsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetMLTaskRunsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetMLTaskRunsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMLTaskRunsCommandOutput> {
    return deserializeAws_json1_1GetMLTaskRunsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
