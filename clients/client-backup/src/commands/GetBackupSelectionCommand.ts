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
import { GetBackupSelectionInput, GetBackupSelectionOutput } from "../models/models_0";
import { de_GetBackupSelectionCommand, se_GetBackupSelectionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetBackupSelectionCommand}.
 */
export interface GetBackupSelectionCommandInput extends GetBackupSelectionInput {}
/**
 * @public
 *
 * The output of {@link GetBackupSelectionCommand}.
 */
export interface GetBackupSelectionCommandOutput extends GetBackupSelectionOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns selection metadata and a document in JSON format that specifies a list of
 *          resources that are associated with a backup plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, GetBackupSelectionCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, GetBackupSelectionCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // GetBackupSelectionInput
 *   BackupPlanId: "STRING_VALUE", // required
 *   SelectionId: "STRING_VALUE", // required
 * };
 * const command = new GetBackupSelectionCommand(input);
 * const response = await client.send(command);
 * // { // GetBackupSelectionOutput
 * //   BackupSelection: { // BackupSelection
 * //     SelectionName: "STRING_VALUE", // required
 * //     IamRoleArn: "STRING_VALUE", // required
 * //     Resources: [ // ResourceArns
 * //       "STRING_VALUE",
 * //     ],
 * //     ListOfTags: [ // ListOfTags
 * //       { // Condition
 * //         ConditionType: "STRINGEQUALS", // required
 * //         ConditionKey: "STRING_VALUE", // required
 * //         ConditionValue: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     NotResources: [
 * //       "STRING_VALUE",
 * //     ],
 * //     Conditions: { // Conditions
 * //       StringEquals: [ // ConditionParameters
 * //         { // ConditionParameter
 * //           ConditionKey: "STRING_VALUE",
 * //           ConditionValue: "STRING_VALUE",
 * //         },
 * //       ],
 * //       StringNotEquals: [
 * //         {
 * //           ConditionKey: "STRING_VALUE",
 * //           ConditionValue: "STRING_VALUE",
 * //         },
 * //       ],
 * //       StringLike: [
 * //         {
 * //           ConditionKey: "STRING_VALUE",
 * //           ConditionValue: "STRING_VALUE",
 * //         },
 * //       ],
 * //       StringNotLike: [
 * //         {
 * //           ConditionKey: "STRING_VALUE",
 * //           ConditionValue: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   SelectionId: "STRING_VALUE",
 * //   BackupPlanId: "STRING_VALUE",
 * //   CreationDate: new Date("TIMESTAMP"),
 * //   CreatorRequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetBackupSelectionCommandInput - {@link GetBackupSelectionCommandInput}
 * @returns {@link GetBackupSelectionCommandOutput}
 * @see {@link GetBackupSelectionCommandInput} for command's `input` shape.
 * @see {@link GetBackupSelectionCommandOutput} for command's `response` shape.
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
export class GetBackupSelectionCommand extends $Command<
  GetBackupSelectionCommandInput,
  GetBackupSelectionCommandOutput,
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
  constructor(readonly input: GetBackupSelectionCommandInput) {
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
  ): Handler<GetBackupSelectionCommandInput, GetBackupSelectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetBackupSelectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "GetBackupSelectionCommand";
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
  private serialize(input: GetBackupSelectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetBackupSelectionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBackupSelectionCommandOutput> {
    return de_GetBackupSelectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
