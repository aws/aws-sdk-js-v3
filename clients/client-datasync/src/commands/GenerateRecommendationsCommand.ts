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

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { GenerateRecommendationsRequest, GenerateRecommendationsResponse } from "../models/models_0";
import { de_GenerateRecommendationsCommand, se_GenerateRecommendationsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GenerateRecommendationsCommand}.
 */
export interface GenerateRecommendationsCommandInput extends GenerateRecommendationsRequest {}
/**
 * @public
 *
 * The output of {@link GenerateRecommendationsCommand}.
 */
export interface GenerateRecommendationsCommandOutput extends GenerateRecommendationsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates recommendations about where to migrate your data to in Amazon Web Services.
 *       Recommendations are generated based on information that DataSync Discovery collects about your
 *       on-premises storage system's resources. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/discovery-understand-recommendations.html">Recommendations
 *         provided by DataSync Discovery</a>.</p>
 *          <p>Once generated, you can view your recommendations by using the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeStorageSystemResources.html">DescribeStorageSystemResources</a> operation.</p>
 *          <note>
 *             <p>If your <a href="https://docs.aws.amazon.com/datasync/latest/userguide/discovery-job-statuses.html#discovery-job-statuses-table">discovery job completes successfully</a>, you don't need to use this operation. DataSync
 *         Discovery generates the recommendations for you automatically.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, GenerateRecommendationsCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, GenerateRecommendationsCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const input = { // GenerateRecommendationsRequest
 *   DiscoveryJobArn: "STRING_VALUE", // required
 *   ResourceIds: [ // ResourceIds // required
 *     "STRING_VALUE",
 *   ],
 *   ResourceType: "SVM" || "VOLUME" || "CLUSTER", // required
 * };
 * const command = new GenerateRecommendationsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param GenerateRecommendationsCommandInput - {@link GenerateRecommendationsCommandInput}
 * @returns {@link GenerateRecommendationsCommandOutput}
 * @see {@link GenerateRecommendationsCommandInput} for command's `input` shape.
 * @see {@link GenerateRecommendationsCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for DataSyncClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception is thrown when an error occurs in the DataSync
 *       service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link DataSyncServiceException}
 * <p>Base exception class for all service exceptions from DataSync service.</p>
 *
 */
export class GenerateRecommendationsCommand extends $Command<
  GenerateRecommendationsCommandInput,
  GenerateRecommendationsCommandOutput,
  DataSyncClientResolvedConfig
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
  constructor(readonly input: GenerateRecommendationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GenerateRecommendationsCommandInput, GenerateRecommendationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GenerateRecommendationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataSyncClient";
    const commandName = "GenerateRecommendationsCommand";
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
  private serialize(input: GenerateRecommendationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GenerateRecommendationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GenerateRecommendationsCommandOutput> {
    return de_GenerateRecommendationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
