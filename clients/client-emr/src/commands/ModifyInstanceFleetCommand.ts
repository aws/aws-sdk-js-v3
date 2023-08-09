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

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { ModifyInstanceFleetInput } from "../models/models_0";
import { de_ModifyInstanceFleetCommand, se_ModifyInstanceFleetCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyInstanceFleetCommand}.
 */
export interface ModifyInstanceFleetCommandInput extends ModifyInstanceFleetInput {}
/**
 * @public
 *
 * The output of {@link ModifyInstanceFleetCommand}.
 */
export interface ModifyInstanceFleetCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Modifies the target On-Demand and target Spot capacities for the instance fleet with the
 *          specified InstanceFleetID within the cluster specified using ClusterID. The call either
 *          succeeds or fails atomically.</p>
 *          <note>
 *             <p>The instance fleet configuration is available only in Amazon EMR releases
 *             4.8.0 and later, excluding 5.0.x versions.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, ModifyInstanceFleetCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, ModifyInstanceFleetCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const input = { // ModifyInstanceFleetInput
 *   ClusterId: "STRING_VALUE", // required
 *   InstanceFleet: { // InstanceFleetModifyConfig
 *     InstanceFleetId: "STRING_VALUE", // required
 *     TargetOnDemandCapacity: Number("int"),
 *     TargetSpotCapacity: Number("int"),
 *     ResizeSpecifications: { // InstanceFleetResizingSpecifications
 *       SpotResizeSpecification: { // SpotResizingSpecification
 *         TimeoutDurationMinutes: Number("int"), // required
 *       },
 *       OnDemandResizeSpecification: { // OnDemandResizingSpecification
 *         TimeoutDurationMinutes: Number("int"), // required
 *       },
 *     },
 *   },
 * };
 * const command = new ModifyInstanceFleetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ModifyInstanceFleetCommandInput - {@link ModifyInstanceFleetCommandInput}
 * @returns {@link ModifyInstanceFleetCommandOutput}
 * @see {@link ModifyInstanceFleetCommandInput} for command's `input` shape.
 * @see {@link ModifyInstanceFleetCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Amazon EMR
 *          service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception occurs when there is something wrong with user input.</p>
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 */
export class ModifyInstanceFleetCommand extends $Command<
  ModifyInstanceFleetCommandInput,
  ModifyInstanceFleetCommandOutput,
  EMRClientResolvedConfig
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
  constructor(readonly input: ModifyInstanceFleetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyInstanceFleetCommandInput, ModifyInstanceFleetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyInstanceFleetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "ModifyInstanceFleetCommand";
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
  private serialize(input: ModifyInstanceFleetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifyInstanceFleetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyInstanceFleetCommandOutput> {
    return de_ModifyInstanceFleetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
