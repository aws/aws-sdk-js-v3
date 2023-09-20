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

import { DeleteFindingAggregatorRequest, DeleteFindingAggregatorResponse } from "../models/models_2";
import { de_DeleteFindingAggregatorCommand, se_DeleteFindingAggregatorCommand } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteFindingAggregatorCommand}.
 */
export interface DeleteFindingAggregatorCommandInput extends DeleteFindingAggregatorRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFindingAggregatorCommand}.
 */
export interface DeleteFindingAggregatorCommandOutput extends DeleteFindingAggregatorResponse, __MetadataBearer {}

/**
 * @public
 * <p>Deletes a finding aggregator. When you delete the finding aggregator, you stop finding aggregation.</p>
 *          <p>When you stop finding aggregation, findings that were already aggregated to the aggregation Region are still visible from the aggregation Region. New findings and finding updates are not aggregated.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DeleteFindingAggregatorCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DeleteFindingAggregatorCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // DeleteFindingAggregatorRequest
 *   FindingAggregatorArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteFindingAggregatorCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteFindingAggregatorCommandInput - {@link DeleteFindingAggregatorCommandInput}
 * @returns {@link DeleteFindingAggregatorCommandOutput}
 * @see {@link DeleteFindingAggregatorCommandInput} for command's `input` shape.
 * @see {@link DeleteFindingAggregatorCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action specified in the request.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidAccessException} (client fault)
 *  <p>The account doesn't have permission to perform this action.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because you supplied an invalid or out-of-range value for an
 *          input parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current Amazon Web Services
 *          account or throttling limits. The error code describes the limit exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because we can't find the specified resource.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 * @example To delete a finding aggregator
 * ```javascript
 * // The following example deletes a finding aggregator in Security Hub. Deleting the finding aggregator stops cross-Region aggregation. This operation produces no output.
 * const input = {
 *   "FindingAggregatorArn": "arn:aws:securityhub:us-east-1:123456789012:finding-aggregator/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111"
 * };
 * const command = new DeleteFindingAggregatorCommand(input);
 * await client.send(command);
 * // example id: to-delete-a-finding-aggregator-1675701750629
 * ```
 *
 */
export class DeleteFindingAggregatorCommand extends $Command<
  DeleteFindingAggregatorCommandInput,
  DeleteFindingAggregatorCommandOutput,
  SecurityHubClientResolvedConfig
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
  constructor(readonly input: DeleteFindingAggregatorCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteFindingAggregatorCommandInput, DeleteFindingAggregatorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteFindingAggregatorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "DeleteFindingAggregatorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SecurityHubAPIService",
        operation: "DeleteFindingAggregator",
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
  private serialize(input: DeleteFindingAggregatorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteFindingAggregatorCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteFindingAggregatorCommandOutput> {
    return de_DeleteFindingAggregatorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
