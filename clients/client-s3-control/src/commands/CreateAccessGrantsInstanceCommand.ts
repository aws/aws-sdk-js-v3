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

import { CreateAccessGrantsInstanceRequest, CreateAccessGrantsInstanceResult } from "../models/models_0";
import { de_CreateAccessGrantsInstanceCommand, se_CreateAccessGrantsInstanceCommand } from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateAccessGrantsInstanceCommand}.
 */
export interface CreateAccessGrantsInstanceCommandInput extends CreateAccessGrantsInstanceRequest {}
/**
 * @public
 *
 * The output of {@link CreateAccessGrantsInstanceCommand}.
 */
export interface CreateAccessGrantsInstanceCommandOutput extends CreateAccessGrantsInstanceResult, __MetadataBearer {}

/**
 * @public
 * <p>Creates an S3 Access Grants instance, which serves as a logical grouping for access grants. You can create one S3 Access Grants instance per Region per account. </p>
 *          <dl>
 *             <dt>Permissions</dt>
 *             <dd>
 *                <p>You must have the <code>s3:CreateAccessGrantsInstance</code> permission to use this operation. </p>
 *             </dd>
 *             <dt>Additional Permissions</dt>
 *             <dd>
 *                <p>To associate an IAM Identity Center instance with your S3 Access Grants instance, you must also have the <code>sso:DescribeInstance</code>, <code>sso:CreateApplication</code>, <code>sso:PutApplicationGrant</code>, and <code>sso:PutApplicationAuthenticationMethod</code> permissions. </p>
 *             </dd>
 *          </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, CreateAccessGrantsInstanceCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, CreateAccessGrantsInstanceCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const input = { // CreateAccessGrantsInstanceRequest
 *   AccountId: "STRING_VALUE",
 *   IdentityCenterArn: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateAccessGrantsInstanceCommand(input);
 * const response = await client.send(command);
 * // { // CreateAccessGrantsInstanceResult
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   AccessGrantsInstanceId: "STRING_VALUE",
 * //   AccessGrantsInstanceArn: "STRING_VALUE",
 * //   IdentityCenterArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateAccessGrantsInstanceCommandInput - {@link CreateAccessGrantsInstanceCommandInput}
 * @returns {@link CreateAccessGrantsInstanceCommandOutput}
 * @see {@link CreateAccessGrantsInstanceCommandInput} for command's `input` shape.
 * @see {@link CreateAccessGrantsInstanceCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 */
export class CreateAccessGrantsInstanceCommand extends $Command<
  CreateAccessGrantsInstanceCommandInput,
  CreateAccessGrantsInstanceCommandOutput,
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
  constructor(readonly input: CreateAccessGrantsInstanceCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ControlClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateAccessGrantsInstanceCommandInput, CreateAccessGrantsInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateAccessGrantsInstanceCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getProcessArnablesPlugin(configuration));
    this.middlewareStack.use(getApplyMd5BodyChecksumPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3ControlClient";
    const commandName = "CreateAccessGrantsInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSS3ControlServiceV20180820",
        operation: "CreateAccessGrantsInstance",
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
  private serialize(input: CreateAccessGrantsInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateAccessGrantsInstanceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateAccessGrantsInstanceCommandOutput> {
    return de_CreateAccessGrantsInstanceCommand(output, context);
  }
}
