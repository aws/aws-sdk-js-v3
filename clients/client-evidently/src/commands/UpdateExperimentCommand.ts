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
  UpdateExperimentRequest,
  UpdateExperimentRequestFilterSensitiveLog,
  UpdateExperimentResponse,
  UpdateExperimentResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateExperimentCommand,
  serializeAws_restJson1UpdateExperimentCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateExperimentCommandInput extends UpdateExperimentRequest {}
export interface UpdateExperimentCommandOutput extends UpdateExperimentResponse, __MetadataBearer {}

/**
 * <p>Updates an Evidently experiment. </p>
 *          <p>Don't use this operation to update an experiment's tag. Instead, use
 *       <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_TagResource.html">TagResource</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvidentlyClient, UpdateExperimentCommand } from "@aws-sdk/client-evidently"; // ES Modules import
 * // const { EvidentlyClient, UpdateExperimentCommand } = require("@aws-sdk/client-evidently"); // CommonJS import
 * const client = new EvidentlyClient(config);
 * const command = new UpdateExperimentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateExperimentCommandInput} for command's `input` shape.
 * @see {@link UpdateExperimentCommandOutput} for command's `response` shape.
 * @see {@link EvidentlyClientResolvedConfig | config} for EvidentlyClient's `config` shape.
 *
 */
export class UpdateExperimentCommand extends $Command<
  UpdateExperimentCommandInput,
  UpdateExperimentCommandOutput,
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

  constructor(readonly input: UpdateExperimentCommandInput) {
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
  ): Handler<UpdateExperimentCommandInput, UpdateExperimentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateExperimentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EvidentlyClient";
    const commandName = "UpdateExperimentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateExperimentRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateExperimentResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateExperimentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateExperimentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateExperimentCommandOutput> {
    return deserializeAws_restJson1UpdateExperimentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
