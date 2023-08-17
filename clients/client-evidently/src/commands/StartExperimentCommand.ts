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
import { StartExperimentRequest, StartExperimentResponse } from "../models/models_0";
import { de_StartExperimentCommand, se_StartExperimentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartExperimentCommand}.
 */
export interface StartExperimentCommandInput extends StartExperimentRequest {}
/**
 * @public
 *
 * The output of {@link StartExperimentCommand}.
 */
export interface StartExperimentCommandOutput extends StartExperimentResponse, __MetadataBearer {}

/**
 * @public
 * <p>Starts an existing experiment. To create an experiment,
 *         use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateExperiment.html">CreateExperiment</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvidentlyClient, StartExperimentCommand } from "@aws-sdk/client-evidently"; // ES Modules import
 * // const { EvidentlyClient, StartExperimentCommand } = require("@aws-sdk/client-evidently"); // CommonJS import
 * const client = new EvidentlyClient(config);
 * const input = { // StartExperimentRequest
 *   project: "STRING_VALUE", // required
 *   experiment: "STRING_VALUE", // required
 *   analysisCompleteTime: new Date("TIMESTAMP"), // required
 * };
 * const command = new StartExperimentCommand(input);
 * const response = await client.send(command);
 * // { // StartExperimentResponse
 * //   startedTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param StartExperimentCommandInput - {@link StartExperimentCommandInput}
 * @returns {@link StartExperimentCommandOutput}
 * @see {@link StartExperimentCommandInput} for command's `input` shape.
 * @see {@link StartExperimentCommandOutput} for command's `response` shape.
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
export class StartExperimentCommand extends $Command<
  StartExperimentCommandInput,
  StartExperimentCommandOutput,
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
  constructor(readonly input: StartExperimentCommandInput) {
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
  ): Handler<StartExperimentCommandInput, StartExperimentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartExperimentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EvidentlyClient";
    const commandName = "StartExperimentCommand";
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
  private serialize(input: StartExperimentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartExperimentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartExperimentCommandOutput> {
    return de_StartExperimentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
