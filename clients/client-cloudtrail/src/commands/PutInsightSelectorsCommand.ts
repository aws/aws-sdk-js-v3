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
  PutInsightSelectorsRequest,
  PutInsightSelectorsRequestFilterSensitiveLog,
  PutInsightSelectorsResponse,
  PutInsightSelectorsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1PutInsightSelectorsCommand,
  serializeAws_json1_1PutInsightSelectorsCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link PutInsightSelectorsCommand}.
 */
export interface PutInsightSelectorsCommandInput extends PutInsightSelectorsRequest {}
/**
 * The output of {@link PutInsightSelectorsCommand}.
 */
export interface PutInsightSelectorsCommandOutput extends PutInsightSelectorsResponse, __MetadataBearer {}

/**
 * <p>Lets you enable Insights event logging by specifying the Insights selectors that you
 *          want to enable on an existing trail. You also use <code>PutInsightSelectors</code> to turn
 *          off Insights event logging, by passing an empty list of insight types. The valid Insights
 *          event types in this release are <code>ApiErrorRateInsight</code> and
 *             <code>ApiCallRateInsight</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, PutInsightSelectorsCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, PutInsightSelectorsCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const command = new PutInsightSelectorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutInsightSelectorsCommandInput} for command's `input` shape.
 * @see {@link PutInsightSelectorsCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for CloudTrailClient's `config` shape.
 *
 */
export class PutInsightSelectorsCommand extends $Command<
  PutInsightSelectorsCommandInput,
  PutInsightSelectorsCommandOutput,
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

  constructor(readonly input: PutInsightSelectorsCommandInput) {
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
  ): Handler<PutInsightSelectorsCommandInput, PutInsightSelectorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutInsightSelectorsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudTrailClient";
    const commandName = "PutInsightSelectorsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutInsightSelectorsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutInsightSelectorsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutInsightSelectorsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutInsightSelectorsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutInsightSelectorsCommandOutput> {
    return deserializeAws_json1_1PutInsightSelectorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
