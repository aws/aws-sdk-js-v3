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

import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import {
  ListPartsInput,
  ListPartsInputFilterSensitiveLog,
  ListPartsOutput,
  ListPartsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListPartsCommand,
  serializeAws_restJson1ListPartsCommand,
} from "../protocols/Aws_restJson1";

export interface ListPartsCommandInput extends ListPartsInput {}
export interface ListPartsCommandOutput extends ListPartsOutput, __MetadataBearer {}

/**
 * <p>This operation lists the parts of an archive that have been uploaded in a specific
 *          multipart upload. You can make this request at any time during an in-progress multipart
 *          upload before you complete the upload (see <a>CompleteMultipartUpload</a>. List
 *          Parts returns an error for completed uploads. The list returned in the List Parts response
 *          is sorted by part range. </p>
 *
 *          <p>The List Parts operation supports pagination. By default, this operation returns up
 *          to 50 uploaded parts in the response. You should always check the response for a
 *             <code>marker</code> at which to continue the list; if there are no more items the
 *             <code>marker</code> is <code>null</code>. To return a list of parts that begins at a
 *          specific part, set the <code>marker</code> request parameter to the value you obtained from
 *          a previous List Parts request. You can also limit the number of parts returned in the
 *          response by specifying the <code>limit</code> parameter in the request. </p>
 *
 *          <p>An AWS account has full permission to perform all operations (actions). However, AWS
 *          Identity and Access Management (IAM) users don't have any permissions by default. You must
 *          grant them explicit permission to perform specific actions. For more information, see
 *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using
 *             AWS Identity and Access Management (IAM)</a>.</p>
 *          <p>For conceptual information and the underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/working-with-archives.html">Working
 *             with Archives in Amazon S3 Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-list-parts.html">List Parts</a> in the
 *             <i>Amazon Glacier Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, ListPartsCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, ListPartsCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const command = new ListPartsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPartsCommandInput} for command's `input` shape.
 * @see {@link ListPartsCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for GlacierClient's `config` shape.
 *
 */
export class ListPartsCommand extends $Command<
  ListPartsCommandInput,
  ListPartsCommandOutput,
  GlacierClientResolvedConfig
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

  constructor(readonly input: ListPartsCommandInput) {
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
  ): Handler<ListPartsCommandInput, ListPartsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListPartsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlacierClient";
    const commandName = "ListPartsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPartsInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListPartsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListPartsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListPartsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPartsCommandOutput> {
    return deserializeAws_restJson1ListPartsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
