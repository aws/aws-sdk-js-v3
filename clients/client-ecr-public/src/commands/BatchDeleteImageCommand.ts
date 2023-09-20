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
import { BatchDeleteImageRequest, BatchDeleteImageResponse } from "../models/models_0";
import { de_BatchDeleteImageCommand, se_BatchDeleteImageCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchDeleteImageCommand}.
 */
export interface BatchDeleteImageCommandInput extends BatchDeleteImageRequest {}
/**
 * @public
 *
 * The output of {@link BatchDeleteImageCommand}.
 */
export interface BatchDeleteImageCommandOutput extends BatchDeleteImageResponse, __MetadataBearer {}

/**
 * @public
 * <p>Deletes a list of specified images that are within a repository in a public registry.
 *          Images are specified with either an <code>imageTag</code> or
 *          <code>imageDigest</code>.</p>
 *          <p>You can remove a tag from an image by specifying the image's tag in your request. When
 *          you remove the last tag from an image, the image is deleted from your repository.</p>
 *          <p>You can completely delete an image (and all of its tags) by specifying the digest of the
 *          image in your request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRPUBLICClient, BatchDeleteImageCommand } from "@aws-sdk/client-ecr-public"; // ES Modules import
 * // const { ECRPUBLICClient, BatchDeleteImageCommand } = require("@aws-sdk/client-ecr-public"); // CommonJS import
 * const client = new ECRPUBLICClient(config);
 * const input = { // BatchDeleteImageRequest
 *   registryId: "STRING_VALUE",
 *   repositoryName: "STRING_VALUE", // required
 *   imageIds: [ // ImageIdentifierList // required
 *     { // ImageIdentifier
 *       imageDigest: "STRING_VALUE",
 *       imageTag: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new BatchDeleteImageCommand(input);
 * const response = await client.send(command);
 * // { // BatchDeleteImageResponse
 * //   imageIds: [ // ImageIdentifierList
 * //     { // ImageIdentifier
 * //       imageDigest: "STRING_VALUE",
 * //       imageTag: "STRING_VALUE",
 * //     },
 * //   ],
 * //   failures: [ // ImageFailureList
 * //     { // ImageFailure
 * //       imageId: {
 * //         imageDigest: "STRING_VALUE",
 * //         imageTag: "STRING_VALUE",
 * //       },
 * //       failureCode: "InvalidImageDigest" || "InvalidImageTag" || "ImageTagDoesNotMatchDigest" || "ImageNotFound" || "MissingDigestAndTag" || "ImageReferencedByManifestList" || "KmsError",
 * //       failureReason: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDeleteImageCommandInput - {@link BatchDeleteImageCommandInput}
 * @returns {@link BatchDeleteImageCommandOutput}
 * @see {@link BatchDeleteImageCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteImageCommandOutput} for command's `response` shape.
 * @see {@link ECRPUBLICClientResolvedConfig | config} for ECRPUBLICClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *          request.</p>
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
 * @throws {@link ECRPUBLICServiceException}
 * <p>Base exception class for all service exceptions from ECRPUBLIC service.</p>
 *
 */
export class BatchDeleteImageCommand extends $Command<
  BatchDeleteImageCommandInput,
  BatchDeleteImageCommandOutput,
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
  constructor(readonly input: BatchDeleteImageCommandInput) {
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
  ): Handler<BatchDeleteImageCommandInput, BatchDeleteImageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchDeleteImageCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRPUBLICClient";
    const commandName = "BatchDeleteImageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SpencerFrontendService",
        operation: "BatchDeleteImage",
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
  private serialize(input: BatchDeleteImageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchDeleteImageCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchDeleteImageCommandOutput> {
    return de_BatchDeleteImageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
