import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetAccessKeyLastUsedRequest, GetAccessKeyLastUsedResponse } from "../models/models_0";
import {
  deserializeAws_queryGetAccessKeyLastUsedCommand,
  serializeAws_queryGetAccessKeyLastUsedCommand,
} from "../protocols/Aws_query";
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

export interface GetAccessKeyLastUsedCommandInput extends GetAccessKeyLastUsedRequest {}
export interface GetAccessKeyLastUsedCommandOutput extends GetAccessKeyLastUsedResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about when the specified access key was last used. The
 *             information includes the date and time of last use, along with the AWS service and
 *             Region that were specified in the last request made with that key.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetAccessKeyLastUsedCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetAccessKeyLastUsedCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new GetAccessKeyLastUsedCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAccessKeyLastUsedCommandInput} for command's `input` shape.
 * @see {@link GetAccessKeyLastUsedCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetAccessKeyLastUsedCommand extends $Command<
  GetAccessKeyLastUsedCommandInput,
  GetAccessKeyLastUsedCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetAccessKeyLastUsedCommandInput) {
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
  ): Handler<GetAccessKeyLastUsedCommandInput, GetAccessKeyLastUsedCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "GetAccessKeyLastUsedCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetAccessKeyLastUsedRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetAccessKeyLastUsedResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetAccessKeyLastUsedCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryGetAccessKeyLastUsedCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAccessKeyLastUsedCommandOutput> {
    return deserializeAws_queryGetAccessKeyLastUsedCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
