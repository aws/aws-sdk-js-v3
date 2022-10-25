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

import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import {
  GetVaultAccessPolicyInput,
  GetVaultAccessPolicyInputFilterSensitiveLog,
  GetVaultAccessPolicyOutput,
  GetVaultAccessPolicyOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetVaultAccessPolicyCommand,
  serializeAws_restJson1GetVaultAccessPolicyCommand,
} from "../protocols/Aws_restJson1";

export interface GetVaultAccessPolicyCommandInput extends GetVaultAccessPolicyInput {}
export interface GetVaultAccessPolicyCommandOutput extends GetVaultAccessPolicyOutput, __MetadataBearer {}

/**
 * <p>This operation retrieves the <code>access-policy</code> subresource set on the vault;
 *          for more information on setting this subresource, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-SetVaultAccessPolicy.html">Set Vault Access Policy
 *             (PUT access-policy)</a>. If there is no access policy set on the vault, the
 *          operation returns a <code>404 Not found</code> error. For more information about vault
 *          access policies, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-access-policy.html">Amazon Glacier Access Control
 *             with Vault Access Policies</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, GetVaultAccessPolicyCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, GetVaultAccessPolicyCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const command = new GetVaultAccessPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetVaultAccessPolicyCommandInput} for command's `input` shape.
 * @see {@link GetVaultAccessPolicyCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for GlacierClient's `config` shape.
 *
 */
export class GetVaultAccessPolicyCommand extends $Command<
  GetVaultAccessPolicyCommandInput,
  GetVaultAccessPolicyCommandOutput,
  GlacierClientResolvedConfig
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

  constructor(readonly input: GetVaultAccessPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlacierClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetVaultAccessPolicyCommandInput, GetVaultAccessPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetVaultAccessPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlacierClient";
    const commandName = "GetVaultAccessPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetVaultAccessPolicyInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetVaultAccessPolicyOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetVaultAccessPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetVaultAccessPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetVaultAccessPolicyCommandOutput> {
    return deserializeAws_restJson1GetVaultAccessPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
