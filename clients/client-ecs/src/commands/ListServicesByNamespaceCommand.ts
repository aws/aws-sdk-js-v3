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
  ListServicesByNamespaceRequest,
  ListServicesByNamespaceRequestFilterSensitiveLog,
  ListServicesByNamespaceResponse,
  ListServicesByNamespaceResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListServicesByNamespaceCommand,
  serializeAws_json1_1ListServicesByNamespaceCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link ListServicesByNamespaceCommand}.
 */
export interface ListServicesByNamespaceCommandInput extends ListServicesByNamespaceRequest {}
/**
 * @public
 *
 * The output of {@link ListServicesByNamespaceCommand}.
 */
export interface ListServicesByNamespaceCommandOutput extends ListServicesByNamespaceResponse, __MetadataBearer {}

/**
 * @public
 * <p>This operation lists all of the services that are associated with a Cloud Map
 * 			namespace. This list might include services in different clusters. In contrast,
 * 				<code>ListServices</code> can only list services in one cluster at a time. If you
 * 			need to filter the list of services in a single cluster by various parameters, use
 * 				<code>ListServices</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html">Service Connect</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, ListServicesByNamespaceCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, ListServicesByNamespaceCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new ListServicesByNamespaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListServicesByNamespaceCommandInput - {@link ListServicesByNamespaceCommandInput}
 * @returns {@link ListServicesByNamespaceCommandOutput}
 * @see {@link ListServicesByNamespaceCommandInput} for command's `input` shape.
 * @see {@link ListServicesByNamespaceCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. This client action might be using
 * 			an action or resource on behalf of a user that doesn't have permissions to use the
 * 			action or resource,. Or, it might be specifying an identifier that isn't valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter isn't valid. Review the available parameters for the API
 * 			request.</p>
 *
 * @throws {@link NamespaceNotFoundException} (client fault)
 *  <p>The specified namespace wasn't found.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 *
 */
export class ListServicesByNamespaceCommand extends $Command<
  ListServicesByNamespaceCommandInput,
  ListServicesByNamespaceCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: ListServicesByNamespaceCommandInput) {
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
  ): Handler<ListServicesByNamespaceCommandInput, ListServicesByNamespaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListServicesByNamespaceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "ListServicesByNamespaceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListServicesByNamespaceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListServicesByNamespaceResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: ListServicesByNamespaceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListServicesByNamespaceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListServicesByNamespaceCommandOutput> {
    return deserializeAws_json1_1ListServicesByNamespaceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
