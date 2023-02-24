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
  TerminateSolNetworkInstanceInput,
  TerminateSolNetworkInstanceInputFilterSensitiveLog,
  TerminateSolNetworkInstanceOutput,
  TerminateSolNetworkInstanceOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1TerminateSolNetworkInstanceCommand,
  serializeAws_restJson1TerminateSolNetworkInstanceCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, TnbClientResolvedConfig } from "../TnbClient";

export interface TerminateSolNetworkInstanceCommandInput extends TerminateSolNetworkInstanceInput {}
export interface TerminateSolNetworkInstanceCommandOutput extends TerminateSolNetworkInstanceOutput, __MetadataBearer {}

/**
 * <p>Terminates a network instance.</p>
 *          <p>A network instance is a single network created in Amazon Web Services TNB that can be deployed and on which life-cycle operations (like terminate, update, and delete) can be performed.</p>
 *          <p>You must terminate a network instance before you can delete it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TnbClient, TerminateSolNetworkInstanceCommand } from "@aws-sdk/client-tnb"; // ES Modules import
 * // const { TnbClient, TerminateSolNetworkInstanceCommand } = require("@aws-sdk/client-tnb"); // CommonJS import
 * const client = new TnbClient(config);
 * const command = new TerminateSolNetworkInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TerminateSolNetworkInstanceCommandInput} for command's `input` shape.
 * @see {@link TerminateSolNetworkInstanceCommandOutput} for command's `response` shape.
 * @see {@link TnbClientResolvedConfig | config} for TnbClient's `config` shape.
 *
 */
export class TerminateSolNetworkInstanceCommand extends $Command<
  TerminateSolNetworkInstanceCommandInput,
  TerminateSolNetworkInstanceCommandOutput,
  TnbClientResolvedConfig
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

  constructor(readonly input: TerminateSolNetworkInstanceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TnbClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TerminateSolNetworkInstanceCommandInput, TerminateSolNetworkInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, TerminateSolNetworkInstanceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TnbClient";
    const commandName = "TerminateSolNetworkInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TerminateSolNetworkInstanceInputFilterSensitiveLog,
      outputFilterSensitiveLog: TerminateSolNetworkInstanceOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: TerminateSolNetworkInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1TerminateSolNetworkInstanceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<TerminateSolNetworkInstanceCommandOutput> {
    return deserializeAws_restJson1TerminateSolNetworkInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
