import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { CreateDocumentRequest, CreateDocumentResult } from "../models/models_0";
import {
  deserializeAws_json1_1CreateDocumentCommand,
  serializeAws_json1_1CreateDocumentCommand,
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

export type CreateDocumentCommandInput = CreateDocumentRequest;
export type CreateDocumentCommandOutput = CreateDocumentResult & __MetadataBearer;

/**
 * <p>Creates a Systems Manager (SSM) document. An SSM document defines the actions that Systems Manager performs on
 *    your managed instances. For more information about SSM documents, including information about
 *    supported schemas, features, and syntax, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-ssm-docs.html">AWS Systems Manager Documents</a> in the
 *     <i>AWS Systems Manager User Guide</i>.</p>
 */
export class CreateDocumentCommand extends $Command<
  CreateDocumentCommandInput,
  CreateDocumentCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateDocumentCommandInput) {
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
  ): Handler<CreateDocumentCommandInput, CreateDocumentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "CreateDocumentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDocumentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateDocumentResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDocumentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateDocumentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDocumentCommandOutput> {
    return deserializeAws_json1_1CreateDocumentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
