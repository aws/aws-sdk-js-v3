import { MobileClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MobileClient";
import { UpdateProjectRequest, UpdateProjectResult } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateProjectCommand,
  serializeAws_restJson1UpdateProjectCommand,
} from "../protocols/Aws_restJson1";
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

export interface UpdateProjectCommandInput extends UpdateProjectRequest {}
export interface UpdateProjectCommandOutput extends UpdateProjectResult, __MetadataBearer {}

/**
 * <p>
 *             Update an existing project.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MobileClient, UpdateProjectCommand } from "@aws-sdk/client-mobile"; // ES Modules import
 * // const { MobileClient, UpdateProjectCommand } = require("@aws-sdk/client-mobile"); // CommonJS import
 * const client = new MobileClient(config);
 * const command = new UpdateProjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateProjectCommandInput} for command's `input` shape.
 * @see {@link UpdateProjectCommandOutput} for command's `response` shape.
 * @see {@link MobileClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateProjectCommand extends $Command<
  UpdateProjectCommandInput,
  UpdateProjectCommandOutput,
  MobileClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateProjectCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MobileClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateProjectCommandInput, UpdateProjectCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MobileClient";
    const commandName = "UpdateProjectCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateProjectRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateProjectResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateProjectCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateProjectCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateProjectCommandOutput> {
    return deserializeAws_restJson1UpdateProjectCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
