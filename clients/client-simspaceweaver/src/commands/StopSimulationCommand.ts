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

import { StopSimulationInput, StopSimulationOutput } from "../models/models_0";
import { de_StopSimulationCommand, se_StopSimulationCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SimSpaceWeaverClientResolvedConfig } from "../SimSpaceWeaverClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StopSimulationCommand}.
 */
export interface StopSimulationCommandInput extends StopSimulationInput {}
/**
 * @public
 *
 * The output of {@link StopSimulationCommand}.
 */
export interface StopSimulationCommandOutput extends StopSimulationOutput, __MetadataBearer {}

/**
 * @public
 * <p>Stops the given simulation.</p>
 *          <important>
 *             <p>You can't restart a simulation after you stop it. If you want to restart a simulation, then
 *             you must stop it, delete it, and start a new instance of it.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SimSpaceWeaverClient, StopSimulationCommand } from "@aws-sdk/client-simspaceweaver"; // ES Modules import
 * // const { SimSpaceWeaverClient, StopSimulationCommand } = require("@aws-sdk/client-simspaceweaver"); // CommonJS import
 * const client = new SimSpaceWeaverClient(config);
 * const input = { // StopSimulationInput
 *   Simulation: "STRING_VALUE", // required
 * };
 * const command = new StopSimulationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopSimulationCommandInput - {@link StopSimulationCommandInput}
 * @returns {@link StopSimulationCommandOutput}
 * @see {@link StopSimulationCommandInput} for command's `input` shape.
 * @see {@link StopSimulationCommandOutput} for command's `response` shape.
 * @see {@link SimSpaceWeaverClientResolvedConfig | config} for SimSpaceWeaverClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link ConflictException} (client fault)
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
export class StopSimulationCommand extends $Command<
  StopSimulationCommandInput,
  StopSimulationCommandOutput,
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
  constructor(readonly input: StopSimulationCommandInput) {
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
  ): Handler<StopSimulationCommandInput, StopSimulationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StopSimulationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SimSpaceWeaverClient";
    const commandName = "StopSimulationCommand";
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
  private serialize(input: StopSimulationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StopSimulationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopSimulationCommandOutput> {
    return de_StopSimulationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
