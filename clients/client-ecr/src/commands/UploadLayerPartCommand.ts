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
import { UploadLayerPartRequest, UploadLayerPartResponse } from "../models/models_0";
import { de_UploadLayerPartCommand, se_UploadLayerPartCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UploadLayerPartCommand}.
 */
export interface UploadLayerPartCommandInput extends UploadLayerPartRequest {}
/**
 * @public
 *
 * The output of {@link UploadLayerPartCommand}.
 */
export interface UploadLayerPartCommandOutput extends UploadLayerPartResponse, __MetadataBearer {}

/**
 * @public
 * <p>Uploads an image layer part to Amazon ECR.</p>
 *          <p>When an image is pushed, each new image layer is uploaded in parts. The maximum size
 *             of each image layer part can be 20971520 bytes (or about 20MB). The UploadLayerPart API
 *             is called once per each new image layer part.</p>
 *          <note>
 *             <p>This operation is used by the Amazon ECR proxy and is not generally used by
 *         customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, UploadLayerPartCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, UploadLayerPartCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const input = { // UploadLayerPartRequest
 *   registryId: "STRING_VALUE",
 *   repositoryName: "STRING_VALUE", // required
 *   uploadId: "STRING_VALUE", // required
 *   partFirstByte: Number("long"), // required
 *   partLastByte: Number("long"), // required
 *   layerPartBlob: "BLOB_VALUE", // required
 * };
 * const command = new UploadLayerPartCommand(input);
 * const response = await client.send(command);
 * // { // UploadLayerPartResponse
 * //   registryId: "STRING_VALUE",
 * //   repositoryName: "STRING_VALUE",
 * //   uploadId: "STRING_VALUE",
 * //   lastByteReceived: Number("long"),
 * // };
 *
 * ```
 *
 * @param UploadLayerPartCommandInput - {@link UploadLayerPartCommandInput}
 * @returns {@link UploadLayerPartCommandOutput}
 * @see {@link UploadLayerPartCommandInput} for command's `input` shape.
 * @see {@link UploadLayerPartCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 * @throws {@link InvalidLayerPartException} (client fault)
 *  <p>The layer part size is not valid, or the first byte specified is not consecutive to
 *             the last byte of a previous layer part upload.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link KmsException} (client fault)
 *  <p>The operation failed due to a KMS exception.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The operation did not succeed because it would have exceeded a service limit for your
 *             account. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/service-quotas.html">Amazon ECR service quotas</a> in
 *             the Amazon Elastic Container Registry User Guide.</p>
 *
 * @throws {@link RepositoryNotFoundException} (client fault)
 *  <p>The specified repository could not be found. Check the spelling of the specified
 *             repository and ensure that you are performing operations on the correct registry.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link UploadNotFoundException} (client fault)
 *  <p>The upload could not be found, or the specified upload ID is not valid for this
 *             repository.</p>
 *
 * @throws {@link ECRServiceException}
 * <p>Base exception class for all service exceptions from ECR service.</p>
 *
 */
export class UploadLayerPartCommand extends $Command<
  UploadLayerPartCommandInput,
  UploadLayerPartCommandOutput,
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
  constructor(readonly input: UploadLayerPartCommandInput) {
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
  ): Handler<UploadLayerPartCommandInput, UploadLayerPartCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UploadLayerPartCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRClient";
    const commandName = "UploadLayerPartCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2ContainerRegistry_V20150921",
        operation: "UploadLayerPart",
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
  private serialize(input: UploadLayerPartCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UploadLayerPartCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UploadLayerPartCommandOutput> {
    return de_UploadLayerPartCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
