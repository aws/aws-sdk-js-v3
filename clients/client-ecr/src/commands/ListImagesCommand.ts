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
import { ListImagesRequest, ListImagesResponse } from "../models/models_0";
import { de_ListImagesCommand, se_ListImagesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListImagesCommand}.
 */
export interface ListImagesCommandInput extends ListImagesRequest {}
/**
 * @public
 *
 * The output of {@link ListImagesCommand}.
 */
export interface ListImagesCommandOutput extends ListImagesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists all the image IDs for the specified repository.</p>
 *          <p>You can filter images based on whether or not they are tagged by using the
 *                 <code>tagStatus</code> filter and specifying either <code>TAGGED</code>,
 *                 <code>UNTAGGED</code> or <code>ANY</code>. For example, you can filter your results
 *             to return only <code>UNTAGGED</code> images and then pipe that result to a <a>BatchDeleteImage</a> operation to delete them. Or, you can filter your
 *             results to return only <code>TAGGED</code> images to list all of the tags in your
 *             repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, ListImagesCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, ListImagesCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const input = { // ListImagesRequest
 *   registryId: "STRING_VALUE",
 *   repositoryName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   filter: { // ListImagesFilter
 *     tagStatus: "TAGGED" || "UNTAGGED" || "ANY",
 *   },
 * };
 * const command = new ListImagesCommand(input);
 * const response = await client.send(command);
 * // { // ListImagesResponse
 * //   imageIds: [ // ImageIdentifierList
 * //     { // ImageIdentifier
 * //       imageDigest: "STRING_VALUE",
 * //       imageTag: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListImagesCommandInput - {@link ListImagesCommandInput}
 * @returns {@link ListImagesCommandOutput}
 * @see {@link ListImagesCommandInput} for command's `input` shape.
 * @see {@link ListImagesCommandOutput} for command's `response` shape.
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
 * @example To list all images in a repository
 * ```javascript
 * // This example lists all of the images in the repository named ubuntu in the default registry in the current account.
 * const input = {
 *   "repositoryName": "ubuntu"
 * };
 * const command = new ListImagesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "imageIds": [
 *     {
 *       "imageDigest": "sha256:764f63476bdff6d83a09ba2a818f0d35757063724a9ac3ba5019c56f74ebf42a",
 *       "imageTag": "precise"
 *     }
 *   ]
 * }
 * *\/
 * // example id: listimages-example-1470868161594
 * ```
 *
 */
export class ListImagesCommand extends $Command<
  ListImagesCommandInput,
  ListImagesCommandOutput,
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
  constructor(readonly input: ListImagesCommandInput) {
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
  ): Handler<ListImagesCommandInput, ListImagesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListImagesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRClient";
    const commandName = "ListImagesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2ContainerRegistry_V20150921",
        operation: "ListImages",
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
  private serialize(input: ListImagesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListImagesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListImagesCommandOutput> {
    return de_ListImagesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
