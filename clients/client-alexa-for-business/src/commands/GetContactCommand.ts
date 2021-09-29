import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { GetContactRequest, GetContactResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetContactCommand,
  serializeAws_json1_1GetContactCommand,
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

export interface GetContactCommandInput extends GetContactRequest {}
export interface GetContactCommandOutput extends GetContactResponse, __MetadataBearer {}

/**
 * <p>Gets the contact details by the contact ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, GetContactCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, GetContactCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new GetContactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetContactCommandInput} for command's `input` shape.
 * @see {@link GetContactCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetContactCommand extends $Command<
  GetContactCommandInput,
  GetContactCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetContactCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetContactCommandInput, GetContactCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "GetContactCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetContactRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetContactResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetContactCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetContactCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetContactCommandOutput> {
    return deserializeAws_json1_1GetContactCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
