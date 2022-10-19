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

import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import {
  GetInsightSelectorsRequest,
  GetInsightSelectorsRequestFilterSensitiveLog,
  GetInsightSelectorsResponse,
  GetInsightSelectorsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetInsightSelectorsCommand,
  serializeAws_json1_1GetInsightSelectorsCommand,
} from "../protocols/Aws_json1_1";

export interface GetInsightSelectorsCommandInput extends GetInsightSelectorsRequest {}
export interface GetInsightSelectorsCommandOutput extends GetInsightSelectorsResponse, __MetadataBearer {}

/**
 * <p>Describes the settings for the Insights event selectors that you configured for your trail. <code>GetInsightSelectors</code> shows
 *          if CloudTrail Insights event logging is enabled on the trail, and if it is, which insight types are enabled.
 *          If you run <code>GetInsightSelectors</code> on a trail that does not have Insights events enabled, the operation throws the exception
 *          <code>InsightNotEnabledException</code>
 *          </p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-insights-events-with-cloudtrail.html">Logging CloudTrail Insights Events for Trails
 *       </a> in the <i>CloudTrail User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, GetInsightSelectorsCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, GetInsightSelectorsCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const command = new GetInsightSelectorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetInsightSelectorsCommandInput} for command's `input` shape.
 * @see {@link GetInsightSelectorsCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for CloudTrailClient's `config` shape.
 *
 */
export class GetInsightSelectorsCommand extends $Command<
  GetInsightSelectorsCommandInput,
  GetInsightSelectorsCommandOutput,
  CloudTrailClientResolvedConfig
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

  constructor(readonly input: GetInsightSelectorsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudTrailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetInsightSelectorsCommandInput, GetInsightSelectorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetInsightSelectorsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudTrailClient";
    const commandName = "GetInsightSelectorsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetInsightSelectorsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetInsightSelectorsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetInsightSelectorsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetInsightSelectorsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetInsightSelectorsCommandOutput> {
    return deserializeAws_json1_1GetInsightSelectorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
