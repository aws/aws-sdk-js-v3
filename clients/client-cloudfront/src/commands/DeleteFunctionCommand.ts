import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { DeleteFunctionRequest } from "../models/models_0";
import {
  deserializeAws_restXmlDeleteFunctionCommand,
  serializeAws_restXmlDeleteFunctionCommand,
} from "../protocols/Aws_restXml";
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

export interface DeleteFunctionCommandInput extends DeleteFunctionRequest {}
export interface DeleteFunctionCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a CloudFront function.</p>
 * 		       <p>You cannot delete a function if it’s associated with a cache behavior. First, update your
 * 			distributions to remove the function association from all cache behaviors, then delete
 * 			the function.</p>
 * 		       <p>To delete a function, you must provide the function’s name and version
 * 			(<code>ETag</code> value). To get these values, you can use <code>ListFunctions</code>
 * 			and <code>DescribeFunction</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, DeleteFunctionCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, DeleteFunctionCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new DeleteFunctionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFunctionCommandInput} for command's `input` shape.
 * @see {@link DeleteFunctionCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteFunctionCommand extends $Command<
  DeleteFunctionCommandInput,
  DeleteFunctionCommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteFunctionCommandInput) {
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
  ): Handler<DeleteFunctionCommandInput, DeleteFunctionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "DeleteFunctionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteFunctionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteFunctionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlDeleteFunctionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteFunctionCommandOutput> {
    return deserializeAws_restXmlDeleteFunctionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
