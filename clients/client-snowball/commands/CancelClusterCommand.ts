import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";
import { CancelClusterRequest, CancelClusterResult } from "../models/models_0";
import {
  deserializeAws_json1_1CancelClusterCommand,
  serializeAws_json1_1CancelClusterCommand,
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

export type CancelClusterCommandInput = CancelClusterRequest;
export type CancelClusterCommandOutput = CancelClusterResult & __MetadataBearer;

/**
 * <p>Cancels a cluster job. You can only cancel a cluster job while it's in the
 *         <code>AwaitingQuorum</code> status. You'll have at least an hour after creating a cluster
 *       job to cancel it.</p>
 */
export class CancelClusterCommand extends $Command<
  CancelClusterCommandInput,
  CancelClusterCommandOutput,
  SnowballClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CancelClusterCommandInput) {
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
  ): Handler<CancelClusterCommandInput, CancelClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SnowballClient";
    const commandName = "CancelClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelClusterRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CancelClusterResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CancelClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CancelClusterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CancelClusterCommandOutput> {
    return deserializeAws_json1_1CancelClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
