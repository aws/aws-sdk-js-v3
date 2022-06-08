// smithy-typescript generated code
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { M2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../M2Client";
import { GetDataSetDetailsRequest, GetDataSetDetailsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetDataSetDetailsCommand,
  serializeAws_restJson1GetDataSetDetailsCommand,
} from "../protocols/Aws_restJson1";

export interface GetDataSetDetailsCommandInput extends GetDataSetDetailsRequest {}
export interface GetDataSetDetailsCommandOutput extends GetDataSetDetailsResponse, __MetadataBearer {}

/**
 * <p>Gets the details of a specific data set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { M2Client, GetDataSetDetailsCommand } from "@aws-sdk/client-m2"; // ES Modules import
 * // const { M2Client, GetDataSetDetailsCommand } = require("@aws-sdk/client-m2"); // CommonJS import
 * const client = new M2Client(config);
 * const command = new GetDataSetDetailsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDataSetDetailsCommandInput} for command's `input` shape.
 * @see {@link GetDataSetDetailsCommandOutput} for command's `response` shape.
 * @see {@link M2ClientResolvedConfig | config} for M2Client's `config` shape.
 *
 */
export class GetDataSetDetailsCommand extends $Command<
  GetDataSetDetailsCommandInput,
  GetDataSetDetailsCommandOutput,
  M2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetDataSetDetailsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: M2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDataSetDetailsCommandInput, GetDataSetDetailsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "M2Client";
    const commandName = "GetDataSetDetailsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDataSetDetailsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetDataSetDetailsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDataSetDetailsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetDataSetDetailsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDataSetDetailsCommandOutput> {
    return deserializeAws_restJson1GetDataSetDetailsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
