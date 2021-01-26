import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { DescribeWorkspaceImagesRequest, DescribeWorkspaceImagesResult } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeWorkspaceImagesCommand,
  serializeAws_json1_1DescribeWorkspaceImagesCommand,
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

export type DescribeWorkspaceImagesCommandInput = DescribeWorkspaceImagesRequest;
export type DescribeWorkspaceImagesCommandOutput = DescribeWorkspaceImagesResult & __MetadataBearer;

/**
 * <p>Retrieves a list that describes one or more specified images, if the image identifiers
 *          are provided. Otherwise, all images in the account are described. </p>
 */
export class DescribeWorkspaceImagesCommand extends $Command<
  DescribeWorkspaceImagesCommandInput,
  DescribeWorkspaceImagesCommandOutput,
  WorkSpacesClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeWorkspaceImagesCommandInput) {
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
  ): Handler<DescribeWorkspaceImagesCommandInput, DescribeWorkspaceImagesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "DescribeWorkspaceImagesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeWorkspaceImagesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeWorkspaceImagesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeWorkspaceImagesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeWorkspaceImagesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeWorkspaceImagesCommandOutput> {
    return deserializeAws_json1_1DescribeWorkspaceImagesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
