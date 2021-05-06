import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { CreateTrackerRequest, CreateTrackerResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateTrackerCommand,
  serializeAws_restJson1CreateTrackerCommand,
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

export interface CreateTrackerCommandInput extends CreateTrackerRequest {}
export interface CreateTrackerCommandOutput extends CreateTrackerResponse, __MetadataBearer {}

/**
 * <p>Creates a tracker resource in your AWS account, which lets you retrieve current and
 *             historical location of devices.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, CreateTrackerCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, CreateTrackerCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new CreateTrackerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTrackerCommandInput} for command's `input` shape.
 * @see {@link CreateTrackerCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateTrackerCommand extends $Command<
  CreateTrackerCommandInput,
  CreateTrackerCommandOutput,
  LocationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateTrackerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LocationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateTrackerCommandInput, CreateTrackerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LocationClient";
    const commandName = "CreateTrackerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateTrackerRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateTrackerResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateTrackerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateTrackerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateTrackerCommandOutput> {
    return deserializeAws_restJson1CreateTrackerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
