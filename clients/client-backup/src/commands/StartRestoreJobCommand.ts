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
import {
  StartRestoreJobInput,
  StartRestoreJobInputFilterSensitiveLog,
  StartRestoreJobOutput,
} from "../models/models_0";
import { de_StartRestoreJobCommand, se_StartRestoreJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartRestoreJobCommand}.
 */
export interface StartRestoreJobCommandInput extends StartRestoreJobInput {}
/**
 * @public
 *
 * The output of {@link StartRestoreJobCommand}.
 */
export interface StartRestoreJobCommandOutput extends StartRestoreJobOutput, __MetadataBearer {}

/**
 * @public
 * <p>Recovers the saved resource identified by an Amazon Resource Name (ARN).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, StartRestoreJobCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, StartRestoreJobCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // StartRestoreJobInput
 *   RecoveryPointArn: "STRING_VALUE", // required
 *   Metadata: { // Metadata // required
 *     "<keys>": "STRING_VALUE",
 *   },
 *   IamRoleArn: "STRING_VALUE",
 *   IdempotencyToken: "STRING_VALUE",
 *   ResourceType: "STRING_VALUE",
 *   CopySourceTagsToRestoredResource: true || false,
 * };
 * const command = new StartRestoreJobCommand(input);
 * const response = await client.send(command);
 * // { // StartRestoreJobOutput
 * //   RestoreJobId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartRestoreJobCommandInput - {@link StartRestoreJobCommandInput}
 * @returns {@link StartRestoreJobCommandOutput}
 * @see {@link StartRestoreJobCommandInput} for command's `input` shape.
 * @see {@link StartRestoreJobCommandOutput} for command's `response` shape.
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
export class StartRestoreJobCommand extends $Command<
  StartRestoreJobCommandInput,
  StartRestoreJobCommandOutput,
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
  constructor(readonly input: StartRestoreJobCommandInput) {
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
  ): Handler<StartRestoreJobCommandInput, StartRestoreJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartRestoreJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "StartRestoreJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartRestoreJobInputFilterSensitiveLog,
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
  private serialize(input: StartRestoreJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartRestoreJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartRestoreJobCommandOutput> {
    return de_StartRestoreJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
