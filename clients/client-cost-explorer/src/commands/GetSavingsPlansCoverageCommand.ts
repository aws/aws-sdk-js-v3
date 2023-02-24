// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import {
  GetSavingsPlansCoverageRequest,
  GetSavingsPlansCoverageRequestFilterSensitiveLog,
  GetSavingsPlansCoverageResponse,
  GetSavingsPlansCoverageResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetSavingsPlansCoverageCommand,
  serializeAws_json1_1GetSavingsPlansCoverageCommand,
} from "../protocols/Aws_json1_1";

export interface GetSavingsPlansCoverageCommandInput extends GetSavingsPlansCoverageRequest {}
export interface GetSavingsPlansCoverageCommandOutput extends GetSavingsPlansCoverageResponse, __MetadataBearer {}

/**
 * <p>Retrieves the Savings Plans covered for your account. This enables you to see how much of
 *       your cost is covered by a Savings Plan. An organization’s management account can see the
 *       coverage of the associated member accounts. This supports dimensions, Cost Categories, and
 *       nested expressions. For any time period, you can filter data for Savings Plans usage with the
 *       following dimensions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>LINKED_ACCOUNT</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>REGION</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>SERVICE</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>INSTANCE_FAMILY</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>To determine valid values for a dimension, use the <code>GetDimensionValues</code>
 *       operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, GetSavingsPlansCoverageCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, GetSavingsPlansCoverageCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new GetSavingsPlansCoverageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSavingsPlansCoverageCommandInput} for command's `input` shape.
 * @see {@link GetSavingsPlansCoverageCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for CostExplorerClient's `config` shape.
 *
 */
export class GetSavingsPlansCoverageCommand extends $Command<
  GetSavingsPlansCoverageCommandInput,
  GetSavingsPlansCoverageCommandOutput,
  CostExplorerClientResolvedConfig
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

  constructor(readonly input: GetSavingsPlansCoverageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CostExplorerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSavingsPlansCoverageCommandInput, GetSavingsPlansCoverageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSavingsPlansCoverageCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CostExplorerClient";
    const commandName = "GetSavingsPlansCoverageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSavingsPlansCoverageRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetSavingsPlansCoverageResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSavingsPlansCoverageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetSavingsPlansCoverageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSavingsPlansCoverageCommandOutput> {
    return deserializeAws_json1_1GetSavingsPlansCoverageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
