import { DAXClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DAXClient";
import { DecreaseReplicationFactorRequest, DecreaseReplicationFactorResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DecreaseReplicationFactorCommand,
  serializeAws_json1_1DecreaseReplicationFactorCommand,
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

export type DecreaseReplicationFactorCommandInput = DecreaseReplicationFactorRequest;
export type DecreaseReplicationFactorCommandOutput = DecreaseReplicationFactorResponse & __MetadataBearer;

/**
 * <p>Removes one or more nodes from a DAX cluster.</p>
 *         <note>
 *             <p>You cannot use <code>DecreaseReplicationFactor</code> to remove the last node in a DAX cluster. If you need to do this, use <code>DeleteCluster</code> instead.</p>
 *          </note>
 */
export class DecreaseReplicationFactorCommand extends $Command<
  DecreaseReplicationFactorCommandInput,
  DecreaseReplicationFactorCommandOutput,
  DAXClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DecreaseReplicationFactorCommandInput) {
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
  ): Handler<DecreaseReplicationFactorCommandInput, DecreaseReplicationFactorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DAXClient";
    const commandName = "DecreaseReplicationFactorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DecreaseReplicationFactorRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DecreaseReplicationFactorResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DecreaseReplicationFactorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DecreaseReplicationFactorCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DecreaseReplicationFactorCommandOutput> {
    return deserializeAws_json1_1DecreaseReplicationFactorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
