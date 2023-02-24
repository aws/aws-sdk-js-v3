// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  CreateKeyPairRequest,
  CreateKeyPairRequestFilterSensitiveLog,
  KeyPair,
  KeyPairFilterSensitiveLog,
} from "../models/models_1";
import { deserializeAws_ec2CreateKeyPairCommand, serializeAws_ec2CreateKeyPairCommand } from "../protocols/Aws_ec2";

export interface CreateKeyPairCommandInput extends CreateKeyPairRequest {}
export interface CreateKeyPairCommandOutput extends KeyPair, __MetadataBearer {}

/**
 * <p>Creates an ED25519 or 2048-bit RSA key pair with the specified name and in the
 *             specified PEM or PPK format. Amazon EC2 stores the public key and displays the private
 *             key for you to save to a file. The private key is returned as an unencrypted PEM encoded
 *             PKCS#1 private key or an unencrypted PPK formatted private key for use with PuTTY. If a
 *             key with the specified name already exists, Amazon EC2 returns an error.</p>
 *          <p>The key pair returned to you is available only in the Amazon Web Services Region in which you create it.
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
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class CreateKeyPairCommand extends $Command<
  CreateKeyPairCommandInput,
  CreateKeyPairCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateKeyPairCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateKeyPairCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateKeyPairRequestFilterSensitiveLog,
      outputFilterSensitiveLog: KeyPairFilterSensitiveLog,
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
