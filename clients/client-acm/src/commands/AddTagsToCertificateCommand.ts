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

import { ACMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMClient";
import { AddTagsToCertificateRequest, AddTagsToCertificateRequestFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_json1_1AddTagsToCertificateCommand,
  serializeAws_json1_1AddTagsToCertificateCommand,
} from "../protocols/Aws_json1_1";

export interface AddTagsToCertificateCommandInput extends AddTagsToCertificateRequest {}
export interface AddTagsToCertificateCommandOutput extends __MetadataBearer {}

/**
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
 * const command = new AddTagsToCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddTagsToCertificateCommandInput} for command's `input` shape.
 * @see {@link AddTagsToCertificateCommandOutput} for command's `response` shape.
 * @see {@link ACMClientResolvedConfig | config} for ACMClient's `config` shape.
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
      inputFilterSensitiveLog: AddTagsToCertificateRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AddTagsToCertificateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AddTagsToCertificateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddTagsToCertificateCommandOutput> {
    return deserializeAws_json1_1AddTagsToCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
