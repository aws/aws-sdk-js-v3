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
import { ListBackupPlanVersionsInput, ListBackupPlanVersionsOutput } from "../models/models_0";
import { de_ListBackupPlanVersionsCommand, se_ListBackupPlanVersionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListBackupPlanVersionsCommand}.
 */
export interface ListBackupPlanVersionsCommandInput extends ListBackupPlanVersionsInput {}
/**
 * @public
 *
 * The output of {@link ListBackupPlanVersionsCommand}.
 */
export interface ListBackupPlanVersionsCommandOutput extends ListBackupPlanVersionsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns version metadata of your backup plans, including Amazon Resource Names (ARNs),
 *          backup plan IDs, creation and deletion dates, plan names, and version IDs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListBackupPlanVersionsCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListBackupPlanVersionsCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // ListBackupPlanVersionsInput
 *   BackupPlanId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListBackupPlanVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListBackupPlanVersionsOutput
 * //   NextToken: "STRING_VALUE",
 * //   BackupPlanVersionsList: [ // BackupPlanVersionsList
 * //     { // BackupPlansListMember
 * //       BackupPlanArn: "STRING_VALUE",
 * //       BackupPlanId: "STRING_VALUE",
 * //       CreationDate: new Date("TIMESTAMP"),
 * //       DeletionDate: new Date("TIMESTAMP"),
 * //       VersionId: "STRING_VALUE",
 * //       BackupPlanName: "STRING_VALUE",
 * //       CreatorRequestId: "STRING_VALUE",
 * //       LastExecutionDate: new Date("TIMESTAMP"),
 * //       AdvancedBackupSettings: [ // AdvancedBackupSettings
 * //         { // AdvancedBackupSetting
 * //           ResourceType: "STRING_VALUE",
 * //           BackupOptions: { // BackupOptions
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListBackupPlanVersionsCommandInput - {@link ListBackupPlanVersionsCommandInput}
 * @returns {@link ListBackupPlanVersionsCommandOutput}
 * @see {@link ListBackupPlanVersionsCommandInput} for command's `input` shape.
 * @see {@link ListBackupPlanVersionsCommandOutput} for command's `response` shape.
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
export class ListBackupPlanVersionsCommand extends $Command<
  ListBackupPlanVersionsCommandInput,
  ListBackupPlanVersionsCommandOutput,
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
  constructor(readonly input: ListBackupPlanVersionsCommandInput) {
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
  ): Handler<ListBackupPlanVersionsCommandInput, ListBackupPlanVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListBackupPlanVersionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "ListBackupPlanVersionsCommand";
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
  private serialize(input: ListBackupPlanVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListBackupPlanVersionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListBackupPlanVersionsCommandOutput> {
    return de_ListBackupPlanVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
