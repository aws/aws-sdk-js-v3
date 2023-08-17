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

import { EvidentlyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EvidentlyClient";
import { StopExperimentRequest, StopExperimentResponse } from "../models/models_0";
import { de_StopExperimentCommand, se_StopExperimentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StopExperimentCommand}.
 */
export interface StopExperimentCommandInput extends StopExperimentRequest {}
/**
 * @public
 *
 * The output of {@link StopExperimentCommand}.
 */
export interface StopExperimentCommandOutput extends StopExperimentResponse, __MetadataBearer {}

/**
 * @public
 * <p>Stops an experiment that is currently running. If you stop an experiment, you can't
 *       resume it or restart it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvidentlyClient, StopExperimentCommand } from "@aws-sdk/client-evidently"; // ES Modules import
 * // const { EvidentlyClient, StopExperimentCommand } = require("@aws-sdk/client-evidently"); // CommonJS import
 * const client = new EvidentlyClient(config);
 * const input = { // StopExperimentRequest
 *   project: "STRING_VALUE", // required
 *   experiment: "STRING_VALUE", // required
 *   desiredState: "STRING_VALUE",
 *   reason: "STRING_VALUE",
 * };
 * const command = new StopExperimentCommand(input);
 * const response = await client.send(command);
 * // { // StopExperimentResponse
 * //   endedTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param StopExperimentCommandInput - {@link StopExperimentCommandInput}
 * @returns {@link StopExperimentCommandOutput}
 * @see {@link StopExperimentCommandInput} for command's `input` shape.
 * @see {@link StopExperimentCommandOutput} for command's `response` shape.
 * @see {@link EvidentlyClientResolvedConfig | config} for EvidentlyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A resource was in an inconsistent state during an update or a deletion.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause a service quota to be exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling. Retry the request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The value of a parameter in the request caused an error.</p>
 *
 * @throws {@link EvidentlyServiceException}
 * <p>Base exception class for all service exceptions from Evidently service.</p>
 *
 */
export class StopExperimentCommand extends $Command<
  StopExperimentCommandInput,
  StopExperimentCommandOutput,
  EvidentlyClientResolvedConfig
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
  constructor(readonly input: StopExperimentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EvidentlyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopExperimentCommandInput, StopExperimentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StopExperimentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EvidentlyClient";
    const commandName = "StopExperimentCommand";
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
  private serialize(input: StopExperimentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StopExperimentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopExperimentCommandOutput> {
    return de_StopExperimentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
