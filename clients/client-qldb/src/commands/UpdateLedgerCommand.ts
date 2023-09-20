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

import { UpdateLedgerRequest, UpdateLedgerResponse } from "../models/models_0";
import { de_UpdateLedgerCommand, se_UpdateLedgerCommand } from "../protocols/Aws_restJson1";
import { QLDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QLDBClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateLedgerCommand}.
 */
export interface UpdateLedgerCommandInput extends UpdateLedgerRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLedgerCommand}.
 */
export interface UpdateLedgerCommandOutput extends UpdateLedgerResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates properties on a ledger.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, UpdateLedgerCommand } from "@aws-sdk/client-qldb"; // ES Modules import
 * // const { QLDBClient, UpdateLedgerCommand } = require("@aws-sdk/client-qldb"); // CommonJS import
 * const client = new QLDBClient(config);
 * const input = { // UpdateLedgerRequest
 *   Name: "STRING_VALUE", // required
 *   DeletionProtection: true || false,
 *   KmsKey: "STRING_VALUE",
 * };
 * const command = new UpdateLedgerCommand(input);
 * const response = await client.send(command);
 * // { // UpdateLedgerResponse
 * //   Name: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * //   State: "CREATING" || "ACTIVE" || "DELETING" || "DELETED",
 * //   CreationDateTime: new Date("TIMESTAMP"),
 * //   DeletionProtection: true || false,
 * //   EncryptionDescription: { // LedgerEncryptionDescription
 * //     KmsKeyArn: "STRING_VALUE", // required
 * //     EncryptionStatus: "ENABLED" || "UPDATING" || "KMS_KEY_INACCESSIBLE", // required
 * //     InaccessibleKmsKeyDateTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateLedgerCommandInput - {@link UpdateLedgerCommandInput}
 * @returns {@link UpdateLedgerCommandOutput}
 * @see {@link UpdateLedgerCommandInput} for command's `input` shape.
 * @see {@link UpdateLedgerCommandOutput} for command's `response` shape.
 * @see {@link QLDBClientResolvedConfig | config} for QLDBClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters in the request aren't valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist.</p>
 *
 * @throws {@link QLDBServiceException}
 * <p>Base exception class for all service exceptions from QLDB service.</p>
 *
 */
export class UpdateLedgerCommand extends $Command<
  UpdateLedgerCommandInput,
  UpdateLedgerCommandOutput,
  QLDBClientResolvedConfig
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
  constructor(readonly input: UpdateLedgerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QLDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateLedgerCommandInput, UpdateLedgerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateLedgerCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QLDBClient";
    const commandName = "UpdateLedgerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonQLDB",
        operation: "UpdateLedger",
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
  private serialize(input: UpdateLedgerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateLedgerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateLedgerCommandOutput> {
    return de_UpdateLedgerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
