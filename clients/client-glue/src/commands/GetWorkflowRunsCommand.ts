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
  GetWorkflowRunsRequest,
  GetWorkflowRunsRequestFilterSensitiveLog,
  GetWorkflowRunsResponse,
  GetWorkflowRunsResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1GetWorkflowRunsCommand,
  serializeAws_json1_1GetWorkflowRunsCommand,
} from "../protocols/Aws_json1_1";

export interface GetWorkflowRunsCommandInput extends GetWorkflowRunsRequest {}
export interface GetWorkflowRunsCommandOutput extends GetWorkflowRunsResponse, __MetadataBearer {}

/**
 * <p>Retrieves metadata for all runs of a given workflow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetWorkflowRunsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetWorkflowRunsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetWorkflowRunsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetWorkflowRunsCommandInput} for command's `input` shape.
 * @see {@link GetWorkflowRunsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 */
export class GetWorkflowRunsCommand extends $Command<
  GetWorkflowRunsCommandInput,
  GetWorkflowRunsCommandOutput,
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

  constructor(readonly input: GetWorkflowRunsCommandInput) {
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
  ): Handler<GetWorkflowRunsCommandInput, GetWorkflowRunsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetWorkflowRunsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetWorkflowRunsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetWorkflowRunsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetWorkflowRunsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetWorkflowRunsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetWorkflowRunsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetWorkflowRunsCommandOutput> {
    return deserializeAws_json1_1GetWorkflowRunsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
