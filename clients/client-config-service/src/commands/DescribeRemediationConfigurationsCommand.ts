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

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import {
  DescribeRemediationConfigurationsRequest,
  DescribeRemediationConfigurationsResponse,
} from "../models/models_0";
import {
  de_DescribeRemediationConfigurationsCommand,
  se_DescribeRemediationConfigurationsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeRemediationConfigurationsCommand}.
 */
export interface DescribeRemediationConfigurationsCommandInput extends DescribeRemediationConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRemediationConfigurationsCommand}.
 */
export interface DescribeRemediationConfigurationsCommandOutput
  extends DescribeRemediationConfigurationsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns the details of one or more remediation configurations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeRemediationConfigurationsCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeRemediationConfigurationsCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const input = { // DescribeRemediationConfigurationsRequest
 *   ConfigRuleNames: [ // ConfigRuleNames // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeRemediationConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRemediationConfigurationsResponse
 * //   RemediationConfigurations: [ // RemediationConfigurations
 * //     { // RemediationConfiguration
 * //       ConfigRuleName: "STRING_VALUE", // required
 * //       TargetType: "SSM_DOCUMENT", // required
 * //       TargetId: "STRING_VALUE", // required
 * //       TargetVersion: "STRING_VALUE",
 * //       Parameters: { // RemediationParameters
 * //         "<keys>": { // RemediationParameterValue
 * //           ResourceValue: { // ResourceValue
 * //             Value: "RESOURCE_ID", // required
 * //           },
 * //           StaticValue: { // StaticValue
 * //             Values: [ // StaticParameterValues // required
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         },
 * //       },
 * //       ResourceType: "STRING_VALUE",
 * //       Automatic: true || false,
 * //       ExecutionControls: { // ExecutionControls
 * //         SsmControls: { // SsmControls
 * //           ConcurrentExecutionRatePercentage: Number("int"),
 * //           ErrorPercentage: Number("int"),
 * //         },
 * //       },
 * //       MaximumAutomaticAttempts: Number("int"),
 * //       RetryAttemptSeconds: Number("long"),
 * //       Arn: "STRING_VALUE",
 * //       CreatedByService: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeRemediationConfigurationsCommandInput - {@link DescribeRemediationConfigurationsCommandInput}
 * @returns {@link DescribeRemediationConfigurationsCommandOutput}
 * @see {@link DescribeRemediationConfigurationsCommandInput} for command's `input` shape.
 * @see {@link DescribeRemediationConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 */
export class DescribeRemediationConfigurationsCommand extends $Command<
  DescribeRemediationConfigurationsCommandInput,
  DescribeRemediationConfigurationsCommandOutput,
  ConfigServiceClientResolvedConfig
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
  constructor(readonly input: DescribeRemediationConfigurationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeRemediationConfigurationsCommandInput, DescribeRemediationConfigurationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeRemediationConfigurationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "DescribeRemediationConfigurationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "StarlingDoveService",
        operation: "DescribeRemediationConfigurations",
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
    input: DescribeRemediationConfigurationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeRemediationConfigurationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeRemediationConfigurationsCommandOutput> {
    return de_DescribeRemediationConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
