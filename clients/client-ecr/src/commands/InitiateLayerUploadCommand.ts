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

import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { InitiateLayerUploadRequest, InitiateLayerUploadResponse } from "../models/models_0";
import { de_InitiateLayerUploadCommand, se_InitiateLayerUploadCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link InitiateLayerUploadCommand}.
 */
export interface InitiateLayerUploadCommandInput extends InitiateLayerUploadRequest {}
/**
 * @public
 *
 * The output of {@link InitiateLayerUploadCommand}.
 */
export interface InitiateLayerUploadCommandOutput extends InitiateLayerUploadResponse, __MetadataBearer {}

/**
 * @public
 * <p>Notifies Amazon ECR that you intend to upload an image layer.</p>
 *          <p>When an image is pushed, the InitiateLayerUpload API is called once per image layer
 *             that has not already been uploaded. Whether or not an image layer has been uploaded is
 *             determined by the BatchCheckLayerAvailability API action.</p>
 *          <note>
 *             <p>This operation is used by the Amazon ECR proxy and is not generally used by
 *         customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, InitiateLayerUploadCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, InitiateLayerUploadCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const input = { // InitiateLayerUploadRequest
 *   registryId: "STRING_VALUE",
 *   repositoryName: "STRING_VALUE", // required
 * };
 * const command = new InitiateLayerUploadCommand(input);
 * const response = await client.send(command);
 * // { // InitiateLayerUploadResponse
 * //   uploadId: "STRING_VALUE",
 * //   partSize: Number("long"),
 * // };
 *
 * ```
 *
 * @param InitiateLayerUploadCommandInput - {@link InitiateLayerUploadCommandInput}
 * @returns {@link InitiateLayerUploadCommandOutput}
 * @see {@link InitiateLayerUploadCommandInput} for command's `input` shape.
 * @see {@link InitiateLayerUploadCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link KmsException} (client fault)
 *  <p>The operation failed due to a KMS exception.</p>
 *
 * @throws {@link RepositoryNotFoundException} (client fault)
 *  <p>The specified repository could not be found. Check the spelling of the specified
 *             repository and ensure that you are performing operations on the correct registry.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link ECRServiceException}
 * <p>Base exception class for all service exceptions from ECR service.</p>
 *
 */
export class InitiateLayerUploadCommand extends $Command<
  InitiateLayerUploadCommandInput,
  InitiateLayerUploadCommandOutput,
  ECRClientResolvedConfig
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
  constructor(readonly input: InitiateLayerUploadCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<InitiateLayerUploadCommandInput, InitiateLayerUploadCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, InitiateLayerUploadCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRClient";
    const commandName = "InitiateLayerUploadCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2ContainerRegistry_V20150921",
        operation: "InitiateLayerUpload",
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
  private serialize(input: InitiateLayerUploadCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_InitiateLayerUploadCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<InitiateLayerUploadCommandOutput> {
    return de_InitiateLayerUploadCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
