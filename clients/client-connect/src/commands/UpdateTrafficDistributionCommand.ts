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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { UpdateTrafficDistributionRequest, UpdateTrafficDistributionResponse } from "../models/models_2";
import { de_UpdateTrafficDistributionCommand, se_UpdateTrafficDistributionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateTrafficDistributionCommand}.
 */
export interface UpdateTrafficDistributionCommandInput extends UpdateTrafficDistributionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTrafficDistributionCommand}.
 */
export interface UpdateTrafficDistributionCommandOutput extends UpdateTrafficDistributionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates the traffic distribution for a given traffic distribution group. </p>
 *          <note>
 *             <p>You can change the <code>SignInConfig</code> distribution only for a
 * default <code>TrafficDistributionGroup</code> (see the <code>IsDefault</code> parameter in the
 * <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_TrafficDistributionGroup.html">TrafficDistributionGroup</a>
 *  data type). If you call
 *     <code>UpdateTrafficDistribution</code> with a modified <code>SignInConfig</code> and a non-default <code>TrafficDistributionGroup</code>,
 *     an <code>InvalidRequestException</code> is returned.</p>
 *          </note>
 *          <p>For more information about updating a traffic distribution group, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/update-telephony-traffic-distribution.html">Update telephony
 *     traffic distribution across Amazon Web Services Regions
 *    </a> in the <i>Amazon Connect Administrator Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateTrafficDistributionCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateTrafficDistributionCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // UpdateTrafficDistributionRequest
 *   Id: "STRING_VALUE", // required
 *   TelephonyConfig: { // TelephonyConfig
 *     Distributions: [ // DistributionList // required
 *       { // Distribution
 *         Region: "STRING_VALUE", // required
 *         Percentage: Number("int"), // required
 *       },
 *     ],
 *   },
 *   SignInConfig: { // SignInConfig
 *     Distributions: [ // SignInDistributionList // required
 *       { // SignInDistribution
 *         Region: "STRING_VALUE", // required
 *         Enabled: true || false, // required
 *       },
 *     ],
 *   },
 *   AgentConfig: { // AgentConfig
 *     Distributions: [ // required
 *       {
 *         Region: "STRING_VALUE", // required
 *         Percentage: Number("int"), // required
 *       },
 *     ],
 *   },
 * };
 * const command = new UpdateTrafficDistributionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateTrafficDistributionCommandInput - {@link UpdateTrafficDistributionCommandInput}
 * @returns {@link UpdateTrafficDistributionCommandOutput}
 * @see {@link UpdateTrafficDistributionCommandInput} for command's `input` shape.
 * @see {@link UpdateTrafficDistributionCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>A resource already has that name.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 */
export class UpdateTrafficDistributionCommand extends $Command<
  UpdateTrafficDistributionCommandInput,
  UpdateTrafficDistributionCommandOutput,
  ConnectClientResolvedConfig
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
  constructor(readonly input: UpdateTrafficDistributionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateTrafficDistributionCommandInput, UpdateTrafficDistributionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateTrafficDistributionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "UpdateTrafficDistributionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonConnectService",
        operation: "UpdateTrafficDistribution",
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
  private serialize(input: UpdateTrafficDistributionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateTrafficDistributionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateTrafficDistributionCommandOutput> {
    return de_UpdateTrafficDistributionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
