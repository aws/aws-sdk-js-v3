import { CodeGuruReviewerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruReviewerClient";
import { DescribeRepositoryAssociationRequest, DescribeRepositoryAssociationResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeRepositoryAssociationCommand,
  serializeAws_restJson1DescribeRepositoryAssociationCommand,
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

export type DescribeRepositoryAssociationCommandInput = DescribeRepositoryAssociationRequest;
export type DescribeRepositoryAssociationCommandOutput = DescribeRepositoryAssociationResponse & __MetadataBearer;

/**
 * <p>
 *          Returns a <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">
 *                <code>RepositoryAssociation</code>
 *             </a> object
 *          that contains information about the requested repository association.
 *       </p>
 */
export class DescribeRepositoryAssociationCommand extends $Command<
  DescribeRepositoryAssociationCommandInput,
  DescribeRepositoryAssociationCommandOutput,
  CodeGuruReviewerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeRepositoryAssociationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeGuruReviewerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeRepositoryAssociationCommandInput, DescribeRepositoryAssociationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeGuruReviewerClient";
    const commandName = "DescribeRepositoryAssociationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeRepositoryAssociationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeRepositoryAssociationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeRepositoryAssociationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeRepositoryAssociationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeRepositoryAssociationCommandOutput> {
    return deserializeAws_restJson1DescribeRepositoryAssociationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
