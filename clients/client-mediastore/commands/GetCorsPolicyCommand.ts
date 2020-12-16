import { MediaStoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreClient";
import { GetCorsPolicyInput, GetCorsPolicyOutput } from "../models/models_0";
import {
  deserializeAws_json1_1GetCorsPolicyCommand,
  serializeAws_json1_1GetCorsPolicyCommand,
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

export type GetCorsPolicyCommandInput = GetCorsPolicyInput;
export type GetCorsPolicyCommandOutput = GetCorsPolicyOutput & __MetadataBearer;

/**
 * <p>Returns the cross-origin resource sharing (CORS) configuration information that is
 *          set for the container.</p>
 *          <p>To use this operation, you must have permission to perform the
 *             <code>MediaStore:GetCorsPolicy</code> action. By default, the container owner has this
 *          permission and can grant it to others.</p>
 */
export class GetCorsPolicyCommand extends $Command<
  GetCorsPolicyCommandInput,
  GetCorsPolicyCommandOutput,
  MediaStoreClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetCorsPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaStoreClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCorsPolicyCommandInput, GetCorsPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaStoreClient";
    const commandName = "GetCorsPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCorsPolicyInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetCorsPolicyOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetCorsPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetCorsPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCorsPolicyCommandOutput> {
    return deserializeAws_json1_1GetCorsPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
