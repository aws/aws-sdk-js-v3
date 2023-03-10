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

import {
  StartProjectVersionRequest,
  StartProjectVersionRequestFilterSensitiveLog,
  StartProjectVersionResponse,
  StartProjectVersionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1StartProjectVersionCommand,
  serializeAws_json1_1StartProjectVersionCommand,
} from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

/**
 * The input for {@link StartProjectVersionCommand}.
 */
export interface StartProjectVersionCommandInput extends StartProjectVersionRequest {}
/**
 * The output of {@link StartProjectVersionCommand}.
 */
export interface StartProjectVersionCommandOutput extends StartProjectVersionResponse, __MetadataBearer {}

/**
 * <p>Starts the running of the version of a model. Starting a model takes a while
 *       to complete. To check the current state of the model, use <a>DescribeProjectVersions</a>.</p>
 *          <p>Once the model is running, you can detect custom labels in new images by calling
 *          <a>DetectCustomLabels</a>.</p>
 *          <note>
 *             <p>You are charged for the amount of time that the model is running. To stop a running
 *       model, call <a>StopProjectVersion</a>.</p>
 *          </note>
 *          <p>For more information, see <i>Running a trained Amazon Rekognition Custom Labels model</i> in the Amazon Rekognition Custom Labels Guide.</p>
 *          <p>This operation requires permissions to perform the
 *          <code>rekognition:StartProjectVersion</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, StartProjectVersionCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, StartProjectVersionCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const command = new StartProjectVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartProjectVersionCommandInput} for command's `input` shape.
 * @see {@link StartProjectVersionCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform the action.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Amazon Rekognition experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Input parameter violated a constraint. Validate your parameter before calling the API
 *       operation again.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>An Amazon Rekognition service limit was exceeded. For example, if you start too many Amazon Rekognition Video jobs concurrently, calls to start operations
 *             (<code>StartLabelDetection</code>, for example) will raise a <code>LimitExceededException</code> exception (HTTP status code: 400) until
 *             the number of concurrently running jobs is below the Amazon Rekognition service limit.  </p>
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *  <p>The number of requests exceeded your throughput limit. If you want to increase this
 *       limit, contact Amazon Rekognition.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is already being used.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (server fault)
 *  <p>Amazon Rekognition is temporarily unable to process the request. Try your call again.</p>
 *
 *
 */
export class StartProjectVersionCommand extends $Command<
  StartProjectVersionCommandInput,
  StartProjectVersionCommandOutput,
  RekognitionClientResolvedConfig
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

  constructor(readonly input: StartProjectVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RekognitionClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartProjectVersionCommandInput, StartProjectVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartProjectVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "StartProjectVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartProjectVersionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartProjectVersionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartProjectVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartProjectVersionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartProjectVersionCommandOutput> {
    return deserializeAws_json1_1StartProjectVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
