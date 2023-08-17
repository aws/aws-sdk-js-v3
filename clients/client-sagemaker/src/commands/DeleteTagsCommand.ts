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
} from "@smithy/types";

import { DeleteTagsInput, DeleteTagsOutput } from "../models/models_2";
import { de_DeleteTagsCommand, se_DeleteTagsCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteTagsCommand}.
 */
export interface DeleteTagsCommandInput extends DeleteTagsInput {}
/**
 * @public
 *
 * The output of {@link DeleteTagsCommand}.
 */
export interface DeleteTagsCommandOutput extends DeleteTagsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Deletes the specified tags from an SageMaker resource.</p>
 *          <p>To list a resource's tags, use the <code>ListTags</code> API. </p>
 *          <note>
 *             <p>When you call this API to delete tags from a hyperparameter tuning job, the
 *                 deleted tags are not removed from training jobs that the hyperparameter tuning job
 *                 launched before you called this API.</p>
 *          </note>
 *          <note>
 *             <p>When you call this API to delete tags from a SageMaker Studio Domain or User
 *                 Profile, the deleted tags are not removed from Apps that the SageMaker Studio Domain
 *                 or User Profile launched before you called this API.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteTagsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteTagsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DeleteTagsInput
 *   ResourceArn: "STRING_VALUE", // required
 *   TagKeys: [ // TagKeyList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DeleteTagsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTagsCommandInput - {@link DeleteTagsCommandInput}
 * @returns {@link DeleteTagsCommandOutput}
 * @see {@link DeleteTagsCommandInput} for command's `input` shape.
 * @see {@link DeleteTagsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class DeleteTagsCommand extends $Command<
  DeleteTagsCommandInput,
  DeleteTagsCommandOutput,
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
  constructor(readonly input: DeleteTagsCommandInput) {
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
  ): Handler<DeleteTagsCommandInput, DeleteTagsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteTagsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DeleteTagsCommand";
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
  private serialize(input: DeleteTagsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteTagsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteTagsCommandOutput> {
    return de_DeleteTagsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
