import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { CreateWorkGroupInput, CreateWorkGroupOutput } from "../models/models_0";
import {
  deserializeAws_json1_1CreateWorkGroupCommand,
  serializeAws_json1_1CreateWorkGroupCommand,
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

export interface CreateWorkGroupCommandInput extends CreateWorkGroupInput {}
export interface CreateWorkGroupCommandOutput extends CreateWorkGroupOutput, __MetadataBearer {}

/**
 * <p>Creates a workgroup with the specified name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, CreateWorkGroupCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, CreateWorkGroupCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new CreateWorkGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateWorkGroupCommandInput} for command's `input` shape.
 * @see {@link CreateWorkGroupCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateWorkGroupCommand extends $Command<
  CreateWorkGroupCommandInput,
  CreateWorkGroupCommandOutput,
  AthenaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateWorkGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AthenaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateWorkGroupCommandInput, CreateWorkGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AthenaClient";
    const commandName = "CreateWorkGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateWorkGroupInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateWorkGroupOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateWorkGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateWorkGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateWorkGroupCommandOutput> {
    return deserializeAws_json1_1CreateWorkGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
