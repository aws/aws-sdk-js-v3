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
  CreateGUISessionAccessDetailsRequest,
  CreateGUISessionAccessDetailsRequestFilterSensitiveLog,
  CreateGUISessionAccessDetailsResult,
  CreateGUISessionAccessDetailsResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateGUISessionAccessDetailsCommand,
  serializeAws_json1_1CreateGUISessionAccessDetailsCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link CreateGUISessionAccessDetailsCommand}.
 */
export interface CreateGUISessionAccessDetailsCommandInput extends CreateGUISessionAccessDetailsRequest {}
/**
 * The output of {@link CreateGUISessionAccessDetailsCommand}.
 */
export interface CreateGUISessionAccessDetailsCommandOutput
  extends CreateGUISessionAccessDetailsResult,
    __MetadataBearer {}

/**
 * <p>Creates two URLs that are used to access a virtual computer’s graphical user interface (GUI)
 *       session. The primary URL initiates a web-based NICE DCV session to the virtual computer's application. The secondary URL initiates a web-based NICE DCV session to the virtual computer's operating session. </p>
 *          <p>Use <code>StartGUISession</code> to open the session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, CreateGUISessionAccessDetailsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, CreateGUISessionAccessDetailsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new CreateGUISessionAccessDetailsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateGUISessionAccessDetailsCommandInput} for command's `input` shape.
 * @see {@link CreateGUISessionAccessDetailsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 */
export class CreateGUISessionAccessDetailsCommand extends $Command<
  CreateGUISessionAccessDetailsCommandInput,
  CreateGUISessionAccessDetailsCommandOutput,
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

  constructor(readonly input: CreateGUISessionAccessDetailsCommandInput) {
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
  ): Handler<CreateGUISessionAccessDetailsCommandInput, CreateGUISessionAccessDetailsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateGUISessionAccessDetailsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "CreateGUISessionAccessDetailsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateGUISessionAccessDetailsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateGUISessionAccessDetailsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateGUISessionAccessDetailsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateGUISessionAccessDetailsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateGUISessionAccessDetailsCommandOutput> {
    return deserializeAws_json1_1CreateGUISessionAccessDetailsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
