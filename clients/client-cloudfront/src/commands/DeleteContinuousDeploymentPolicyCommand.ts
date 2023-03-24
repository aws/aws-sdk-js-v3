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

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { DeleteContinuousDeploymentPolicyRequest } from "../models/models_1";
import {
  deserializeAws_restXmlDeleteContinuousDeploymentPolicyCommand,
  serializeAws_restXmlDeleteContinuousDeploymentPolicyCommand,
} from "../protocols/Aws_restXml";

/**
 * @public
 *
 * The input for {@link DeleteContinuousDeploymentPolicyCommand}.
 */
export interface DeleteContinuousDeploymentPolicyCommandInput extends DeleteContinuousDeploymentPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteContinuousDeploymentPolicyCommand}.
 */
export interface DeleteContinuousDeploymentPolicyCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Deletes a continuous deployment policy.</p>
 *          <p>You cannot delete a continuous deployment policy that's attached to a primary
 * 			distribution. First update your distribution to remove the continuous deployment policy,
 * 			then you can delete the policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, DeleteContinuousDeploymentPolicyCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, DeleteContinuousDeploymentPolicyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = {
 *   Id: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE",
 * };
 * const command = new DeleteContinuousDeploymentPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DeleteContinuousDeploymentPolicyCommandInput - {@link DeleteContinuousDeploymentPolicyCommandInput}
 * @returns {@link DeleteContinuousDeploymentPolicyCommandOutput}
 * @see {@link DeleteContinuousDeploymentPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteContinuousDeploymentPolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link ContinuousDeploymentPolicyInUse} (client fault)
 *  <p>You cannot delete a continuous deployment policy that is associated with a primary
 * 			distribution.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link InvalidIfMatchVersion} (client fault)
 *  <p>The <code>If-Match</code> version is missing or not valid.</p>
 *
 * @throws {@link NoSuchContinuousDeploymentPolicy} (client fault)
 *  <p>The continuous deployment policy doesn't exist.</p>
 *
 * @throws {@link PreconditionFailed} (client fault)
 *  <p>The precondition in one or more of the request fields evaluated to
 * 			<code>false</code>.</p>
 *
 *
 */
export class DeleteContinuousDeploymentPolicyCommand extends $Command<
  DeleteContinuousDeploymentPolicyCommandInput,
  DeleteContinuousDeploymentPolicyCommandOutput,
  CloudFrontClientResolvedConfig
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
  constructor(readonly input: DeleteContinuousDeploymentPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteContinuousDeploymentPolicyCommandInput, DeleteContinuousDeploymentPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteContinuousDeploymentPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "DeleteContinuousDeploymentPolicyCommand";
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
  private serialize(
    input: DeleteContinuousDeploymentPolicyCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlDeleteContinuousDeploymentPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteContinuousDeploymentPolicyCommandOutput> {
    return deserializeAws_restXmlDeleteContinuousDeploymentPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
