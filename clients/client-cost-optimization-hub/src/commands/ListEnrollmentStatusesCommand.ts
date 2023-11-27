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

import {
  CostOptimizationHubClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CostOptimizationHubClient";
import { ListEnrollmentStatusesRequest, ListEnrollmentStatusesResponse } from "../models/models_0";
import { de_ListEnrollmentStatusesCommand, se_ListEnrollmentStatusesCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListEnrollmentStatusesCommand}.
 */
export interface ListEnrollmentStatusesCommandInput extends ListEnrollmentStatusesRequest {}
/**
 * @public
 *
 * The output of {@link ListEnrollmentStatusesCommand}.
 */
export interface ListEnrollmentStatusesCommandOutput extends ListEnrollmentStatusesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the enrollment status for an account. It can also return the list of accounts
 *       that are enrolled under the organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostOptimizationHubClient, ListEnrollmentStatusesCommand } from "@aws-sdk/client-cost-optimization-hub"; // ES Modules import
 * // const { CostOptimizationHubClient, ListEnrollmentStatusesCommand } = require("@aws-sdk/client-cost-optimization-hub"); // CommonJS import
 * const client = new CostOptimizationHubClient(config);
 * const input = { // ListEnrollmentStatusesRequest
 *   includeOrganizationInfo: true || false,
 *   accountId: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListEnrollmentStatusesCommand(input);
 * const response = await client.send(command);
 * // { // ListEnrollmentStatusesResponse
 * //   items: [ // AccountEnrollmentStatuses
 * //     { // AccountEnrollmentStatus
 * //       accountId: "STRING_VALUE",
 * //       status: "Active" || "Inactive",
 * //       lastUpdatedTimestamp: new Date("TIMESTAMP"),
 * //       createdTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEnrollmentStatusesCommandInput - {@link ListEnrollmentStatusesCommandInput}
 * @returns {@link ListEnrollmentStatusesCommandOutput}
 * @see {@link ListEnrollmentStatusesCommandInput} for command's `input` shape.
 * @see {@link ListEnrollmentStatusesCommandOutput} for command's `response` shape.
 * @see {@link CostOptimizationHubClientResolvedConfig | config} for CostOptimizationHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to use this operation with the given parameters.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An error on the server occurred during the processing of your request. Try again
 *       later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *       service.</p>
 *
 * @throws {@link CostOptimizationHubServiceException}
 * <p>Base exception class for all service exceptions from CostOptimizationHub service.</p>
 *
 */
export class ListEnrollmentStatusesCommand extends $Command<
  ListEnrollmentStatusesCommandInput,
  ListEnrollmentStatusesCommandOutput,
  CostOptimizationHubClientResolvedConfig
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
  constructor(readonly input: ListEnrollmentStatusesCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CostOptimizationHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListEnrollmentStatusesCommandInput, ListEnrollmentStatusesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListEnrollmentStatusesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CostOptimizationHubClient";
    const commandName = "ListEnrollmentStatusesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CostOptimizationHubService",
        operation: "ListEnrollmentStatuses",
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
  private serialize(input: ListEnrollmentStatusesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListEnrollmentStatusesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListEnrollmentStatusesCommandOutput> {
    return de_ListEnrollmentStatusesCommand(output, context);
  }
}
