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

import { DeleteEndpointInput } from "../models/models_1";
import { de_DeleteEndpointCommand, se_DeleteEndpointCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteEndpointCommand}.
 */
export interface DeleteEndpointCommandInput extends DeleteEndpointInput {}
/**
 * @public
 *
 * The output of {@link DeleteEndpointCommand}.
 */
export interface DeleteEndpointCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Deletes an endpoint. SageMaker frees up all of the resources that were deployed when the
 *             endpoint was created. </p>
 *          <p>SageMaker retires any custom KMS key grants associated with the endpoint, meaning you don't
 *             need to use the <a href="http://docs.aws.amazon.com/kms/latest/APIReference/API_RevokeGrant.html">RevokeGrant</a> API call.</p>
 *          <p>When you delete your endpoint, SageMaker asynchronously deletes associated endpoint
 *             resources such as KMS key grants. You might still see these resources in your account
 *             for a few minutes after deleting your endpoint. Do not delete or revoke the permissions
 *             for your <code>
 *                <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateModel.html#sagemaker-CreateModel-request-ExecutionRoleArn">ExecutionRoleArn</a>
 *             </code>, otherwise SageMaker cannot delete these
 *             resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteEndpointCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteEndpointCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DeleteEndpointInput
 *   EndpointName: "STRING_VALUE", // required
 * };
 * const command = new DeleteEndpointCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteEndpointCommandInput - {@link DeleteEndpointCommandInput}
 * @returns {@link DeleteEndpointCommandOutput}
 * @see {@link DeleteEndpointCommandInput} for command's `input` shape.
 * @see {@link DeleteEndpointCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class DeleteEndpointCommand extends $Command<
  DeleteEndpointCommandInput,
  DeleteEndpointCommandOutput,
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
  constructor(readonly input: DeleteEndpointCommandInput) {
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
  ): Handler<DeleteEndpointCommandInput, DeleteEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteEndpointCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DeleteEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "DeleteEndpoint",
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
  private serialize(input: DeleteEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteEndpointCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteEndpointCommandOutput> {
    return de_DeleteEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
