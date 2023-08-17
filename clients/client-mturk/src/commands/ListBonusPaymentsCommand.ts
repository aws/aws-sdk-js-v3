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

import { ListBonusPaymentsRequest, ListBonusPaymentsResponse } from "../models/models_0";
import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { de_ListBonusPaymentsCommand, se_ListBonusPaymentsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListBonusPaymentsCommand}.
 */
export interface ListBonusPaymentsCommandInput extends ListBonusPaymentsRequest {}
/**
 * @public
 *
 * The output of {@link ListBonusPaymentsCommand}.
 */
export interface ListBonusPaymentsCommandOutput extends ListBonusPaymentsResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 *             The
 *             <code>ListBonusPayments</code>
 *             operation retrieves the amounts of bonuses you have paid to Workers
 *             for a given HIT or assignment.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, ListBonusPaymentsCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, ListBonusPaymentsCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const input = { // ListBonusPaymentsRequest
 *   HITId: "STRING_VALUE",
 *   AssignmentId: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListBonusPaymentsCommand(input);
 * const response = await client.send(command);
 * // { // ListBonusPaymentsResponse
 * //   NumResults: Number("int"),
 * //   NextToken: "STRING_VALUE",
 * //   BonusPayments: [ // BonusPaymentList
 * //     { // BonusPayment
 * //       WorkerId: "STRING_VALUE",
 * //       BonusAmount: "STRING_VALUE",
 * //       AssignmentId: "STRING_VALUE",
 * //       Reason: "STRING_VALUE",
 * //       GrantTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListBonusPaymentsCommandInput - {@link ListBonusPaymentsCommandInput}
 * @returns {@link ListBonusPaymentsCommandOutput}
 * @see {@link ListBonusPaymentsCommandInput} for command's `input` shape.
 * @see {@link ListBonusPaymentsCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for MTurkClient's `config` shape.
 *
 * @throws {@link RequestError} (client fault)
 *  <p>Your request is invalid.</p>
 *
 * @throws {@link ServiceFault} (server fault)
 *  <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
 *
 * @throws {@link MTurkServiceException}
 * <p>Base exception class for all service exceptions from MTurk service.</p>
 *
 */
export class ListBonusPaymentsCommand extends $Command<
  ListBonusPaymentsCommandInput,
  ListBonusPaymentsCommandOutput,
  MTurkClientResolvedConfig
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
  constructor(readonly input: ListBonusPaymentsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MTurkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListBonusPaymentsCommandInput, ListBonusPaymentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListBonusPaymentsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "ListBonusPaymentsCommand";
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
  private serialize(input: ListBonusPaymentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListBonusPaymentsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListBonusPaymentsCommandOutput> {
    return de_ListBonusPaymentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
