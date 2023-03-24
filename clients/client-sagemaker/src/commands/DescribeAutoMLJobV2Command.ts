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

import { DescribeAutoMLJobV2Request, DescribeAutoMLJobV2Response } from "../models/models_2";
import {
  deserializeAws_json1_1DescribeAutoMLJobV2Command,
  serializeAws_json1_1DescribeAutoMLJobV2Command,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 *
 * The input for {@link DescribeAutoMLJobV2Command}.
 */
export interface DescribeAutoMLJobV2CommandInput extends DescribeAutoMLJobV2Request {}
/**
 * @public
 *
 * The output of {@link DescribeAutoMLJobV2Command}.
 */
export interface DescribeAutoMLJobV2CommandOutput extends DescribeAutoMLJobV2Response, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about an Amazon SageMaker AutoML V2 job.</p>
 *          <note>
 *             <p>This API action is callable through SageMaker Canvas only. Calling it directly from the CLI
 *             or an SDK results in an error.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeAutoMLJobV2Command } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeAutoMLJobV2Command } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = {
 *   AutoMLJobName: "STRING_VALUE", // required
 * };
 * const command = new DescribeAutoMLJobV2Command(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeAutoMLJobV2CommandInput - {@link DescribeAutoMLJobV2CommandInput}
 * @returns {@link DescribeAutoMLJobV2CommandOutput}
 * @see {@link DescribeAutoMLJobV2CommandInput} for command's `input` shape.
 * @see {@link DescribeAutoMLJobV2CommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 *
 */
export class DescribeAutoMLJobV2Command extends $Command<
  DescribeAutoMLJobV2CommandInput,
  DescribeAutoMLJobV2CommandOutput,
  SageMakerClientResolvedConfig
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
  constructor(readonly input: DescribeAutoMLJobV2CommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAutoMLJobV2CommandInput, DescribeAutoMLJobV2CommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAutoMLJobV2Command.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DescribeAutoMLJobV2Command";
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
  private serialize(input: DescribeAutoMLJobV2CommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeAutoMLJobV2Command(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAutoMLJobV2CommandOutput> {
    return deserializeAws_json1_1DescribeAutoMLJobV2Command(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
