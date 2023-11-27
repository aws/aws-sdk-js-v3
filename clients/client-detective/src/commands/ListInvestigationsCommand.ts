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

import { DetectiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DetectiveClient";
import { ListInvestigationsRequest, ListInvestigationsResponse } from "../models/models_0";
import { de_ListInvestigationsCommand, se_ListInvestigationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListInvestigationsCommand}.
 */
export interface ListInvestigationsCommandInput extends ListInvestigationsRequest {}
/**
 * @public
 *
 * The output of {@link ListInvestigationsCommand}.
 */
export interface ListInvestigationsCommandOutput extends ListInvestigationsResponse, __MetadataBearer {}

/**
 * @public
 * <p>List all Investigations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, ListInvestigationsCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, ListInvestigationsCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * const client = new DetectiveClient(config);
 * const input = { // ListInvestigationsRequest
 *   GraphArn: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   FilterCriteria: { // FilterCriteria
 *     Severity: { // StringFilter
 *       Value: "STRING_VALUE", // required
 *     },
 *     Status: {
 *       Value: "STRING_VALUE", // required
 *     },
 *     State: {
 *       Value: "STRING_VALUE", // required
 *     },
 *     EntityArn: {
 *       Value: "STRING_VALUE", // required
 *     },
 *     CreatedTime: { // DateFilter
 *       StartInclusive: new Date("TIMESTAMP"), // required
 *       EndInclusive: new Date("TIMESTAMP"), // required
 *     },
 *   },
 *   SortCriteria: { // SortCriteria
 *     Field: "SEVERITY" || "STATUS" || "CREATED_TIME",
 *     SortOrder: "ASC" || "DESC",
 *   },
 * };
 * const command = new ListInvestigationsCommand(input);
 * const response = await client.send(command);
 * // { // ListInvestigationsResponse
 * //   InvestigationDetails: [ // InvestigationDetails
 * //     { // InvestigationDetail
 * //       InvestigationId: "STRING_VALUE",
 * //       Severity: "INFORMATIONAL" || "LOW" || "MEDIUM" || "HIGH" || "CRITICAL",
 * //       Status: "RUNNING" || "FAILED" || "SUCCESSFUL",
 * //       State: "ACTIVE" || "ARCHIVED",
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       EntityArn: "STRING_VALUE",
 * //       EntityType: "IAM_ROLE" || "IAM_USER",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListInvestigationsCommandInput - {@link ListInvestigationsCommandInput}
 * @returns {@link ListInvestigationsCommandOutput}
 * @see {@link ListInvestigationsCommandInput} for command's `input` shape.
 * @see {@link ListInvestigationsCommandOutput} for command's `response` shape.
 * @see {@link DetectiveClientResolvedConfig | config} for DetectiveClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request issuer does not have permission to access this resource or perform this
 *          operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request was valid but failed because of a problem with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request refers to a nonexistent resource.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request cannot be completed because too many other requests are occurring at the
 *          same time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request parameters are invalid.</p>
 *
 * @throws {@link DetectiveServiceException}
 * <p>Base exception class for all service exceptions from Detective service.</p>
 *
 */
export class ListInvestigationsCommand extends $Command<
  ListInvestigationsCommandInput,
  ListInvestigationsCommandOutput,
  DetectiveClientResolvedConfig
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
  constructor(readonly input: ListInvestigationsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DetectiveClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListInvestigationsCommandInput, ListInvestigationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListInvestigationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DetectiveClient";
    const commandName = "ListInvestigationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonDetective",
        operation: "ListInvestigations",
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
  private serialize(input: ListInvestigationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListInvestigationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListInvestigationsCommandOutput> {
    return de_ListInvestigationsCommand(output, context);
  }
}
