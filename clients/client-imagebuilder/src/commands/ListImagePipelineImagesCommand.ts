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

import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { ListImagePipelineImagesRequest, ListImagePipelineImagesResponse } from "../models/models_0";
import { de_ListImagePipelineImagesCommand, se_ListImagePipelineImagesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListImagePipelineImagesCommand}.
 */
export interface ListImagePipelineImagesCommandInput extends ListImagePipelineImagesRequest {}
/**
 * @public
 *
 * The output of {@link ListImagePipelineImagesCommand}.
 */
export interface ListImagePipelineImagesCommandOutput extends ListImagePipelineImagesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of images created by the specified pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ListImagePipelineImagesCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ListImagePipelineImagesCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const input = { // ListImagePipelineImagesRequest
 *   imagePipelineArn: "STRING_VALUE", // required
 *   filters: [ // FilterList
 *     { // Filter
 *       name: "STRING_VALUE",
 *       values: [ // FilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListImagePipelineImagesCommand(input);
 * const response = await client.send(command);
 * // { // ListImagePipelineImagesResponse
 * //   requestId: "STRING_VALUE",
 * //   imageSummaryList: [ // ImageSummaryList
 * //     { // ImageSummary
 * //       arn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       type: "AMI" || "DOCKER",
 * //       version: "STRING_VALUE",
 * //       platform: "Windows" || "Linux",
 * //       osVersion: "STRING_VALUE",
 * //       state: { // ImageState
 * //         status: "PENDING" || "CREATING" || "BUILDING" || "TESTING" || "DISTRIBUTING" || "INTEGRATING" || "AVAILABLE" || "CANCELLED" || "FAILED" || "DEPRECATED" || "DELETED",
 * //         reason: "STRING_VALUE",
 * //       },
 * //       owner: "STRING_VALUE",
 * //       dateCreated: "STRING_VALUE",
 * //       outputResources: { // OutputResources
 * //         amis: [ // AmiList
 * //           { // Ami
 * //             region: "STRING_VALUE",
 * //             image: "STRING_VALUE",
 * //             name: "STRING_VALUE",
 * //             description: "STRING_VALUE",
 * //             state: {
 * //               status: "PENDING" || "CREATING" || "BUILDING" || "TESTING" || "DISTRIBUTING" || "INTEGRATING" || "AVAILABLE" || "CANCELLED" || "FAILED" || "DEPRECATED" || "DELETED",
 * //               reason: "STRING_VALUE",
 * //             },
 * //             accountId: "STRING_VALUE",
 * //           },
 * //         ],
 * //         containers: [ // ContainerList
 * //           { // Container
 * //             region: "STRING_VALUE",
 * //             imageUris: [ // StringList
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       buildType: "USER_INITIATED" || "SCHEDULED" || "IMPORT",
 * //       imageSource: "AMAZON_MANAGED" || "AWS_MARKETPLACE" || "IMPORTED" || "CUSTOM",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListImagePipelineImagesCommandInput - {@link ListImagePipelineImagesCommandInput}
 * @returns {@link ListImagePipelineImagesCommandOutput}
 * @see {@link ListImagePipelineImagesCommandInput} for command's `input` shape.
 * @see {@link ListImagePipelineImagesCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for ImagebuilderClient's `config` shape.
 *
 * @throws {@link CallRateLimitExceededException} (client fault)
 *  <p>You have exceeded the permitted request rate for the specific operation.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action, such as using an action or
 * 			resource on behalf of a user that doesn't have permissions to use the action or
 * 			resource, or specifying an invalid resource identifier.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You are not authorized to perform the requested operation.</p>
 *
 * @throws {@link InvalidPaginationTokenException} (client fault)
 *  <p>You have provided an invalid pagination token in your request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>You have requested an action that that the service doesn't support.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>At least one of the resources referenced by your request does not exist.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>This exception is thrown when the service encounters an unrecoverable
 * 			exception.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unable to process your request at this time.</p>
 *
 * @throws {@link ImagebuilderServiceException}
 * <p>Base exception class for all service exceptions from Imagebuilder service.</p>
 *
 */
export class ListImagePipelineImagesCommand extends $Command<
  ListImagePipelineImagesCommandInput,
  ListImagePipelineImagesCommandOutput,
  ImagebuilderClientResolvedConfig
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
  constructor(readonly input: ListImagePipelineImagesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ImagebuilderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListImagePipelineImagesCommandInput, ListImagePipelineImagesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListImagePipelineImagesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ImagebuilderClient";
    const commandName = "ListImagePipelineImagesCommand";
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
  private serialize(input: ListImagePipelineImagesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListImagePipelineImagesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListImagePipelineImagesCommandOutput> {
    return de_ListImagePipelineImagesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
