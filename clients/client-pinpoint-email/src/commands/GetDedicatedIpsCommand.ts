import { PinpointEmailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointEmailClient";
import { GetDedicatedIpsRequest, GetDedicatedIpsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetDedicatedIpsCommand,
  serializeAws_restJson1GetDedicatedIpsCommand,
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

export interface GetDedicatedIpsCommandInput extends GetDedicatedIpsRequest {}
export interface GetDedicatedIpsCommandOutput extends GetDedicatedIpsResponse, __MetadataBearer {}

/**
 * <p>List the dedicated IP addresses that are associated with your Amazon Pinpoint
 *             account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, GetDedicatedIpsCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, GetDedicatedIpsCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * const client = new PinpointEmailClient(config);
 * const command = new GetDedicatedIpsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDedicatedIpsCommandInput} for command's `input` shape.
 * @see {@link GetDedicatedIpsCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetDedicatedIpsCommand extends $Command<
  GetDedicatedIpsCommandInput,
  GetDedicatedIpsCommandOutput,
  PinpointEmailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetDedicatedIpsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointEmailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDedicatedIpsCommandInput, GetDedicatedIpsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointEmailClient";
    const commandName = "GetDedicatedIpsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDedicatedIpsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetDedicatedIpsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDedicatedIpsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetDedicatedIpsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDedicatedIpsCommandOutput> {
    return deserializeAws_restJson1GetDedicatedIpsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
