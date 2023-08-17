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

import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import { GetVaultAccessPolicyInput, GetVaultAccessPolicyOutput } from "../models/models_0";
import { de_GetVaultAccessPolicyCommand, se_GetVaultAccessPolicyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetVaultAccessPolicyCommand}.
 */
export interface GetVaultAccessPolicyCommandInput extends GetVaultAccessPolicyInput {}
/**
 * @public
 *
 * The output of {@link GetVaultAccessPolicyCommand}.
 */
export interface GetVaultAccessPolicyCommandOutput extends GetVaultAccessPolicyOutput, __MetadataBearer {}

/**
 * @public
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
 * const input = { // GetVaultAccessPolicyInput
 *   accountId: "STRING_VALUE", // required
 *   vaultName: "STRING_VALUE", // required
 * };
 * const command = new GetVaultAccessPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetVaultAccessPolicyOutput
 * //   policy: { // VaultAccessPolicy
 * //     Policy: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetVaultAccessPolicyCommandInput - {@link GetVaultAccessPolicyCommandInput}
 * @returns {@link GetVaultAccessPolicyCommandOutput}
 * @see {@link GetVaultAccessPolicyCommandInput} for command's `input` shape.
 * @see {@link GetVaultAccessPolicyCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for GlacierClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Returned if a parameter of the request is incorrectly specified.</p>
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *  <p>Returned if a required header or parameter is missing from the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Returned if the specified resource (such as a vault, upload ID, or job ID) doesn't
 *          exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>Returned if the service cannot complete the request.</p>
 *
 * @throws {@link GlacierServiceException}
 * <p>Base exception class for all service exceptions from Glacier service.</p>
 *
 * @example To  get the access-policy set on the vault
 * ```javascript
 * // The example retrieves the access-policy set on the vault named example-vault.
 * const input = {
 *   "accountId": "-",
 *   "vaultName": "example-vault"
 * };
 * const command = new GetVaultAccessPolicyCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "policy": {
 *     "Policy": "{\"Version\":\"2012-10-17\",\"Statement\":[{\"Sid\":\"Define-owner-access-rights\",\"Effect\":\"Allow\",\"Principal\":{\"AWS\":\"arn:aws:iam::999999999999:root\"},\"Action\":\"glacier:DeleteArchive\",\"Resource\":\"arn:aws:glacier:us-west-2:999999999999:vaults/examplevault\"}]}"
 *   }
 * }
 * *\/
 * // example id: to--get-the-access-policy-set-on-the-vault-1481936004590
 * ```
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

  /**
   * @public
   */
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
  private serialize(input: GetVaultAccessPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetVaultAccessPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetVaultAccessPolicyCommandOutput> {
    return de_GetVaultAccessPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
