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
import { ListRecoveryPointsByLegalHoldInput, ListRecoveryPointsByLegalHoldOutput } from "../models/models_0";
import {
  de_ListRecoveryPointsByLegalHoldCommand,
  se_ListRecoveryPointsByLegalHoldCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListRecoveryPointsByLegalHoldCommand}.
 */
export interface ListRecoveryPointsByLegalHoldCommandInput extends ListRecoveryPointsByLegalHoldInput {}
/**
 * @public
 *
 * The output of {@link ListRecoveryPointsByLegalHoldCommand}.
 */
export interface ListRecoveryPointsByLegalHoldCommandOutput
  extends ListRecoveryPointsByLegalHoldOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>This action returns recovery point ARNs (Amazon Resource Names) of the
 *          specified legal hold.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListRecoveryPointsByLegalHoldCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListRecoveryPointsByLegalHoldCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // ListRecoveryPointsByLegalHoldInput
 *   LegalHoldId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListRecoveryPointsByLegalHoldCommand(input);
 * const response = await client.send(command);
 * // { // ListRecoveryPointsByLegalHoldOutput
 * //   RecoveryPoints: [ // RecoveryPointsList
 * //     { // RecoveryPointMember
 * //       RecoveryPointArn: "STRING_VALUE",
 * //       ResourceArn: "STRING_VALUE",
 * //       ResourceType: "STRING_VALUE",
 * //       BackupVaultName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRecoveryPointsByLegalHoldCommandInput - {@link ListRecoveryPointsByLegalHoldCommandInput}
 * @returns {@link ListRecoveryPointsByLegalHoldCommandOutput}
 * @see {@link ListRecoveryPointsByLegalHoldCommandInput} for command's `input` shape.
 * @see {@link ListRecoveryPointsByLegalHoldCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *  <p>Indicates that a required parameter is missing.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request failed due to a temporary failure of the server.</p>
 *
 * @throws {@link BackupServiceException}
 * <p>Base exception class for all service exceptions from Backup service.</p>
 *
 */
export class ListRecoveryPointsByLegalHoldCommand extends $Command<
  ListRecoveryPointsByLegalHoldCommandInput,
  ListRecoveryPointsByLegalHoldCommandOutput,
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
  constructor(readonly input: ListRecoveryPointsByLegalHoldCommandInput) {
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
  ): Handler<ListRecoveryPointsByLegalHoldCommandInput, ListRecoveryPointsByLegalHoldCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListRecoveryPointsByLegalHoldCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "ListRecoveryPointsByLegalHoldCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CryoControllerUserManager",
        operation: "ListRecoveryPointsByLegalHold",
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
  private serialize(input: ListRecoveryPointsByLegalHoldCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListRecoveryPointsByLegalHoldCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListRecoveryPointsByLegalHoldCommandOutput> {
    return de_ListRecoveryPointsByLegalHoldCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
