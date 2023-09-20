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
  CreateLegalHoldInput,
  CreateLegalHoldInputFilterSensitiveLog,
  CreateLegalHoldOutput,
} from "../models/models_0";
import { de_CreateLegalHoldCommand, se_CreateLegalHoldCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateLegalHoldCommand}.
 */
export interface CreateLegalHoldCommandInput extends CreateLegalHoldInput {}
/**
 * @public
 *
 * The output of {@link CreateLegalHoldCommand}.
 */
export interface CreateLegalHoldCommandOutput extends CreateLegalHoldOutput, __MetadataBearer {}

/**
 * @public
 * <p>This action creates a legal hold on a recovery point (backup). A legal hold
 *          is a restraint on altering or deleting a backup until an authorized user cancels the
 *          legal hold. Any actions to delete or disassociate a recovery point will fail with
 *          an error if one or more active legal holds are on the recovery point.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, CreateLegalHoldCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, CreateLegalHoldCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // CreateLegalHoldInput
 *   Title: "STRING_VALUE", // required
 *   Description: "STRING_VALUE", // required
 *   IdempotencyToken: "STRING_VALUE",
 *   RecoveryPointSelection: { // RecoveryPointSelection
 *     VaultNames: [ // VaultNames
 *       "STRING_VALUE",
 *     ],
 *     ResourceIdentifiers: [ // ResourceIdentifiers
 *       "STRING_VALUE",
 *     ],
 *     DateRange: { // DateRange
 *       FromDate: new Date("TIMESTAMP"), // required
 *       ToDate: new Date("TIMESTAMP"), // required
 *     },
 *   },
 *   Tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateLegalHoldCommand(input);
 * const response = await client.send(command);
 * // { // CreateLegalHoldOutput
 * //   Title: "STRING_VALUE",
 * //   Status: "CREATING" || "ACTIVE" || "CANCELING" || "CANCELED",
 * //   Description: "STRING_VALUE",
 * //   LegalHoldId: "STRING_VALUE",
 * //   LegalHoldArn: "STRING_VALUE",
 * //   CreationDate: new Date("TIMESTAMP"),
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
 * @param CreateLegalHoldCommandInput - {@link CreateLegalHoldCommandInput}
 * @returns {@link CreateLegalHoldCommandOutput}
 * @see {@link CreateLegalHoldCommandInput} for command's `input` shape.
 * @see {@link CreateLegalHoldCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit in the request has been exceeded; for example, a maximum number of items allowed
 *          in a request.</p>
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
export class CreateLegalHoldCommand extends $Command<
  CreateLegalHoldCommandInput,
  CreateLegalHoldCommandOutput,
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
  constructor(readonly input: CreateLegalHoldCommandInput) {
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
  ): Handler<CreateLegalHoldCommandInput, CreateLegalHoldCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateLegalHoldCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "CreateLegalHoldCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateLegalHoldInputFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CryoControllerUserManager",
        operation: "CreateLegalHold",
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
  private serialize(input: CreateLegalHoldCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateLegalHoldCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateLegalHoldCommandOutput> {
    return de_CreateLegalHoldCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
