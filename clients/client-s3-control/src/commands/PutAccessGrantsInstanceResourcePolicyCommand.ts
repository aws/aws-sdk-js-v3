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

import {
  PutAccessGrantsInstanceResourcePolicyRequest,
  PutAccessGrantsInstanceResourcePolicyResult,
} from "../models/models_1";
import {
  de_PutAccessGrantsInstanceResourcePolicyCommand,
  se_PutAccessGrantsInstanceResourcePolicyCommand,
} from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutAccessGrantsInstanceResourcePolicyCommand}.
 */
export interface PutAccessGrantsInstanceResourcePolicyCommandInput
  extends PutAccessGrantsInstanceResourcePolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutAccessGrantsInstanceResourcePolicyCommand}.
 */
export interface PutAccessGrantsInstanceResourcePolicyCommandOutput
  extends PutAccessGrantsInstanceResourcePolicyResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Updates the resource policy of the S3 Access Grants instance. </p>
 *          <dl>
 *             <dt>Permissions</dt>
 *             <dd>
 *                <p>You must have the <code>s3:PutAccessGrantsInstanceResourcePolicy</code> permission to use this operation. </p>
 *             </dd>
 *          </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, PutAccessGrantsInstanceResourcePolicyCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, PutAccessGrantsInstanceResourcePolicyCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const input = { // PutAccessGrantsInstanceResourcePolicyRequest
 *   AccountId: "STRING_VALUE",
 *   Policy: "STRING_VALUE", // required
 *   Organization: "STRING_VALUE",
 * };
 * const command = new PutAccessGrantsInstanceResourcePolicyCommand(input);
 * const response = await client.send(command);
 * // { // PutAccessGrantsInstanceResourcePolicyResult
 * //   Policy: "STRING_VALUE",
 * //   Organization: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param PutAccessGrantsInstanceResourcePolicyCommandInput - {@link PutAccessGrantsInstanceResourcePolicyCommandInput}
 * @returns {@link PutAccessGrantsInstanceResourcePolicyCommandOutput}
 * @see {@link PutAccessGrantsInstanceResourcePolicyCommandInput} for command's `input` shape.
 * @see {@link PutAccessGrantsInstanceResourcePolicyCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 */
export class PutAccessGrantsInstanceResourcePolicyCommand extends $Command<
  PutAccessGrantsInstanceResourcePolicyCommandInput,
  PutAccessGrantsInstanceResourcePolicyCommandOutput,
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
  constructor(readonly input: PutAccessGrantsInstanceResourcePolicyCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ControlClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutAccessGrantsInstanceResourcePolicyCommandInput, PutAccessGrantsInstanceResourcePolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutAccessGrantsInstanceResourcePolicyCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getProcessArnablesPlugin(configuration));
    this.middlewareStack.use(getApplyMd5BodyChecksumPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3ControlClient";
    const commandName = "PutAccessGrantsInstanceResourcePolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSS3ControlServiceV20180820",
        operation: "PutAccessGrantsInstanceResourcePolicy",
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
    input: PutAccessGrantsInstanceResourcePolicyCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_PutAccessGrantsInstanceResourcePolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutAccessGrantsInstanceResourcePolicyCommandOutput> {
    return de_PutAccessGrantsInstanceResourcePolicyCommand(output, context);
  }
}
