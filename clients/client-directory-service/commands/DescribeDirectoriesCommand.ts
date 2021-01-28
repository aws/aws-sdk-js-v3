import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { DescribeDirectoriesRequest, DescribeDirectoriesResult } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeDirectoriesCommand,
  serializeAws_json1_1DescribeDirectoriesCommand,
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

export type DescribeDirectoriesCommandInput = DescribeDirectoriesRequest;
export type DescribeDirectoriesCommandOutput = DescribeDirectoriesResult & __MetadataBearer;

/**
 * <p>Obtains information about the directories that belong to this account.</p>
 *          <p>You can retrieve information about specific directories by passing the directory
 *       identifiers in the <code>DirectoryIds</code> parameter. Otherwise, all directories that belong
 *       to the current account are returned.</p>
 *          <p>This operation supports pagination with the use of the <code>NextToken</code> request and
 *       response parameters. If more results are available, the
 *         <code>DescribeDirectoriesResult.NextToken</code> member contains a token that you pass in
 *       the next call to <a>DescribeDirectories</a> to retrieve the next set of
 *       items.</p>
 *          <p>You can also specify a maximum number of return results with the <code>Limit</code>
 *       parameter.</p>
 */
export class DescribeDirectoriesCommand extends $Command<
  DescribeDirectoriesCommandInput,
  DescribeDirectoriesCommandOutput,
  DirectoryServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeDirectoriesCommandInput) {
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
  ): Handler<DescribeDirectoriesCommandInput, DescribeDirectoriesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectoryServiceClient";
    const commandName = "DescribeDirectoriesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDirectoriesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeDirectoriesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeDirectoriesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeDirectoriesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDirectoriesCommandOutput> {
    return deserializeAws_json1_1DescribeDirectoriesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
