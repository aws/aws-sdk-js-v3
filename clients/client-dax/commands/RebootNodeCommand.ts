import { DAXClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DAXClient";
import { RebootNodeRequest, RebootNodeResponse } from "../models/models_0";
import {
  deserializeAws_json1_1RebootNodeCommand,
  serializeAws_json1_1RebootNodeCommand,
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

export type RebootNodeCommandInput = RebootNodeRequest;
export type RebootNodeCommandOutput = RebootNodeResponse & __MetadataBearer;

/**
 * <p>Reboots a single node of a DAX cluster. The reboot action takes place
 *             as soon as possible. During the
 *             reboot, the node status is set to REBOOTING.</p>
 *         <note>
 *             <p>
 *                <code>RebootNode</code> restarts the DAX engine process and does not remove the contents of the cache.  </p>
 *         </note>
 */
export class RebootNodeCommand extends $Command<
  RebootNodeCommandInput,
  RebootNodeCommandOutput,
  DAXClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RebootNodeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DAXClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RebootNodeCommandInput, RebootNodeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DAXClient";
    const commandName = "RebootNodeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RebootNodeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RebootNodeResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RebootNodeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RebootNodeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RebootNodeCommandOutput> {
    return deserializeAws_json1_1RebootNodeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
