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

import { VerifyEmailAddressRequest, VerifyEmailAddressRequestFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_queryVerifyEmailAddressCommand,
  serializeAws_queryVerifyEmailAddressCommand,
} from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

export interface VerifyEmailAddressCommandInput extends VerifyEmailAddressRequest {}
export interface VerifyEmailAddressCommandOutput extends __MetadataBearer {}

/**
 * <p>Deprecated. Use the <code>VerifyEmailIdentity</code> operation to verify a new email
 *             address.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, VerifyEmailAddressCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, VerifyEmailAddressCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const command = new VerifyEmailAddressCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link VerifyEmailAddressCommandInput} for command's `input` shape.
 * @see {@link VerifyEmailAddressCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 */
export class VerifyEmailAddressCommand extends $Command<
  VerifyEmailAddressCommandInput,
  VerifyEmailAddressCommandOutput,
  SESClientResolvedConfig
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

  constructor(readonly input: VerifyEmailAddressCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<VerifyEmailAddressCommandInput, VerifyEmailAddressCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, VerifyEmailAddressCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "VerifyEmailAddressCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: VerifyEmailAddressRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: VerifyEmailAddressCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryVerifyEmailAddressCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<VerifyEmailAddressCommandOutput> {
    return deserializeAws_queryVerifyEmailAddressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
