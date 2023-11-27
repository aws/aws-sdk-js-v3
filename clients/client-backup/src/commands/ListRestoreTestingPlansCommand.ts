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
import { ListRestoreTestingPlansInput, ListRestoreTestingPlansOutput } from "../models/models_0";
import { de_ListRestoreTestingPlansCommand, se_ListRestoreTestingPlansCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListRestoreTestingPlansCommand}.
 */
export interface ListRestoreTestingPlansCommandInput extends ListRestoreTestingPlansInput {}
/**
 * @public
 *
 * The output of {@link ListRestoreTestingPlansCommand}.
 */
export interface ListRestoreTestingPlansCommandOutput extends ListRestoreTestingPlansOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of restore testing plans.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListRestoreTestingPlansCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListRestoreTestingPlansCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // ListRestoreTestingPlansInput
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListRestoreTestingPlansCommand(input);
 * const response = await client.send(command);
 * // { // ListRestoreTestingPlansOutput
 * //   NextToken: "STRING_VALUE",
 * //   RestoreTestingPlans: [ // RestoreTestingPlans // required
 * //     { // RestoreTestingPlanForList
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       LastExecutionTime: new Date("TIMESTAMP"),
 * //       LastUpdateTime: new Date("TIMESTAMP"),
 * //       RestoreTestingPlanArn: "STRING_VALUE", // required
 * //       RestoreTestingPlanName: "STRING_VALUE", // required
 * //       ScheduleExpression: "STRING_VALUE", // required
 * //       ScheduleExpressionTimezone: "STRING_VALUE",
 * //       StartWindowHours: Number("int"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListRestoreTestingPlansCommandInput - {@link ListRestoreTestingPlansCommandInput}
 * @returns {@link ListRestoreTestingPlansCommandOutput}
 * @see {@link ListRestoreTestingPlansCommandInput} for command's `input` shape.
 * @see {@link ListRestoreTestingPlansCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request failed due to a temporary failure of the server.</p>
 *
 * @throws {@link BackupServiceException}
 * <p>Base exception class for all service exceptions from Backup service.</p>
 *
 */
export class ListRestoreTestingPlansCommand extends $Command<
  ListRestoreTestingPlansCommandInput,
  ListRestoreTestingPlansCommandOutput,
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
  constructor(readonly input: ListRestoreTestingPlansCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRestoreTestingPlansCommandInput, ListRestoreTestingPlansCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListRestoreTestingPlansCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "ListRestoreTestingPlansCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CryoControllerUserManager",
        operation: "ListRestoreTestingPlans",
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
  private serialize(input: ListRestoreTestingPlansCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListRestoreTestingPlansCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListRestoreTestingPlansCommandOutput> {
    return de_ListRestoreTestingPlansCommand(output, context);
  }
}
