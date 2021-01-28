import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import {
  DescribeWorkspacesConnectionStatusRequest,
  DescribeWorkspacesConnectionStatusResult,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeWorkspacesConnectionStatusCommand,
  serializeAws_json1_1DescribeWorkspacesConnectionStatusCommand,
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

export type DescribeWorkspacesConnectionStatusCommandInput = DescribeWorkspacesConnectionStatusRequest;
export type DescribeWorkspacesConnectionStatusCommandOutput = DescribeWorkspacesConnectionStatusResult &
  __MetadataBearer;

/**
 * <p>Describes the connection status of the specified WorkSpaces.</p>
 */
export class DescribeWorkspacesConnectionStatusCommand extends $Command<
  DescribeWorkspacesConnectionStatusCommandInput,
  DescribeWorkspacesConnectionStatusCommandOutput,
  WorkSpacesClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeWorkspacesConnectionStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkSpacesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeWorkspacesConnectionStatusCommandInput, DescribeWorkspacesConnectionStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "DescribeWorkspacesConnectionStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeWorkspacesConnectionStatusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeWorkspacesConnectionStatusResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeWorkspacesConnectionStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeWorkspacesConnectionStatusCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeWorkspacesConnectionStatusCommandOutput> {
    return deserializeAws_json1_1DescribeWorkspacesConnectionStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
