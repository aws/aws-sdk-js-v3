// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { CreatePublicKeyRequest, CreatePublicKeyResult } from "../models/models_0";
import { de_CreatePublicKeyCommand, se_CreatePublicKeyCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreatePublicKeyCommand}.
 */
export interface CreatePublicKeyCommandInput extends CreatePublicKeyRequest {}
/**
 * @public
 *
 * The output of {@link CreatePublicKeyCommand}.
 */
export interface CreatePublicKeyCommandOutput extends CreatePublicKeyResult, __MetadataBearer {}

/**
 * @public
 * <p>Uploads a public key to CloudFront that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CreatePublicKeyCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CreatePublicKeyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // CreatePublicKeyRequest
 *   PublicKeyConfig: { // PublicKeyConfig
 *     CallerReference: "STRING_VALUE", // required
 *     Name: "STRING_VALUE", // required
 *     EncodedKey: "STRING_VALUE", // required
 *     Comment: "STRING_VALUE",
 *   },
 * };
 * const command = new CreatePublicKeyCommand(input);
 * const response = await client.send(command);
 * // { // CreatePublicKeyResult
 * //   PublicKey: { // PublicKey
 * //     Id: "STRING_VALUE", // required
 * //     CreatedTime: new Date("TIMESTAMP"), // required
 * //     PublicKeyConfig: { // PublicKeyConfig
 * //       CallerReference: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       EncodedKey: "STRING_VALUE", // required
 * //       Comment: "STRING_VALUE",
 * //     },
 * //   },
 * //   Location: "STRING_VALUE",
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreatePublicKeyCommandInput - {@link CreatePublicKeyCommandInput}
 * @returns {@link CreatePublicKeyCommandOutput}
 * @see {@link CreatePublicKeyCommandInput} for command's `input` shape.
 * @see {@link CreatePublicKeyCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link PublicKeyAlreadyExists} (client fault)
 *  <p>The specified public key already exists.</p>
 *
 * @throws {@link TooManyPublicKeys} (client fault)
 *  <p>The maximum number of public keys for field-level encryption have been created. To
 * 			create a new public key, delete one of the existing keys.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 */
export class CreatePublicKeyCommand extends $Command<
  CreatePublicKeyCommandInput,
  CreatePublicKeyCommandOutput,
  CloudFrontClientResolvedConfig
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

  /**
   * @public
   */
  constructor(readonly input: CreatePublicKeyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreatePublicKeyCommandInput, CreatePublicKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreatePublicKeyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "CreatePublicKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Cloudfront2020_05_31",
        operation: "CreatePublicKey",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: CreatePublicKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreatePublicKeyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreatePublicKeyCommandOutput> {
    return de_CreatePublicKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
