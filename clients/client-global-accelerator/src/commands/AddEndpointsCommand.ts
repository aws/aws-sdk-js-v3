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

import {
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient";
import { AddEndpointsRequest, AddEndpointsResponse } from "../models/models_0";
import { de_AddEndpointsCommand, se_AddEndpointsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AddEndpointsCommand}.
 */
export interface AddEndpointsCommandInput extends AddEndpointsRequest {}
/**
 * @public
 *
 * The output of {@link AddEndpointsCommand}.
 */
export interface AddEndpointsCommandOutput extends AddEndpointsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Add endpoints to an endpoint group. The <code>AddEndpoints</code> API operation is the recommended option for adding endpoints. The
 * 			alternative options are to add endpoints when you create an endpoint group (with the
 * 			<a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_CreateEndpointGroup.html">CreateEndpointGroup</a> API)
 * 			or when you update an endpoint group (with the
 * 			<a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateEndpointGroup.html">UpdateEndpointGroup</a> API). </p>
 *          <p>There are two advantages to using <code>AddEndpoints</code> to add endpoints in Global Accelerator:</p>
 *          <ul>
 *             <li>
 *                <p>It's faster, because Global Accelerator only has to resolve the new endpoints that
 * 					you're adding, rather than resolving new and existing endpoints.</p>
 *             </li>
 *             <li>
 *                <p>It's more convenient, because you don't need to specify the current
 * 					endpoints that are already in the endpoint group, in addition to the new endpoints that
 * 					you want to add.</p>
 *             </li>
 *          </ul>
 *          <p>For information about endpoint types and requirements for endpoints that you can add
 * 			to Global Accelerator, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/about-endpoints.html">
 * 				Endpoints for standard accelerators</a> in the <i>Global Accelerator Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, AddEndpointsCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, AddEndpointsCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // AddEndpointsRequest
 *   EndpointConfigurations: [ // EndpointConfigurations // required
 *     { // EndpointConfiguration
 *       EndpointId: "STRING_VALUE",
 *       Weight: Number("int"),
 *       ClientIPPreservationEnabled: true || false,
 *     },
 *   ],
 *   EndpointGroupArn: "STRING_VALUE", // required
 * };
 * const command = new AddEndpointsCommand(input);
 * const response = await client.send(command);
 * // { // AddEndpointsResponse
 * //   EndpointDescriptions: [ // EndpointDescriptions
 * //     { // EndpointDescription
 * //       EndpointId: "STRING_VALUE",
 * //       Weight: Number("int"),
 * //       HealthState: "INITIAL" || "HEALTHY" || "UNHEALTHY",
 * //       HealthReason: "STRING_VALUE",
 * //       ClientIPPreservationEnabled: true || false,
 * //     },
 * //   ],
 * //   EndpointGroupArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AddEndpointsCommandInput - {@link AddEndpointsCommandInput}
 * @returns {@link AddEndpointsCommandOutput}
 * @see {@link AddEndpointsCommandInput} for command's `input` shape.
 * @see {@link AddEndpointsCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access permission.</p>
 *
 * @throws {@link EndpointGroupNotFoundException} (client fault)
 *  <p>The endpoint group that you specified doesn't exist.</p>
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>There was an internal error for Global Accelerator.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>An argument that you specified is invalid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>Processing your request would cause you to exceed an Global Accelerator limit.</p>
 *
 * @throws {@link TransactionInProgressException} (client fault)
 *  <p>There's already a transaction in progress. Another transaction can't be processed.</p>
 *
 * @throws {@link GlobalAcceleratorServiceException}
 * <p>Base exception class for all service exceptions from GlobalAccelerator service.</p>
 *
 */
export class AddEndpointsCommand extends $Command<
  AddEndpointsCommandInput,
  AddEndpointsCommandOutput,
  GlobalAcceleratorClientResolvedConfig
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
  constructor(readonly input: AddEndpointsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlobalAcceleratorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AddEndpointsCommandInput, AddEndpointsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, AddEndpointsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlobalAcceleratorClient";
    const commandName = "AddEndpointsCommand";
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
  private serialize(input: AddEndpointsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AddEndpointsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddEndpointsCommandOutput> {
    return de_AddEndpointsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
