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

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import {
  ListContainerInstancesRequest,
  ListContainerInstancesRequestFilterSensitiveLog,
  ListContainerInstancesResponse,
  ListContainerInstancesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListContainerInstancesCommand,
  serializeAws_json1_1ListContainerInstancesCommand,
} from "../protocols/Aws_json1_1";

export interface ListContainerInstancesCommandInput extends ListContainerInstancesRequest {}
export interface ListContainerInstancesCommandOutput extends ListContainerInstancesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of container instances in a specified cluster. You can filter the
 * 			results of a <code>ListContainerInstances</code> operation with cluster query language
 * 			statements inside the <code>filter</code> parameter. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-query-language.html">Cluster Query Language</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, ListContainerInstancesCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, ListContainerInstancesCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new ListContainerInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListContainerInstancesCommandInput} for command's `input` shape.
 * @see {@link ListContainerInstancesCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 */
export class ListContainerInstancesCommand extends $Command<
  ListContainerInstancesCommandInput,
  ListContainerInstancesCommandOutput,
  ECSClientResolvedConfig
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

  constructor(readonly input: ListContainerInstancesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListContainerInstancesCommandInput, ListContainerInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListContainerInstancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "ListContainerInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListContainerInstancesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListContainerInstancesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListContainerInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListContainerInstancesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListContainerInstancesCommandOutput> {
    return deserializeAws_json1_1ListContainerInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
