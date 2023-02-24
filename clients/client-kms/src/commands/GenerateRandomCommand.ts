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

import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import {
  GenerateRandomRequest,
  GenerateRandomRequestFilterSensitiveLog,
  GenerateRandomResponse,
  GenerateRandomResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GenerateRandomCommand,
  serializeAws_json1_1GenerateRandomCommand,
} from "../protocols/Aws_json1_1";

export interface GenerateRandomCommandInput extends GenerateRandomRequest {}
export interface GenerateRandomCommandOutput extends GenerateRandomResponse, __MetadataBearer {}

/**
 * <p>Returns a random byte string that is cryptographically secure.</p>
 *          <p>You must use the <code>NumberOfBytes</code> parameter to specify the length of the random
 *       byte string. There is no default value for string length.</p>
 *          <p>By default, the random byte string is generated in KMS. To generate the byte string in
 *       the CloudHSM cluster associated with an CloudHSM key store, use the <code>CustomKeyStoreId</code>
 *       parameter.</p>
 *          <p>Applications in Amazon Web Services Nitro Enclaves can call this operation by using the <a href="https://github.com/aws/aws-nitro-enclaves-sdk-c">Amazon Web Services Nitro Enclaves Development Kit</a>. For information about the supporting parameters, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/services-nitro-enclaves.html">How Amazon Web Services Nitro Enclaves use KMS</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>For more information about entropy and random number generation, see
 *       <a href="https://docs.aws.amazon.com/kms/latest/cryptographic-details/">Key Management Service Cryptographic Details</a>.</p>
 *
 *          <p>
 *             <b>Cross-account use</b>: Not applicable.
 *         <code>GenerateRandom</code> does not use any account-specific resources, such as KMS
 *       keys.</p>
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:GenerateRandom</a> (IAM policy)</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, GenerateRandomCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, GenerateRandomCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new GenerateRandomCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GenerateRandomCommandInput} for command's `input` shape.
 * @see {@link GenerateRandomCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
 *
 */
export class GenerateRandomCommand extends $Command<
  GenerateRandomCommandInput,
  GenerateRandomCommandOutput,
  KMSClientResolvedConfig
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GenerateRandomCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "GenerateRandomCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GenerateRandomRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GenerateRandomResponseFilterSensitiveLog,
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
