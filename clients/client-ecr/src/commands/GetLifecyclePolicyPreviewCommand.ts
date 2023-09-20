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
import { GetLifecyclePolicyPreviewRequest, GetLifecyclePolicyPreviewResponse } from "../models/models_0";
import { de_GetLifecyclePolicyPreviewCommand, se_GetLifecyclePolicyPreviewCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetLifecyclePolicyPreviewCommand}.
 */
export interface GetLifecyclePolicyPreviewCommandInput extends GetLifecyclePolicyPreviewRequest {}
/**
 * @public
 *
 * The output of {@link GetLifecyclePolicyPreviewCommand}.
 */
export interface GetLifecyclePolicyPreviewCommandOutput extends GetLifecyclePolicyPreviewResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the results of the lifecycle policy preview request for the specified
 *             repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, GetLifecyclePolicyPreviewCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, GetLifecyclePolicyPreviewCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const input = { // GetLifecyclePolicyPreviewRequest
 *   registryId: "STRING_VALUE",
 *   repositoryName: "STRING_VALUE", // required
 *   imageIds: [ // ImageIdentifierList
 *     { // ImageIdentifier
 *       imageDigest: "STRING_VALUE",
 *       imageTag: "STRING_VALUE",
 *     },
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   filter: { // LifecyclePolicyPreviewFilter
 *     tagStatus: "TAGGED" || "UNTAGGED" || "ANY",
 *   },
 * };
 * const command = new GetLifecyclePolicyPreviewCommand(input);
 * const response = await client.send(command);
 * // { // GetLifecyclePolicyPreviewResponse
 * //   registryId: "STRING_VALUE",
 * //   repositoryName: "STRING_VALUE",
 * //   lifecyclePolicyText: "STRING_VALUE",
 * //   status: "IN_PROGRESS" || "COMPLETE" || "EXPIRED" || "FAILED",
 * //   nextToken: "STRING_VALUE",
 * //   previewResults: [ // LifecyclePolicyPreviewResultList
 * //     { // LifecyclePolicyPreviewResult
 * //       imageTags: [ // ImageTagList
 * //         "STRING_VALUE",
 * //       ],
 * //       imageDigest: "STRING_VALUE",
 * //       imagePushedAt: new Date("TIMESTAMP"),
 * //       action: { // LifecyclePolicyRuleAction
 * //         type: "EXPIRE",
 * //       },
 * //       appliedRulePriority: Number("int"),
 * //     },
 * //   ],
 * //   summary: { // LifecyclePolicyPreviewSummary
 * //     expiringImageTotalCount: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetLifecyclePolicyPreviewCommandInput - {@link GetLifecyclePolicyPreviewCommandInput}
 * @returns {@link GetLifecyclePolicyPreviewCommandOutput}
 * @see {@link GetLifecyclePolicyPreviewCommandInput} for command's `input` shape.
 * @see {@link GetLifecyclePolicyPreviewCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link LifecyclePolicyPreviewNotFoundException} (client fault)
 *  <p>There is no dry run for this repository.</p>
 *
 * @throws {@link RepositoryNotFoundException} (client fault)
 *  <p>The specified repository could not be found. Check the spelling of the specified
 *             repository and ensure that you are performing operations on the correct registry.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There was an exception validating this request.</p>
 *
 * @throws {@link ECRServiceException}
 * <p>Base exception class for all service exceptions from ECR service.</p>
 *
 */
export class GetLifecyclePolicyPreviewCommand extends $Command<
  GetLifecyclePolicyPreviewCommandInput,
  GetLifecyclePolicyPreviewCommandOutput,
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
  constructor(readonly input: GetLifecyclePolicyPreviewCommandInput) {
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
  ): Handler<GetLifecyclePolicyPreviewCommandInput, GetLifecyclePolicyPreviewCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetLifecyclePolicyPreviewCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRClient";
    const commandName = "GetLifecyclePolicyPreviewCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2ContainerRegistry_V20150921",
        operation: "GetLifecyclePolicyPreview",
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
  private serialize(input: GetLifecyclePolicyPreviewCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetLifecyclePolicyPreviewCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetLifecyclePolicyPreviewCommandOutput> {
    return de_GetLifecyclePolicyPreviewCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
