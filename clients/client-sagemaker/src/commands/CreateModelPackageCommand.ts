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
  CreateModelPackageInput,
  CreateModelPackageInputFilterSensitiveLog,
  CreateModelPackageOutput,
  CreateModelPackageOutputFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1CreateModelPackageCommand,
  serializeAws_json1_1CreateModelPackageCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

export interface CreateModelPackageCommandInput extends CreateModelPackageInput {}
export interface CreateModelPackageCommandOutput extends CreateModelPackageOutput, __MetadataBearer {}

/**
 * <p>Creates a model package that you can use to create SageMaker models or list on Amazon Web Services
 *             Marketplace, or a versioned model that is part of a model group. Buyers can subscribe to
 *             model packages listed on Amazon Web Services Marketplace to create models in SageMaker.</p>
 *          <p>To create a model package by specifying a Docker container that contains your
 *             inference code and the Amazon S3 location of your model artifacts, provide values for
 *             <code>InferenceSpecification</code>. To create a model from an algorithm resource
 *             that you created or subscribed to in Amazon Web Services Marketplace, provide a value for
 *             <code>SourceAlgorithmSpecification</code>.</p>
 *          <note>
 *             <p>There are two types of model packages:</p>
 *             <ul>
 *                <li>
 *                   <p>Versioned - a model that is part of a model group in the model
 *                         registry.</p>
 *                </li>
 *                <li>
 *                   <p>Unversioned - a model package that is not part of a model group.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateModelPackageCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateModelPackageCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateModelPackageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateModelPackageCommandInput} for command's `input` shape.
 * @see {@link CreateModelPackageCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 */
export class CreateModelPackageCommand extends $Command<
  CreateModelPackageCommandInput,
  CreateModelPackageCommandOutput,
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

  constructor(readonly input: CreateModelPackageCommandInput) {
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
  ): Handler<CreateModelPackageCommandInput, CreateModelPackageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateModelPackageCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreateModelPackageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateModelPackageInputFilterSensitiveLog,
      outputFilterSensitiveLog: CreateModelPackageOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateModelPackageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateModelPackageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateModelPackageCommandOutput> {
    return deserializeAws_json1_1CreateModelPackageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
