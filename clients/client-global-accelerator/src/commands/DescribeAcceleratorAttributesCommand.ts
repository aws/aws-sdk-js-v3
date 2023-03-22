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

import {
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient";
import { DescribeAcceleratorAttributesRequest, DescribeAcceleratorAttributesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeAcceleratorAttributesCommand,
  serializeAws_json1_1DescribeAcceleratorAttributesCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link DescribeAcceleratorAttributesCommand}.
 */
export interface DescribeAcceleratorAttributesCommandInput extends DescribeAcceleratorAttributesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAcceleratorAttributesCommand}.
 */
export interface DescribeAcceleratorAttributesCommandOutput
  extends DescribeAcceleratorAttributesResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Describe the attributes of an accelerator.
 * 		</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, DescribeAcceleratorAttributesCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, DescribeAcceleratorAttributesCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new DescribeAcceleratorAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeAcceleratorAttributesCommandInput - {@link DescribeAcceleratorAttributesCommandInput}
 * @returns {@link DescribeAcceleratorAttributesCommandOutput}
 * @see {@link DescribeAcceleratorAttributesCommandInput} for command's `input` shape.
 * @see {@link DescribeAcceleratorAttributesCommandOutput} for command's `response` shape.
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
 *
 */
export class DescribeAcceleratorAttributesCommand extends $Command<
  DescribeAcceleratorAttributesCommandInput,
  DescribeAcceleratorAttributesCommandOutput,
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
  constructor(readonly input: DescribeAcceleratorAttributesCommandInput) {
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
  ): Handler<DescribeAcceleratorAttributesCommandInput, DescribeAcceleratorAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAcceleratorAttributesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlobalAcceleratorClient";
    const commandName = "DescribeAcceleratorAttributesCommand";
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
  private serialize(input: DescribeAcceleratorAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeAcceleratorAttributesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAcceleratorAttributesCommandOutput> {
    return deserializeAws_json1_1DescribeAcceleratorAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
