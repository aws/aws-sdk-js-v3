import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { DescribeInstanceStorageConfigRequest, DescribeInstanceStorageConfigResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeInstanceStorageConfigCommand,
  serializeAws_restJson1DescribeInstanceStorageConfigCommand,
} from "../protocols/Aws_restJson1";
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

export type DescribeInstanceStorageConfigCommandInput = DescribeInstanceStorageConfigRequest;
export type DescribeInstanceStorageConfigCommandOutput = DescribeInstanceStorageConfigResponse & __MetadataBearer;

/**
 * <p>Retrieves the current storage configurations for the specified resource type, association
 *    ID, and instance ID.</p>
 */
export class DescribeInstanceStorageConfigCommand extends $Command<
  DescribeInstanceStorageConfigCommandInput,
  DescribeInstanceStorageConfigCommandOutput,
  ConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeInstanceStorageConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeInstanceStorageConfigCommandInput, DescribeInstanceStorageConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "DescribeInstanceStorageConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeInstanceStorageConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeInstanceStorageConfigResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeInstanceStorageConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeInstanceStorageConfigCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeInstanceStorageConfigCommandOutput> {
    return deserializeAws_restJson1DescribeInstanceStorageConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
