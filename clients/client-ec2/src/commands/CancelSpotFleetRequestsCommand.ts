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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  CancelSpotFleetRequestsRequest,
  CancelSpotFleetRequestsRequestFilterSensitiveLog,
  CancelSpotFleetRequestsResponse,
  CancelSpotFleetRequestsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_ec2CancelSpotFleetRequestsCommand,
  serializeAws_ec2CancelSpotFleetRequestsCommand,
} from "../protocols/Aws_ec2";

/**
 * The input for {@link CancelSpotFleetRequestsCommand}.
 */
export interface CancelSpotFleetRequestsCommandInput extends CancelSpotFleetRequestsRequest {}
/**
 * The output of {@link CancelSpotFleetRequestsCommand}.
 */
export interface CancelSpotFleetRequestsCommandOutput extends CancelSpotFleetRequestsResponse, __MetadataBearer {}

/**
 * <p>Cancels the specified Spot Fleet requests.</p>
 *          <p>After you cancel a Spot Fleet request, the Spot Fleet launches no new instances.</p>
 *          <p>You must also specify whether a canceled Spot Fleet request should terminate its instances. If you
 *             choose to terminate the instances, the Spot Fleet request enters the
 *                 <code>cancelled_terminating</code> state. Otherwise, the Spot Fleet request enters
 *             the <code>cancelled_running</code> state and the instances continue to run until they
 *             are interrupted or you terminate them manually.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CancelSpotFleetRequestsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CancelSpotFleetRequestsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CancelSpotFleetRequestsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelSpotFleetRequestsCommandInput} for command's `input` shape.
 * @see {@link CancelSpotFleetRequestsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @example To cancel a Spot fleet request
 * ```javascript
 * // This example cancels the specified Spot fleet request and terminates its associated Spot Instances.
 * const input = {
 *   "SpotFleetRequestIds": [
 *     "sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE"
 *   ],
 *   "TerminateInstances": true
 * };
 * const command = new CancelSpotFleetRequestsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "SuccessfulFleetRequests": [
 *     {
 *       "CurrentSpotFleetRequestState": "cancelled_running",
 *       "PreviousSpotFleetRequestState": "active",
 *       "SpotFleetRequestId": "sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE"
 *     }
 *   ]
 * }
 * *\/
 * // example id: ec2-cancel-spot-fleet-requests-1
 * ```
 *
 * @example To cancel a Spot fleet request without terminating its Spot Instances
 * ```javascript
 * // This example cancels the specified Spot fleet request without terminating its associated Spot Instances.
 * const input = {
 *   "SpotFleetRequestIds": [
 *     "sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE"
 *   ],
 *   "TerminateInstances": false
 * };
 * const command = new CancelSpotFleetRequestsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "SuccessfulFleetRequests": [
 *     {
 *       "CurrentSpotFleetRequestState": "cancelled_terminating",
 *       "PreviousSpotFleetRequestState": "active",
 *       "SpotFleetRequestId": "sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE"
 *     }
 *   ]
 * }
 * *\/
 * // example id: ec2-cancel-spot-fleet-requests-2
 * ```
 *
 */
export class CancelSpotFleetRequestsCommand extends $Command<
  CancelSpotFleetRequestsCommandInput,
  CancelSpotFleetRequestsCommandOutput,
  EC2ClientResolvedConfig
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

  constructor(readonly input: CancelSpotFleetRequestsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CancelSpotFleetRequestsCommandInput, CancelSpotFleetRequestsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CancelSpotFleetRequestsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CancelSpotFleetRequestsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelSpotFleetRequestsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CancelSpotFleetRequestsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CancelSpotFleetRequestsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CancelSpotFleetRequestsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CancelSpotFleetRequestsCommandOutput> {
    return deserializeAws_ec2CancelSpotFleetRequestsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
