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

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { PutRestoreValidationResultInput } from "../models/models_0";
import { de_PutRestoreValidationResultCommand, se_PutRestoreValidationResultCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutRestoreValidationResultCommand}.
 */
export interface PutRestoreValidationResultCommandInput extends PutRestoreValidationResultInput {}
/**
 * @public
 *
 * The output of {@link PutRestoreValidationResultCommand}.
 */
export interface PutRestoreValidationResultCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>This request allows you to send your independent self-run
 *          restore test validation results.
 *          <code>RestoreJobId</code> and <code>ValidationStatus</code>
 *          are required. Optionally, you can input a
 *          <code>ValidationStatusMessage</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, PutRestoreValidationResultCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, PutRestoreValidationResultCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // PutRestoreValidationResultInput
 *   RestoreJobId: "STRING_VALUE", // required
 *   ValidationStatus: "FAILED" || "SUCCESSFUL" || "TIMED_OUT" || "VALIDATING", // required
 *   ValidationStatusMessage: "STRING_VALUE",
 * };
 * const command = new PutRestoreValidationResultCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutRestoreValidationResultCommandInput - {@link PutRestoreValidationResultCommandInput}
 * @returns {@link PutRestoreValidationResultCommandOutput}
 * @see {@link PutRestoreValidationResultCommandInput} for command's `input` shape.
 * @see {@link PutRestoreValidationResultCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *          parameter is of the wrong type.</p>
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
export class PutRestoreValidationResultCommand extends $Command<
  PutRestoreValidationResultCommandInput,
  PutRestoreValidationResultCommandOutput,
  BackupClientResolvedConfig
> {
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
  constructor(readonly input: PutRestoreValidationResultCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutRestoreValidationResultCommandInput, PutRestoreValidationResultCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutRestoreValidationResultCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "PutRestoreValidationResultCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CryoControllerUserManager",
        operation: "PutRestoreValidationResult",
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
  private serialize(input: PutRestoreValidationResultCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutRestoreValidationResultCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutRestoreValidationResultCommandOutput> {
    return de_PutRestoreValidationResultCommand(output, context);
  }
}
