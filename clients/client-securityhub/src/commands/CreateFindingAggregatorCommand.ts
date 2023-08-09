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

import { CreateFindingAggregatorRequest, CreateFindingAggregatorResponse } from "../models/models_2";
import { de_CreateFindingAggregatorCommand, se_CreateFindingAggregatorCommand } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateFindingAggregatorCommand}.
 */
export interface CreateFindingAggregatorCommandInput extends CreateFindingAggregatorRequest {}
/**
 * @public
 *
 * The output of {@link CreateFindingAggregatorCommand}.
 */
export interface CreateFindingAggregatorCommandOutput extends CreateFindingAggregatorResponse, __MetadataBearer {}

/**
 * @public
 * <p>Used to enable finding aggregation. Must be called from the aggregation Region.</p>
 *          <p>For more details about cross-Region replication, see <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/finding-aggregation.html">Configuring finding aggregation</a> in the <i>Security Hub User Guide</i>.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, CreateFindingAggregatorCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, CreateFindingAggregatorCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // CreateFindingAggregatorRequest
 *   RegionLinkingMode: "STRING_VALUE", // required
 *   Regions: [ // StringList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new CreateFindingAggregatorCommand(input);
 * const response = await client.send(command);
 * // { // CreateFindingAggregatorResponse
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
 * @param CreateFindingAggregatorCommandInput - {@link CreateFindingAggregatorCommandInput}
 * @returns {@link CreateFindingAggregatorCommandOutput}
 * @see {@link CreateFindingAggregatorCommandInput} for command's `input` shape.
 * @see {@link CreateFindingAggregatorCommandOutput} for command's `response` shape.
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
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 * @example To enable cross-Region aggregation
 * ```javascript
 * // The following example creates a finding aggregator. This is required to enable cross-Region aggregation.
 * const input = {
 *   "RegionLinkingMode": "SPECIFIED_REGIONS",
 *   "Regions": [
 *     "us-west-1",
 *     "us-west-2"
 *   ]
 * };
 * const command = new CreateFindingAggregatorCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "FindingAggregationRegion": "us-east-1",
 *   "FindingAggregatorArn": "arn:aws:securityhub:us-east-1:222222222222:finding-aggregator/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *   "RegionLinkingMode": "SPECIFIED_REGIONS",
 *   "Regions": [
 *     "us-west-1",
 *     "us-west-2"
 *   ]
 * }
 * *\/
 * // example id: to-enable-cross-region-aggregation-1674766716226
 * ```
 *
 */
export class CreateFindingAggregatorCommand extends $Command<
  CreateFindingAggregatorCommandInput,
  CreateFindingAggregatorCommandOutput,
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
  constructor(readonly input: CreateFindingAggregatorCommandInput) {
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
  ): Handler<CreateFindingAggregatorCommandInput, CreateFindingAggregatorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateFindingAggregatorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "CreateFindingAggregatorCommand";
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
  private serialize(input: CreateFindingAggregatorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateFindingAggregatorCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateFindingAggregatorCommandOutput> {
    return de_CreateFindingAggregatorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
