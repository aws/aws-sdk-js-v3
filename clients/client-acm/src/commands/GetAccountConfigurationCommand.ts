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
import { GetAccountConfigurationResponse, GetAccountConfigurationResponseFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_json1_1GetAccountConfigurationCommand,
  serializeAws_json1_1GetAccountConfigurationCommand,
} from "../protocols/Aws_json1_1";

export interface GetAccountConfigurationCommandInput {}
export interface GetAccountConfigurationCommandOutput extends GetAccountConfigurationResponse, __MetadataBearer {}

/**
 * <p>Returns the account configuration options associated with an Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, GetAccountConfigurationCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, GetAccountConfigurationCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * const client = new ACMClient(config);
 * const command = new GetAccountConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAccountConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetAccountConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ACMClientResolvedConfig | config} for ACMClient's `config` shape.
 *
 */
export class GetAccountConfigurationCommand extends $Command<
  GetAccountConfigurationCommandInput,
  GetAccountConfigurationCommandOutput,
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

  constructor(readonly input: GetAccountConfigurationCommandInput) {
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
  ): Handler<GetAccountConfigurationCommandInput, GetAccountConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetAccountConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ACMClient";
    const commandName = "GetAccountConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (input: any) => input,
      outputFilterSensitiveLog: GetAccountConfigurationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetAccountConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetAccountConfigurationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAccountConfigurationCommandOutput> {
    return deserializeAws_json1_1GetAccountConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
