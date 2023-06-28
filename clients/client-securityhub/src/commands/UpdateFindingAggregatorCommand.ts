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

import { UpdateFindingAggregatorRequest, UpdateFindingAggregatorResponse } from "../models/models_2";
import { de_UpdateFindingAggregatorCommand, se_UpdateFindingAggregatorCommand } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateFindingAggregatorCommand}.
 */
export interface UpdateFindingAggregatorCommandInput extends UpdateFindingAggregatorRequest {}
/**
 * @public
 *
 * The output of {@link UpdateFindingAggregatorCommand}.
 */
export interface UpdateFindingAggregatorCommandOutput extends UpdateFindingAggregatorResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates the finding aggregation configuration. Used to update the Region linking mode and the list of included or excluded Regions. You cannot use <code>UpdateFindingAggregator</code> to change the aggregation Region.</p>
 *          <p>You must run <code>UpdateFindingAggregator</code> from the current aggregation Region.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, UpdateFindingAggregatorCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, UpdateFindingAggregatorCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // UpdateFindingAggregatorRequest
 *   FindingAggregatorArn: "STRING_VALUE", // required
 *   RegionLinkingMode: "STRING_VALUE", // required
 *   Regions: [ // StringList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateFindingAggregatorCommand(input);
 * const response = await client.send(command);
 * // { // UpdateFindingAggregatorResponse
 * //   FindingAggregatorArn: "STRING_VALUE",
 * //   FindingAggregationRegion: "STRING_VALUE",
 * //   RegionLinkingMode: "STRING_VALUE",
 * //   Regions: [ // StringList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param UpdateFindingAggregatorCommandInput - {@link UpdateFindingAggregatorCommandInput}
 * @returns {@link UpdateFindingAggregatorCommandOutput}
 * @see {@link UpdateFindingAggregatorCommandInput} for command's `input` shape.
 * @see {@link UpdateFindingAggregatorCommandOutput} for command's `response` shape.
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
 * @example To update cross-Region aggregation settings
 * ```javascript
 * // The following example updates the cross-Region aggregation configuration. You use this operation to change the list of linked Regions and the treatment of new Regions. However, you cannot use this operation to change the aggregation Region.
 * const input = {
 *   "FindingAggregatorArn": "arn:aws:securityhub:us-east-1:123456789012:finding-aggregator/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *   "RegionLinkingMode": "SPECIFIED_REGIONS",
 *   "Regions": [
 *     "us-west-1",
 *     "us-west-2"
 *   ]
 * };
 * const command = new UpdateFindingAggregatorCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "FindingAggregationRegion": "us-east-1",
 *   "FindingAggregatorArn": "arn:aws:securityhub:us-east-1:123456789012:finding-aggregator/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *   "RegionLinkingMode": "SPECIFIED_REGIONS",
 *   "Regions": [
 *     "us-west-1",
 *     "us-west-2"
 *   ]
 * }
 * *\/
 * // example id: to-update-cross-region-aggregation-settings-1678815536396
 * ```
 *
 */
export class UpdateFindingAggregatorCommand extends $Command<
  UpdateFindingAggregatorCommandInput,
  UpdateFindingAggregatorCommandOutput,
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
  constructor(readonly input: UpdateFindingAggregatorCommandInput) {
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
  ): Handler<UpdateFindingAggregatorCommandInput, UpdateFindingAggregatorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateFindingAggregatorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "UpdateFindingAggregatorCommand";
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
  private serialize(input: UpdateFindingAggregatorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateFindingAggregatorCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateFindingAggregatorCommandOutput> {
    return de_UpdateFindingAggregatorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
