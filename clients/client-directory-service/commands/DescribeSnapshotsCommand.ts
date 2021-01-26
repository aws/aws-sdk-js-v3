import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { DescribeSnapshotsRequest, DescribeSnapshotsResult } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeSnapshotsCommand,
  serializeAws_json1_1DescribeSnapshotsCommand,
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

export type DescribeSnapshotsCommandInput = DescribeSnapshotsRequest;
export type DescribeSnapshotsCommandOutput = DescribeSnapshotsResult & __MetadataBearer;

/**
 * <p>Obtains information about the directory snapshots that belong to this account.</p>
 *          <p>This operation supports pagination with the use of the <i>NextToken</i> request and
 *          response parameters. If more results are available, the <i>DescribeSnapshots.NextToken</i>
 *          member contains a token that you pass in the next call to <a>DescribeSnapshots</a> to
 *          retrieve the next set of items.</p>
 *          <p>You can also specify a maximum number of return results with the <i>Limit</i>
 *          parameter.</p>
 */
export class DescribeSnapshotsCommand extends $Command<
  DescribeSnapshotsCommandInput,
  DescribeSnapshotsCommandOutput,
  DirectoryServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeSnapshotsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectoryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeSnapshotsCommandInput, DescribeSnapshotsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectoryServiceClient";
    const commandName = "DescribeSnapshotsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeSnapshotsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeSnapshotsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeSnapshotsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeSnapshotsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeSnapshotsCommandOutput> {
    return deserializeAws_json1_1DescribeSnapshotsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
