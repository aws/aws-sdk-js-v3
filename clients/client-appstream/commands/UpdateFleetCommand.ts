import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { UpdateFleetRequest, UpdateFleetResult } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateFleetCommand,
  serializeAws_json1_1UpdateFleetCommand,
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

export type UpdateFleetCommandInput = UpdateFleetRequest;
export type UpdateFleetCommandOutput = UpdateFleetResult & __MetadataBearer;

/**
 * <p>Updates the specified fleet.</p>
 *         <p>If the fleet is in the <code>STOPPED</code> state, you can update any attribute except the fleet name.
 *             If the fleet is in the <code>RUNNING</code> state, you can update the <code>DisplayName</code>, <code>ComputeCapacity</code>, <code>ImageARN</code>, <code>ImageName</code>, <code>IdleDisconnectTimeoutInSeconds</code>, and <code>DisconnectTimeoutInSeconds</code> attributes.
 *             If the fleet is in the <code>STARTING</code> or <code>STOPPING</code> state, you can't update it.</p>
 */
export class UpdateFleetCommand extends $Command<
  UpdateFleetCommandInput,
  UpdateFleetCommandOutput,
  AppStreamClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateFleetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppStreamClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateFleetCommandInput, UpdateFleetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppStreamClient";
    const commandName = "UpdateFleetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateFleetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateFleetResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateFleetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateFleetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateFleetCommandOutput> {
    return deserializeAws_json1_1UpdateFleetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
