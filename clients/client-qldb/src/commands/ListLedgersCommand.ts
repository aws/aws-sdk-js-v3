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

import { ListLedgersRequest, ListLedgersResponse } from "../models/models_0";
import { de_ListLedgersCommand, se_ListLedgersCommand } from "../protocols/Aws_restJson1";
import { QLDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QLDBClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListLedgersCommand}.
 */
export interface ListLedgersCommandInput extends ListLedgersRequest {}
/**
 * @public
 *
 * The output of {@link ListLedgersCommand}.
 */
export interface ListLedgersCommandOutput extends ListLedgersResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns all ledgers that are associated with the current Amazon Web Services account and
 *          Region.</p>
 *          <p>This action returns a maximum of <code>MaxResults</code> items and is paginated so that
 *          you can retrieve all the items by calling <code>ListLedgers</code> multiple times.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, ListLedgersCommand } from "@aws-sdk/client-qldb"; // ES Modules import
 * // const { QLDBClient, ListLedgersCommand } = require("@aws-sdk/client-qldb"); // CommonJS import
 * const client = new QLDBClient(config);
 * const input = { // ListLedgersRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListLedgersCommand(input);
 * const response = await client.send(command);
 * // { // ListLedgersResponse
 * //   Ledgers: [ // LedgerList
 * //     { // LedgerSummary
 * //       Name: "STRING_VALUE",
 * //       State: "CREATING" || "ACTIVE" || "DELETING" || "DELETED",
 * //       CreationDateTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLedgersCommandInput - {@link ListLedgersCommandInput}
 * @returns {@link ListLedgersCommandOutput}
 * @see {@link ListLedgersCommandInput} for command's `input` shape.
 * @see {@link ListLedgersCommandOutput} for command's `response` shape.
 * @see {@link QLDBClientResolvedConfig | config} for QLDBClient's `config` shape.
 *
 * @throws {@link QLDBServiceException}
 * <p>Base exception class for all service exceptions from QLDB service.</p>
 *
 */
export class ListLedgersCommand extends $Command<
  ListLedgersCommandInput,
  ListLedgersCommandOutput,
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
  constructor(readonly input: ListLedgersCommandInput) {
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
  ): Handler<ListLedgersCommandInput, ListLedgersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListLedgersCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QLDBClient";
    const commandName = "ListLedgersCommand";
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
  private serialize(input: ListLedgersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListLedgersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListLedgersCommandOutput> {
    return de_ListLedgersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
