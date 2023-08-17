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

import { ConnectCampaignsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectCampaignsClient";
import { StartInstanceOnboardingJobRequest, StartInstanceOnboardingJobResponse } from "../models/models_0";
import { de_StartInstanceOnboardingJobCommand, se_StartInstanceOnboardingJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartInstanceOnboardingJobCommand}.
 */
export interface StartInstanceOnboardingJobCommandInput extends StartInstanceOnboardingJobRequest {}
/**
 * @public
 *
 * The output of {@link StartInstanceOnboardingJobCommand}.
 */
export interface StartInstanceOnboardingJobCommandOutput extends StartInstanceOnboardingJobResponse, __MetadataBearer {}

/**
 * @public
 * Onboard the specific Amazon Connect instance to Connect Campaigns.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCampaignsClient, StartInstanceOnboardingJobCommand } from "@aws-sdk/client-connectcampaigns"; // ES Modules import
 * // const { ConnectCampaignsClient, StartInstanceOnboardingJobCommand } = require("@aws-sdk/client-connectcampaigns"); // CommonJS import
 * const client = new ConnectCampaignsClient(config);
 * const input = { // StartInstanceOnboardingJobRequest
 *   connectInstanceId: "STRING_VALUE", // required
 *   encryptionConfig: { // EncryptionConfig
 *     enabled: true || false, // required
 *     encryptionType: "STRING_VALUE",
 *     keyArn: "STRING_VALUE",
 *   },
 * };
 * const command = new StartInstanceOnboardingJobCommand(input);
 * const response = await client.send(command);
 * // { // StartInstanceOnboardingJobResponse
 * //   connectInstanceOnboardingJobStatus: { // InstanceOnboardingJobStatus
 * //     connectInstanceId: "STRING_VALUE", // required
 * //     status: "STRING_VALUE", // required
 * //     failureCode: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param StartInstanceOnboardingJobCommandInput - {@link StartInstanceOnboardingJobCommandInput}
 * @returns {@link StartInstanceOnboardingJobCommandOutput}
 * @see {@link StartInstanceOnboardingJobCommandInput} for command's `input` shape.
 * @see {@link StartInstanceOnboardingJobCommandOutput} for command's `response` shape.
 * @see {@link ConnectCampaignsClientResolvedConfig | config} for ConnectCampaignsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *  The request could not be processed because of conflict in the current state of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *  Request processing failed because of an error or failure with the service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *  The input fails to satisfy the constraints specified by an AWS service.
 *
 * @throws {@link ConnectCampaignsServiceException}
 * <p>Base exception class for all service exceptions from ConnectCampaigns service.</p>
 *
 */
export class StartInstanceOnboardingJobCommand extends $Command<
  StartInstanceOnboardingJobCommandInput,
  StartInstanceOnboardingJobCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: StartInstanceOnboardingJobCommandInput) {
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
  ): Handler<StartInstanceOnboardingJobCommandInput, StartInstanceOnboardingJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartInstanceOnboardingJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectCampaignsClient";
    const commandName = "StartInstanceOnboardingJobCommand";
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
  private serialize(input: StartInstanceOnboardingJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartInstanceOnboardingJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartInstanceOnboardingJobCommandOutput> {
    return de_StartInstanceOnboardingJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
