import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateKeyPairRequest, KeyPair } from "../models/models_1";
import { deserializeAws_ec2CreateKeyPairCommand, serializeAws_ec2CreateKeyPairCommand } from "../protocols/Aws_ec2";
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

export interface CreateKeyPairCommandInput extends CreateKeyPairRequest {}
export interface CreateKeyPairCommandOutput extends KeyPair, __MetadataBearer {}

/**
 * <p>Creates an ED25519 or 2048-bit RSA key pair with the specified name. Amazon EC2 stores the public
 *             key and displays the private key for you to save to a file. The private key is returned
 *             as an unencrypted PEM encoded PKCS#1 private key. If a key with the specified name
 *             already exists, Amazon EC2 returns an error.</p>
 * 		       <p>The key pair returned to you is available only in the Amazon Web Services Region in which you create it.
 *             If you prefer, you can create your own key pair using a third-party tool and upload it
 *             to any Region using <a>ImportKeyPair</a>.</p>
 *          <p>You can have up to 5,000 key pairs per Amazon Web Services Region.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html">Amazon EC2 key pairs</a> in the
 *                 <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateKeyPairCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateKeyPairCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateKeyPairCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateKeyPairCommandInput} for command's `input` shape.
 * @see {@link CreateKeyPairCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateKeyPairCommand extends $Command<
  CreateKeyPairCommandInput,
  CreateKeyPairCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateKeyPairCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateKeyPairCommandInput, CreateKeyPairCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateKeyPairCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateKeyPairRequest.filterSensitiveLog,
      outputFilterSensitiveLog: KeyPair.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateKeyPairCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CreateKeyPairCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateKeyPairCommandOutput> {
    return deserializeAws_ec2CreateKeyPairCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
