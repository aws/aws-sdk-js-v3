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

import { ECRPUBLICClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRPUBLICClient";
import { CompleteLayerUploadRequest, CompleteLayerUploadResponse } from "../models/models_0";
import { de_CompleteLayerUploadCommand, se_CompleteLayerUploadCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CompleteLayerUploadCommand}.
 */
export interface CompleteLayerUploadCommandInput extends CompleteLayerUploadRequest {}
/**
 * @public
 *
 * The output of {@link CompleteLayerUploadCommand}.
 */
export interface CompleteLayerUploadCommandOutput extends CompleteLayerUploadResponse, __MetadataBearer {}

/**
 * @public
 * <p>Informs Amazon ECR that the image layer upload is complete for a specified public registry,
 *          repository name, and upload ID. You can optionally provide a <code>sha256</code> digest of
 *          the image layer for data validation purposes.</p>
 *          <p>When an image is pushed, the CompleteLayerUpload API is called once for each new image
 *          layer to verify that the upload is complete.</p>
 *          <note>
 *             <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRPUBLICClient, CompleteLayerUploadCommand } from "@aws-sdk/client-ecr-public"; // ES Modules import
 * // const { ECRPUBLICClient, CompleteLayerUploadCommand } = require("@aws-sdk/client-ecr-public"); // CommonJS import
 * const client = new ECRPUBLICClient(config);
 * const input = { // CompleteLayerUploadRequest
 *   registryId: "STRING_VALUE",
 *   repositoryName: "STRING_VALUE", // required
 *   uploadId: "STRING_VALUE", // required
 *   layerDigests: [ // LayerDigestList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new CompleteLayerUploadCommand(input);
 * const response = await client.send(command);
 * // { // CompleteLayerUploadResponse
 * //   registryId: "STRING_VALUE",
 * //   repositoryName: "STRING_VALUE",
 * //   uploadId: "STRING_VALUE",
 * //   layerDigest: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CompleteLayerUploadCommandInput - {@link CompleteLayerUploadCommandInput}
 * @returns {@link CompleteLayerUploadCommandOutput}
 * @see {@link CompleteLayerUploadCommandInput} for command's `input` shape.
 * @see {@link CompleteLayerUploadCommandOutput} for command's `response` shape.
 * @see {@link ECRPUBLICClientResolvedConfig | config} for ECRPUBLICClient's `config` shape.
 *
 * @throws {@link EmptyUploadException} (client fault)
 *  <p>The specified layer upload doesn't contain any layer parts.</p>
 *
 * @throws {@link InvalidLayerException} (client fault)
 *  <p>The layer digest calculation performed by Amazon ECR when the image layer doesn't match the
 *          digest specified.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *          request.</p>
 *
 * @throws {@link LayerAlreadyExistsException} (client fault)
 *  <p>The image layer already exists in the associated repository.</p>
 *
 * @throws {@link LayerPartTooSmallException} (client fault)
 *  <p>Layer parts must be at least 5 MiB in size.</p>
 *
 * @throws {@link RegistryNotFoundException} (client fault)
 *  <p>The registry doesn't exist.</p>
 *
 * @throws {@link RepositoryNotFoundException} (client fault)
 *  <p>The specified repository can't be found. Check the spelling of the specified repository
 *          and ensure that you're performing operations on the correct registry.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link UnsupportedCommandException} (client fault)
 *  <p>The action isn't supported in this Region.</p>
 *
 * @throws {@link UploadNotFoundException} (client fault)
 *  <p>The upload can't be found, or the specified upload ID isn't valid for this
 *          repository.</p>
 *
 * @throws {@link ECRPUBLICServiceException}
 * <p>Base exception class for all service exceptions from ECRPUBLIC service.</p>
 *
 */
export class CompleteLayerUploadCommand extends $Command<
  CompleteLayerUploadCommandInput,
  CompleteLayerUploadCommandOutput,
  ECRPUBLICClientResolvedConfig
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
  constructor(readonly input: CompleteLayerUploadCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECRPUBLICClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CompleteLayerUploadCommandInput, CompleteLayerUploadCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CompleteLayerUploadCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRPUBLICClient";
    const commandName = "CompleteLayerUploadCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SpencerFrontendService",
        operation: "CompleteLayerUpload",
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
  private serialize(input: CompleteLayerUploadCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CompleteLayerUploadCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CompleteLayerUploadCommandOutput> {
    return de_CompleteLayerUploadCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
