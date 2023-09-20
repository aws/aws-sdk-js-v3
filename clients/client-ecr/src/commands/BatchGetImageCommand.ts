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
import { BatchGetImageRequest, BatchGetImageResponse } from "../models/models_0";
import { de_BatchGetImageCommand, se_BatchGetImageCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchGetImageCommand}.
 */
export interface BatchGetImageCommandInput extends BatchGetImageRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetImageCommand}.
 */
export interface BatchGetImageCommandOutput extends BatchGetImageResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets detailed information for an image. Images are specified with either an
 *                 <code>imageTag</code> or <code>imageDigest</code>.</p>
 *          <p>When an image is pulled, the BatchGetImage API is called once to retrieve the image
 *             manifest.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, BatchGetImageCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, BatchGetImageCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const input = { // BatchGetImageRequest
 *   registryId: "STRING_VALUE",
 *   repositoryName: "STRING_VALUE", // required
 *   imageIds: [ // ImageIdentifierList // required
 *     { // ImageIdentifier
 *       imageDigest: "STRING_VALUE",
 *       imageTag: "STRING_VALUE",
 *     },
 *   ],
 *   acceptedMediaTypes: [ // MediaTypeList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetImageCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetImageResponse
 * //   images: [ // ImageList
 * //     { // Image
 * //       registryId: "STRING_VALUE",
 * //       repositoryName: "STRING_VALUE",
 * //       imageId: { // ImageIdentifier
 * //         imageDigest: "STRING_VALUE",
 * //         imageTag: "STRING_VALUE",
 * //       },
 * //       imageManifest: "STRING_VALUE",
 * //       imageManifestMediaType: "STRING_VALUE",
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
 * @param BatchGetImageCommandInput - {@link BatchGetImageCommandInput}
 * @returns {@link BatchGetImageCommandOutput}
 * @see {@link BatchGetImageCommandInput} for command's `input` shape.
 * @see {@link BatchGetImageCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
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
 * @example To obtain multiple images in a single request
 * ```javascript
 * // This example obtains information for an image with a specified image digest ID from the repository named ubuntu in the current account.
 * const input = {
 *   "imageIds": [
 *     {
 *       "imageTag": "precise"
 *     }
 *   ],
 *   "repositoryName": "ubuntu"
 * };
 * const command = new BatchGetImageCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "failures": [],
 *   "images": [
 *     {
 *       "imageId": {
 *         "imageDigest": "sha256:example76bdff6d83a09ba2a818f0d00000063724a9ac3ba5019c56f74ebf42a",
 *         "imageTag": "precise"
 *       },
 *       "imageManifest": "{\n \"schemaVersion\": 1,\n \"name\": \"ubuntu\",\n \"tag\": \"precise\",\n...",
 *       "registryId": "244698725403",
 *       "repositoryName": "ubuntu"
 *     }
 *   ]
 * }
 * *\/
 * // example id: batchgetimage-example-1470862771437
 * ```
 *
 */
export class BatchGetImageCommand extends $Command<
  BatchGetImageCommandInput,
  BatchGetImageCommandOutput,
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
  constructor(readonly input: BatchGetImageCommandInput) {
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
  ): Handler<BatchGetImageCommandInput, BatchGetImageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, BatchGetImageCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRClient";
    const commandName = "BatchGetImageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2ContainerRegistry_V20150921",
        operation: "BatchGetImage",
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
  private serialize(input: BatchGetImageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchGetImageCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchGetImageCommandOutput> {
    return de_BatchGetImageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
