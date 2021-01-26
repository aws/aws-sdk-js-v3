import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { AssignTapePoolInput, AssignTapePoolOutput } from "../models/models_0";
import {
  deserializeAws_json1_1AssignTapePoolCommand,
  serializeAws_json1_1AssignTapePoolCommand,
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

export type AssignTapePoolCommandInput = AssignTapePoolInput;
export type AssignTapePoolCommandOutput = AssignTapePoolOutput & __MetadataBearer;

/**
 * <p>Assigns a tape to a tape pool for archiving. The tape assigned to a pool is archived in
 *          the S3 storage class that is associated with the pool. When you use your backup application
 *          to eject the tape, the tape is archived directly into the S3 storage class (S3 Glacier or
 *          S3 Glacier Deep Archive) that corresponds to the pool.</p>
 *
 *          <p>Valid Values: <code>GLACIER</code> | <code>DEEP_ARCHIVE</code>
 *          </p>
 */
export class AssignTapePoolCommand extends $Command<
  AssignTapePoolCommandInput,
  AssignTapePoolCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssignTapePoolCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssignTapePoolCommandInput, AssignTapePoolCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "AssignTapePoolCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssignTapePoolInput.filterSensitiveLog,
      outputFilterSensitiveLog: AssignTapePoolOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssignTapePoolCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AssignTapePoolCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssignTapePoolCommandOutput> {
    return deserializeAws_json1_1AssignTapePoolCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
