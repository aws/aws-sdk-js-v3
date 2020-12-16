import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { DescribeWorkspaceBundlesRequest, DescribeWorkspaceBundlesResult } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeWorkspaceBundlesCommand,
  serializeAws_json1_1DescribeWorkspaceBundlesCommand,
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

export type DescribeWorkspaceBundlesCommandInput = DescribeWorkspaceBundlesRequest;
export type DescribeWorkspaceBundlesCommandOutput = DescribeWorkspaceBundlesResult & __MetadataBearer;

/**
 * <p>Retrieves a list that describes the available WorkSpace bundles.</p>
 *          <p>You can filter the results using either bundle ID or owner, but not both.</p>
 */
export class DescribeWorkspaceBundlesCommand extends $Command<
  DescribeWorkspaceBundlesCommandInput,
  DescribeWorkspaceBundlesCommandOutput,
  WorkSpacesClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeWorkspaceBundlesCommandInput) {
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
  ): Handler<DescribeWorkspaceBundlesCommandInput, DescribeWorkspaceBundlesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "DescribeWorkspaceBundlesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeWorkspaceBundlesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeWorkspaceBundlesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeWorkspaceBundlesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeWorkspaceBundlesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeWorkspaceBundlesCommandOutput> {
    return deserializeAws_json1_1DescribeWorkspaceBundlesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
