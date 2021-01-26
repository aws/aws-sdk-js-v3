import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { LookupPolicyRequest, LookupPolicyResponse } from "../models/models_0";
import {
  deserializeAws_restJson1LookupPolicyCommand,
  serializeAws_restJson1LookupPolicyCommand,
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

export type LookupPolicyCommandInput = LookupPolicyRequest;
export type LookupPolicyCommandOutput = LookupPolicyResponse & __MetadataBearer;

/**
 * <p>Lists all policies from the root of the <a>Directory</a> to the object
 *       specified. If there are no policies present, an empty list is returned. If policies are
 *       present, and if some objects don't have the policies attached, it returns the <code>ObjectIdentifier</code>
 *       for such objects. If policies are present, it returns <code>ObjectIdentifier</code>, <code>policyId</code>, and
 *       <code>policyType</code>. Paths that don't lead to the root from the target object are ignored. For more
 *       information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.</p>
 */
export class LookupPolicyCommand extends $Command<
  LookupPolicyCommandInput,
  LookupPolicyCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: LookupPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudDirectoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<LookupPolicyCommandInput, LookupPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudDirectoryClient";
    const commandName = "LookupPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: LookupPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: LookupPolicyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: LookupPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1LookupPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<LookupPolicyCommandOutput> {
    return deserializeAws_restJson1LookupPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
