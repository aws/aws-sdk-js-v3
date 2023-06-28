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

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { DescribeTypeInput, DescribeTypeOutput } from "../models/models_0";
import { de_DescribeTypeCommand, se_DescribeTypeCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeTypeCommand}.
 */
export interface DescribeTypeCommandInput extends DescribeTypeInput {}
/**
 * @public
 *
 * The output of {@link DescribeTypeCommand}.
 */
export interface DescribeTypeCommandOutput extends DescribeTypeOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns detailed information about an extension that has been registered.</p>
 *          <p>If you specify a <code>VersionId</code>, <code>DescribeType</code> returns information about that specific
 *    extension version. Otherwise, it returns information about the default extension version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeTypeCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribeTypeCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const input = { // DescribeTypeInput
 *   Type: "RESOURCE" || "MODULE" || "HOOK",
 *   TypeName: "STRING_VALUE",
 *   Arn: "STRING_VALUE",
 *   VersionId: "STRING_VALUE",
 *   PublisherId: "STRING_VALUE",
 *   PublicVersionNumber: "STRING_VALUE",
 * };
 * const command = new DescribeTypeCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTypeOutput
 * //   Arn: "STRING_VALUE",
 * //   Type: "RESOURCE" || "MODULE" || "HOOK",
 * //   TypeName: "STRING_VALUE",
 * //   DefaultVersionId: "STRING_VALUE",
 * //   IsDefaultVersion: true || false,
 * //   TypeTestsStatus: "PASSED" || "FAILED" || "IN_PROGRESS" || "NOT_TESTED",
 * //   TypeTestsStatusDescription: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   Schema: "STRING_VALUE",
 * //   ProvisioningType: "NON_PROVISIONABLE" || "IMMUTABLE" || "FULLY_MUTABLE",
 * //   DeprecatedStatus: "LIVE" || "DEPRECATED",
 * //   LoggingConfig: { // LoggingConfig
 * //     LogRoleArn: "STRING_VALUE", // required
 * //     LogGroupName: "STRING_VALUE", // required
 * //   },
 * //   RequiredActivatedTypes: [ // RequiredActivatedTypes
 * //     { // RequiredActivatedType
 * //       TypeNameAlias: "STRING_VALUE",
 * //       OriginalTypeName: "STRING_VALUE",
 * //       PublisherId: "STRING_VALUE",
 * //       SupportedMajorVersions: [ // SupportedMajorVersions
 * //         Number("int"),
 * //       ],
 * //     },
 * //   ],
 * //   ExecutionRoleArn: "STRING_VALUE",
 * //   Visibility: "PUBLIC" || "PRIVATE",
 * //   SourceUrl: "STRING_VALUE",
 * //   DocumentationUrl: "STRING_VALUE",
 * //   LastUpdated: new Date("TIMESTAMP"),
 * //   TimeCreated: new Date("TIMESTAMP"),
 * //   ConfigurationSchema: "STRING_VALUE",
 * //   PublisherId: "STRING_VALUE",
 * //   OriginalTypeName: "STRING_VALUE",
 * //   OriginalTypeArn: "STRING_VALUE",
 * //   PublicVersionNumber: "STRING_VALUE",
 * //   LatestPublicVersion: "STRING_VALUE",
 * //   IsActivated: true || false,
 * //   AutoUpdate: true || false,
 * // };
 *
 * ```
 *
 * @param DescribeTypeCommandInput - {@link DescribeTypeCommandInput}
 * @returns {@link DescribeTypeCommandOutput}
 * @see {@link DescribeTypeCommandInput} for command's `input` shape.
 * @see {@link DescribeTypeCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link CFNRegistryException} (client fault)
 *  <p>An error occurred during a CloudFormation registry operation.</p>
 *
 * @throws {@link TypeNotFoundException} (client fault)
 *  <p>The specified extension doesn't exist in the CloudFormation registry.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 */
export class DescribeTypeCommand extends $Command<
  DescribeTypeCommandInput,
  DescribeTypeCommandOutput,
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
  constructor(readonly input: DescribeTypeCommandInput) {
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
  ): Handler<DescribeTypeCommandInput, DescribeTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DescribeTypeCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "DescribeTypeCommand";
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
  private serialize(input: DescribeTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeTypeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeTypeCommandOutput> {
    return de_DescribeTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
