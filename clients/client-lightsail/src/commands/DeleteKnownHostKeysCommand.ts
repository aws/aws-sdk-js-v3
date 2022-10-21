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
  DeleteKnownHostKeysRequest,
  DeleteKnownHostKeysRequestFilterSensitiveLog,
  DeleteKnownHostKeysResult,
  DeleteKnownHostKeysResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeleteKnownHostKeysCommand,
  serializeAws_json1_1DeleteKnownHostKeysCommand,
} from "../protocols/Aws_json1_1";

export interface DeleteKnownHostKeysCommandInput extends DeleteKnownHostKeysRequest {}
export interface DeleteKnownHostKeysCommandOutput extends DeleteKnownHostKeysResult, __MetadataBearer {}

/**
 * <p>Deletes the known host key or certificate used by the Amazon Lightsail browser-based SSH or
 *       RDP clients to authenticate an instance. This operation enables the Lightsail browser-based
 *       SSH or RDP clients to connect to the instance after a host key mismatch.</p>
 *          <important>
 *             <p>Perform this operation only if you were expecting the host key or certificate mismatch
 *         or if you are familiar with the new host key or certificate on the instance. For more
 *         information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-troubleshooting-browser-based-ssh-rdp-client-connection">Troubleshooting connection issues when using the Amazon Lightsail browser-based SSH or RDP
 *           client</a>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, DeleteKnownHostKeysCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, DeleteKnownHostKeysCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new DeleteKnownHostKeysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteKnownHostKeysCommandInput} for command's `input` shape.
 * @see {@link DeleteKnownHostKeysCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 */
export class DeleteKnownHostKeysCommand extends $Command<
  DeleteKnownHostKeysCommandInput,
  DeleteKnownHostKeysCommandOutput,
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

  constructor(readonly input: DeleteKnownHostKeysCommandInput) {
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
  ): Handler<DeleteKnownHostKeysCommandInput, DeleteKnownHostKeysCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteKnownHostKeysCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "DeleteKnownHostKeysCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteKnownHostKeysRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteKnownHostKeysResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteKnownHostKeysCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteKnownHostKeysCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteKnownHostKeysCommandOutput> {
    return deserializeAws_json1_1DeleteKnownHostKeysCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
