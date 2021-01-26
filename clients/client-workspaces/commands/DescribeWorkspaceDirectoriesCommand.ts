import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { DescribeWorkspaceDirectoriesRequest, DescribeWorkspaceDirectoriesResult } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeWorkspaceDirectoriesCommand,
  serializeAws_json1_1DescribeWorkspaceDirectoriesCommand,
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

export type DescribeWorkspaceDirectoriesCommandInput = DescribeWorkspaceDirectoriesRequest;
export type DescribeWorkspaceDirectoriesCommandOutput = DescribeWorkspaceDirectoriesResult & __MetadataBearer;

/**
 * <p>Describes the available directories that are registered with
 *          Amazon WorkSpaces.</p>
 */
export class DescribeWorkspaceDirectoriesCommand extends $Command<
  DescribeWorkspaceDirectoriesCommandInput,
  DescribeWorkspaceDirectoriesCommandOutput,
  WorkSpacesClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeWorkspaceDirectoriesCommandInput) {
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
  ): Handler<DescribeWorkspaceDirectoriesCommandInput, DescribeWorkspaceDirectoriesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "DescribeWorkspaceDirectoriesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeWorkspaceDirectoriesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeWorkspaceDirectoriesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeWorkspaceDirectoriesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeWorkspaceDirectoriesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeWorkspaceDirectoriesCommandOutput> {
    return deserializeAws_json1_1DescribeWorkspaceDirectoriesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
