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
  CopyProjectVersionRequest,
  CopyProjectVersionRequestFilterSensitiveLog,
  CopyProjectVersionResponse,
  CopyProjectVersionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CopyProjectVersionCommand,
  serializeAws_json1_1CopyProjectVersionCommand,
} from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

export interface CopyProjectVersionCommandInput extends CopyProjectVersionRequest {}
export interface CopyProjectVersionCommandOutput extends CopyProjectVersionResponse, __MetadataBearer {}

/**
 * <p>Copies a version of an Amazon Rekognition Custom Labels model from a source project to a destination project. The source and
 *          destination projects can be in different AWS accounts but must be in the same AWS Region.
 *          You can't copy a model to another AWS service.
 *
 *       </p>
 *          <p>To copy a model version to a different AWS account, you need to create a resource-based policy known as a
 *          <i>project policy</i>. You attach the project policy to the
 *          source project by calling <a>PutProjectPolicy</a>. The project policy
 *       gives permission to copy the model version from a trusting AWS account to a trusted account.</p>
 *          <p>For more information creating and attaching a project policy, see Attaching a project policy (SDK)
 *          in the <i>Amazon Rekognition Custom Labels Developer Guide</i>.
 *       </p>
 *          <p>If you are copying a model version to a project in the same AWS account, you don't need to create a project policy.</p>
 *          <note>
 *             <p>To copy a model, the destination project, source project, and source model version must already exist.</p>
 *          </note>
 *          <p>Copying a model version takes a while to complete. To get the current status, call <a>DescribeProjectVersions</a> and check the value of <code>Status</code> in the
 *             <a>ProjectVersionDescription</a> object. The copy operation has finished when
 *          the value of <code>Status</code> is <code>COPYING_COMPLETED</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, CopyProjectVersionCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, CopyProjectVersionCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const command = new CopyProjectVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CopyProjectVersionCommandInput} for command's `input` shape.
 * @see {@link CopyProjectVersionCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 */
export class CopyProjectVersionCommand extends $Command<
  CopyProjectVersionCommandInput,
  CopyProjectVersionCommandOutput,
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

  constructor(readonly input: CopyProjectVersionCommandInput) {
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
  ): Handler<CopyProjectVersionCommandInput, CopyProjectVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CopyProjectVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "CopyProjectVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CopyProjectVersionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CopyProjectVersionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CopyProjectVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CopyProjectVersionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CopyProjectVersionCommandOutput> {
    return deserializeAws_json1_1CopyProjectVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
