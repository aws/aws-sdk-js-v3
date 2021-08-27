import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetDevEndpointRequest, GetDevEndpointResponse } from "../models/models_1";
import {
  deserializeAws_json1_1GetDevEndpointCommand,
  serializeAws_json1_1GetDevEndpointCommand,
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

export interface GetDevEndpointCommandInput extends GetDevEndpointRequest {}
export interface GetDevEndpointCommandOutput extends GetDevEndpointResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about a specified development endpoint.</p>
 *          <note>
 *             <p>When you create a development endpoint in a virtual private cloud (VPC), Glue returns only
 *         a private IP address, and the public IP address field is not populated. When you create a
 *         non-VPC development endpoint, Glue returns only a public IP address.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetDevEndpointCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetDevEndpointCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetDevEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDevEndpointCommandInput} for command's `input` shape.
 * @see {@link GetDevEndpointCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetDevEndpointCommand extends $Command<
  GetDevEndpointCommandInput,
  GetDevEndpointCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetDevEndpointCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDevEndpointCommandInput, GetDevEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetDevEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDevEndpointRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetDevEndpointResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDevEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetDevEndpointCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDevEndpointCommandOutput> {
    return deserializeAws_json1_1GetDevEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
