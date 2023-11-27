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

import { CreateAccessGrantsLocationRequest, CreateAccessGrantsLocationResult } from "../models/models_0";
import { de_CreateAccessGrantsLocationCommand, se_CreateAccessGrantsLocationCommand } from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateAccessGrantsLocationCommand}.
 */
export interface CreateAccessGrantsLocationCommandInput extends CreateAccessGrantsLocationRequest {}
/**
 * @public
 *
 * The output of {@link CreateAccessGrantsLocationCommand}.
 */
export interface CreateAccessGrantsLocationCommandOutput extends CreateAccessGrantsLocationResult, __MetadataBearer {}

/**
 * @public
 * <p>The S3 data location that you would like to register in your S3 Access Grants instance. Your S3 data must be in the same Region as your S3 Access Grants instance. The location can be one of the following: </p>
 *          <ul>
 *             <li>
 *                <p>The default S3 location <code>s3://</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>A bucket - <code>S3://<bucket-name></code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>A bucket and prefix - <code>S3://<bucket-name>/<prefix></code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>When you register a location, you must include the IAM role that has permission to manage the S3 location that you are registering. Give S3 Access Grants permission to assume this role <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-grants-location.html">using a policy</a>. S3 Access Grants assumes this role to manage access to the location and to vend temporary credentials to grantees or client applications. </p>
 *          <dl>
 *             <dt>Permissions</dt>
 *             <dd>
 *                <p>You must have the <code>s3:CreateAccessGrantsLocation</code> permission to use this operation. </p>
 *             </dd>
 *             <dt>Additional Permissions</dt>
 *             <dd>
 *                <p>You must also have the following permission for the specified IAM role: <code>iam:PassRole</code>
 *                </p>
 *             </dd>
 *          </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, CreateAccessGrantsLocationCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, CreateAccessGrantsLocationCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const input = { // CreateAccessGrantsLocationRequest
 *   AccountId: "STRING_VALUE",
 *   LocationScope: "STRING_VALUE", // required
 *   IAMRoleArn: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateAccessGrantsLocationCommand(input);
 * const response = await client.send(command);
 * // { // CreateAccessGrantsLocationResult
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   AccessGrantsLocationId: "STRING_VALUE",
 * //   AccessGrantsLocationArn: "STRING_VALUE",
 * //   LocationScope: "STRING_VALUE",
 * //   IAMRoleArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateAccessGrantsLocationCommandInput - {@link CreateAccessGrantsLocationCommandInput}
 * @returns {@link CreateAccessGrantsLocationCommandOutput}
 * @see {@link CreateAccessGrantsLocationCommandInput} for command's `input` shape.
 * @see {@link CreateAccessGrantsLocationCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 */
export class CreateAccessGrantsLocationCommand extends $Command<
  CreateAccessGrantsLocationCommandInput,
  CreateAccessGrantsLocationCommandOutput,
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
  constructor(readonly input: CreateAccessGrantsLocationCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ControlClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateAccessGrantsLocationCommandInput, CreateAccessGrantsLocationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateAccessGrantsLocationCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getProcessArnablesPlugin(configuration));
    this.middlewareStack.use(getApplyMd5BodyChecksumPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3ControlClient";
    const commandName = "CreateAccessGrantsLocationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSS3ControlServiceV20180820",
        operation: "CreateAccessGrantsLocation",
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
  private serialize(input: CreateAccessGrantsLocationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateAccessGrantsLocationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateAccessGrantsLocationCommandOutput> {
    return de_CreateAccessGrantsLocationCommand(output, context);
  }
}
