import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { DeleteDistributionRequest, DeleteDistributionResult } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteDistributionCommand,
  serializeAws_json1_1DeleteDistributionCommand,
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

export interface DeleteDistributionCommandInput extends DeleteDistributionRequest {}
export interface DeleteDistributionCommandOutput extends DeleteDistributionResult, __MetadataBearer {}

/**
 * <p>Deletes your Amazon Lightsail content delivery network (CDN) distribution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, DeleteDistributionCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, DeleteDistributionCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new DeleteDistributionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDistributionCommandInput} for command's `input` shape.
 * @see {@link DeleteDistributionCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteDistributionCommand extends $Command<
  DeleteDistributionCommandInput,
  DeleteDistributionCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteDistributionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteDistributionCommandInput, DeleteDistributionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "DeleteDistributionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteDistributionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteDistributionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteDistributionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteDistributionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteDistributionCommandOutput> {
    return deserializeAws_json1_1DeleteDistributionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
