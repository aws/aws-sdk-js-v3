import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { CreateOpsItemRequest, CreateOpsItemResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateOpsItemCommand,
  serializeAws_json1_1CreateOpsItemCommand,
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

export type CreateOpsItemCommandInput = CreateOpsItemRequest;
export type CreateOpsItemCommandOutput = CreateOpsItemResponse & __MetadataBearer;

/**
 * <p>Creates a new OpsItem. You must have permission in AWS Identity and Access Management (IAM)
 *    to create a new OpsItem. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-getting-started.html">Getting started with
 *     OpsCenter</a> in the <i>AWS Systems Manager User Guide</i>.</p>
 *          <p>Operations engineers and IT professionals use OpsCenter to view, investigate, and remediate
 *    operational issues impacting the performance and health of their AWS resources. For more
 *    information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">AWS Systems Manager OpsCenter</a> in the
 *     <i>AWS Systems Manager User Guide</i>. </p>
 */
export class CreateOpsItemCommand extends $Command<
  CreateOpsItemCommandInput,
  CreateOpsItemCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateOpsItemCommandInput) {
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
  ): Handler<CreateOpsItemCommandInput, CreateOpsItemCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "CreateOpsItemCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateOpsItemRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateOpsItemResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateOpsItemCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateOpsItemCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateOpsItemCommandOutput> {
    return deserializeAws_json1_1CreateOpsItemCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
