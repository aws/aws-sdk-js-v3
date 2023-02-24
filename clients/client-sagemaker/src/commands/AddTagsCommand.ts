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
  AddTagsInput,
  AddTagsInputFilterSensitiveLog,
  AddTagsOutput,
  AddTagsOutputFilterSensitiveLog,
} from "../models/models_0";
import { deserializeAws_json1_1AddTagsCommand, serializeAws_json1_1AddTagsCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

export interface AddTagsCommandInput extends AddTagsInput {}
export interface AddTagsCommandOutput extends AddTagsOutput, __MetadataBearer {}

/**
 * <p>Adds or overwrites one or more tags for the specified SageMaker resource. You can add
 *             tags to notebook instances, training jobs, hyperparameter tuning jobs, batch transform
 *             jobs, models, labeling jobs, work teams, endpoint configurations, and
 *             endpoints.</p>
 *          <p>Each tag consists of a key and an optional value. Tag keys must be unique per
 *             resource. For more information about tags, see For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">Amazon Web Services Tagging Strategies</a>.</p>
 *          <note>
 *             <p>Tags that you add to a hyperparameter tuning job by calling this API are also
 *                 added to any training jobs that the hyperparameter tuning job launches after you
 *                 call this API, but not to training jobs that the hyperparameter tuning job launched
 *                 before you called this API. To make sure that the tags associated with a
 *                 hyperparameter tuning job are also added to all training jobs that the
 *                 hyperparameter tuning job launches, add the tags when you first create the tuning
 *                 job by specifying them in the <code>Tags</code> parameter of <a>CreateHyperParameterTuningJob</a>
 *             </p>
 *          </note>
 *          <note>
 *             <p>Tags that you add to a SageMaker Studio Domain or User Profile by calling this API
 *                 are also added to any Apps that the Domain or User Profile launches after you call
 *                 this API, but not to Apps that the Domain or User Profile launched before you called
 *                 this API. To make sure that the tags associated with a Domain or User Profile are
 *                 also added to all Apps that the Domain or User Profile launches, add the tags when
 *                 you first create the Domain or User Profile by specifying them in the
 *                     <code>Tags</code> parameter of <a>CreateDomain</a> or <a>CreateUserProfile</a>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, AddTagsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, AddTagsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new AddTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddTagsCommandInput} for command's `input` shape.
 * @see {@link AddTagsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 */
export class AddTagsCommand extends $Command<AddTagsCommandInput, AddTagsCommandOutput, SageMakerClientResolvedConfig> {
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

  constructor(readonly input: AddTagsCommandInput) {
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
  ): Handler<AddTagsCommandInput, AddTagsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, AddTagsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "AddTagsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AddTagsInputFilterSensitiveLog,
      outputFilterSensitiveLog: AddTagsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AddTagsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AddTagsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddTagsCommandOutput> {
    return deserializeAws_json1_1AddTagsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
