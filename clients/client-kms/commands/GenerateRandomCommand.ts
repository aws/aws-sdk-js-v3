import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { GenerateRandomRequest, GenerateRandomResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GenerateRandomCommand,
  serializeAws_json1_1GenerateRandomCommand,
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

export type GenerateRandomCommandInput = GenerateRandomRequest;
export type GenerateRandomCommandOutput = GenerateRandomResponse & __MetadataBearer;

/**
 * <p>Returns a random byte string that is cryptographically secure.</p>
 *          <p>By default, the random byte string is generated in AWS KMS. To generate the byte string in
 *       the AWS CloudHSM cluster that is associated with a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a>, specify the custom key store
 *       ID.</p>
 *          <p>For more information about entropy and random number generation, see the <a href="https://d0.awsstatic.com/whitepapers/KMS-Cryptographic-Details.pdf">AWS Key Management Service
 *         Cryptographic Details</a> whitepaper.</p>
 */
export class GenerateRandomCommand extends $Command<
  GenerateRandomCommandInput,
  GenerateRandomCommandOutput,
  KMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GenerateRandomCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GenerateRandomCommandInput, GenerateRandomCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "GenerateRandomCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GenerateRandomRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GenerateRandomResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GenerateRandomCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GenerateRandomCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GenerateRandomCommandOutput> {
    return deserializeAws_json1_1GenerateRandomCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
