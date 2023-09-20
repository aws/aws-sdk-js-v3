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
import { GetLegalHoldInput, GetLegalHoldOutput } from "../models/models_0";
import { de_GetLegalHoldCommand, se_GetLegalHoldCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetLegalHoldCommand}.
 */
export interface GetLegalHoldCommandInput extends GetLegalHoldInput {}
/**
 * @public
 *
 * The output of {@link GetLegalHoldCommand}.
 */
export interface GetLegalHoldCommandOutput extends GetLegalHoldOutput, __MetadataBearer {}

/**
 * @public
 * <p>This action returns details for a specified legal hold. The details are the
 *          body of a legal hold in JSON format, in addition to metadata.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, GetLegalHoldCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, GetLegalHoldCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // GetLegalHoldInput
 *   LegalHoldId: "STRING_VALUE", // required
 * };
 * const command = new GetLegalHoldCommand(input);
 * const response = await client.send(command);
 * // { // GetLegalHoldOutput
 * //   Title: "STRING_VALUE",
 * //   Status: "CREATING" || "ACTIVE" || "CANCELING" || "CANCELED",
 * //   Description: "STRING_VALUE",
 * //   CancelDescription: "STRING_VALUE",
 * //   LegalHoldId: "STRING_VALUE",
 * //   LegalHoldArn: "STRING_VALUE",
 * //   CreationDate: new Date("TIMESTAMP"),
 * //   CancellationDate: new Date("TIMESTAMP"),
 * //   RetainRecordUntil: new Date("TIMESTAMP"),
 * //   RecoveryPointSelection: { // RecoveryPointSelection
 * //     VaultNames: [ // VaultNames
 * //       "STRING_VALUE",
 * //     ],
 * //     ResourceIdentifiers: [ // ResourceIdentifiers
 * //       "STRING_VALUE",
 * //     ],
 * //     DateRange: { // DateRange
 * //       FromDate: new Date("TIMESTAMP"), // required
 * //       ToDate: new Date("TIMESTAMP"), // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetLegalHoldCommandInput - {@link GetLegalHoldCommandInput}
 * @returns {@link GetLegalHoldCommandOutput}
 * @see {@link GetLegalHoldCommandInput} for command's `input` shape.
 * @see {@link GetLegalHoldCommandOutput} for command's `response` shape.
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
export class GetLegalHoldCommand extends $Command<
  GetLegalHoldCommandInput,
  GetLegalHoldCommandOutput,
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
  constructor(readonly input: GetLegalHoldCommandInput) {
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
  ): Handler<GetLegalHoldCommandInput, GetLegalHoldCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetLegalHoldCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "GetLegalHoldCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CryoControllerUserManager",
        operation: "GetLegalHold",
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
  private serialize(input: GetLegalHoldCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetLegalHoldCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetLegalHoldCommandOutput> {
    return de_GetLegalHoldCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
