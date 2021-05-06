import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { UpdateReportGroupInput, UpdateReportGroupOutput } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateReportGroupCommand,
  serializeAws_json1_1UpdateReportGroupCommand,
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

export interface UpdateReportGroupCommandInput extends UpdateReportGroupInput {}
export interface UpdateReportGroupCommandOutput extends UpdateReportGroupOutput, __MetadataBearer {}

/**
 * <p>
 *       Updates a report group.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, UpdateReportGroupCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, UpdateReportGroupCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new UpdateReportGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateReportGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateReportGroupCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateReportGroupCommand extends $Command<
  UpdateReportGroupCommandInput,
  UpdateReportGroupCommandOutput,
  CodeBuildClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateReportGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeBuildClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateReportGroupCommandInput, UpdateReportGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeBuildClient";
    const commandName = "UpdateReportGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateReportGroupInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateReportGroupOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateReportGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateReportGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateReportGroupCommandOutput> {
    return deserializeAws_json1_1UpdateReportGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
