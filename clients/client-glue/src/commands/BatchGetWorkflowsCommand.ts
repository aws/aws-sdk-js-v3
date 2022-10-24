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
  BatchGetWorkflowsRequest,
  BatchGetWorkflowsRequestFilterSensitiveLog,
  BatchGetWorkflowsResponse,
  BatchGetWorkflowsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1BatchGetWorkflowsCommand,
  serializeAws_json1_1BatchGetWorkflowsCommand,
} from "../protocols/Aws_json1_1";

export interface BatchGetWorkflowsCommandInput extends BatchGetWorkflowsRequest {}
export interface BatchGetWorkflowsCommandOutput extends BatchGetWorkflowsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of resource metadata for a given list of workflow names. After calling the <code>ListWorkflows</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, BatchGetWorkflowsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, BatchGetWorkflowsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new BatchGetWorkflowsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetWorkflowsCommandInput} for command's `input` shape.
 * @see {@link BatchGetWorkflowsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 */
export class BatchGetWorkflowsCommand extends $Command<
  BatchGetWorkflowsCommandInput,
  BatchGetWorkflowsCommandOutput,
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

  constructor(readonly input: BatchGetWorkflowsCommandInput) {
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
  ): Handler<BatchGetWorkflowsCommandInput, BatchGetWorkflowsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchGetWorkflowsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "BatchGetWorkflowsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchGetWorkflowsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: BatchGetWorkflowsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchGetWorkflowsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1BatchGetWorkflowsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchGetWorkflowsCommandOutput> {
    return deserializeAws_json1_1BatchGetWorkflowsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
