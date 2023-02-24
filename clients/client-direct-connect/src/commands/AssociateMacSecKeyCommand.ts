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

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import {
  AssociateMacSecKeyRequest,
  AssociateMacSecKeyRequestFilterSensitiveLog,
  AssociateMacSecKeyResponse,
  AssociateMacSecKeyResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1AssociateMacSecKeyCommand,
  serializeAws_json1_1AssociateMacSecKeyCommand,
} from "../protocols/Aws_json1_1";

export interface AssociateMacSecKeyCommandInput extends AssociateMacSecKeyRequest {}
export interface AssociateMacSecKeyCommandOutput extends AssociateMacSecKeyResponse, __MetadataBearer {}

/**
 * <p>Associates a MAC Security (MACsec) Connection Key Name (CKN)/ Connectivity Association Key (CAK) pair with an Direct Connect dedicated connection.</p>
 *          <p>You must supply either the <code>secretARN,</code> or the CKN/CAK (<code>ckn</code> and <code>cak</code>) pair in the request.</p>
 *          <p>For information about MAC Security (MACsec) key considerations, see  <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/direct-connect-mac-sec-getting-started.html#mac-sec-key-consideration">MACsec pre-shared CKN/CAK key considerations </a> in the <i>Direct Connect User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, AssociateMacSecKeyCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, AssociateMacSecKeyCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new AssociateMacSecKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateMacSecKeyCommandInput} for command's `input` shape.
 * @see {@link AssociateMacSecKeyCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for DirectConnectClient's `config` shape.
 *
 */
export class AssociateMacSecKeyCommand extends $Command<
  AssociateMacSecKeyCommandInput,
  AssociateMacSecKeyCommandOutput,
  DirectConnectClientResolvedConfig
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

  constructor(readonly input: AssociateMacSecKeyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateMacSecKeyCommandInput, AssociateMacSecKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateMacSecKeyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "AssociateMacSecKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateMacSecKeyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AssociateMacSecKeyResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateMacSecKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AssociateMacSecKeyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateMacSecKeyCommandOutput> {
    return deserializeAws_json1_1AssociateMacSecKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
