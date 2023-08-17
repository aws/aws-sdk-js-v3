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
  DescribeCustomRoutingAcceleratorAttributesRequest,
  DescribeCustomRoutingAcceleratorAttributesResponse,
} from "../models/models_0";
import {
  de_DescribeCustomRoutingAcceleratorAttributesCommand,
  se_DescribeCustomRoutingAcceleratorAttributesCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeCustomRoutingAcceleratorAttributesCommand}.
 */
export interface DescribeCustomRoutingAcceleratorAttributesCommandInput
  extends DescribeCustomRoutingAcceleratorAttributesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCustomRoutingAcceleratorAttributesCommand}.
 */
export interface DescribeCustomRoutingAcceleratorAttributesCommandOutput
  extends DescribeCustomRoutingAcceleratorAttributesResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Describe the attributes of a custom routing accelerator. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, DescribeCustomRoutingAcceleratorAttributesCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, DescribeCustomRoutingAcceleratorAttributesCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // DescribeCustomRoutingAcceleratorAttributesRequest
 *   AcceleratorArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeCustomRoutingAcceleratorAttributesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCustomRoutingAcceleratorAttributesResponse
 * //   AcceleratorAttributes: { // CustomRoutingAcceleratorAttributes
 * //     FlowLogsEnabled: true || false,
 * //     FlowLogsS3Bucket: "STRING_VALUE",
 * //     FlowLogsS3Prefix: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeCustomRoutingAcceleratorAttributesCommandInput - {@link DescribeCustomRoutingAcceleratorAttributesCommandInput}
 * @returns {@link DescribeCustomRoutingAcceleratorAttributesCommandOutput}
 * @see {@link DescribeCustomRoutingAcceleratorAttributesCommandInput} for command's `input` shape.
 * @see {@link DescribeCustomRoutingAcceleratorAttributesCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 * @throws {@link AcceleratorNotFoundException} (client fault)
 *  <p>The accelerator that you specified doesn't exist.</p>
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
export class DescribeCustomRoutingAcceleratorAttributesCommand extends $Command<
  DescribeCustomRoutingAcceleratorAttributesCommandInput,
  DescribeCustomRoutingAcceleratorAttributesCommandOutput,
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
  constructor(readonly input: DescribeCustomRoutingAcceleratorAttributesCommandInput) {
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
  ): Handler<
    DescribeCustomRoutingAcceleratorAttributesCommandInput,
    DescribeCustomRoutingAcceleratorAttributesCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DescribeCustomRoutingAcceleratorAttributesCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlobalAcceleratorClient";
    const commandName = "DescribeCustomRoutingAcceleratorAttributesCommand";
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
    input: DescribeCustomRoutingAcceleratorAttributesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeCustomRoutingAcceleratorAttributesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeCustomRoutingAcceleratorAttributesCommandOutput> {
    return de_DescribeCustomRoutingAcceleratorAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
