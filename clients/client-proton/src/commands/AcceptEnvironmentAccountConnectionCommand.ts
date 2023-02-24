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
  AcceptEnvironmentAccountConnectionInput,
  AcceptEnvironmentAccountConnectionInputFilterSensitiveLog,
  AcceptEnvironmentAccountConnectionOutput,
  AcceptEnvironmentAccountConnectionOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0AcceptEnvironmentAccountConnectionCommand,
  serializeAws_json1_0AcceptEnvironmentAccountConnectionCommand,
} from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

export interface AcceptEnvironmentAccountConnectionCommandInput extends AcceptEnvironmentAccountConnectionInput {}
export interface AcceptEnvironmentAccountConnectionCommandOutput
  extends AcceptEnvironmentAccountConnectionOutput,
    __MetadataBearer {}

/**
 * <p>In a management account, an environment account connection request is accepted. When the environment account connection request is accepted, Proton
 *       can use the associated IAM role to provision environment infrastructure resources in the associated environment account.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account
 *         connections</a> in the <i>Proton User guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, AcceptEnvironmentAccountConnectionCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, AcceptEnvironmentAccountConnectionCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const command = new AcceptEnvironmentAccountConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcceptEnvironmentAccountConnectionCommandInput} for command's `input` shape.
 * @see {@link AcceptEnvironmentAccountConnectionCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 */
export class AcceptEnvironmentAccountConnectionCommand extends $Command<
  AcceptEnvironmentAccountConnectionCommandInput,
  AcceptEnvironmentAccountConnectionCommandOutput,
  ProtonClientResolvedConfig
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

  constructor(readonly input: AcceptEnvironmentAccountConnectionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ProtonClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AcceptEnvironmentAccountConnectionCommandInput, AcceptEnvironmentAccountConnectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AcceptEnvironmentAccountConnectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ProtonClient";
    const commandName = "AcceptEnvironmentAccountConnectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AcceptEnvironmentAccountConnectionInputFilterSensitiveLog,
      outputFilterSensitiveLog: AcceptEnvironmentAccountConnectionOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AcceptEnvironmentAccountConnectionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_0AcceptEnvironmentAccountConnectionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AcceptEnvironmentAccountConnectionCommandOutput> {
    return deserializeAws_json1_0AcceptEnvironmentAccountConnectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
