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

import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
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
 * <p>Deletes a list of specified images within a repository. Images are specified with
 *             either an <code>imageTag</code> or <code>imageDigest</code>.</p>
 *         <p>You can remove a tag from an image by specifying the image's tag in your request. When
 *             you remove the last tag from an image, the image is deleted from your repository.</p>
 *         <p>You can completely delete an image (and all of its tags) by specifying the image's
 *             digest in your request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, BatchDeleteImageCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, BatchDeleteImageCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
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
 * //       failureCode: "STRING_VALUE",
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
 * @example To delete multiple images
 * ```javascript
 * // This example deletes images with the tags precise and trusty in a repository called ubuntu in the default registry for an account.
 * const input = {
 *   "imageIds": [
 *     {
 *       "imageTag": "precise"
 *     }
 *   ],
 *   "repositoryName": "ubuntu"
 * };
 * const command = new BatchDeleteImageCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "failures": [],
 *   "imageIds": [
 *     {
 *       "imageDigest": "sha256:examplee6d1e504117a17000003d3753086354a38375961f2e665416ef4b1b2f",
 *       "imageTag": "precise"
 *     }
 *   ]
 * }
 * *\/
 * // example id: batchdeleteimages-example-1470860541707
 * ```
 *
 */
export class BatchDeleteImageCommand extends $Command<
  BatchDeleteImageCommandInput,
  BatchDeleteImageCommandOutput,
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
    configuration: ECRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchDeleteImageCommandInput, BatchDeleteImageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchDeleteImageCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRClient";
    const commandName = "BatchDeleteImageCommand";
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
