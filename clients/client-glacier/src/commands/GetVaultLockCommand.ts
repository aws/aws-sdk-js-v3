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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import { GetVaultLockInput, GetVaultLockOutput } from "../models/models_0";
import { de_GetVaultLockCommand, se_GetVaultLockCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetVaultLockCommand}.
 */
export interface GetVaultLockCommandInput extends GetVaultLockInput {}
/**
 * @public
 *
 * The output of {@link GetVaultLockCommand}.
 */
export interface GetVaultLockCommandOutput extends GetVaultLockOutput, __MetadataBearer {}

/**
 * @public
 * <p>This operation retrieves the following attributes from the <code>lock-policy</code>
 *          subresource set on the specified vault: </p>
 *          <ul>
 *             <li>
 *                <p>The vault lock policy set on the vault.</p>
 *             </li>
 *             <li>
 *                <p>The state of the vault lock, which is either <code>InProgess</code> or
 *                   <code>Locked</code>.</p>
 *             </li>
 *             <li>
 *                <p>When the lock ID expires. The lock ID is used to complete the vault locking
 *                process.</p>
 *             </li>
 *             <li>
 *                <p>When the vault lock was initiated and put into the <code>InProgress</code>
 *                state.</p>
 *             </li>
 *          </ul>
 *
 *          <p>A vault lock is put into the <code>InProgress</code> state by calling <a>InitiateVaultLock</a>. A vault lock is put into the <code>Locked</code> state by
 *          calling <a>CompleteVaultLock</a>. You can abort the vault locking process by
 *          calling <a>AbortVaultLock</a>. For more information about the vault locking
 *          process, <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock.html">Amazon
 *             Glacier Vault Lock</a>. </p>
 *          <p>If there is no vault lock policy set on the vault, the operation returns a <code>404
 *             Not found</code> error. For more information about vault lock policies, <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock-policy.html">Amazon
 *             Glacier Access Control with Vault Lock Policies</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, GetVaultLockCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, GetVaultLockCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const input = { // GetVaultLockInput
 *   accountId: "STRING_VALUE", // required
 *   vaultName: "STRING_VALUE", // required
 * };
 * const command = new GetVaultLockCommand(input);
 * const response = await client.send(command);
 * // { // GetVaultLockOutput
 * //   Policy: "STRING_VALUE",
 * //   State: "STRING_VALUE",
 * //   ExpirationDate: "STRING_VALUE",
 * //   CreationDate: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetVaultLockCommandInput - {@link GetVaultLockCommandInput}
 * @returns {@link GetVaultLockCommandOutput}
 * @see {@link GetVaultLockCommandInput} for command's `input` shape.
 * @see {@link GetVaultLockCommandOutput} for command's `response` shape.
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
 * @example To retrieve vault lock-policy related attributes that are set on a vault
 * ```javascript
 * // The example retrieves the attributes from the lock-policy subresource set on the vault named examplevault.
 * const input = {
 *   "accountId": "-",
 *   "vaultName": "examplevault"
 * };
 * const command = new GetVaultLockCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "CreationDate": "exampledate",
 *   "ExpirationDate": "exampledate",
 *   "Policy": "{\"Version\":\"2012-10-17\",\"Statement\":[{\"Sid\":\"Define-vault-lock\",\"Effect\":\"Deny\",\"Principal\":{\"AWS\":\"arn:aws:iam::999999999999:root\"},\"Action\":\"glacier:DeleteArchive\",\"Resource\":\"arn:aws:glacier:us-west-2:999999999999:vaults/examplevault\",\"Condition\":{\"NumericLessThanEquals\":{\"glacier:ArchiveAgeinDays\":\"365\"}}}]}",
 *   "State": "InProgress"
 * }
 * *\/
 * // example id: to-retrieve-vault-lock-policy-related-attributes-that-are-set-on-a-vault-1481851363097
 * ```
 *
 */
export class GetVaultLockCommand extends $Command<
  GetVaultLockCommandInput,
  GetVaultLockCommandOutput,
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
  constructor(readonly input: GetVaultLockCommandInput) {
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
  ): Handler<GetVaultLockCommandInput, GetVaultLockCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetVaultLockCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlacierClient";
    const commandName = "GetVaultLockCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Glacier",
        operation: "GetVaultLock",
      },
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
  private serialize(input: GetVaultLockCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetVaultLockCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetVaultLockCommandOutput> {
    return de_GetVaultLockCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
