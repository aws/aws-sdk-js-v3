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

import { AppRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppRunnerClient";
import {
  DescribeObservabilityConfigurationRequest,
  DescribeObservabilityConfigurationResponse,
} from "../models/models_0";
import {
  de_DescribeObservabilityConfigurationCommand,
  se_DescribeObservabilityConfigurationCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeObservabilityConfigurationCommand}.
 */
export interface DescribeObservabilityConfigurationCommandInput extends DescribeObservabilityConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeObservabilityConfigurationCommand}.
 */
export interface DescribeObservabilityConfigurationCommandOutput
  extends DescribeObservabilityConfigurationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Return a full description of an App Runner observability configuration resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, DescribeObservabilityConfigurationCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, DescribeObservabilityConfigurationCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * const client = new AppRunnerClient(config);
 * const input = { // DescribeObservabilityConfigurationRequest
 *   ObservabilityConfigurationArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeObservabilityConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeObservabilityConfigurationResponse
 * //   ObservabilityConfiguration: { // ObservabilityConfiguration
 * //     ObservabilityConfigurationArn: "STRING_VALUE",
 * //     ObservabilityConfigurationName: "STRING_VALUE",
 * //     TraceConfiguration: { // TraceConfiguration
 * //       Vendor: "AWSXRAY", // required
 * //     },
 * //     ObservabilityConfigurationRevision: Number("int"),
 * //     Latest: true || false,
 * //     Status: "ACTIVE" || "INACTIVE",
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     DeletedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeObservabilityConfigurationCommandInput - {@link DescribeObservabilityConfigurationCommandInput}
 * @returns {@link DescribeObservabilityConfigurationCommandOutput}
 * @see {@link DescribeObservabilityConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeObservabilityConfigurationCommandOutput} for command's `response` shape.
 * @see {@link AppRunnerClientResolvedConfig | config} for AppRunnerClient's `config` shape.
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>An unexpected service exception occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>One or more input parameters aren't valid. Refer to the API action's document page, correct the input parameters, and try the action again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource doesn't exist for the specified Amazon Resource Name (ARN) in your Amazon Web Services account.</p>
 *
 * @throws {@link AppRunnerServiceException}
 * <p>Base exception class for all service exceptions from AppRunner service.</p>
 *
 */
export class DescribeObservabilityConfigurationCommand extends $Command<
  DescribeObservabilityConfigurationCommandInput,
  DescribeObservabilityConfigurationCommandOutput,
  AppRunnerClientResolvedConfig
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
  constructor(readonly input: DescribeObservabilityConfigurationCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppRunnerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeObservabilityConfigurationCommandInput, DescribeObservabilityConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeObservabilityConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppRunnerClient";
    const commandName = "DescribeObservabilityConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AppRunner",
        operation: "DescribeObservabilityConfiguration",
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
  private serialize(
    input: DescribeObservabilityConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeObservabilityConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeObservabilityConfigurationCommandOutput> {
    return de_DescribeObservabilityConfigurationCommand(output, context);
  }
}
