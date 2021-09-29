import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { AcceptGrantRequest, AcceptGrantResponse } from "../models/models_0";
import {
  deserializeAws_json1_1AcceptGrantCommand,
  serializeAws_json1_1AcceptGrantCommand,
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

export interface AcceptGrantCommandInput extends AcceptGrantRequest {}
export interface AcceptGrantCommandOutput extends AcceptGrantResponse, __MetadataBearer {}

/**
 * <p>Accepts the specified grant.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, AcceptGrantCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, AcceptGrantCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new AcceptGrantCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcceptGrantCommandInput} for command's `input` shape.
 * @see {@link AcceptGrantCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class AcceptGrantCommand extends $Command<
  AcceptGrantCommandInput,
  AcceptGrantCommandOutput,
  LicenseManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AcceptGrantCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LicenseManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AcceptGrantCommandInput, AcceptGrantCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LicenseManagerClient";
    const commandName = "AcceptGrantCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AcceptGrantRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AcceptGrantResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AcceptGrantCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AcceptGrantCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AcceptGrantCommandOutput> {
    return deserializeAws_json1_1AcceptGrantCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
