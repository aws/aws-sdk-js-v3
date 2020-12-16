import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DescribeDocumentPermissionRequest, DescribeDocumentPermissionResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeDocumentPermissionCommand,
  serializeAws_json1_1DescribeDocumentPermissionCommand,
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

export type DescribeDocumentPermissionCommandInput = DescribeDocumentPermissionRequest;
export type DescribeDocumentPermissionCommandOutput = DescribeDocumentPermissionResponse & __MetadataBearer;

/**
 * <p>Describes the permissions for a Systems Manager document. If you created the document, you are the
 *    owner. If a document is shared, it can either be shared privately (by specifying a user's AWS
 *    account ID) or publicly (<i>All</i>). </p>
 */
export class DescribeDocumentPermissionCommand extends $Command<
  DescribeDocumentPermissionCommandInput,
  DescribeDocumentPermissionCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeDocumentPermissionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDocumentPermissionCommandInput, DescribeDocumentPermissionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "DescribeDocumentPermissionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDocumentPermissionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeDocumentPermissionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeDocumentPermissionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeDocumentPermissionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDocumentPermissionCommandOutput> {
    return deserializeAws_json1_1DescribeDocumentPermissionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
