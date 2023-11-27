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
import {
  GetRestoreTestingSelectionInput,
  GetRestoreTestingSelectionOutput,
  GetRestoreTestingSelectionOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_GetRestoreTestingSelectionCommand, se_GetRestoreTestingSelectionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetRestoreTestingSelectionCommand}.
 */
export interface GetRestoreTestingSelectionCommandInput extends GetRestoreTestingSelectionInput {}
/**
 * @public
 *
 * The output of {@link GetRestoreTestingSelectionCommand}.
 */
export interface GetRestoreTestingSelectionCommandOutput extends GetRestoreTestingSelectionOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns RestoreTestingSelection, which displays resources
 *          and elements of the restore testing plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, GetRestoreTestingSelectionCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, GetRestoreTestingSelectionCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // GetRestoreTestingSelectionInput
 *   RestoreTestingPlanName: "STRING_VALUE", // required
 *   RestoreTestingSelectionName: "STRING_VALUE", // required
 * };
 * const command = new GetRestoreTestingSelectionCommand(input);
 * const response = await client.send(command);
 * // { // GetRestoreTestingSelectionOutput
 * //   RestoreTestingSelection: { // RestoreTestingSelectionForGet
 * //     CreationTime: new Date("TIMESTAMP"), // required
 * //     CreatorRequestId: "STRING_VALUE",
 * //     IamRoleArn: "STRING_VALUE", // required
 * //     ProtectedResourceArns: [ // stringList
 * //       "STRING_VALUE",
 * //     ],
 * //     ProtectedResourceConditions: { // ProtectedResourceConditions
 * //       StringEquals: [ // KeyValueList
 * //         { // KeyValue
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       StringNotEquals: [
 * //         {
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //     ProtectedResourceType: "STRING_VALUE", // required
 * //     RestoreMetadataOverrides: { // SensitiveStringMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     RestoreTestingPlanName: "STRING_VALUE", // required
 * //     RestoreTestingSelectionName: "STRING_VALUE", // required
 * //     ValidationWindowHours: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetRestoreTestingSelectionCommandInput - {@link GetRestoreTestingSelectionCommandInput}
 * @returns {@link GetRestoreTestingSelectionCommandOutput}
 * @see {@link GetRestoreTestingSelectionCommandInput} for command's `input` shape.
 * @see {@link GetRestoreTestingSelectionCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
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
export class GetRestoreTestingSelectionCommand extends $Command<
  GetRestoreTestingSelectionCommandInput,
  GetRestoreTestingSelectionCommandOutput,
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
  constructor(readonly input: GetRestoreTestingSelectionCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetRestoreTestingSelectionCommandInput, GetRestoreTestingSelectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetRestoreTestingSelectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "GetRestoreTestingSelectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetRestoreTestingSelectionOutputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "CryoControllerUserManager",
        operation: "GetRestoreTestingSelection",
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
  private serialize(input: GetRestoreTestingSelectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetRestoreTestingSelectionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetRestoreTestingSelectionCommandOutput> {
    return de_GetRestoreTestingSelectionCommand(output, context);
  }
}
