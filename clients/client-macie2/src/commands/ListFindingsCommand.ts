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
import { ListFindingsRequest, ListFindingsResponse } from "../models/models_0";
import { de_ListFindingsCommand, se_ListFindingsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListFindingsCommand}.
 */
export interface ListFindingsCommandInput extends ListFindingsRequest {}
/**
 * @public
 *
 * The output of {@link ListFindingsCommand}.
 */
export interface ListFindingsCommandOutput extends ListFindingsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a subset of information about one or more findings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, ListFindingsCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, ListFindingsCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const input = { // ListFindingsRequest
 *   findingCriteria: { // FindingCriteria
 *     criterion: { // Criterion
 *       "<keys>": { // CriterionAdditionalProperties
 *         eq: [ // __listOf__string
 *           "STRING_VALUE",
 *         ],
 *         eqExactMatch: [
 *           "STRING_VALUE",
 *         ],
 *         gt: Number("long"),
 *         gte: Number("long"),
 *         lt: Number("long"),
 *         lte: Number("long"),
 *         neq: [
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   sortCriteria: { // SortCriteria
 *     attributeName: "STRING_VALUE",
 *     orderBy: "ASC" || "DESC",
 *   },
 * };
 * const command = new ListFindingsCommand(input);
 * const response = await client.send(command);
 * // { // ListFindingsResponse
 * //   findingIds: [ // __listOf__string
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFindingsCommandInput - {@link ListFindingsCommandInput}
 * @returns {@link ListFindingsCommandOutput}
 * @see {@link ListFindingsCommandInput} for command's `input` shape.
 * @see {@link ListFindingsCommandOutput} for command's `response` shape.
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
export class ListFindingsCommand extends $Command<
  ListFindingsCommandInput,
  ListFindingsCommandOutput,
  Macie2ClientResolvedConfig
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
  constructor(readonly input: ListFindingsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Macie2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListFindingsCommandInput, ListFindingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListFindingsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Macie2Client";
    const commandName = "ListFindingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Macie2",
        operation: "ListFindings",
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
  private serialize(input: ListFindingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListFindingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListFindingsCommandOutput> {
    return de_ListFindingsCommand(output, context);
  }
}
