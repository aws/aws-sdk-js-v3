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

import { ConnectCampaignsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectCampaignsClient";
import {
  GetInstanceOnboardingJobStatusRequest,
  GetInstanceOnboardingJobStatusRequestFilterSensitiveLog,
  GetInstanceOnboardingJobStatusResponse,
  GetInstanceOnboardingJobStatusResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetInstanceOnboardingJobStatusCommand,
  serializeAws_restJson1GetInstanceOnboardingJobStatusCommand,
} from "../protocols/Aws_restJson1";

export interface GetInstanceOnboardingJobStatusCommandInput extends GetInstanceOnboardingJobStatusRequest {}
export interface GetInstanceOnboardingJobStatusCommandOutput
  extends GetInstanceOnboardingJobStatusResponse,
    __MetadataBearer {}

/**
 * Get the specific instance onboarding job status.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCampaignsClient, GetInstanceOnboardingJobStatusCommand } from "@aws-sdk/client-connectcampaigns"; // ES Modules import
 * // const { ConnectCampaignsClient, GetInstanceOnboardingJobStatusCommand } = require("@aws-sdk/client-connectcampaigns"); // CommonJS import
 * const client = new ConnectCampaignsClient(config);
 * const command = new GetInstanceOnboardingJobStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetInstanceOnboardingJobStatusCommandInput} for command's `input` shape.
 * @see {@link GetInstanceOnboardingJobStatusCommandOutput} for command's `response` shape.
 * @see {@link ConnectCampaignsClientResolvedConfig | config} for ConnectCampaignsClient's `config` shape.
 *
 */
export class GetInstanceOnboardingJobStatusCommand extends $Command<
  GetInstanceOnboardingJobStatusCommandInput,
  GetInstanceOnboardingJobStatusCommandOutput,
  ConnectCampaignsClientResolvedConfig
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

  constructor(readonly input: GetInstanceOnboardingJobStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectCampaignsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetInstanceOnboardingJobStatusCommandInput, GetInstanceOnboardingJobStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetInstanceOnboardingJobStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectCampaignsClient";
    const commandName = "GetInstanceOnboardingJobStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetInstanceOnboardingJobStatusRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetInstanceOnboardingJobStatusResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetInstanceOnboardingJobStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetInstanceOnboardingJobStatusCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetInstanceOnboardingJobStatusCommandOutput> {
    return deserializeAws_restJson1GetInstanceOnboardingJobStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
