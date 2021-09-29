import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetStaticIpsRequest, GetStaticIpsResult } from "../models/models_1";
import {
  deserializeAws_json1_1GetStaticIpsCommand,
  serializeAws_json1_1GetStaticIpsCommand,
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

export interface GetStaticIpsCommandInput extends GetStaticIpsRequest {}
export interface GetStaticIpsCommandOutput extends GetStaticIpsResult, __MetadataBearer {}

/**
 * <p>Returns information about all static IPs in the user's account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetStaticIpsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetStaticIpsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetStaticIpsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetStaticIpsCommandInput} for command's `input` shape.
 * @see {@link GetStaticIpsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetStaticIpsCommand extends $Command<
  GetStaticIpsCommandInput,
  GetStaticIpsCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetStaticIpsCommandInput) {
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
  ): Handler<GetStaticIpsCommandInput, GetStaticIpsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetStaticIpsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetStaticIpsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetStaticIpsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetStaticIpsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetStaticIpsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetStaticIpsCommandOutput> {
    return deserializeAws_json1_1GetStaticIpsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
