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

import { GetAccessGrantRequest, GetAccessGrantResult } from "../models/models_0";
import { de_GetAccessGrantCommand, se_GetAccessGrantCommand } from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetAccessGrantCommand}.
 */
export interface GetAccessGrantCommandInput extends GetAccessGrantRequest {}
/**
 * @public
 *
 * The output of {@link GetAccessGrantCommand}.
 */
export interface GetAccessGrantCommandOutput extends GetAccessGrantResult, __MetadataBearer {}

/**
 * @public
 * <p>Get the details of an access grant from your S3 Access Grants instance.</p>
 *          <dl>
 *             <dt>Permissions</dt>
 *             <dd>
 *                <p>You must have the <code>s3:GetAccessGrant</code> permission to use this operation. </p>
 *             </dd>
 *          </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, GetAccessGrantCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, GetAccessGrantCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const input = { // GetAccessGrantRequest
 *   AccountId: "STRING_VALUE",
 *   AccessGrantId: "STRING_VALUE", // required
 * };
 * const command = new GetAccessGrantCommand(input);
 * const response = await client.send(command);
 * // { // GetAccessGrantResult
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   AccessGrantId: "STRING_VALUE",
 * //   AccessGrantArn: "STRING_VALUE",
 * //   Grantee: { // Grantee
 * //     GranteeType: "DIRECTORY_USER" || "DIRECTORY_GROUP" || "IAM",
 * //     GranteeIdentifier: "STRING_VALUE",
 * //   },
 * //   Permission: "READ" || "WRITE" || "READWRITE",
 * //   AccessGrantsLocationId: "STRING_VALUE",
 * //   AccessGrantsLocationConfiguration: { // AccessGrantsLocationConfiguration
 * //     S3SubPrefix: "STRING_VALUE",
 * //   },
 * //   GrantScope: "STRING_VALUE",
 * //   ApplicationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetAccessGrantCommandInput - {@link GetAccessGrantCommandInput}
 * @returns {@link GetAccessGrantCommandOutput}
 * @see {@link GetAccessGrantCommandInput} for command's `input` shape.
 * @see {@link GetAccessGrantCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 */
export class GetAccessGrantCommand extends $Command<
  GetAccessGrantCommandInput,
  GetAccessGrantCommandOutput,
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
  constructor(readonly input: GetAccessGrantCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ControlClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAccessGrantCommandInput, GetAccessGrantCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetAccessGrantCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getProcessArnablesPlugin(configuration));
    this.middlewareStack.use(getApplyMd5BodyChecksumPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3ControlClient";
    const commandName = "GetAccessGrantCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSS3ControlServiceV20180820",
        operation: "GetAccessGrant",
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
  private serialize(input: GetAccessGrantCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetAccessGrantCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAccessGrantCommandOutput> {
    return de_GetAccessGrantCommand(output, context);
  }
}
