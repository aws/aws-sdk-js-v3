import {
  CodeStarConnectionsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CodeStarConnectionsClient";
import { CreateHostInput, CreateHostOutput } from "../models/models_0";
import {
  deserializeAws_json1_0CreateHostCommand,
  serializeAws_json1_0CreateHostCommand,
} from "../protocols/Aws_json1_0";
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

export type CreateHostCommandInput = CreateHostInput;
export type CreateHostCommandOutput = CreateHostOutput & __MetadataBearer;

/**
 * <p>Creates a resource that represents the infrastructure where a third-party provider is
 *       installed. The host is used when you create connections to an installed third-party provider
 *       type, such as GitHub Enterprise Server. You create one host for all connections to that
 *       provider.</p>
 *          <note>
 *             <p>A host created through the CLI or the SDK is in `PENDING` status by
 *         default. You can make its status `AVAILABLE` by setting up the host in the console.</p>
 *          </note>
 */
export class CreateHostCommand extends $Command<
  CreateHostCommandInput,
  CreateHostCommandOutput,
  CodeStarConnectionsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateHostCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeStarConnectionsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateHostCommandInput, CreateHostCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeStarConnectionsClient";
    const commandName = "CreateHostCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateHostInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateHostOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateHostCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0CreateHostCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateHostCommandOutput> {
    return deserializeAws_json1_0CreateHostCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
