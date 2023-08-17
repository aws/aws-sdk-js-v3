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

import { DescribeAppInput, DescribeAppOutput } from "../models/models_0";
import { de_DescribeAppCommand, se_DescribeAppCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SimSpaceWeaverClientResolvedConfig } from "../SimSpaceWeaverClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAppCommand}.
 */
export interface DescribeAppCommandInput extends DescribeAppInput {}
/**
 * @public
 *
 * The output of {@link DescribeAppCommand}.
 */
export interface DescribeAppCommandOutput extends DescribeAppOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns the state of the given custom app.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SimSpaceWeaverClient, DescribeAppCommand } from "@aws-sdk/client-simspaceweaver"; // ES Modules import
 * // const { SimSpaceWeaverClient, DescribeAppCommand } = require("@aws-sdk/client-simspaceweaver"); // CommonJS import
 * const client = new SimSpaceWeaverClient(config);
 * const input = { // DescribeAppInput
 *   Simulation: "STRING_VALUE", // required
 *   Domain: "STRING_VALUE", // required
 *   App: "STRING_VALUE", // required
 * };
 * const command = new DescribeAppCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAppOutput
 * //   Name: "STRING_VALUE",
 * //   Simulation: "STRING_VALUE",
 * //   Domain: "STRING_VALUE",
 * //   Status: "STRING_VALUE",
 * //   TargetStatus: "STRING_VALUE",
 * //   LaunchOverrides: { // LaunchOverrides
 * //     LaunchCommands: [ // LaunchCommandList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   Description: "STRING_VALUE",
 * //   EndpointInfo: { // SimulationAppEndpointInfo
 * //     Address: "STRING_VALUE",
 * //     IngressPortMappings: [ // AppPortMappings
 * //       { // SimulationAppPortMapping
 * //         Declared: Number("int"),
 * //         Actual: Number("int"),
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAppCommandInput - {@link DescribeAppCommandInput}
 * @returns {@link DescribeAppCommandOutput}
 * @see {@link DescribeAppCommandInput} for command's `input` shape.
 * @see {@link DescribeAppCommandOutput} for command's `response` shape.
 * @see {@link SimSpaceWeaverClientResolvedConfig | config} for SimSpaceWeaverClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p/>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link SimSpaceWeaverServiceException}
 * <p>Base exception class for all service exceptions from SimSpaceWeaver service.</p>
 *
 */
export class DescribeAppCommand extends $Command<
  DescribeAppCommandInput,
  DescribeAppCommandOutput,
  SimSpaceWeaverClientResolvedConfig
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
  constructor(readonly input: DescribeAppCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SimSpaceWeaverClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAppCommandInput, DescribeAppCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DescribeAppCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SimSpaceWeaverClient";
    const commandName = "DescribeAppCommand";
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
  private serialize(input: DescribeAppCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeAppCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAppCommandOutput> {
    return de_DescribeAppCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
