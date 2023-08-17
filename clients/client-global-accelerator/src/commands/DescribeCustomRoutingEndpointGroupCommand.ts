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
import {
  DescribeCustomRoutingEndpointGroupRequest,
  DescribeCustomRoutingEndpointGroupResponse,
} from "../models/models_0";
import {
  de_DescribeCustomRoutingEndpointGroupCommand,
  se_DescribeCustomRoutingEndpointGroupCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeCustomRoutingEndpointGroupCommand}.
 */
export interface DescribeCustomRoutingEndpointGroupCommandInput extends DescribeCustomRoutingEndpointGroupRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCustomRoutingEndpointGroupCommand}.
 */
export interface DescribeCustomRoutingEndpointGroupCommandOutput
  extends DescribeCustomRoutingEndpointGroupResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Describe an endpoint group for a custom routing accelerator. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, DescribeCustomRoutingEndpointGroupCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, DescribeCustomRoutingEndpointGroupCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // DescribeCustomRoutingEndpointGroupRequest
 *   EndpointGroupArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeCustomRoutingEndpointGroupCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCustomRoutingEndpointGroupResponse
 * //   EndpointGroup: { // CustomRoutingEndpointGroup
 * //     EndpointGroupArn: "STRING_VALUE",
 * //     EndpointGroupRegion: "STRING_VALUE",
 * //     DestinationDescriptions: [ // CustomRoutingDestinationDescriptions
 * //       { // CustomRoutingDestinationDescription
 * //         FromPort: Number("int"),
 * //         ToPort: Number("int"),
 * //         Protocols: [ // Protocols
 * //           "TCP" || "UDP",
 * //         ],
 * //       },
 * //     ],
 * //     EndpointDescriptions: [ // CustomRoutingEndpointDescriptions
 * //       { // CustomRoutingEndpointDescription
 * //         EndpointId: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeCustomRoutingEndpointGroupCommandInput - {@link DescribeCustomRoutingEndpointGroupCommandInput}
 * @returns {@link DescribeCustomRoutingEndpointGroupCommandOutput}
 * @see {@link DescribeCustomRoutingEndpointGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeCustomRoutingEndpointGroupCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
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
 * @throws {@link GlobalAcceleratorServiceException}
 * <p>Base exception class for all service exceptions from GlobalAccelerator service.</p>
 *
 */
export class DescribeCustomRoutingEndpointGroupCommand extends $Command<
  DescribeCustomRoutingEndpointGroupCommandInput,
  DescribeCustomRoutingEndpointGroupCommandOutput,
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
  constructor(readonly input: DescribeCustomRoutingEndpointGroupCommandInput) {
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
  ): Handler<DescribeCustomRoutingEndpointGroupCommandInput, DescribeCustomRoutingEndpointGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeCustomRoutingEndpointGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlobalAcceleratorClient";
    const commandName = "DescribeCustomRoutingEndpointGroupCommand";
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
  private serialize(
    input: DescribeCustomRoutingEndpointGroupCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeCustomRoutingEndpointGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeCustomRoutingEndpointGroupCommandOutput> {
    return de_DescribeCustomRoutingEndpointGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
