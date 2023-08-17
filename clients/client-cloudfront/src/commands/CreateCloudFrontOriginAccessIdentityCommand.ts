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

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import {
  CreateCloudFrontOriginAccessIdentityRequest,
  CreateCloudFrontOriginAccessIdentityResult,
} from "../models/models_0";
import {
  de_CreateCloudFrontOriginAccessIdentityCommand,
  se_CreateCloudFrontOriginAccessIdentityCommand,
} from "../protocols/Aws_restXml";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateCloudFrontOriginAccessIdentityCommand}.
 */
export interface CreateCloudFrontOriginAccessIdentityCommandInput extends CreateCloudFrontOriginAccessIdentityRequest {}
/**
 * @public
 *
 * The output of {@link CreateCloudFrontOriginAccessIdentityCommand}.
 */
export interface CreateCloudFrontOriginAccessIdentityCommandOutput
  extends CreateCloudFrontOriginAccessIdentityResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Creates a new origin access identity. If you're using Amazon S3 for your origin, you can
 * 			use an origin access identity to require users to access your content using a CloudFront URL
 * 			instead of the Amazon S3 URL. For more information about how to use origin access identities,
 * 			see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private
 * 				Content through CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CreateCloudFrontOriginAccessIdentityCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CreateCloudFrontOriginAccessIdentityCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // CreateCloudFrontOriginAccessIdentityRequest
 *   CloudFrontOriginAccessIdentityConfig: { // CloudFrontOriginAccessIdentityConfig
 *     CallerReference: "STRING_VALUE", // required
 *     Comment: "STRING_VALUE", // required
 *   },
 * };
 * const command = new CreateCloudFrontOriginAccessIdentityCommand(input);
 * const response = await client.send(command);
 * // { // CreateCloudFrontOriginAccessIdentityResult
 * //   CloudFrontOriginAccessIdentity: { // CloudFrontOriginAccessIdentity
 * //     Id: "STRING_VALUE", // required
 * //     S3CanonicalUserId: "STRING_VALUE", // required
 * //     CloudFrontOriginAccessIdentityConfig: { // CloudFrontOriginAccessIdentityConfig
 * //       CallerReference: "STRING_VALUE", // required
 * //       Comment: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   Location: "STRING_VALUE",
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateCloudFrontOriginAccessIdentityCommandInput - {@link CreateCloudFrontOriginAccessIdentityCommandInput}
 * @returns {@link CreateCloudFrontOriginAccessIdentityCommandOutput}
 * @see {@link CreateCloudFrontOriginAccessIdentityCommandInput} for command's `input` shape.
 * @see {@link CreateCloudFrontOriginAccessIdentityCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link CloudFrontOriginAccessIdentityAlreadyExists} (client fault)
 *  <p>If the <code>CallerReference</code> is a value you already sent in a previous request
 * 			to create an identity but the content of the
 * 				<code>CloudFrontOriginAccessIdentityConfig</code> is different from the original
 * 			request, CloudFront returns a <code>CloudFrontOriginAccessIdentityAlreadyExists</code> error.
 * 		</p>
 *
 * @throws {@link InconsistentQuantities} (client fault)
 *  <p>The value of <code>Quantity</code> and the size of <code>Items</code> don't
 * 			match.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link MissingBody} (client fault)
 *  <p>This operation requires a body. Ensure that the body is present and the
 * 				<code>Content-Type</code> header is set.</p>
 *
 * @throws {@link TooManyCloudFrontOriginAccessIdentities} (client fault)
 *  <p>Processing your request would cause you to exceed the maximum number of origin access
 * 			identities allowed.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 */
export class CreateCloudFrontOriginAccessIdentityCommand extends $Command<
  CreateCloudFrontOriginAccessIdentityCommandInput,
  CreateCloudFrontOriginAccessIdentityCommandOutput,
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
  constructor(readonly input: CreateCloudFrontOriginAccessIdentityCommandInput) {
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
  ): Handler<CreateCloudFrontOriginAccessIdentityCommandInput, CreateCloudFrontOriginAccessIdentityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateCloudFrontOriginAccessIdentityCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "CreateCloudFrontOriginAccessIdentityCommand";
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
    input: CreateCloudFrontOriginAccessIdentityCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_CreateCloudFrontOriginAccessIdentityCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateCloudFrontOriginAccessIdentityCommandOutput> {
    return de_CreateCloudFrontOriginAccessIdentityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
