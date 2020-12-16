import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { DescribeWorkspaceSnapshotsRequest, DescribeWorkspaceSnapshotsResult } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeWorkspaceSnapshotsCommand,
  serializeAws_json1_1DescribeWorkspaceSnapshotsCommand,
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

export type DescribeWorkspaceSnapshotsCommandInput = DescribeWorkspaceSnapshotsRequest;
export type DescribeWorkspaceSnapshotsCommandOutput = DescribeWorkspaceSnapshotsResult & __MetadataBearer;

/**
 * <p>Describes the snapshots for the specified WorkSpace.</p>
 */
export class DescribeWorkspaceSnapshotsCommand extends $Command<
  DescribeWorkspaceSnapshotsCommandInput,
  DescribeWorkspaceSnapshotsCommandOutput,
  WorkSpacesClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeWorkspaceSnapshotsCommandInput) {
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
  ): Handler<DescribeWorkspaceSnapshotsCommandInput, DescribeWorkspaceSnapshotsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "DescribeWorkspaceSnapshotsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeWorkspaceSnapshotsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeWorkspaceSnapshotsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeWorkspaceSnapshotsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeWorkspaceSnapshotsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeWorkspaceSnapshotsCommandOutput> {
    return deserializeAws_json1_1DescribeWorkspaceSnapshotsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
