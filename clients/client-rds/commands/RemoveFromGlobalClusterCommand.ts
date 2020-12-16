import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { RemoveFromGlobalClusterMessage, RemoveFromGlobalClusterResult } from "../models/models_1";
import {
  deserializeAws_queryRemoveFromGlobalClusterCommand,
  serializeAws_queryRemoveFromGlobalClusterCommand,
} from "../protocols/Aws_query";
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

export type RemoveFromGlobalClusterCommandInput = RemoveFromGlobalClusterMessage;
export type RemoveFromGlobalClusterCommandOutput = RemoveFromGlobalClusterResult & __MetadataBearer;

/**
 * <p>
 *         Detaches an Aurora secondary cluster from an Aurora global database cluster. The cluster becomes a
 *         standalone cluster with read-write capability instead of being read-only and receiving data from a
 *         primary cluster in a different region.
 *       </p>
 *          <note>
 *            <p>This action only applies to Aurora DB clusters.</p>
 *          </note>
 */
export class RemoveFromGlobalClusterCommand extends $Command<
  RemoveFromGlobalClusterCommandInput,
  RemoveFromGlobalClusterCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RemoveFromGlobalClusterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RemoveFromGlobalClusterCommandInput, RemoveFromGlobalClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "RemoveFromGlobalClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RemoveFromGlobalClusterMessage.filterSensitiveLog,
      outputFilterSensitiveLog: RemoveFromGlobalClusterResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RemoveFromGlobalClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryRemoveFromGlobalClusterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RemoveFromGlobalClusterCommandOutput> {
    return deserializeAws_queryRemoveFromGlobalClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
