import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetBlueprintsRequest, GetBlueprintsResult } from "../models/models_0";
import {
  deserializeAws_json1_1GetBlueprintsCommand,
  serializeAws_json1_1GetBlueprintsCommand,
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

export type GetBlueprintsCommandInput = GetBlueprintsRequest;
export type GetBlueprintsCommandOutput = GetBlueprintsResult & __MetadataBearer;

/**
 * <p>Returns the list of available instance images, or <i>blueprints</i>. You can
 *       use a blueprint to create a new instance already running a specific operating system, as well
 *       as a preinstalled app or development stack. The software each instance is running depends on
 *       the blueprint image you choose.</p>
 *          <note>
 *             <p>Use active blueprints when creating new instances. Inactive blueprints are listed to
 *         support customers with existing instances and are not necessarily available to create new
 *         instances. Blueprints are marked inactive when they become outdated due to operating system
 *         updates or new application releases.</p>
 *          </note>
 */
export class GetBlueprintsCommand extends $Command<
  GetBlueprintsCommandInput,
  GetBlueprintsCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetBlueprintsCommandInput) {
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
  ): Handler<GetBlueprintsCommandInput, GetBlueprintsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetBlueprintsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetBlueprintsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetBlueprintsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetBlueprintsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetBlueprintsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBlueprintsCommandOutput> {
    return deserializeAws_json1_1GetBlueprintsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
