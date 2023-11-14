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
import { GetWorkflowStepExecutionRequest, GetWorkflowStepExecutionResponse } from "../models/models_0";
import { de_GetWorkflowStepExecutionCommand, se_GetWorkflowStepExecutionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetWorkflowStepExecutionCommand}.
 */
export interface GetWorkflowStepExecutionCommandInput extends GetWorkflowStepExecutionRequest {}
/**
 * @public
 *
 * The output of {@link GetWorkflowStepExecutionCommand}.
 */
export interface GetWorkflowStepExecutionCommandOutput extends GetWorkflowStepExecutionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Get the runtime information that was logged for a specific runtime instance of
 * 			the workflow step.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, GetWorkflowStepExecutionCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, GetWorkflowStepExecutionCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const input = { // GetWorkflowStepExecutionRequest
 *   stepExecutionId: "STRING_VALUE", // required
 * };
 * const command = new GetWorkflowStepExecutionCommand(input);
 * const response = await client.send(command);
 * // { // GetWorkflowStepExecutionResponse
 * //   requestId: "STRING_VALUE",
 * //   stepExecutionId: "STRING_VALUE",
 * //   workflowBuildVersionArn: "STRING_VALUE",
 * //   workflowExecutionId: "STRING_VALUE",
 * //   imageBuildVersionArn: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   action: "STRING_VALUE",
 * //   status: "PENDING" || "SKIPPED" || "RUNNING" || "COMPLETED" || "FAILED",
 * //   rollbackStatus: "RUNNING" || "COMPLETED" || "SKIPPED" || "FAILED",
 * //   message: "STRING_VALUE",
 * //   inputs: "STRING_VALUE",
 * //   outputs: "STRING_VALUE",
 * //   startTime: "STRING_VALUE",
 * //   endTime: "STRING_VALUE",
 * //   onFailure: "STRING_VALUE",
 * //   timeoutSeconds: Number("int"),
 * // };
 *
 * ```
 *
 * @param GetWorkflowStepExecutionCommandInput - {@link GetWorkflowStepExecutionCommandInput}
 * @returns {@link GetWorkflowStepExecutionCommandOutput}
 * @see {@link GetWorkflowStepExecutionCommandInput} for command's `input` shape.
 * @see {@link GetWorkflowStepExecutionCommandOutput} for command's `response` shape.
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
export class GetWorkflowStepExecutionCommand extends $Command<
  GetWorkflowStepExecutionCommandInput,
  GetWorkflowStepExecutionCommandOutput,
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
  constructor(readonly input: GetWorkflowStepExecutionCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ImagebuilderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetWorkflowStepExecutionCommandInput, GetWorkflowStepExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetWorkflowStepExecutionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ImagebuilderClient";
    const commandName = "GetWorkflowStepExecutionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "imagebuilder",
        operation: "GetWorkflowStepExecution",
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
  private serialize(input: GetWorkflowStepExecutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetWorkflowStepExecutionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetWorkflowStepExecutionCommandOutput> {
    return de_GetWorkflowStepExecutionCommand(output, context);
  }
}
