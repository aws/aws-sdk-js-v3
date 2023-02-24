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
  GetModelPackageGroupPolicyInput,
  GetModelPackageGroupPolicyInputFilterSensitiveLog,
  GetModelPackageGroupPolicyOutput,
  GetModelPackageGroupPolicyOutputFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_json1_1GetModelPackageGroupPolicyCommand,
  serializeAws_json1_1GetModelPackageGroupPolicyCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

export interface GetModelPackageGroupPolicyCommandInput extends GetModelPackageGroupPolicyInput {}
export interface GetModelPackageGroupPolicyCommandOutput extends GetModelPackageGroupPolicyOutput, __MetadataBearer {}

/**
 * <p>Gets a resource policy that manages access for a model group. For information about
 *             resource policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_identity-vs-resource.html">Identity-based
 *                 policies and resource-based policies</a> in the <i>Amazon Web Services Identity and
 *                     Access Management User Guide.</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, GetModelPackageGroupPolicyCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, GetModelPackageGroupPolicyCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new GetModelPackageGroupPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetModelPackageGroupPolicyCommandInput} for command's `input` shape.
 * @see {@link GetModelPackageGroupPolicyCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 */
export class GetModelPackageGroupPolicyCommand extends $Command<
  GetModelPackageGroupPolicyCommandInput,
  GetModelPackageGroupPolicyCommandOutput,
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

  constructor(readonly input: GetModelPackageGroupPolicyCommandInput) {
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
  ): Handler<GetModelPackageGroupPolicyCommandInput, GetModelPackageGroupPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetModelPackageGroupPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "GetModelPackageGroupPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetModelPackageGroupPolicyInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetModelPackageGroupPolicyOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetModelPackageGroupPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetModelPackageGroupPolicyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetModelPackageGroupPolicyCommandOutput> {
    return deserializeAws_json1_1GetModelPackageGroupPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
