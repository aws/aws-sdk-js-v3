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

import { ACMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMClient";
import { PutAccountConfigurationRequest, PutAccountConfigurationRequestFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_json1_1PutAccountConfigurationCommand,
  serializeAws_json1_1PutAccountConfigurationCommand,
} from "../protocols/Aws_json1_1";

export interface PutAccountConfigurationCommandInput extends PutAccountConfigurationRequest {}
export interface PutAccountConfigurationCommandOutput extends __MetadataBearer {}

/**
 * <p>Adds or modifies account-level configurations in ACM. </p>
 *          <p>The supported configuration option is <code>DaysBeforeExpiry</code>. This option specifies
 *       the number of days prior to certificate expiration when ACM starts generating
 *         <code>EventBridge</code> events. ACM sends one event per day per certificate until the
 *       certificate expires. By default, accounts receive events starting 45 days before certificate
 *       expiration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, PutAccountConfigurationCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, PutAccountConfigurationCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * const client = new ACMClient(config);
 * const command = new PutAccountConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutAccountConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutAccountConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ACMClientResolvedConfig | config} for ACMClient's `config` shape.
 *
 */
export class PutAccountConfigurationCommand extends $Command<
  PutAccountConfigurationCommandInput,
  PutAccountConfigurationCommandOutput,
  ACMClientResolvedConfig
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

  constructor(readonly input: PutAccountConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ACMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutAccountConfigurationCommandInput, PutAccountConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutAccountConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ACMClient";
    const commandName = "PutAccountConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutAccountConfigurationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutAccountConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutAccountConfigurationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutAccountConfigurationCommandOutput> {
    return deserializeAws_json1_1PutAccountConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
