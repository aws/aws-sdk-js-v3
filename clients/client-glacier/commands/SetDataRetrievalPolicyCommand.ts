import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import { SetDataRetrievalPolicyInput } from "../models/models_0";
import {
  deserializeAws_restJson1SetDataRetrievalPolicyCommand,
  serializeAws_restJson1SetDataRetrievalPolicyCommand,
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

export type SetDataRetrievalPolicyCommandInput = SetDataRetrievalPolicyInput;
export type SetDataRetrievalPolicyCommandOutput = __MetadataBearer;

/**
 * <p>This operation sets and then enacts a data retrieval policy in the region specified
 *          in the PUT request. You can set one policy per region for an AWS account. The policy is
 *          enacted within a few minutes of a successful PUT operation.</p>
 *          <p>The set policy operation does not affect retrieval jobs that were in progress before
 *          the policy was enacted. For more information about data retrieval policies, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/data-retrieval-policy.html">Amazon
 *             Glacier Data Retrieval Policies</a>. </p>
 */
export class SetDataRetrievalPolicyCommand extends $Command<
  SetDataRetrievalPolicyCommandInput,
  SetDataRetrievalPolicyCommandOutput,
  GlacierClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SetDataRetrievalPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlacierClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SetDataRetrievalPolicyCommandInput, SetDataRetrievalPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlacierClient";
    const commandName = "SetDataRetrievalPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SetDataRetrievalPolicyInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SetDataRetrievalPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1SetDataRetrievalPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetDataRetrievalPolicyCommandOutput> {
    return deserializeAws_restJson1SetDataRetrievalPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
