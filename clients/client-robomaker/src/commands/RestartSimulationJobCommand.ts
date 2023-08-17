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

import { RestartSimulationJobRequest, RestartSimulationJobResponse } from "../models/models_0";
import { de_RestartSimulationJobCommand, se_RestartSimulationJobCommand } from "../protocols/Aws_restJson1";
import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RestartSimulationJobCommand}.
 */
export interface RestartSimulationJobCommandInput extends RestartSimulationJobRequest {}
/**
 * @public
 *
 * The output of {@link RestartSimulationJobCommand}.
 */
export interface RestartSimulationJobCommandOutput extends RestartSimulationJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Restarts a running simulation job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, RestartSimulationJobCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, RestartSimulationJobCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const input = { // RestartSimulationJobRequest
 *   job: "STRING_VALUE", // required
 * };
 * const command = new RestartSimulationJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RestartSimulationJobCommandInput - {@link RestartSimulationJobCommandInput}
 * @returns {@link RestartSimulationJobCommandOutput}
 * @see {@link RestartSimulationJobCommandInput} for command's `input` shape.
 * @see {@link RestartSimulationJobCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for RoboMakerClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The
 *          returned message provides an explanation of the error value.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The requested resource exceeds the maximum number allowed, or the number of concurrent
 *          stream requests exceeds the maximum number allowed. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link RoboMakerServiceException}
 * <p>Base exception class for all service exceptions from RoboMaker service.</p>
 *
 */
export class RestartSimulationJobCommand extends $Command<
  RestartSimulationJobCommandInput,
  RestartSimulationJobCommandOutput,
  RoboMakerClientResolvedConfig
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
  constructor(readonly input: RestartSimulationJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RoboMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RestartSimulationJobCommandInput, RestartSimulationJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RestartSimulationJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RoboMakerClient";
    const commandName = "RestartSimulationJobCommand";
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
  private serialize(input: RestartSimulationJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RestartSimulationJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RestartSimulationJobCommandOutput> {
    return de_RestartSimulationJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
