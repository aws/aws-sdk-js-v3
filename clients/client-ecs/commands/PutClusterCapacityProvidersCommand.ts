import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { PutClusterCapacityProvidersRequest, PutClusterCapacityProvidersResponse } from "../models/models_0";
import {
  deserializeAws_json1_1PutClusterCapacityProvidersCommand,
  serializeAws_json1_1PutClusterCapacityProvidersCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type PutClusterCapacityProvidersCommandInput = PutClusterCapacityProvidersRequest;
export type PutClusterCapacityProvidersCommandOutput = PutClusterCapacityProvidersResponse & __MetadataBearer;

/**
 * <p>Modifies the available capacity providers and the default capacity provider strategy
 * 			for a cluster.</p>
 * 		       <p>You must specify both the available capacity providers and a default capacity provider
 * 			strategy for the cluster. If the specified cluster has existing capacity providers
 * 			associated with it, you must specify all existing capacity providers in addition to any
 * 			new ones you want to add. Any existing capacity providers associated with a cluster that
 * 			are omitted from a <a>PutClusterCapacityProviders</a> API call will be
 * 			disassociated with the cluster. You can only disassociate an existing capacity provider
 * 			from a cluster if it's not being used by any existing tasks.</p>
 * 		       <p>When creating a service or running a task on a cluster, if no capacity provider or
 * 			launch type is specified, then the cluster's default capacity provider strategy is used.
 * 			It is recommended to define a default capacity provider strategy for your cluster,
 * 			however you may specify an empty array (<code>[]</code>) to bypass defining a default
 * 			strategy.</p>
 */
export class PutClusterCapacityProvidersCommand extends $Command<
  PutClusterCapacityProvidersCommandInput,
  PutClusterCapacityProvidersCommandOutput,
  ECSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "PutClusterCapacityProvidersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutClusterCapacityProvidersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutClusterCapacityProvidersResponse.filterSensitiveLog,
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
