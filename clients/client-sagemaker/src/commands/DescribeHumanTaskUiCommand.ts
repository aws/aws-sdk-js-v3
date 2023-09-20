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

import { DescribeHumanTaskUiRequest, DescribeHumanTaskUiResponse } from "../models/models_2";
import { de_DescribeHumanTaskUiCommand, se_DescribeHumanTaskUiCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeHumanTaskUiCommand}.
 */
export interface DescribeHumanTaskUiCommandInput extends DescribeHumanTaskUiRequest {}
/**
 * @public
 *
 * The output of {@link DescribeHumanTaskUiCommand}.
 */
export interface DescribeHumanTaskUiCommandOutput extends DescribeHumanTaskUiResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about the requested human task user interface (worker task template).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeHumanTaskUiCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeHumanTaskUiCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DescribeHumanTaskUiRequest
 *   HumanTaskUiName: "STRING_VALUE", // required
 * };
 * const command = new DescribeHumanTaskUiCommand(input);
 * const response = await client.send(command);
 * // { // DescribeHumanTaskUiResponse
 * //   HumanTaskUiArn: "STRING_VALUE", // required
 * //   HumanTaskUiName: "STRING_VALUE", // required
 * //   HumanTaskUiStatus: "Active" || "Deleting",
 * //   CreationTime: new Date("TIMESTAMP"), // required
 * //   UiTemplate: { // UiTemplateInfo
 * //     Url: "STRING_VALUE",
 * //     ContentSha256: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeHumanTaskUiCommandInput - {@link DescribeHumanTaskUiCommandInput}
 * @returns {@link DescribeHumanTaskUiCommandOutput}
 * @see {@link DescribeHumanTaskUiCommandInput} for command's `input` shape.
 * @see {@link DescribeHumanTaskUiCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class DescribeHumanTaskUiCommand extends $Command<
  DescribeHumanTaskUiCommandInput,
  DescribeHumanTaskUiCommandOutput,
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
  constructor(readonly input: DescribeHumanTaskUiCommandInput) {
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
  ): Handler<DescribeHumanTaskUiCommandInput, DescribeHumanTaskUiCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeHumanTaskUiCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DescribeHumanTaskUiCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "DescribeHumanTaskUi",
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
  private serialize(input: DescribeHumanTaskUiCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeHumanTaskUiCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeHumanTaskUiCommandOutput> {
    return de_DescribeHumanTaskUiCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
