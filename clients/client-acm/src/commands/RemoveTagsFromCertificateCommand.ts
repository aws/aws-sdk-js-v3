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
import {
  RemoveTagsFromCertificateRequest,
  RemoveTagsFromCertificateRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1RemoveTagsFromCertificateCommand,
  serializeAws_json1_1RemoveTagsFromCertificateCommand,
} from "../protocols/Aws_json1_1";

export interface RemoveTagsFromCertificateCommandInput extends RemoveTagsFromCertificateRequest {}
export interface RemoveTagsFromCertificateCommandOutput extends __MetadataBearer {}

/**
 * <p>Remove one or more tags from an ACM certificate. A tag consists of a key-value pair. If
 *       you do not specify the value portion of the tag when calling this function, the tag will be
 *       removed regardless of value. If you specify a value, the tag is removed only if it is
 *       associated with the specified value. </p>
 *          <p>To add tags to a certificate, use the <a>AddTagsToCertificate</a> action. To
 *       view all of the tags that have been applied to a specific ACM certificate, use the <a>ListTagsForCertificate</a> action. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, RemoveTagsFromCertificateCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, RemoveTagsFromCertificateCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * const client = new ACMClient(config);
 * const command = new RemoveTagsFromCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveTagsFromCertificateCommandInput} for command's `input` shape.
 * @see {@link RemoveTagsFromCertificateCommandOutput} for command's `response` shape.
 * @see {@link ACMClientResolvedConfig | config} for ACMClient's `config` shape.
 *
 */
export class RemoveTagsFromCertificateCommand extends $Command<
  RemoveTagsFromCertificateCommandInput,
  RemoveTagsFromCertificateCommandOutput,
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

  constructor(readonly input: RemoveTagsFromCertificateCommandInput) {
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
  ): Handler<RemoveTagsFromCertificateCommandInput, RemoveTagsFromCertificateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RemoveTagsFromCertificateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ACMClient";
    const commandName = "RemoveTagsFromCertificateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RemoveTagsFromCertificateRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RemoveTagsFromCertificateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RemoveTagsFromCertificateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RemoveTagsFromCertificateCommandOutput> {
    return deserializeAws_json1_1RemoveTagsFromCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
