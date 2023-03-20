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
import { GetExperimentRequest, GetExperimentResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetExperimentCommand,
  serializeAws_restJson1GetExperimentCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link GetExperimentCommand}.
 */
export interface GetExperimentCommandInput extends GetExperimentRequest {}
/**
 * @public
 *
 * The output of {@link GetExperimentCommand}.
 */
export interface GetExperimentCommandOutput extends GetExperimentResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns the details about one experiment. You must already know the
 *       experiment name. To retrieve a list of experiments in your account, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_ListExperiments.html">ListExperiments</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvidentlyClient, GetExperimentCommand } from "@aws-sdk/client-evidently"; // ES Modules import
 * // const { EvidentlyClient, GetExperimentCommand } = require("@aws-sdk/client-evidently"); // CommonJS import
 * const client = new EvidentlyClient(config);
 * const command = new GetExperimentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetExperimentCommandInput - {@link GetExperimentCommandInput}
 * @returns {@link GetExperimentCommandOutput}
 * @see {@link GetExperimentCommandInput} for command's `input` shape.
 * @see {@link GetExperimentCommandOutput} for command's `response` shape.
 * @see {@link EvidentlyClientResolvedConfig | config} for EvidentlyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling. Retry the request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The value of a parameter in the request caused an error.</p>
 *
 *
 */
export class GetExperimentCommand extends $Command<
  GetExperimentCommandInput,
  GetExperimentCommandOutput,
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
  constructor(readonly input: GetExperimentCommandInput) {
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
  ): Handler<GetExperimentCommandInput, GetExperimentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetExperimentCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EvidentlyClient";
    const commandName = "GetExperimentCommand";
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
  private serialize(input: GetExperimentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetExperimentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetExperimentCommandOutput> {
    return deserializeAws_restJson1GetExperimentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
