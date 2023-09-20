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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { ConnectCampaignsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectCampaignsClient";
import { UpdateCampaignDialerConfigRequest } from "../models/models_0";
import { de_UpdateCampaignDialerConfigCommand, se_UpdateCampaignDialerConfigCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateCampaignDialerConfigCommand}.
 */
export interface UpdateCampaignDialerConfigCommandInput extends UpdateCampaignDialerConfigRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCampaignDialerConfigCommand}.
 */
export interface UpdateCampaignDialerConfigCommandOutput extends __MetadataBearer {}

/**
 * @public
 * Updates the dialer config of a campaign. This API is idempotent.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCampaignsClient, UpdateCampaignDialerConfigCommand } from "@aws-sdk/client-connectcampaigns"; // ES Modules import
 * // const { ConnectCampaignsClient, UpdateCampaignDialerConfigCommand } = require("@aws-sdk/client-connectcampaigns"); // CommonJS import
 * const client = new ConnectCampaignsClient(config);
 * const input = { // UpdateCampaignDialerConfigRequest
 *   id: "STRING_VALUE", // required
 *   dialerConfig: { // DialerConfig Union: only one key present
 *     progressiveDialerConfig: { // ProgressiveDialerConfig
 *       bandwidthAllocation: Number("double"), // required
 *       dialingCapacity: Number("double"),
 *     },
 *     predictiveDialerConfig: { // PredictiveDialerConfig
 *       bandwidthAllocation: Number("double"), // required
 *       dialingCapacity: Number("double"),
 *     },
 *     agentlessDialerConfig: { // AgentlessDialerConfig
 *       dialingCapacity: Number("double"),
 *     },
 *   },
 * };
 * const command = new UpdateCampaignDialerConfigCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateCampaignDialerConfigCommandInput - {@link UpdateCampaignDialerConfigCommandInput}
 * @returns {@link UpdateCampaignDialerConfigCommandOutput}
 * @see {@link UpdateCampaignDialerConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateCampaignDialerConfigCommandOutput} for command's `response` shape.
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
 * @throws {@link ValidationException} (client fault)
 *  The input fails to satisfy the constraints specified by an AWS service.
 *
 * @throws {@link ConnectCampaignsServiceException}
 * <p>Base exception class for all service exceptions from ConnectCampaigns service.</p>
 *
 */
export class UpdateCampaignDialerConfigCommand extends $Command<
  UpdateCampaignDialerConfigCommandInput,
  UpdateCampaignDialerConfigCommandOutput,
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
  constructor(readonly input: UpdateCampaignDialerConfigCommandInput) {
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
  ): Handler<UpdateCampaignDialerConfigCommandInput, UpdateCampaignDialerConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateCampaignDialerConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectCampaignsClient";
    const commandName = "UpdateCampaignDialerConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonConnectCampaignService",
        operation: "UpdateCampaignDialerConfig",
      },
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
  private serialize(input: UpdateCampaignDialerConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateCampaignDialerConfigCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateCampaignDialerConfigCommandOutput> {
    return de_UpdateCampaignDialerConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
