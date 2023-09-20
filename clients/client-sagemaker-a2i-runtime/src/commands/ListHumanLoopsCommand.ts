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

import { ListHumanLoopsRequest, ListHumanLoopsResponse } from "../models/models_0";
import { de_ListHumanLoopsCommand, se_ListHumanLoopsCommand } from "../protocols/Aws_restJson1";
import {
  SageMakerA2IRuntimeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../SageMakerA2IRuntimeClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListHumanLoopsCommand}.
 */
export interface ListHumanLoopsCommandInput extends ListHumanLoopsRequest {}
/**
 * @public
 *
 * The output of {@link ListHumanLoopsCommand}.
 */
export interface ListHumanLoopsCommandOutput extends ListHumanLoopsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about human loops, given the specified parameters. If a human loop was deleted, it will not be included.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerA2IRuntimeClient, ListHumanLoopsCommand } from "@aws-sdk/client-sagemaker-a2i-runtime"; // ES Modules import
 * // const { SageMakerA2IRuntimeClient, ListHumanLoopsCommand } = require("@aws-sdk/client-sagemaker-a2i-runtime"); // CommonJS import
 * const client = new SageMakerA2IRuntimeClient(config);
 * const input = { // ListHumanLoopsRequest
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   FlowDefinitionArn: "STRING_VALUE", // required
 *   SortOrder: "Ascending" || "Descending",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListHumanLoopsCommand(input);
 * const response = await client.send(command);
 * // { // ListHumanLoopsResponse
 * //   HumanLoopSummaries: [ // HumanLoopSummaries // required
 * //     { // HumanLoopSummary
 * //       HumanLoopName: "STRING_VALUE",
 * //       HumanLoopStatus: "InProgress" || "Failed" || "Completed" || "Stopped" || "Stopping",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       FailureReason: "STRING_VALUE",
 * //       FlowDefinitionArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListHumanLoopsCommandInput - {@link ListHumanLoopsCommandInput}
 * @returns {@link ListHumanLoopsCommandOutput}
 * @see {@link ListHumanLoopsCommandInput} for command's `input` shape.
 * @see {@link ListHumanLoopsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerA2IRuntimeClientResolvedConfig | config} for SageMakerA2IRuntimeClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>We couldn't process your request because of an issue with the server. Try again
 *       later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We couldn't find the requested resource. Check that your resources exists and were created
 *       in the same AWS Region as your request, and try your request again. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>You exceeded
 *       the
 *       maximum number of requests.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The
 *       request isn't valid. Check the syntax and try again.</p>
 *
 * @throws {@link SageMakerA2IRuntimeServiceException}
 * <p>Base exception class for all service exceptions from SageMakerA2IRuntime service.</p>
 *
 */
export class ListHumanLoopsCommand extends $Command<
  ListHumanLoopsCommandInput,
  ListHumanLoopsCommandOutput,
  SageMakerA2IRuntimeClientResolvedConfig
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
  constructor(readonly input: ListHumanLoopsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerA2IRuntimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListHumanLoopsCommandInput, ListHumanLoopsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListHumanLoopsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerA2IRuntimeClient";
    const commandName = "ListHumanLoopsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonSageMakerA2IRuntime",
        operation: "ListHumanLoops",
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
  private serialize(input: ListHumanLoopsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListHumanLoopsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListHumanLoopsCommandOutput> {
    return de_ListHumanLoopsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
