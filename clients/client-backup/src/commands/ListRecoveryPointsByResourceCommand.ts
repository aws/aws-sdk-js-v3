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
import { ListRecoveryPointsByResourceInput, ListRecoveryPointsByResourceOutput } from "../models/models_0";
import {
  de_ListRecoveryPointsByResourceCommand,
  se_ListRecoveryPointsByResourceCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListRecoveryPointsByResourceCommand}.
 */
export interface ListRecoveryPointsByResourceCommandInput extends ListRecoveryPointsByResourceInput {}
/**
 * @public
 *
 * The output of {@link ListRecoveryPointsByResourceCommand}.
 */
export interface ListRecoveryPointsByResourceCommandOutput
  extends ListRecoveryPointsByResourceOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns detailed information about all the recovery points of the type specified by a
 *          resource Amazon Resource Name (ARN).</p>
 *          <note>
 *             <p>For Amazon EFS and Amazon EC2, this action only lists recovery points
 *             created by Backup.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListRecoveryPointsByResourceCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListRecoveryPointsByResourceCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // ListRecoveryPointsByResourceInput
 *   ResourceArn: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListRecoveryPointsByResourceCommand(input);
 * const response = await client.send(command);
 * // { // ListRecoveryPointsByResourceOutput
 * //   NextToken: "STRING_VALUE",
 * //   RecoveryPoints: [ // RecoveryPointByResourceList
 * //     { // RecoveryPointByResource
 * //       RecoveryPointArn: "STRING_VALUE",
 * //       CreationDate: new Date("TIMESTAMP"),
 * //       Status: "COMPLETED" || "PARTIAL" || "DELETING" || "EXPIRED",
 * //       StatusMessage: "STRING_VALUE",
 * //       EncryptionKeyArn: "STRING_VALUE",
 * //       BackupSizeBytes: Number("long"),
 * //       BackupVaultName: "STRING_VALUE",
 * //       IsParent: true || false,
 * //       ParentRecoveryPointArn: "STRING_VALUE",
 * //       ResourceName: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListRecoveryPointsByResourceCommandInput - {@link ListRecoveryPointsByResourceCommandInput}
 * @returns {@link ListRecoveryPointsByResourceCommandOutput}
 * @see {@link ListRecoveryPointsByResourceCommandInput} for command's `input` shape.
 * @see {@link ListRecoveryPointsByResourceCommandOutput} for command's `response` shape.
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
export class ListRecoveryPointsByResourceCommand extends $Command<
  ListRecoveryPointsByResourceCommandInput,
  ListRecoveryPointsByResourceCommandOutput,
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
  constructor(readonly input: ListRecoveryPointsByResourceCommandInput) {
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
  ): Handler<ListRecoveryPointsByResourceCommandInput, ListRecoveryPointsByResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListRecoveryPointsByResourceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "ListRecoveryPointsByResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CryoControllerUserManager",
        operation: "ListRecoveryPointsByResource",
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
  private serialize(input: ListRecoveryPointsByResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListRecoveryPointsByResourceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListRecoveryPointsByResourceCommandOutput> {
    return de_ListRecoveryPointsByResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
