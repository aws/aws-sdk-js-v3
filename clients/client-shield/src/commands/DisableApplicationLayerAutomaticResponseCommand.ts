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

import {
  DisableApplicationLayerAutomaticResponseRequest,
  DisableApplicationLayerAutomaticResponseRequestFilterSensitiveLog,
  DisableApplicationLayerAutomaticResponseResponse,
  DisableApplicationLayerAutomaticResponseResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DisableApplicationLayerAutomaticResponseCommand,
  serializeAws_json1_1DisableApplicationLayerAutomaticResponseCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";

export interface DisableApplicationLayerAutomaticResponseCommandInput
  extends DisableApplicationLayerAutomaticResponseRequest {}
export interface DisableApplicationLayerAutomaticResponseCommandOutput
  extends DisableApplicationLayerAutomaticResponseResponse,
    __MetadataBearer {}

/**
 * <p>Disable the Shield Advanced automatic application layer DDoS mitigation feature for the protected resource. This
 *        stops Shield Advanced from creating, verifying, and applying WAF rules for attacks that it detects for the resource. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, DisableApplicationLayerAutomaticResponseCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, DisableApplicationLayerAutomaticResponseCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const command = new DisableApplicationLayerAutomaticResponseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableApplicationLayerAutomaticResponseCommandInput} for command's `input` shape.
 * @see {@link DisableApplicationLayerAutomaticResponseCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for ShieldClient's `config` shape.
 *
 */
export class DisableApplicationLayerAutomaticResponseCommand extends $Command<
  DisableApplicationLayerAutomaticResponseCommandInput,
  DisableApplicationLayerAutomaticResponseCommandOutput,
  ShieldClientResolvedConfig
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

  constructor(readonly input: DisableApplicationLayerAutomaticResponseCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ShieldClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DisableApplicationLayerAutomaticResponseCommandInput,
    DisableApplicationLayerAutomaticResponseCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DisableApplicationLayerAutomaticResponseCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ShieldClient";
    const commandName = "DisableApplicationLayerAutomaticResponseCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisableApplicationLayerAutomaticResponseRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DisableApplicationLayerAutomaticResponseResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisableApplicationLayerAutomaticResponseCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DisableApplicationLayerAutomaticResponseCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisableApplicationLayerAutomaticResponseCommandOutput> {
    return deserializeAws_json1_1DisableApplicationLayerAutomaticResponseCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
