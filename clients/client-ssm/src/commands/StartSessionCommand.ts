// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { StartSessionRequest, StartSessionResponse } from "../models/models_1";
import { de_StartSessionCommand, se_StartSessionCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartSessionCommand}.
 */
export interface StartSessionCommandInput extends StartSessionRequest {}
/**
 * @public
 *
 * The output of {@link StartSessionCommand}.
 */
export interface StartSessionCommandOutput extends StartSessionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Initiates a connection to a target (for example, a managed node) for a Session Manager session.
 *    Returns a URL and token that can be used to open a WebSocket connection for sending input and
 *    receiving outputs.</p>
 *          <note>
 *             <p>Amazon Web Services CLI usage: <code>start-session</code> is an interactive command that requires the Session Manager
 *     plugin to be installed on the client machine making the call. For information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-install-plugin.html">Install
 *      the Session Manager plugin for the Amazon Web Services CLI</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
 *             <p>Amazon Web Services Tools for PowerShell usage: Start-SSMSession isn't currently supported by Amazon Web Services Tools
 *     for PowerShell on Windows local machines.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, StartSessionCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, StartSessionCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // StartSessionRequest
 *   Target: "STRING_VALUE", // required
 *   DocumentName: "STRING_VALUE",
 *   Reason: "STRING_VALUE",
 *   Parameters: { // SessionManagerParameters
 *     "<keys>": [ // SessionManagerParameterValueList
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new StartSessionCommand(input);
 * const response = await client.send(command);
 * // { // StartSessionResponse
 * //   SessionId: "STRING_VALUE",
 * //   TokenValue: "STRING_VALUE",
 * //   StreamUrl: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartSessionCommandInput - {@link StartSessionCommandInput}
 * @returns {@link StartSessionCommandOutput}
 * @see {@link StartSessionCommandInput} for command's `input` shape.
 * @see {@link StartSessionCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidDocument} (client fault)
 *  <p>The specified SSM document doesn't exist.</p>
 *
 * @throws {@link TargetNotConnected} (client fault)
 *  <p>The specified target managed node for the session isn't fully configured for use with Session Manager.
 *    For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-getting-started.html">Getting started with
 *     Session Manager</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. This error is also returned if you
 *    attempt to start a session on a managed node that is located in a different account or
 *    Region</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export class StartSessionCommand extends $Command<
  StartSessionCommandInput,
  StartSessionCommandOutput,
  SSMClientResolvedConfig
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

  /**
   * @public
   */
  constructor(readonly input: StartSessionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartSessionCommandInput, StartSessionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, StartSessionCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "StartSessionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: StartSessionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartSessionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartSessionCommandOutput> {
    return de_StartSessionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
