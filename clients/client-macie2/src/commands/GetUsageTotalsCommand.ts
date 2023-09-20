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

import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { GetUsageTotalsRequest, GetUsageTotalsResponse } from "../models/models_0";
import { de_GetUsageTotalsCommand, se_GetUsageTotalsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetUsageTotalsCommand}.
 */
export interface GetUsageTotalsCommandInput extends GetUsageTotalsRequest {}
/**
 * @public
 *
 * The output of {@link GetUsageTotalsCommand}.
 */
export interface GetUsageTotalsCommandOutput extends GetUsageTotalsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves (queries) aggregated usage data for an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, GetUsageTotalsCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, GetUsageTotalsCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const input = { // GetUsageTotalsRequest
 *   timeRange: "STRING_VALUE",
 * };
 * const command = new GetUsageTotalsCommand(input);
 * const response = await client.send(command);
 * // { // GetUsageTotalsResponse
 * //   timeRange: "MONTH_TO_DATE" || "PAST_30_DAYS",
 * //   usageTotals: [ // __listOfUsageTotal
 * //     { // UsageTotal
 * //       currency: "USD",
 * //       estimatedCost: "STRING_VALUE",
 * //       type: "DATA_INVENTORY_EVALUATION" || "SENSITIVE_DATA_DISCOVERY" || "AUTOMATED_SENSITIVE_DATA_DISCOVERY" || "AUTOMATED_OBJECT_MONITORING",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetUsageTotalsCommandInput - {@link GetUsageTotalsCommandInput}
 * @returns {@link GetUsageTotalsCommandOutput}
 * @see {@link GetUsageTotalsCommandInput} for command's `input` shape.
 * @see {@link GetUsageTotalsCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for Macie2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Provides information about an error that occurred due to insufficient access to a specified resource.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Provides information about an error that occurred due to a versioning conflict for a specified resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Provides information about an error that occurred due to an unknown internal server error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Provides information about an error that occurred because a specified resource wasn't found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Provides information about an error that occurred due to one or more service quotas for an account.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Provides information about an error that occurred because too many requests were sent during a certain amount of time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Provides information about an error that occurred due to a syntax error in a request.</p>
 *
 * @throws {@link Macie2ServiceException}
 * <p>Base exception class for all service exceptions from Macie2 service.</p>
 *
 */
export class GetUsageTotalsCommand extends $Command<
  GetUsageTotalsCommandInput,
  GetUsageTotalsCommandOutput,
  Macie2ClientResolvedConfig
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
  constructor(readonly input: GetUsageTotalsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Macie2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetUsageTotalsCommandInput, GetUsageTotalsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetUsageTotalsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Macie2Client";
    const commandName = "GetUsageTotalsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Macie2",
        operation: "GetUsageTotals",
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
  private serialize(input: GetUsageTotalsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetUsageTotalsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetUsageTotalsCommandOutput> {
    return de_GetUsageTotalsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
