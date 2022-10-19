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
  GetEventSelectorsRequest,
  GetEventSelectorsRequestFilterSensitiveLog,
  GetEventSelectorsResponse,
  GetEventSelectorsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetEventSelectorsCommand,
  serializeAws_json1_1GetEventSelectorsCommand,
} from "../protocols/Aws_json1_1";

export interface GetEventSelectorsCommandInput extends GetEventSelectorsRequest {}
export interface GetEventSelectorsCommandOutput extends GetEventSelectorsResponse, __MetadataBearer {}

/**
 * <p>Describes the settings for the event selectors that you configured for your trail.
 *          The information returned for your event selectors includes the following:</p>
 *          <ul>
 *             <li>
 *                <p>If your event selector includes read-only events, write-only events, or
 *             all events. This applies to both management events and data events.</p>
 *             </li>
 *             <li>
 *                <p>If your event selector includes management events.</p>
 *             </li>
 *             <li>
 *                <p>If your event selector includes data events, the resources on which you are logging data
 *                events.</p>
 *             </li>
 *          </ul>
 *          <p>For more information about logging management and data events, see the following topics in the <i>CloudTrail User Guide</i>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-events-with-cloudtrail.html">Logging management events for trails
 *             </a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html">Logging data events for trails
 *             </a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, GetEventSelectorsCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, GetEventSelectorsCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const command = new GetEventSelectorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEventSelectorsCommandInput} for command's `input` shape.
 * @see {@link GetEventSelectorsCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for CloudTrailClient's `config` shape.
 *
 */
export class GetEventSelectorsCommand extends $Command<
  GetEventSelectorsCommandInput,
  GetEventSelectorsCommandOutput,
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

  constructor(readonly input: GetEventSelectorsCommandInput) {
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
  ): Handler<GetEventSelectorsCommandInput, GetEventSelectorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetEventSelectorsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudTrailClient";
    const commandName = "GetEventSelectorsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetEventSelectorsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetEventSelectorsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetEventSelectorsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetEventSelectorsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetEventSelectorsCommandOutput> {
    return deserializeAws_json1_1GetEventSelectorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
