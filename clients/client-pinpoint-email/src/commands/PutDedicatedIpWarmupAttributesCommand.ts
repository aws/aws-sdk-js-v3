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
  PutDedicatedIpWarmupAttributesRequest,
  PutDedicatedIpWarmupAttributesRequestFilterSensitiveLog,
  PutDedicatedIpWarmupAttributesResponse,
  PutDedicatedIpWarmupAttributesResponseFilterSensitiveLog,
} from "../models/models_0";
import { PinpointEmailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointEmailClient";
import {
  deserializeAws_restJson1PutDedicatedIpWarmupAttributesCommand,
  serializeAws_restJson1PutDedicatedIpWarmupAttributesCommand,
} from "../protocols/Aws_restJson1";

export interface PutDedicatedIpWarmupAttributesCommandInput extends PutDedicatedIpWarmupAttributesRequest {}
export interface PutDedicatedIpWarmupAttributesCommandOutput
  extends PutDedicatedIpWarmupAttributesResponse,
    __MetadataBearer {}

/**
 * <p></p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, PutDedicatedIpWarmupAttributesCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, PutDedicatedIpWarmupAttributesCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * const client = new PinpointEmailClient(config);
 * const command = new PutDedicatedIpWarmupAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutDedicatedIpWarmupAttributesCommandInput} for command's `input` shape.
 * @see {@link PutDedicatedIpWarmupAttributesCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for PinpointEmailClient's `config` shape.
 *
 */
export class PutDedicatedIpWarmupAttributesCommand extends $Command<
  PutDedicatedIpWarmupAttributesCommandInput,
  PutDedicatedIpWarmupAttributesCommandOutput,
  PinpointEmailClientResolvedConfig
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

  constructor(readonly input: PutDedicatedIpWarmupAttributesCommandInput) {
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
  ): Handler<PutDedicatedIpWarmupAttributesCommandInput, PutDedicatedIpWarmupAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutDedicatedIpWarmupAttributesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointEmailClient";
    const commandName = "PutDedicatedIpWarmupAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutDedicatedIpWarmupAttributesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutDedicatedIpWarmupAttributesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PutDedicatedIpWarmupAttributesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1PutDedicatedIpWarmupAttributesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutDedicatedIpWarmupAttributesCommandOutput> {
    return deserializeAws_restJson1PutDedicatedIpWarmupAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
