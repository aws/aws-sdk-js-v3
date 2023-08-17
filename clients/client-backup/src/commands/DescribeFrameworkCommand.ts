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

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { DescribeFrameworkInput, DescribeFrameworkOutput } from "../models/models_0";
import { de_DescribeFrameworkCommand, se_DescribeFrameworkCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeFrameworkCommand}.
 */
export interface DescribeFrameworkCommandInput extends DescribeFrameworkInput {}
/**
 * @public
 *
 * The output of {@link DescribeFrameworkCommand}.
 */
export interface DescribeFrameworkCommandOutput extends DescribeFrameworkOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns the framework details for the specified <code>FrameworkName</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DescribeFrameworkCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DescribeFrameworkCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // DescribeFrameworkInput
 *   FrameworkName: "STRING_VALUE", // required
 * };
 * const command = new DescribeFrameworkCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFrameworkOutput
 * //   FrameworkName: "STRING_VALUE",
 * //   FrameworkArn: "STRING_VALUE",
 * //   FrameworkDescription: "STRING_VALUE",
 * //   FrameworkControls: [ // FrameworkControls
 * //     { // FrameworkControl
 * //       ControlName: "STRING_VALUE", // required
 * //       ControlInputParameters: [ // ControlInputParameters
 * //         { // ControlInputParameter
 * //           ParameterName: "STRING_VALUE",
 * //           ParameterValue: "STRING_VALUE",
 * //         },
 * //       ],
 * //       ControlScope: { // ControlScope
 * //         ComplianceResourceIds: [ // ComplianceResourceIdList
 * //           "STRING_VALUE",
 * //         ],
 * //         ComplianceResourceTypes: [ // ResourceTypeList
 * //           "STRING_VALUE",
 * //         ],
 * //         Tags: { // stringMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   DeploymentStatus: "STRING_VALUE",
 * //   FrameworkStatus: "STRING_VALUE",
 * //   IdempotencyToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeFrameworkCommandInput - {@link DescribeFrameworkCommandInput}
 * @returns {@link DescribeFrameworkCommandOutput}
 * @see {@link DescribeFrameworkCommandInput} for command's `input` shape.
 * @see {@link DescribeFrameworkCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *  <p>Indicates that a required parameter is missing.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource that is required for the action doesn't exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request failed due to a temporary failure of the server.</p>
 *
 * @throws {@link BackupServiceException}
 * <p>Base exception class for all service exceptions from Backup service.</p>
 *
 */
export class DescribeFrameworkCommand extends $Command<
  DescribeFrameworkCommandInput,
  DescribeFrameworkCommandOutput,
  BackupClientResolvedConfig
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
  constructor(readonly input: DescribeFrameworkCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeFrameworkCommandInput, DescribeFrameworkCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeFrameworkCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "DescribeFrameworkCommand";
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
  private serialize(input: DescribeFrameworkCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeFrameworkCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeFrameworkCommandOutput> {
    return de_DescribeFrameworkCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
