import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { GetHITRequest, GetHITResponse } from "../models/models_0";
import { deserializeAws_json1_1GetHITCommand, serializeAws_json1_1GetHITCommand } from "../protocols/Aws_json1_1";
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

export interface GetHITCommandInput extends GetHITRequest {}
export interface GetHITCommandOutput extends GetHITResponse, __MetadataBearer {}

/**
 * <p>
 *             The <code>GetHIT</code> operation retrieves the details of the specified HIT.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, GetHITCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, GetHITCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new GetHITCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetHITCommandInput} for command's `input` shape.
 * @see {@link GetHITCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetHITCommand extends $Command<GetHITCommandInput, GetHITCommandOutput, MTurkClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetHITCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MTurkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetHITCommandInput, GetHITCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "GetHITCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetHITRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetHITResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetHITCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetHITCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetHITCommandOutput> {
    return deserializeAws_json1_1GetHITCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
