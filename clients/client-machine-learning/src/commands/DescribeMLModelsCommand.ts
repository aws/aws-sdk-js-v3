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

import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { DescribeMLModelsInput, DescribeMLModelsOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeMLModelsCommand,
  serializeAws_json1_1DescribeMLModelsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link DescribeMLModelsCommand}.
 */
export interface DescribeMLModelsCommandInput extends DescribeMLModelsInput {}
/**
 * @public
 *
 * The output of {@link DescribeMLModelsCommand}.
 */
export interface DescribeMLModelsCommandOutput extends DescribeMLModelsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of <code>MLModel</code> that match the search criteria in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, DescribeMLModelsCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, DescribeMLModelsCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * const client = new MachineLearningClient(config);
 * const command = new DescribeMLModelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeMLModelsCommandInput - {@link DescribeMLModelsCommandInput}
 * @returns {@link DescribeMLModelsCommandOutput}
 * @see {@link DescribeMLModelsCommandInput} for command's `input` shape.
 * @see {@link DescribeMLModelsCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for MachineLearningClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An error on the server occurred when trying to process a request.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
 *
 *
 */
export class DescribeMLModelsCommand extends $Command<
  DescribeMLModelsCommandInput,
  DescribeMLModelsCommandOutput,
  MachineLearningClientResolvedConfig
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
  constructor(readonly input: DescribeMLModelsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MachineLearningClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeMLModelsCommandInput, DescribeMLModelsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeMLModelsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MachineLearningClient";
    const commandName = "DescribeMLModelsCommand";
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
  private serialize(input: DescribeMLModelsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeMLModelsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeMLModelsCommandOutput> {
    return deserializeAws_json1_1DescribeMLModelsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
