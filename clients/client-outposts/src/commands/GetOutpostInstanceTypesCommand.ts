import { OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OutpostsClient";
import { GetOutpostInstanceTypesInput, GetOutpostInstanceTypesOutput } from "../models/models_0";
import {
  deserializeAws_restJson1GetOutpostInstanceTypesCommand,
  serializeAws_restJson1GetOutpostInstanceTypesCommand,
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

export interface GetOutpostInstanceTypesCommandInput extends GetOutpostInstanceTypesInput {}
export interface GetOutpostInstanceTypesCommandOutput extends GetOutpostInstanceTypesOutput, __MetadataBearer {}

/**
 * <p>Lists the instance types for the specified Outpost.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, GetOutpostInstanceTypesCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, GetOutpostInstanceTypesCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * const client = new OutpostsClient(config);
 * const command = new GetOutpostInstanceTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetOutpostInstanceTypesCommandInput} for command's `input` shape.
 * @see {@link GetOutpostInstanceTypesCommandOutput} for command's `response` shape.
 * @see {@link OutpostsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetOutpostInstanceTypesCommand extends $Command<
  GetOutpostInstanceTypesCommandInput,
  GetOutpostInstanceTypesCommandOutput,
  OutpostsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetOutpostInstanceTypesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OutpostsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetOutpostInstanceTypesCommandInput, GetOutpostInstanceTypesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OutpostsClient";
    const commandName = "GetOutpostInstanceTypesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetOutpostInstanceTypesInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetOutpostInstanceTypesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetOutpostInstanceTypesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetOutpostInstanceTypesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetOutpostInstanceTypesCommandOutput> {
    return deserializeAws_restJson1GetOutpostInstanceTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
