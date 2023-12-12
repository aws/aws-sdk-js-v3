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

import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { ListWorkflowBuildVersionsRequest, ListWorkflowBuildVersionsResponse } from "../models/models_0";
import { de_ListWorkflowBuildVersionsCommand, se_ListWorkflowBuildVersionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListWorkflowBuildVersionsCommand}.
 */
export interface ListWorkflowBuildVersionsCommandInput extends ListWorkflowBuildVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListWorkflowBuildVersionsCommand}.
 */
export interface ListWorkflowBuildVersionsCommandOutput extends ListWorkflowBuildVersionsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of build versions for a specific workflow resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ListWorkflowBuildVersionsCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ListWorkflowBuildVersionsCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const input = { // ListWorkflowBuildVersionsRequest
 *   workflowVersionArn: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListWorkflowBuildVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListWorkflowBuildVersionsResponse
 * //   workflowSummaryList: [ // WorkflowSummaryList
 * //     { // WorkflowSummary
 * //       arn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       version: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       changeDescription: "STRING_VALUE",
 * //       type: "BUILD" || "TEST" || "DISTRIBUTION",
 * //       owner: "STRING_VALUE",
 * //       state: { // WorkflowState
 * //         status: "DEPRECATED",
 * //         reason: "STRING_VALUE",
 * //       },
 * //       dateCreated: "STRING_VALUE",
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListWorkflowBuildVersionsCommandInput - {@link ListWorkflowBuildVersionsCommandInput}
 * @returns {@link ListWorkflowBuildVersionsCommandOutput}
 * @see {@link ListWorkflowBuildVersionsCommandInput} for command's `input` shape.
 * @see {@link ListWorkflowBuildVersionsCommandOutput} for command's `response` shape.
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
export class ListWorkflowBuildVersionsCommand extends $Command<
  ListWorkflowBuildVersionsCommandInput,
  ListWorkflowBuildVersionsCommandOutput,
  ImagebuilderClientResolvedConfig
> {
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
  constructor(readonly input: ListWorkflowBuildVersionsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ImagebuilderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListWorkflowBuildVersionsCommandInput, ListWorkflowBuildVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListWorkflowBuildVersionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ImagebuilderClient";
    const commandName = "ListWorkflowBuildVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "imagebuilder",
        operation: "ListWorkflowBuildVersions",
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
  private serialize(input: ListWorkflowBuildVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListWorkflowBuildVersionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListWorkflowBuildVersionsCommandOutput> {
    return de_ListWorkflowBuildVersionsCommand(output, context);
  }
}
