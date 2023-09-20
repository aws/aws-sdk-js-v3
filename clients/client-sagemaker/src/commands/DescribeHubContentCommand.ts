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

import { DescribeHubContentRequest, DescribeHubContentResponse } from "../models/models_2";
import { de_DescribeHubContentCommand, se_DescribeHubContentCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeHubContentCommand}.
 */
export interface DescribeHubContentCommandInput extends DescribeHubContentRequest {}
/**
 * @public
 *
 * The output of {@link DescribeHubContentCommand}.
 */
export interface DescribeHubContentCommandOutput extends DescribeHubContentResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describe the content of a hub.</p>
 *          <note>
 *             <p>Hub APIs are only callable through SageMaker Studio.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeHubContentCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeHubContentCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DescribeHubContentRequest
 *   HubName: "STRING_VALUE", // required
 *   HubContentType: "Model" || "Notebook", // required
 *   HubContentName: "STRING_VALUE", // required
 *   HubContentVersion: "STRING_VALUE",
 * };
 * const command = new DescribeHubContentCommand(input);
 * const response = await client.send(command);
 * // { // DescribeHubContentResponse
 * //   HubContentName: "STRING_VALUE", // required
 * //   HubContentArn: "STRING_VALUE", // required
 * //   HubContentVersion: "STRING_VALUE", // required
 * //   HubContentType: "Model" || "Notebook", // required
 * //   DocumentSchemaVersion: "STRING_VALUE", // required
 * //   HubName: "STRING_VALUE", // required
 * //   HubArn: "STRING_VALUE", // required
 * //   HubContentDisplayName: "STRING_VALUE",
 * //   HubContentDescription: "STRING_VALUE",
 * //   HubContentMarkdown: "STRING_VALUE",
 * //   HubContentDocument: "STRING_VALUE", // required
 * //   HubContentSearchKeywords: [ // HubContentSearchKeywordList
 * //     "STRING_VALUE",
 * //   ],
 * //   HubContentDependencies: [ // HubContentDependencyList
 * //     { // HubContentDependency
 * //       DependencyOriginPath: "STRING_VALUE",
 * //       DependencyCopyPath: "STRING_VALUE",
 * //     },
 * //   ],
 * //   HubContentStatus: "Available" || "Importing" || "Deleting" || "ImportFailed" || "DeleteFailed", // required
 * //   FailureReason: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param DescribeHubContentCommandInput - {@link DescribeHubContentCommandInput}
 * @returns {@link DescribeHubContentCommandOutput}
 * @see {@link DescribeHubContentCommandInput} for command's `input` shape.
 * @see {@link DescribeHubContentCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class DescribeHubContentCommand extends $Command<
  DescribeHubContentCommandInput,
  DescribeHubContentCommandOutput,
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
  constructor(readonly input: DescribeHubContentCommandInput) {
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
  ): Handler<DescribeHubContentCommandInput, DescribeHubContentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeHubContentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DescribeHubContentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "DescribeHubContent",
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
  private serialize(input: DescribeHubContentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeHubContentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeHubContentCommandOutput> {
    return de_DescribeHubContentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
