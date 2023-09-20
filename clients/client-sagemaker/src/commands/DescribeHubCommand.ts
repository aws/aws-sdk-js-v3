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

import { DescribeHubRequest, DescribeHubResponse } from "../models/models_2";
import { de_DescribeHubCommand, se_DescribeHubCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeHubCommand}.
 */
export interface DescribeHubCommandInput extends DescribeHubRequest {}
/**
 * @public
 *
 * The output of {@link DescribeHubCommand}.
 */
export interface DescribeHubCommandOutput extends DescribeHubResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describe a hub.</p>
 *          <note>
 *             <p>Hub APIs are only callable through SageMaker Studio.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeHubCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeHubCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DescribeHubRequest
 *   HubName: "STRING_VALUE", // required
 * };
 * const command = new DescribeHubCommand(input);
 * const response = await client.send(command);
 * // { // DescribeHubResponse
 * //   HubName: "STRING_VALUE", // required
 * //   HubArn: "STRING_VALUE", // required
 * //   HubDisplayName: "STRING_VALUE",
 * //   HubDescription: "STRING_VALUE",
 * //   HubSearchKeywords: [ // HubSearchKeywordList
 * //     "STRING_VALUE",
 * //   ],
 * //   S3StorageConfig: { // HubS3StorageConfig
 * //     S3OutputPath: "STRING_VALUE",
 * //   },
 * //   HubStatus: "InService" || "Creating" || "Updating" || "Deleting" || "CreateFailed" || "UpdateFailed" || "DeleteFailed", // required
 * //   FailureReason: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"), // required
 * //   LastModifiedTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param DescribeHubCommandInput - {@link DescribeHubCommandInput}
 * @returns {@link DescribeHubCommandOutput}
 * @see {@link DescribeHubCommandInput} for command's `input` shape.
 * @see {@link DescribeHubCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class DescribeHubCommand extends $Command<
  DescribeHubCommandInput,
  DescribeHubCommandOutput,
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
  constructor(readonly input: DescribeHubCommandInput) {
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
  ): Handler<DescribeHubCommandInput, DescribeHubCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DescribeHubCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DescribeHubCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "DescribeHub",
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
  private serialize(input: DescribeHubCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeHubCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeHubCommandOutput> {
    return de_DescribeHubCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
