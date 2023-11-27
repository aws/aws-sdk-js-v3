// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getApplyMd5BodyChecksumPlugin } from "@smithy/middleware-apply-body-checksum";
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

import { AssociateAccessGrantsIdentityCenterRequest } from "../models/models_0";
import {
  de_AssociateAccessGrantsIdentityCenterCommand,
  se_AssociateAccessGrantsIdentityCenterCommand,
} from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AssociateAccessGrantsIdentityCenterCommand}.
 */
export interface AssociateAccessGrantsIdentityCenterCommandInput extends AssociateAccessGrantsIdentityCenterRequest {}
/**
 * @public
 *
 * The output of {@link AssociateAccessGrantsIdentityCenterCommand}.
 */
export interface AssociateAccessGrantsIdentityCenterCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Associate your S3 Access Grants instance with an Amazon Web Services IAM Identity Center instance. Use this action if you want to create access grants for users or groups from your corporate identity directory. First, you must add your corporate identity directory to Amazon Web Services IAM Identity Center. Then, you can associate this IAM Identity Center instance with your S3 Access Grants instance.</p>
 *          <dl>
 *             <dt>Permissions</dt>
 *             <dd>
 *                <p>You must have the <code>s3:AssociateAccessGrantsIdentityCenter</code> permission to use this operation. </p>
 *             </dd>
 *             <dt>Additional Permissions</dt>
 *             <dd>
 *                <p>You must also have the following permissions: <code>sso:CreateApplication</code>, <code>sso:PutApplicationGrant</code>, and <code>sso:PutApplicationAuthenticationMethod</code>. </p>
 *             </dd>
 *          </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, AssociateAccessGrantsIdentityCenterCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, AssociateAccessGrantsIdentityCenterCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const input = { // AssociateAccessGrantsIdentityCenterRequest
 *   AccountId: "STRING_VALUE",
 *   IdentityCenterArn: "STRING_VALUE", // required
 * };
 * const command = new AssociateAccessGrantsIdentityCenterCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateAccessGrantsIdentityCenterCommandInput - {@link AssociateAccessGrantsIdentityCenterCommandInput}
 * @returns {@link AssociateAccessGrantsIdentityCenterCommandOutput}
 * @see {@link AssociateAccessGrantsIdentityCenterCommandInput} for command's `input` shape.
 * @see {@link AssociateAccessGrantsIdentityCenterCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 */
export class AssociateAccessGrantsIdentityCenterCommand extends $Command<
  AssociateAccessGrantsIdentityCenterCommandInput,
  AssociateAccessGrantsIdentityCenterCommandOutput,
  S3ControlClientResolvedConfig
> {
  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      RequiresAccountId: { type: "staticContextParams", value: true },
      AccountId: { type: "contextParams", name: "AccountId" },
      UseArnRegion: { type: "clientContextParams", name: "useArnRegion" },
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: AssociateAccessGrantsIdentityCenterCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ControlClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateAccessGrantsIdentityCenterCommandInput, AssociateAccessGrantsIdentityCenterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateAccessGrantsIdentityCenterCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getProcessArnablesPlugin(configuration));
    this.middlewareStack.use(getApplyMd5BodyChecksumPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3ControlClient";
    const commandName = "AssociateAccessGrantsIdentityCenterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSS3ControlServiceV20180820",
        operation: "AssociateAccessGrantsIdentityCenter",
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
  private serialize(
    input: AssociateAccessGrantsIdentityCenterCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_AssociateAccessGrantsIdentityCenterCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateAccessGrantsIdentityCenterCommandOutput> {
    return de_AssociateAccessGrantsIdentityCenterCommand(output, context);
  }
}
