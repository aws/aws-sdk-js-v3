import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import {
  GetServiceLinkedRoleDeletionStatusRequest,
  GetServiceLinkedRoleDeletionStatusResponse,
} from "../models/models_0";
import {
  deserializeAws_queryGetServiceLinkedRoleDeletionStatusCommand,
  serializeAws_queryGetServiceLinkedRoleDeletionStatusCommand,
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

export interface GetServiceLinkedRoleDeletionStatusCommandInput extends GetServiceLinkedRoleDeletionStatusRequest {}
export interface GetServiceLinkedRoleDeletionStatusCommandOutput
  extends GetServiceLinkedRoleDeletionStatusResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves the status of your service-linked role deletion. After you use <a>DeleteServiceLinkedRole</a> to submit a service-linked role for deletion,
 *             you can use the <code>DeletionTaskId</code> parameter in
 *                 <code>GetServiceLinkedRoleDeletionStatus</code> to check the status of the deletion.
 *             If the deletion fails, this operation returns the reason that it failed, if that
 *             information is returned by the service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetServiceLinkedRoleDeletionStatusCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetServiceLinkedRoleDeletionStatusCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new GetServiceLinkedRoleDeletionStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetServiceLinkedRoleDeletionStatusCommandInput} for command's `input` shape.
 * @see {@link GetServiceLinkedRoleDeletionStatusCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetServiceLinkedRoleDeletionStatusCommand extends $Command<
  GetServiceLinkedRoleDeletionStatusCommandInput,
  GetServiceLinkedRoleDeletionStatusCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetServiceLinkedRoleDeletionStatusCommandInput) {
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
  ): Handler<GetServiceLinkedRoleDeletionStatusCommandInput, GetServiceLinkedRoleDeletionStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "GetServiceLinkedRoleDeletionStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetServiceLinkedRoleDeletionStatusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetServiceLinkedRoleDeletionStatusResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetServiceLinkedRoleDeletionStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryGetServiceLinkedRoleDeletionStatusCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetServiceLinkedRoleDeletionStatusCommandOutput> {
    return deserializeAws_queryGetServiceLinkedRoleDeletionStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
