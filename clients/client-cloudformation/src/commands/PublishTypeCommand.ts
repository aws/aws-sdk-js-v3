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
import { PublishTypeInput, PublishTypeOutput } from "../models/models_0";
import { de_PublishTypeCommand, se_PublishTypeCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PublishTypeCommand}.
 */
export interface PublishTypeCommandInput extends PublishTypeInput {}
/**
 * @public
 *
 * The output of {@link PublishTypeCommand}.
 */
export interface PublishTypeCommandOutput extends PublishTypeOutput, __MetadataBearer {}

/**
 * @public
 * <p>Publishes the specified extension to the CloudFormation registry as a public extension in this Region.
 *    Public extensions are available for use by all CloudFormation users. For more information about publishing
 *    extensions, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html">Publishing extensions to make them available for public use</a> in the <i>CloudFormation CLI
 *     User Guide</i>.</p>
 *          <p>To publish an extension, you must be registered as a publisher with CloudFormation. For more
 *    information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterPublisher.html">RegisterPublisher</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, PublishTypeCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, PublishTypeCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const input = { // PublishTypeInput
 *   Type: "RESOURCE" || "MODULE" || "HOOK",
 *   Arn: "STRING_VALUE",
 *   TypeName: "STRING_VALUE",
 *   PublicVersionNumber: "STRING_VALUE",
 * };
 * const command = new PublishTypeCommand(input);
 * const response = await client.send(command);
 * // { // PublishTypeOutput
 * //   PublicTypeArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PublishTypeCommandInput - {@link PublishTypeCommandInput}
 * @returns {@link PublishTypeCommandOutput}
 * @see {@link PublishTypeCommandInput} for command's `input` shape.
 * @see {@link PublishTypeCommandOutput} for command's `response` shape.
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
export class PublishTypeCommand extends $Command<
  PublishTypeCommandInput,
  PublishTypeCommandOutput,
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
  constructor(readonly input: PublishTypeCommandInput) {
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
  ): Handler<PublishTypeCommandInput, PublishTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, PublishTypeCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "PublishTypeCommand";
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
  private serialize(input: PublishTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PublishTypeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PublishTypeCommandOutput> {
    return de_PublishTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
