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

import { IoTFleetWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetWiseClient";
import {
  CreateCampaignRequest,
  CreateCampaignRequestFilterSensitiveLog,
  CreateCampaignResponse,
  CreateCampaignResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0CreateCampaignCommand,
  serializeAws_json1_0CreateCampaignCommand,
} from "../protocols/Aws_json1_0";

export interface CreateCampaignCommandInput extends CreateCampaignRequest {}
export interface CreateCampaignCommandOutput extends CreateCampaignResponse, __MetadataBearer {}

/**
 * <p>Creates an orchestration of data collection rules. The Amazon Web Services IoT FleetWise Edge Agent software
 *             running in vehicles uses campaigns to decide how to collect and transfer data to the
 *             cloud. You create campaigns in the cloud. After you or your team approve campaigns,
 *             Amazon Web Services IoT FleetWise automatically deploys them to vehicles. </p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/campaigns.html">Collect and transfer data
 *                 with campaigns</a> in the <i>Amazon Web Services IoT FleetWise Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, CreateCampaignCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, CreateCampaignCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * const client = new IoTFleetWiseClient(config);
 * const command = new CreateCampaignCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCampaignCommandInput} for command's `input` shape.
 * @see {@link CreateCampaignCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 */
export class CreateCampaignCommand extends $Command<
  CreateCampaignCommandInput,
  CreateCampaignCommandOutput,
  IoTFleetWiseClientResolvedConfig
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

  constructor(readonly input: CreateCampaignCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTFleetWiseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateCampaignCommandInput, CreateCampaignCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateCampaignCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTFleetWiseClient";
    const commandName = "CreateCampaignCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateCampaignRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateCampaignResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateCampaignCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0CreateCampaignCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateCampaignCommandOutput> {
    return deserializeAws_json1_0CreateCampaignCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
