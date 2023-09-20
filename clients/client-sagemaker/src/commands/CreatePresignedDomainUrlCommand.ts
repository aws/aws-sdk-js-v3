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

import { CreatePresignedDomainUrlRequest, CreatePresignedDomainUrlResponse } from "../models/models_1";
import { de_CreatePresignedDomainUrlCommand, se_CreatePresignedDomainUrlCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreatePresignedDomainUrlCommand}.
 */
export interface CreatePresignedDomainUrlCommandInput extends CreatePresignedDomainUrlRequest {}
/**
 * @public
 *
 * The output of {@link CreatePresignedDomainUrlCommand}.
 */
export interface CreatePresignedDomainUrlCommandOutput extends CreatePresignedDomainUrlResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a URL for a specified UserProfile in a Domain.  When accessed in a web browser,
 *        the user will be automatically signed in to Amazon SageMaker Studio, and granted access to all of
 *        the Apps and files associated with the Domain's Amazon Elastic File System (EFS) volume.
 *        This operation can only be called when the authentication mode equals IAM.
 *    </p>
 *          <p>The IAM role or user passed to this API defines the permissions to access the app. Once
 *       the presigned URL is created, no additional permission is required to access this URL. IAM
 *          authorization policies for this API are also enforced for every HTTP request and WebSocket
 *          frame that attempts to connect to the app.</p>
 *          <p>You can restrict access to this API and to the
 *       URL that it returns to a list of IP addresses, Amazon VPCs or Amazon VPC Endpoints that you specify. For more
 *       information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/studio-interface-endpoint.html">Connect to SageMaker Studio Through an Interface VPC Endpoint</a>
 *          .</p>
 *          <note>
 *             <p>The URL that you get from a call to <code>CreatePresignedDomainUrl</code> has a default timeout of 5 minutes. You can configure this value using <code>ExpiresInSeconds</code>. If you try to use the URL after the timeout limit expires, you
 *           are directed to the Amazon Web Services console sign-in page.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreatePresignedDomainUrlCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreatePresignedDomainUrlCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // CreatePresignedDomainUrlRequest
 *   DomainId: "STRING_VALUE", // required
 *   UserProfileName: "STRING_VALUE", // required
 *   SessionExpirationDurationInSeconds: Number("int"),
 *   ExpiresInSeconds: Number("int"),
 *   SpaceName: "STRING_VALUE",
 * };
 * const command = new CreatePresignedDomainUrlCommand(input);
 * const response = await client.send(command);
 * // { // CreatePresignedDomainUrlResponse
 * //   AuthorizedUrl: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreatePresignedDomainUrlCommandInput - {@link CreatePresignedDomainUrlCommandInput}
 * @returns {@link CreatePresignedDomainUrlCommandOutput}
 * @see {@link CreatePresignedDomainUrlCommandInput} for command's `input` shape.
 * @see {@link CreatePresignedDomainUrlCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class CreatePresignedDomainUrlCommand extends $Command<
  CreatePresignedDomainUrlCommandInput,
  CreatePresignedDomainUrlCommandOutput,
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
  constructor(readonly input: CreatePresignedDomainUrlCommandInput) {
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
  ): Handler<CreatePresignedDomainUrlCommandInput, CreatePresignedDomainUrlCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreatePresignedDomainUrlCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreatePresignedDomainUrlCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "CreatePresignedDomainUrl",
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
  private serialize(input: CreatePresignedDomainUrlCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreatePresignedDomainUrlCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreatePresignedDomainUrlCommandOutput> {
    return de_CreatePresignedDomainUrlCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
