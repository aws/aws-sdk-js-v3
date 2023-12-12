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
import { ListWaitingWorkflowStepsRequest, ListWaitingWorkflowStepsResponse } from "../models/models_0";
import { de_ListWaitingWorkflowStepsCommand, se_ListWaitingWorkflowStepsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListWaitingWorkflowStepsCommand}.
 */
export interface ListWaitingWorkflowStepsCommandInput extends ListWaitingWorkflowStepsRequest {}
/**
 * @public
 *
 * The output of {@link ListWaitingWorkflowStepsCommand}.
 */
export interface ListWaitingWorkflowStepsCommandOutput extends ListWaitingWorkflowStepsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Get a list of workflow steps that are waiting for action for workflows
 * 			in your Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ListWaitingWorkflowStepsCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ListWaitingWorkflowStepsCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const input = { // ListWaitingWorkflowStepsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListWaitingWorkflowStepsCommand(input);
 * const response = await client.send(command);
 * // { // ListWaitingWorkflowStepsResponse
 * //   steps: [ // WorkflowStepExecutionList
 * //     { // WorkflowStepExecution
 * //       stepExecutionId: "STRING_VALUE",
 * //       imageBuildVersionArn: "STRING_VALUE",
 * //       workflowExecutionId: "STRING_VALUE",
 * //       workflowBuildVersionArn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       action: "STRING_VALUE",
 * //       startTime: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListWaitingWorkflowStepsCommandInput - {@link ListWaitingWorkflowStepsCommandInput}
 * @returns {@link ListWaitingWorkflowStepsCommandOutput}
 * @see {@link ListWaitingWorkflowStepsCommandInput} for command's `input` shape.
 * @see {@link ListWaitingWorkflowStepsCommandOutput} for command's `response` shape.
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
export class ListWaitingWorkflowStepsCommand extends $Command<
  ListWaitingWorkflowStepsCommandInput,
  ListWaitingWorkflowStepsCommandOutput,
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
  constructor(readonly input: ListWaitingWorkflowStepsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ImagebuilderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListWaitingWorkflowStepsCommandInput, ListWaitingWorkflowStepsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListWaitingWorkflowStepsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ImagebuilderClient";
    const commandName = "ListWaitingWorkflowStepsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "imagebuilder",
        operation: "ListWaitingWorkflowSteps",
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
  private serialize(input: ListWaitingWorkflowStepsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListWaitingWorkflowStepsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListWaitingWorkflowStepsCommandOutput> {
    return de_ListWaitingWorkflowStepsCommand(output, context);
  }
}
