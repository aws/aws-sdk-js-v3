// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
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

import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import {
  GetBlueprintsRequest,
  GetBlueprintsRequestFilterSensitiveLog,
  GetBlueprintsResult,
  GetBlueprintsResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetBlueprintsCommand,
  serializeAws_json1_1GetBlueprintsCommand,
} from "../protocols/Aws_json1_1";

export interface GetBlueprintsCommandInput extends GetBlueprintsRequest {}
export interface GetBlueprintsCommandOutput extends GetBlueprintsResult, __MetadataBearer {}

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
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetBlueprintsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetBlueprintsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetBlueprintsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBlueprintsCommandInput} for command's `input` shape.
 * @see {@link GetBlueprintsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 */
export class GetBlueprintsCommand extends $Command<
  GetBlueprintsCommandInput,
  GetBlueprintsCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(getEndpointPlugin(configuration, GetBlueprintsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetBlueprintsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetBlueprintsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetBlueprintsResultFilterSensitiveLog,
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
