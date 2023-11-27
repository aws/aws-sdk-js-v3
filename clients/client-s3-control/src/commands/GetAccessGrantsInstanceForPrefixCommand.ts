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

import { GetAccessGrantsInstanceForPrefixRequest, GetAccessGrantsInstanceForPrefixResult } from "../models/models_0";
import {
  de_GetAccessGrantsInstanceForPrefixCommand,
  se_GetAccessGrantsInstanceForPrefixCommand,
} from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetAccessGrantsInstanceForPrefixCommand}.
 */
export interface GetAccessGrantsInstanceForPrefixCommandInput extends GetAccessGrantsInstanceForPrefixRequest {}
/**
 * @public
 *
 * The output of {@link GetAccessGrantsInstanceForPrefixCommand}.
 */
export interface GetAccessGrantsInstanceForPrefixCommandOutput
  extends GetAccessGrantsInstanceForPrefixResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieve the S3 Access Grants instance that contains a particular prefix.  </p>
 *          <dl>
 *             <dt>Permissions</dt>
 *             <dd>
 *                <p>You must have the <code>s3:GetAccessGrantsInstanceForPrefix</code> permission for the caller account to use this operation. </p>
 *             </dd>
 *             <dt>Additional Permissions</dt>
 *             <dd>
 *                <p>The prefix owner account must grant you the following permissions to their S3 Access Grants instance: <code>s3:GetAccessGrantsInstanceForPrefix</code>. </p>
 *             </dd>
 *          </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, GetAccessGrantsInstanceForPrefixCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, GetAccessGrantsInstanceForPrefixCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const input = { // GetAccessGrantsInstanceForPrefixRequest
 *   AccountId: "STRING_VALUE",
 *   S3Prefix: "STRING_VALUE", // required
 * };
 * const command = new GetAccessGrantsInstanceForPrefixCommand(input);
 * const response = await client.send(command);
 * // { // GetAccessGrantsInstanceForPrefixResult
 * //   AccessGrantsInstanceArn: "STRING_VALUE",
 * //   AccessGrantsInstanceId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetAccessGrantsInstanceForPrefixCommandInput - {@link GetAccessGrantsInstanceForPrefixCommandInput}
 * @returns {@link GetAccessGrantsInstanceForPrefixCommandOutput}
 * @see {@link GetAccessGrantsInstanceForPrefixCommandInput} for command's `input` shape.
 * @see {@link GetAccessGrantsInstanceForPrefixCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 */
export class GetAccessGrantsInstanceForPrefixCommand extends $Command<
  GetAccessGrantsInstanceForPrefixCommandInput,
  GetAccessGrantsInstanceForPrefixCommandOutput,
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
  constructor(readonly input: GetAccessGrantsInstanceForPrefixCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ControlClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAccessGrantsInstanceForPrefixCommandInput, GetAccessGrantsInstanceForPrefixCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetAccessGrantsInstanceForPrefixCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getProcessArnablesPlugin(configuration));
    this.middlewareStack.use(getApplyMd5BodyChecksumPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3ControlClient";
    const commandName = "GetAccessGrantsInstanceForPrefixCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSS3ControlServiceV20180820",
        operation: "GetAccessGrantsInstanceForPrefix",
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
    input: GetAccessGrantsInstanceForPrefixCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetAccessGrantsInstanceForPrefixCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetAccessGrantsInstanceForPrefixCommandOutput> {
    return de_GetAccessGrantsInstanceForPrefixCommand(output, context);
  }
}
