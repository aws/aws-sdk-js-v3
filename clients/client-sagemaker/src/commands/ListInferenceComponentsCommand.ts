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

import { ListInferenceComponentsInput, ListInferenceComponentsOutput } from "../models/models_3";
import { de_ListInferenceComponentsCommand, se_ListInferenceComponentsCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListInferenceComponentsCommand}.
 */
export interface ListInferenceComponentsCommandInput extends ListInferenceComponentsInput {}
/**
 * @public
 *
 * The output of {@link ListInferenceComponentsCommand}.
 */
export interface ListInferenceComponentsCommandOutput extends ListInferenceComponentsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Lists the inference components in your account and their properties.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListInferenceComponentsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListInferenceComponentsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // ListInferenceComponentsInput
 *   SortBy: "Name" || "CreationTime" || "Status",
 *   SortOrder: "Ascending" || "Descending",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NameContains: "STRING_VALUE",
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 *   LastModifiedTimeBefore: new Date("TIMESTAMP"),
 *   LastModifiedTimeAfter: new Date("TIMESTAMP"),
 *   StatusEquals: "InService" || "Creating" || "Updating" || "Failed" || "Deleting",
 *   EndpointNameEquals: "STRING_VALUE",
 *   VariantNameEquals: "STRING_VALUE",
 * };
 * const command = new ListInferenceComponentsCommand(input);
 * const response = await client.send(command);
 * // { // ListInferenceComponentsOutput
 * //   InferenceComponents: [ // InferenceComponentSummaryList // required
 * //     { // InferenceComponentSummary
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       InferenceComponentArn: "STRING_VALUE", // required
 * //       InferenceComponentName: "STRING_VALUE", // required
 * //       EndpointArn: "STRING_VALUE", // required
 * //       EndpointName: "STRING_VALUE", // required
 * //       VariantName: "STRING_VALUE", // required
 * //       InferenceComponentStatus: "InService" || "Creating" || "Updating" || "Failed" || "Deleting",
 * //       LastModifiedTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListInferenceComponentsCommandInput - {@link ListInferenceComponentsCommandInput}
 * @returns {@link ListInferenceComponentsCommandOutput}
 * @see {@link ListInferenceComponentsCommandInput} for command's `input` shape.
 * @see {@link ListInferenceComponentsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class ListInferenceComponentsCommand extends $Command<
  ListInferenceComponentsCommandInput,
  ListInferenceComponentsCommandOutput,
  SageMakerClientResolvedConfig
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
  constructor(readonly input: ListInferenceComponentsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListInferenceComponentsCommandInput, ListInferenceComponentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListInferenceComponentsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListInferenceComponentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "ListInferenceComponents",
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
  private serialize(input: ListInferenceComponentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListInferenceComponentsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListInferenceComponentsCommandOutput> {
    return de_ListInferenceComponentsCommand(output, context);
  }
}
