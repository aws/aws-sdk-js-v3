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
} from "@smithy/types";

import { ACMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMClient";
import { AddTagsToCertificateRequest } from "../models/models_0";
import { de_AddTagsToCertificateCommand, se_AddTagsToCertificateCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AddTagsToCertificateCommand}.
 */
export interface AddTagsToCertificateCommandInput extends AddTagsToCertificateRequest {}
/**
 * @public
 *
 * The output of {@link AddTagsToCertificateCommand}.
 */
export interface AddTagsToCertificateCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Adds one or more tags to an ACM certificate. Tags are labels that you can use to
 *       identify and organize your Amazon Web Services resources. Each tag consists of a <code>key</code> and an
 *       optional <code>value</code>. You specify the certificate on input by its Amazon Resource Name
 *       (ARN). You specify the tag by using a key-value pair. </p>
 *          <p>You can apply a tag to just one certificate if you want to identify a specific
 *       characteristic of that certificate, or you can apply the same tag to multiple certificates if
 *       you want to filter for a common relationship among those certificates. Similarly, you can
 *       apply the same tag to multiple resources if you want to specify a relationship among those
 *       resources. For example, you can add the same tag to an ACM certificate and an Elastic Load
 *       Balancing load balancer to indicate that they are both used by the same website. For more
 *       information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/tags.html">Tagging ACM
 *         certificates</a>. </p>
 *          <p>To remove one or more tags, use the <a>RemoveTagsFromCertificate</a> action. To
 *       view all of the tags that have been applied to the certificate, use the <a>ListTagsForCertificate</a> action. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, AddTagsToCertificateCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, AddTagsToCertificateCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * const client = new ACMClient(config);
 * const input = { // AddTagsToCertificateRequest
 *   CertificateArn: "STRING_VALUE", // required
 *   Tags: [ // TagList // required
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new AddTagsToCertificateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AddTagsToCertificateCommandInput - {@link AddTagsToCertificateCommandInput}
 * @returns {@link AddTagsToCertificateCommandOutput}
 * @see {@link AddTagsToCertificateCommandInput} for command's `input` shape.
 * @see {@link AddTagsToCertificateCommandOutput} for command's `response` shape.
 * @see {@link ACMClientResolvedConfig | config} for ACMClient's `config` shape.
 *
 * @throws {@link InvalidArnException} (client fault)
 *  <p>The requested Amazon Resource Name (ARN) does not refer to an existing resource.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>An input parameter was invalid.</p>
 *
 * @throws {@link InvalidTagException} (client fault)
 *  <p>One or both of the values that make up the key-value pair is not valid. For example, you
 *       cannot specify a tag value that begins with <code>aws:</code>.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified certificate cannot be found in the caller's account or the caller's account
 *       cannot be found.</p>
 *
 * @throws {@link TagPolicyException} (client fault)
 *  <p>A specified tag did not comply with an existing tag policy and was rejected.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because it exceeded a quota.</p>
 *
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>The request contains too many tags. Try the request again with fewer tags.</p>
 *
 * @throws {@link ACMServiceException}
 * <p>Base exception class for all service exceptions from ACM service.</p>
 *
 */
export class AddTagsToCertificateCommand extends $Command<
  AddTagsToCertificateCommandInput,
  AddTagsToCertificateCommandOutput,
  ACMClientResolvedConfig
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
  constructor(readonly input: AddTagsToCertificateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ACMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AddTagsToCertificateCommandInput, AddTagsToCertificateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AddTagsToCertificateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ACMClient";
    const commandName = "AddTagsToCertificateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: AddTagsToCertificateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AddTagsToCertificateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddTagsToCertificateCommandOutput> {
    return de_AddTagsToCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
