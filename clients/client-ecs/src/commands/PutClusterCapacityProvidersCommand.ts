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
  PutClusterCapacityProvidersRequest,
  PutClusterCapacityProvidersRequestFilterSensitiveLog,
  PutClusterCapacityProvidersResponse,
  PutClusterCapacityProvidersResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1PutClusterCapacityProvidersCommand,
  serializeAws_json1_1PutClusterCapacityProvidersCommand,
} from "../protocols/Aws_json1_1";

export interface PutClusterCapacityProvidersCommandInput extends PutClusterCapacityProvidersRequest {}
export interface PutClusterCapacityProvidersCommandOutput
  extends PutClusterCapacityProvidersResponse,
    __MetadataBearer {}

/**
 * <p>Modifies the available capacity providers and the default capacity provider strategy
 * 			for a cluster.</p>
 *          <p>You must specify both the available capacity providers and a default capacity provider
 * 			strategy for the cluster. If the specified cluster has existing capacity providers
 * 			associated with it, you must specify all existing capacity providers in addition to any
 * 			new ones you want to add. Any existing capacity providers that are associated with a
 * 			cluster that are omitted from a <a>PutClusterCapacityProviders</a> API call
 * 			will be disassociated with the cluster. You can only disassociate an existing capacity
 * 			provider from a cluster if it's not being used by any existing tasks.</p>
 *          <p>When creating a service or running a task on a cluster, if no capacity provider or
 * 			launch type is specified, then the cluster's default capacity provider strategy is used.
 * 			We recommend that you define a default capacity provider strategy for your cluster.
 * 			However, you must specify an empty array (<code>[]</code>) to bypass defining a default
 * 			strategy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, PutClusterCapacityProvidersCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, PutClusterCapacityProvidersCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new PutClusterCapacityProvidersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutClusterCapacityProvidersCommandInput} for command's `input` shape.
 * @see {@link PutClusterCapacityProvidersCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 */
export class PutClusterCapacityProvidersCommand extends $Command<
  PutClusterCapacityProvidersCommandInput,
  PutClusterCapacityProvidersCommandOutput,
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

  constructor(readonly input: PutClusterCapacityProvidersCommandInput) {
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
  ): Handler<PutClusterCapacityProvidersCommandInput, PutClusterCapacityProvidersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutClusterCapacityProvidersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "PutClusterCapacityProvidersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutClusterCapacityProvidersRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutClusterCapacityProvidersResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutClusterCapacityProvidersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutClusterCapacityProvidersCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutClusterCapacityProvidersCommandOutput> {
    return deserializeAws_json1_1PutClusterCapacityProvidersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
