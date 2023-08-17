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

import { ListAlgorithmsInput, ListAlgorithmsOutput } from "../models/models_3";
import { de_ListAlgorithmsCommand, se_ListAlgorithmsCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAlgorithmsCommand}.
 */
export interface ListAlgorithmsCommandInput extends ListAlgorithmsInput {}
/**
 * @public
 *
 * The output of {@link ListAlgorithmsCommand}.
 */
export interface ListAlgorithmsCommandOutput extends ListAlgorithmsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Lists the machine learning algorithms that have been created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListAlgorithmsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListAlgorithmsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // ListAlgorithmsInput
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   MaxResults: Number("int"),
 *   NameContains: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   SortBy: "Name" || "CreationTime",
 *   SortOrder: "Ascending" || "Descending",
 * };
 * const command = new ListAlgorithmsCommand(input);
 * const response = await client.send(command);
 * // { // ListAlgorithmsOutput
 * //   AlgorithmSummaryList: [ // AlgorithmSummaryList // required
 * //     { // AlgorithmSummary
 * //       AlgorithmName: "STRING_VALUE", // required
 * //       AlgorithmArn: "STRING_VALUE", // required
 * //       AlgorithmDescription: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       AlgorithmStatus: "Pending" || "InProgress" || "Completed" || "Failed" || "Deleting", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAlgorithmsCommandInput - {@link ListAlgorithmsCommandInput}
 * @returns {@link ListAlgorithmsCommandOutput}
 * @see {@link ListAlgorithmsCommandInput} for command's `input` shape.
 * @see {@link ListAlgorithmsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class ListAlgorithmsCommand extends $Command<
  ListAlgorithmsCommandInput,
  ListAlgorithmsCommandOutput,
  SageMakerClientResolvedConfig
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
  constructor(readonly input: ListAlgorithmsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAlgorithmsCommandInput, ListAlgorithmsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAlgorithmsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListAlgorithmsCommand";
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
  private serialize(input: ListAlgorithmsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListAlgorithmsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAlgorithmsCommandOutput> {
    return de_ListAlgorithmsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
