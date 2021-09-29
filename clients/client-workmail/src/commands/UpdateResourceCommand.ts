import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { UpdateResourceRequest, UpdateResourceResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateResourceCommand,
  serializeAws_json1_1UpdateResourceCommand,
} from "../protocols/Aws_json1_1";
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

export interface UpdateResourceCommandInput extends UpdateResourceRequest {}
export interface UpdateResourceCommandOutput extends UpdateResourceResponse, __MetadataBearer {}

/**
 * <p>Updates data for the resource. To have the latest information, it must be preceded by
 *          a <a>DescribeResource</a> call. The dataset in the request should be the one
 *          expected when performing another <code>DescribeResource</code> call.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, UpdateResourceCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, UpdateResourceCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new UpdateResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateResourceCommandInput} for command's `input` shape.
 * @see {@link UpdateResourceCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateResourceCommand extends $Command<
  UpdateResourceCommandInput,
  UpdateResourceCommandOutput,
  WorkMailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateResourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkMailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateResourceCommandInput, UpdateResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkMailClient";
    const commandName = "UpdateResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateResourceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateResourceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateResourceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateResourceCommandOutput> {
    return deserializeAws_json1_1UpdateResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
