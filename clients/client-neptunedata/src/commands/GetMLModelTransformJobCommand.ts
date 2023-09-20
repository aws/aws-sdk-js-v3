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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { GetMLModelTransformJobInput, GetMLModelTransformJobOutput } from "../models/models_0";
import { NeptunedataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptunedataClient";
import { de_GetMLModelTransformJobCommand, se_GetMLModelTransformJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetMLModelTransformJobCommand}.
 */
export interface GetMLModelTransformJobCommandInput extends GetMLModelTransformJobInput {}
/**
 * @public
 *
 * The output of {@link GetMLModelTransformJobCommand}.
 */
export interface GetMLModelTransformJobCommandOutput extends GetMLModelTransformJobOutput, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about a specified model transform job. See <a href="https://docs.aws.amazon.com/neptune/latest/userguide/machine-learning-model-transform.html">Use
 *       a trained model to generate new model artifacts</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptunedataClient, GetMLModelTransformJobCommand } from "@aws-sdk/client-neptunedata"; // ES Modules import
 * // const { NeptunedataClient, GetMLModelTransformJobCommand } = require("@aws-sdk/client-neptunedata"); // CommonJS import
 * const client = new NeptunedataClient(config);
 * const input = { // GetMLModelTransformJobInput
 *   id: "STRING_VALUE", // required
 *   neptuneIamRoleArn: "STRING_VALUE",
 * };
 * const command = new GetMLModelTransformJobCommand(input);
 * const response = await client.send(command);
 * // { // GetMLModelTransformJobOutput
 * //   status: "STRING_VALUE",
 * //   id: "STRING_VALUE",
 * //   baseProcessingJob: { // MlResourceDefinition
 * //     name: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     status: "STRING_VALUE",
 * //     outputLocation: "STRING_VALUE",
 * //     failureReason: "STRING_VALUE",
 * //     cloudwatchLogUrl: "STRING_VALUE",
 * //   },
 * //   remoteModelTransformJob: {
 * //     name: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     status: "STRING_VALUE",
 * //     outputLocation: "STRING_VALUE",
 * //     failureReason: "STRING_VALUE",
 * //     cloudwatchLogUrl: "STRING_VALUE",
 * //   },
 * //   models: [ // Models
 * //     { // MlConfigDefinition
 * //       name: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetMLModelTransformJobCommandInput - {@link GetMLModelTransformJobCommandInput}
 * @returns {@link GetMLModelTransformJobCommandOutput}
 * @see {@link GetMLModelTransformJobCommandInput} for command's `input` shape.
 * @see {@link GetMLModelTransformJobCommandOutput} for command's `response` shape.
 * @see {@link NeptunedataClientResolvedConfig | config} for NeptunedataClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Raised when a request is submitted that cannot be processed.</p>
 *
 * @throws {@link ClientTimeoutException} (client fault)
 *  <p>Raised when a request timed out in the client.</p>
 *
 * @throws {@link ConstraintViolationException} (client fault)
 *  <p>Raised when a value in a request field did not satisfy required constraints.</p>
 *
 * @throws {@link IllegalArgumentException} (client fault)
 *  <p>Raised when an argument in a request is not supported.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>Raised when an argument in a request has an invalid value.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Raised when a parameter value is not valid.</p>
 *
 * @throws {@link MissingParameterException} (client fault)
 *  <p>Raised when a required parameter is missing.</p>
 *
 * @throws {@link MLResourceNotFoundException} (client fault)
 *  <p>Raised when a specified machine-learning resource could not be found.</p>
 *
 * @throws {@link PreconditionsFailedException} (client fault)
 *  <p>Raised when a precondition for processing a request is not satisfied.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Raised when the number of requests being processed exceeds the limit.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>Raised when a request attempts to initiate an operation that is not supported.</p>
 *
 * @throws {@link NeptunedataServiceException}
 * <p>Base exception class for all service exceptions from Neptunedata service.</p>
 *
 */
export class GetMLModelTransformJobCommand extends $Command<
  GetMLModelTransformJobCommandInput,
  GetMLModelTransformJobCommandOutput,
  NeptunedataClientResolvedConfig
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
  constructor(readonly input: GetMLModelTransformJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NeptunedataClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetMLModelTransformJobCommandInput, GetMLModelTransformJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetMLModelTransformJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptunedataClient";
    const commandName = "GetMLModelTransformJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonNeptuneDataplane",
        operation: "GetMLModelTransformJob",
      },
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
  private serialize(input: GetMLModelTransformJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetMLModelTransformJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMLModelTransformJobCommandOutput> {
    return de_GetMLModelTransformJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
