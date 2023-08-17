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

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { GetBackupVaultAccessPolicyInput, GetBackupVaultAccessPolicyOutput } from "../models/models_0";
import { de_GetBackupVaultAccessPolicyCommand, se_GetBackupVaultAccessPolicyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetBackupVaultAccessPolicyCommand}.
 */
export interface GetBackupVaultAccessPolicyCommandInput extends GetBackupVaultAccessPolicyInput {}
/**
 * @public
 *
 * The output of {@link GetBackupVaultAccessPolicyCommand}.
 */
export interface GetBackupVaultAccessPolicyCommandOutput extends GetBackupVaultAccessPolicyOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns the access policy document that is associated with the named backup
 *          vault.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, GetBackupVaultAccessPolicyCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, GetBackupVaultAccessPolicyCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // GetBackupVaultAccessPolicyInput
 *   BackupVaultName: "STRING_VALUE", // required
 * };
 * const command = new GetBackupVaultAccessPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetBackupVaultAccessPolicyOutput
 * //   BackupVaultName: "STRING_VALUE",
 * //   BackupVaultArn: "STRING_VALUE",
 * //   Policy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetBackupVaultAccessPolicyCommandInput - {@link GetBackupVaultAccessPolicyCommandInput}
 * @returns {@link GetBackupVaultAccessPolicyCommandOutput}
 * @see {@link GetBackupVaultAccessPolicyCommandInput} for command's `input` shape.
 * @see {@link GetBackupVaultAccessPolicyCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *  <p>Indicates that a required parameter is missing.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource that is required for the action doesn't exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request failed due to a temporary failure of the server.</p>
 *
 * @throws {@link BackupServiceException}
 * <p>Base exception class for all service exceptions from Backup service.</p>
 *
 */
export class GetBackupVaultAccessPolicyCommand extends $Command<
  GetBackupVaultAccessPolicyCommandInput,
  GetBackupVaultAccessPolicyCommandOutput,
  BackupClientResolvedConfig
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
  constructor(readonly input: GetBackupVaultAccessPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetBackupVaultAccessPolicyCommandInput, GetBackupVaultAccessPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetBackupVaultAccessPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "GetBackupVaultAccessPolicyCommand";
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
  private serialize(input: GetBackupVaultAccessPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetBackupVaultAccessPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetBackupVaultAccessPolicyCommandOutput> {
    return de_GetBackupVaultAccessPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
