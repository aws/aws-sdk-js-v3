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
  ListServicesForAutoScalingConfigurationRequest,
  ListServicesForAutoScalingConfigurationResponse,
} from "../models/models_0";
import {
  de_ListServicesForAutoScalingConfigurationCommand,
  se_ListServicesForAutoScalingConfigurationCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListServicesForAutoScalingConfigurationCommand}.
 */
export interface ListServicesForAutoScalingConfigurationCommandInput
  extends ListServicesForAutoScalingConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link ListServicesForAutoScalingConfigurationCommand}.
 */
export interface ListServicesForAutoScalingConfigurationCommandOutput
  extends ListServicesForAutoScalingConfigurationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of the associated App Runner services using an auto scaling configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, ListServicesForAutoScalingConfigurationCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, ListServicesForAutoScalingConfigurationCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * const client = new AppRunnerClient(config);
 * const input = { // ListServicesForAutoScalingConfigurationRequest
 *   AutoScalingConfigurationArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListServicesForAutoScalingConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // ListServicesForAutoScalingConfigurationResponse
 * //   ServiceArnList: [ // ServiceArnList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListServicesForAutoScalingConfigurationCommandInput - {@link ListServicesForAutoScalingConfigurationCommandInput}
 * @returns {@link ListServicesForAutoScalingConfigurationCommandOutput}
 * @see {@link ListServicesForAutoScalingConfigurationCommandInput} for command's `input` shape.
 * @see {@link ListServicesForAutoScalingConfigurationCommandOutput} for command's `response` shape.
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
export class ListServicesForAutoScalingConfigurationCommand extends $Command<
  ListServicesForAutoScalingConfigurationCommandInput,
  ListServicesForAutoScalingConfigurationCommandOutput,
  AppRunnerClientResolvedConfig
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
  constructor(readonly input: ListServicesForAutoScalingConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppRunnerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListServicesForAutoScalingConfigurationCommandInput,
    ListServicesForAutoScalingConfigurationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        ListServicesForAutoScalingConfigurationCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppRunnerClient";
    const commandName = "ListServicesForAutoScalingConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AppRunner",
        operation: "ListServicesForAutoScalingConfiguration",
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
    input: ListServicesForAutoScalingConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListServicesForAutoScalingConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListServicesForAutoScalingConfigurationCommandOutput> {
    return de_ListServicesForAutoScalingConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
