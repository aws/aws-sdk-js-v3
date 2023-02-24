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

import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import {
  ListServerCertificateTagsRequest,
  ListServerCertificateTagsRequestFilterSensitiveLog,
  ListServerCertificateTagsResponse,
  ListServerCertificateTagsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryListServerCertificateTagsCommand,
  serializeAws_queryListServerCertificateTagsCommand,
} from "../protocols/Aws_query";

export interface ListServerCertificateTagsCommandInput extends ListServerCertificateTagsRequest {}
export interface ListServerCertificateTagsCommandOutput extends ListServerCertificateTagsResponse, __MetadataBearer {}

/**
 * <p>Lists the tags that are attached to the specified IAM server certificate. The
 *       returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
 *       <i>IAM User Guide</i>.</p>
 *          <note>
 *             <p>For certificates in a Region supported by Certificate Manager (ACM), we
 *         recommend that you don't use IAM server certificates. Instead, use ACM to provision,
 *         manage, and deploy your server certificates. For more information about IAM server
 *         certificates, <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with server
 *           certificates</a> in the <i>IAM User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListServerCertificateTagsCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListServerCertificateTagsCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListServerCertificateTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListServerCertificateTagsCommandInput} for command's `input` shape.
 * @see {@link ListServerCertificateTagsCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 */
export class ListServerCertificateTagsCommand extends $Command<
  ListServerCertificateTagsCommandInput,
  ListServerCertificateTagsCommandOutput,
  IAMClientResolvedConfig
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

  constructor(readonly input: ListServerCertificateTagsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListServerCertificateTagsCommandInput, ListServerCertificateTagsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListServerCertificateTagsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "ListServerCertificateTagsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListServerCertificateTagsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListServerCertificateTagsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListServerCertificateTagsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListServerCertificateTagsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListServerCertificateTagsCommandOutput> {
    return deserializeAws_queryListServerCertificateTagsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
