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

import { CreatePresignedNotebookInstanceUrlInput, CreatePresignedNotebookInstanceUrlOutput } from "../models/models_1";
import {
  de_CreatePresignedNotebookInstanceUrlCommand,
  se_CreatePresignedNotebookInstanceUrlCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreatePresignedNotebookInstanceUrlCommand}.
 */
export interface CreatePresignedNotebookInstanceUrlCommandInput extends CreatePresignedNotebookInstanceUrlInput {}
/**
 * @public
 *
 * The output of {@link CreatePresignedNotebookInstanceUrlCommand}.
 */
export interface CreatePresignedNotebookInstanceUrlCommandOutput
  extends CreatePresignedNotebookInstanceUrlOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns a URL that you can use to connect to the Jupyter server from a notebook
 *             instance. In the SageMaker console, when you choose <code>Open</code> next to a notebook
 *             instance, SageMaker opens a new tab showing the Jupyter server home page from the notebook
 *             instance. The console uses this API to get the URL and show the page.</p>
 *          <p> The IAM role or user used to call this API defines the permissions to access the
 *             notebook instance. Once the presigned URL is created, no additional permission is
 *             required to access this URL. IAM authorization policies for this API are also enforced
 *             for every HTTP request and WebSocket frame that attempts to connect to the notebook
 *             instance.</p>
 *          <p>You can restrict access to this API and to the URL that it returns to a list of IP
 *             addresses that you specify. Use the <code>NotIpAddress</code> condition operator and the
 *                 <code>aws:SourceIP</code> condition context key to specify the list of IP addresses
 *             that you want to have access to the notebook instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/security_iam_id-based-policy-examples.html#nbi-ip-filter">Limit Access to a Notebook Instance by IP Address</a>.</p>
 *          <note>
 *             <p>The URL that you get from a call to <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreatePresignedNotebookInstanceUrl.html">CreatePresignedNotebookInstanceUrl</a> is valid only for 5 minutes. If you
 *                 try to use the URL after the 5-minute limit expires, you are directed to the Amazon Web Services console sign-in page.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreatePresignedNotebookInstanceUrlCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreatePresignedNotebookInstanceUrlCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // CreatePresignedNotebookInstanceUrlInput
 *   NotebookInstanceName: "STRING_VALUE", // required
 *   SessionExpirationDurationInSeconds: Number("int"),
 * };
 * const command = new CreatePresignedNotebookInstanceUrlCommand(input);
 * const response = await client.send(command);
 * // { // CreatePresignedNotebookInstanceUrlOutput
 * //   AuthorizedUrl: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreatePresignedNotebookInstanceUrlCommandInput - {@link CreatePresignedNotebookInstanceUrlCommandInput}
 * @returns {@link CreatePresignedNotebookInstanceUrlCommandOutput}
 * @see {@link CreatePresignedNotebookInstanceUrlCommandInput} for command's `input` shape.
 * @see {@link CreatePresignedNotebookInstanceUrlCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class CreatePresignedNotebookInstanceUrlCommand extends $Command<
  CreatePresignedNotebookInstanceUrlCommandInput,
  CreatePresignedNotebookInstanceUrlCommandOutput,
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
  constructor(readonly input: CreatePresignedNotebookInstanceUrlCommandInput) {
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
  ): Handler<CreatePresignedNotebookInstanceUrlCommandInput, CreatePresignedNotebookInstanceUrlCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreatePresignedNotebookInstanceUrlCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreatePresignedNotebookInstanceUrlCommand";
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
    input: CreatePresignedNotebookInstanceUrlCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_CreatePresignedNotebookInstanceUrlCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreatePresignedNotebookInstanceUrlCommandOutput> {
    return de_CreatePresignedNotebookInstanceUrlCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
