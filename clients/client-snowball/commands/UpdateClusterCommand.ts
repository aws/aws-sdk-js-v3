import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";
import { UpdateClusterRequest, UpdateClusterResult } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateClusterCommand,
  serializeAws_json1_1UpdateClusterCommand,
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

export type UpdateClusterCommandInput = UpdateClusterRequest;
export type UpdateClusterCommandOutput = UpdateClusterResult & __MetadataBearer;

/**
 * <p>While a cluster's <code>ClusterState</code> value is in the <code>AwaitingQuorum</code>
 *       state, you can update some of the information associated with a cluster. Once the cluster
 *       changes to a different job state, usually 60 minutes after the cluster being created, this
 *       action is no longer available.</p>
 */
export class UpdateClusterCommand extends $Command<
  UpdateClusterCommandInput,
  UpdateClusterCommandOutput,
  SnowballClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateClusterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SnowballClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateClusterCommandInput, UpdateClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SnowballClient";
    const commandName = "UpdateClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateClusterRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateClusterResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateClusterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateClusterCommandOutput> {
    return deserializeAws_json1_1UpdateClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
