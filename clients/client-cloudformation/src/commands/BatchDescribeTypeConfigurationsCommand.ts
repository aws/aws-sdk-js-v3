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

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { BatchDescribeTypeConfigurationsInput, BatchDescribeTypeConfigurationsOutput } from "../models/models_0";
import {
  de_BatchDescribeTypeConfigurationsCommand,
  se_BatchDescribeTypeConfigurationsCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchDescribeTypeConfigurationsCommand}.
 */
export interface BatchDescribeTypeConfigurationsCommandInput extends BatchDescribeTypeConfigurationsInput {}
/**
 * @public
 *
 * The output of {@link BatchDescribeTypeConfigurationsCommand}.
 */
export interface BatchDescribeTypeConfigurationsCommandOutput
  extends BatchDescribeTypeConfigurationsOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns configuration data for the specified CloudFormation extensions, from the CloudFormation registry for the account and Region.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-register.html#registry-set-configuration">Configuring extensions at
 *     the account level</a> in the <i>CloudFormation User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, BatchDescribeTypeConfigurationsCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, BatchDescribeTypeConfigurationsCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const input = { // BatchDescribeTypeConfigurationsInput
 *   TypeConfigurationIdentifiers: [ // TypeConfigurationIdentifiers // required
 *     { // TypeConfigurationIdentifier
 *       TypeArn: "STRING_VALUE",
 *       TypeConfigurationAlias: "STRING_VALUE",
 *       TypeConfigurationArn: "STRING_VALUE",
 *       Type: "RESOURCE" || "MODULE" || "HOOK",
 *       TypeName: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new BatchDescribeTypeConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // BatchDescribeTypeConfigurationsOutput
 * //   Errors: [ // BatchDescribeTypeConfigurationsErrors
 * //     { // BatchDescribeTypeConfigurationsError
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //       TypeConfigurationIdentifier: { // TypeConfigurationIdentifier
 * //         TypeArn: "STRING_VALUE",
 * //         TypeConfigurationAlias: "STRING_VALUE",
 * //         TypeConfigurationArn: "STRING_VALUE",
 * //         Type: "RESOURCE" || "MODULE" || "HOOK",
 * //         TypeName: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   UnprocessedTypeConfigurations: [ // UnprocessedTypeConfigurations
 * //     {
 * //       TypeArn: "STRING_VALUE",
 * //       TypeConfigurationAlias: "STRING_VALUE",
 * //       TypeConfigurationArn: "STRING_VALUE",
 * //       Type: "RESOURCE" || "MODULE" || "HOOK",
 * //       TypeName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   TypeConfigurations: [ // TypeConfigurationDetailsList
 * //     { // TypeConfigurationDetails
 * //       Arn: "STRING_VALUE",
 * //       Alias: "STRING_VALUE",
 * //       Configuration: "STRING_VALUE",
 * //       LastUpdated: new Date("TIMESTAMP"),
 * //       TypeArn: "STRING_VALUE",
 * //       TypeName: "STRING_VALUE",
 * //       IsDefaultConfiguration: true || false,
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDescribeTypeConfigurationsCommandInput - {@link BatchDescribeTypeConfigurationsCommandInput}
 * @returns {@link BatchDescribeTypeConfigurationsCommandOutput}
 * @see {@link BatchDescribeTypeConfigurationsCommandInput} for command's `input` shape.
 * @see {@link BatchDescribeTypeConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link CFNRegistryException} (client fault)
 *  <p>An error occurred during a CloudFormation registry operation.</p>
 *
 * @throws {@link TypeConfigurationNotFoundException} (client fault)
 *  <p>The specified extension configuration can't be found.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 */
export class BatchDescribeTypeConfigurationsCommand extends $Command<
  BatchDescribeTypeConfigurationsCommandInput,
  BatchDescribeTypeConfigurationsCommandOutput,
  CloudFormationClientResolvedConfig
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
  constructor(readonly input: BatchDescribeTypeConfigurationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchDescribeTypeConfigurationsCommandInput, BatchDescribeTypeConfigurationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchDescribeTypeConfigurationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "BatchDescribeTypeConfigurationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CloudFormation",
        operation: "BatchDescribeTypeConfigurations",
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
    input: BatchDescribeTypeConfigurationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_BatchDescribeTypeConfigurationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchDescribeTypeConfigurationsCommandOutput> {
    return de_BatchDescribeTypeConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
