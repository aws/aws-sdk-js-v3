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
import { ListLegalHoldsInput, ListLegalHoldsOutput } from "../models/models_0";
import { de_ListLegalHoldsCommand, se_ListLegalHoldsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListLegalHoldsCommand}.
 */
export interface ListLegalHoldsCommandInput extends ListLegalHoldsInput {}
/**
 * @public
 *
 * The output of {@link ListLegalHoldsCommand}.
 */
export interface ListLegalHoldsCommandOutput extends ListLegalHoldsOutput, __MetadataBearer {}

/**
 * @public
 * <p>This action returns metadata about active and previous legal holds.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListLegalHoldsCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListLegalHoldsCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // ListLegalHoldsInput
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListLegalHoldsCommand(input);
 * const response = await client.send(command);
 * // { // ListLegalHoldsOutput
 * //   NextToken: "STRING_VALUE",
 * //   LegalHolds: [ // LegalHoldsList
 * //     { // LegalHold
 * //       Title: "STRING_VALUE",
 * //       Status: "CREATING" || "ACTIVE" || "CANCELING" || "CANCELED",
 * //       Description: "STRING_VALUE",
 * //       LegalHoldId: "STRING_VALUE",
 * //       LegalHoldArn: "STRING_VALUE",
 * //       CreationDate: new Date("TIMESTAMP"),
 * //       CancellationDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListLegalHoldsCommandInput - {@link ListLegalHoldsCommandInput}
 * @returns {@link ListLegalHoldsCommandOutput}
 * @see {@link ListLegalHoldsCommandInput} for command's `input` shape.
 * @see {@link ListLegalHoldsCommandOutput} for command's `response` shape.
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
export class ListLegalHoldsCommand extends $Command<
  ListLegalHoldsCommandInput,
  ListLegalHoldsCommandOutput,
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
  constructor(readonly input: ListLegalHoldsCommandInput) {
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
  ): Handler<ListLegalHoldsCommandInput, ListLegalHoldsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListLegalHoldsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "ListLegalHoldsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CryoControllerUserManager",
        operation: "ListLegalHolds",
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
  private serialize(input: ListLegalHoldsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListLegalHoldsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListLegalHoldsCommandOutput> {
    return de_ListLegalHoldsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
