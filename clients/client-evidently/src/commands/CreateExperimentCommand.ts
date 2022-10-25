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

import { EvidentlyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EvidentlyClient";
import {
  CreateExperimentRequest,
  CreateExperimentRequestFilterSensitiveLog,
  CreateExperimentResponse,
  CreateExperimentResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateExperimentCommand,
  serializeAws_restJson1CreateExperimentCommand,
} from "../protocols/Aws_restJson1";

export interface CreateExperimentCommandInput extends CreateExperimentRequest {}
export interface CreateExperimentCommandOutput extends CreateExperimentResponse, __MetadataBearer {}

/**
 * <p>Creates an Evidently <i>experiment</i>. Before you create an experiment,
 *       you must create the feature to use for the experiment.</p>
 *          <p>An experiment helps you make feature design
 *        decisions based on evidence and data. An experiment can test as
 *        many as five variations at once. Evidently collects experiment data and analyzes it by statistical methods, and provides
 *        clear recommendations about which variations perform better.</p>
 *          <p>You can optionally specify a <code>segment</code> to have the experiment consider only certain audience
 *      types in the experiment, such as using only user sessions from a certain location or who use a certain internet browser.</p>
 *          <p>Don't use this operation to update an existing experiment. Instead, use
 *        <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_UpdateExperiment.html">UpdateExperiment</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvidentlyClient, CreateExperimentCommand } from "@aws-sdk/client-evidently"; // ES Modules import
 * // const { EvidentlyClient, CreateExperimentCommand } = require("@aws-sdk/client-evidently"); // CommonJS import
 * const client = new EvidentlyClient(config);
 * const command = new CreateExperimentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateExperimentCommandInput} for command's `input` shape.
 * @see {@link CreateExperimentCommandOutput} for command's `response` shape.
 * @see {@link EvidentlyClientResolvedConfig | config} for EvidentlyClient's `config` shape.
 *
 */
export class CreateExperimentCommand extends $Command<
  CreateExperimentCommandInput,
  CreateExperimentCommandOutput,
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

  constructor(readonly input: CreateExperimentCommandInput) {
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
  ): Handler<CreateExperimentCommandInput, CreateExperimentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateExperimentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EvidentlyClient";
    const commandName = "CreateExperimentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateExperimentRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateExperimentResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateExperimentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateExperimentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateExperimentCommandOutput> {
    return deserializeAws_restJson1CreateExperimentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
