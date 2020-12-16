import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { DescribeVirtualNodeInput, DescribeVirtualNodeOutput } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeVirtualNodeCommand,
  serializeAws_restJson1DescribeVirtualNodeCommand,
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

export type DescribeVirtualNodeCommandInput = DescribeVirtualNodeInput;
export type DescribeVirtualNodeCommandOutput = DescribeVirtualNodeOutput & __MetadataBearer;

/**
 * <p>Describes an existing virtual node.</p>
 */
export class DescribeVirtualNodeCommand extends $Command<
  DescribeVirtualNodeCommandInput,
  DescribeVirtualNodeCommandOutput,
  AppMeshClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeVirtualNodeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppMeshClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeVirtualNodeCommandInput, DescribeVirtualNodeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppMeshClient";
    const commandName = "DescribeVirtualNodeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeVirtualNodeInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeVirtualNodeOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeVirtualNodeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeVirtualNodeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeVirtualNodeCommandOutput> {
    return deserializeAws_restJson1DescribeVirtualNodeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
