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
import { ListRestoreTestingSelectionsInput, ListRestoreTestingSelectionsOutput } from "../models/models_0";
import {
  de_ListRestoreTestingSelectionsCommand,
  se_ListRestoreTestingSelectionsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListRestoreTestingSelectionsCommand}.
 */
export interface ListRestoreTestingSelectionsCommandInput extends ListRestoreTestingSelectionsInput {}
/**
 * @public
 *
 * The output of {@link ListRestoreTestingSelectionsCommand}.
 */
export interface ListRestoreTestingSelectionsCommandOutput
  extends ListRestoreTestingSelectionsOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of restore testing selections. Can be filtered
 *          by <code>MaxResults</code> and <code>RestoreTestingPlanName</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListRestoreTestingSelectionsCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListRestoreTestingSelectionsCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // ListRestoreTestingSelectionsInput
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   RestoreTestingPlanName: "STRING_VALUE", // required
 * };
 * const command = new ListRestoreTestingSelectionsCommand(input);
 * const response = await client.send(command);
 * // { // ListRestoreTestingSelectionsOutput
 * //   NextToken: "STRING_VALUE",
 * //   RestoreTestingSelections: [ // RestoreTestingSelections // required
 * //     { // RestoreTestingSelectionForList
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       IamRoleArn: "STRING_VALUE", // required
 * //       ProtectedResourceType: "STRING_VALUE", // required
 * //       RestoreTestingPlanName: "STRING_VALUE", // required
 * //       RestoreTestingSelectionName: "STRING_VALUE", // required
 * //       ValidationWindowHours: Number("int"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListRestoreTestingSelectionsCommandInput - {@link ListRestoreTestingSelectionsCommandInput}
 * @returns {@link ListRestoreTestingSelectionsCommandOutput}
 * @see {@link ListRestoreTestingSelectionsCommandInput} for command's `input` shape.
 * @see {@link ListRestoreTestingSelectionsCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
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
export class ListRestoreTestingSelectionsCommand extends $Command<
  ListRestoreTestingSelectionsCommandInput,
  ListRestoreTestingSelectionsCommandOutput,
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
  constructor(readonly input: ListRestoreTestingSelectionsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRestoreTestingSelectionsCommandInput, ListRestoreTestingSelectionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListRestoreTestingSelectionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "ListRestoreTestingSelectionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CryoControllerUserManager",
        operation: "ListRestoreTestingSelections",
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
  private serialize(input: ListRestoreTestingSelectionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListRestoreTestingSelectionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListRestoreTestingSelectionsCommandOutput> {
    return de_ListRestoreTestingSelectionsCommand(output, context);
  }
}
