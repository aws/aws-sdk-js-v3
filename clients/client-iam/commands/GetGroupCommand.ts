import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetGroupRequest, GetGroupResponse } from "../models/models_0";
import { deserializeAws_queryGetGroupCommand, serializeAws_queryGetGroupCommand } from "../protocols/Aws_query";
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

export interface GetGroupCommandInput extends GetGroupRequest {}
export interface GetGroupCommandOutput extends GetGroupResponse, __MetadataBearer {}

/**
 * <p> Returns a list of IAM users that are in the specified IAM group. You can paginate
 *             the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetGroupCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetGroupCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new GetGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetGroupCommandInput} for command's `input` shape.
 * @see {@link GetGroupCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetGroupCommand extends $Command<GetGroupCommandInput, GetGroupCommandOutput, IAMClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetGroupCommandInput) {
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
  ): Handler<GetGroupCommandInput, GetGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "GetGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetGroupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryGetGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetGroupCommandOutput> {
    return deserializeAws_queryGetGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
