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

import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { UpdateAgentStatusRequest, UpdateAgentStatusResponse } from "../models/models_0";
import { de_UpdateAgentStatusCommand, se_UpdateAgentStatusCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateAgentStatusCommand}.
 */
export interface UpdateAgentStatusCommandInput extends UpdateAgentStatusRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAgentStatusCommand}.
 */
export interface UpdateAgentStatusCommandOutput extends UpdateAgentStatusResponse, __MetadataBearer {}

/**
 * @public
 * <note>
 *             <p> For use by AWS Ground Station Agent and shouldn't be called directly.</p>
 *          </note>
 *          <p>Update the status of the agent.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, UpdateAgentStatusCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, UpdateAgentStatusCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const input = { // UpdateAgentStatusRequest
 *   agentId: "STRING_VALUE", // required
 *   taskId: "STRING_VALUE", // required
 *   aggregateStatus: { // AggregateStatus
 *     status: "STRING_VALUE", // required
 *     signatureMap: { // SignatureMap
 *       "<keys>": true || false,
 *     },
 *   },
 *   componentStatuses: [ // ComponentStatusList // required
 *     { // ComponentStatusData
 *       componentType: "STRING_VALUE", // required
 *       capabilityArn: "STRING_VALUE", // required
 *       status: "STRING_VALUE", // required
 *       bytesSent: Number("long"),
 *       bytesReceived: Number("long"),
 *       packetsDropped: Number("long"),
 *       dataflowId: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new UpdateAgentStatusCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAgentStatusResponse
 * //   agentId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateAgentStatusCommandInput - {@link UpdateAgentStatusCommandInput}
 * @returns {@link UpdateAgentStatusCommandOutput}
 * @see {@link UpdateAgentStatusCommandInput} for command's `input` shape.
 * @see {@link UpdateAgentStatusCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for GroundStationClient's `config` shape.
 *
 * @throws {@link DependencyException} (server fault)
 *  <p>Dependency encountered an error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource was not found.</p>
 *
 * @throws {@link GroundStationServiceException}
 * <p>Base exception class for all service exceptions from GroundStation service.</p>
 *
 */
export class UpdateAgentStatusCommand extends $Command<
  UpdateAgentStatusCommandInput,
  UpdateAgentStatusCommandOutput,
  GroundStationClientResolvedConfig
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
  constructor(readonly input: UpdateAgentStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GroundStationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateAgentStatusCommandInput, UpdateAgentStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateAgentStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GroundStationClient";
    const commandName = "UpdateAgentStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "GroundStation",
        operation: "UpdateAgentStatus",
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
  private serialize(input: UpdateAgentStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateAgentStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateAgentStatusCommandOutput> {
    return de_UpdateAgentStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
