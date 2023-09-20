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

import { ListDeliverabilityTestReportsRequest, ListDeliverabilityTestReportsResponse } from "../models/models_0";
import {
  de_ListDeliverabilityTestReportsCommand,
  se_ListDeliverabilityTestReportsCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListDeliverabilityTestReportsCommand}.
 */
export interface ListDeliverabilityTestReportsCommandInput extends ListDeliverabilityTestReportsRequest {}
/**
 * @public
 *
 * The output of {@link ListDeliverabilityTestReportsCommand}.
 */
export interface ListDeliverabilityTestReportsCommandOutput
  extends ListDeliverabilityTestReportsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Show a list of the predictive inbox placement tests that you've performed, regardless of their statuses. For
 *             predictive inbox placement tests that are complete, you can use the <code>GetDeliverabilityTestReport</code>
 *             operation to view the results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, ListDeliverabilityTestReportsCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, ListDeliverabilityTestReportsCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const input = { // ListDeliverabilityTestReportsRequest
 *   NextToken: "STRING_VALUE",
 *   PageSize: Number("int"),
 * };
 * const command = new ListDeliverabilityTestReportsCommand(input);
 * const response = await client.send(command);
 * // { // ListDeliverabilityTestReportsResponse
 * //   DeliverabilityTestReports: [ // DeliverabilityTestReports // required
 * //     { // DeliverabilityTestReport
 * //       ReportId: "STRING_VALUE",
 * //       ReportName: "STRING_VALUE",
 * //       Subject: "STRING_VALUE",
 * //       FromEmailAddress: "STRING_VALUE",
 * //       CreateDate: new Date("TIMESTAMP"),
 * //       DeliverabilityTestStatus: "IN_PROGRESS" || "COMPLETED",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDeliverabilityTestReportsCommandInput - {@link ListDeliverabilityTestReportsCommandInput}
 * @returns {@link ListDeliverabilityTestReportsCommandOutput}
 * @see {@link ListDeliverabilityTestReportsCommandInput} for command's `input` shape.
 * @see {@link ListDeliverabilityTestReportsCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource you attempted to access doesn't exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link SESv2ServiceException}
 * <p>Base exception class for all service exceptions from SESv2 service.</p>
 *
 */
export class ListDeliverabilityTestReportsCommand extends $Command<
  ListDeliverabilityTestReportsCommandInput,
  ListDeliverabilityTestReportsCommandOutput,
  SESv2ClientResolvedConfig
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
  constructor(readonly input: ListDeliverabilityTestReportsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESv2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDeliverabilityTestReportsCommandInput, ListDeliverabilityTestReportsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDeliverabilityTestReportsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESv2Client";
    const commandName = "ListDeliverabilityTestReportsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SimpleEmailService_v2",
        operation: "ListDeliverabilityTestReports",
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
  private serialize(input: ListDeliverabilityTestReportsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListDeliverabilityTestReportsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListDeliverabilityTestReportsCommandOutput> {
    return de_ListDeliverabilityTestReportsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
