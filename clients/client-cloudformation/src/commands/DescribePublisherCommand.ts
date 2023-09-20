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
import { DescribePublisherInput, DescribePublisherOutput } from "../models/models_0";
import { de_DescribePublisherCommand, se_DescribePublisherCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribePublisherCommand}.
 */
export interface DescribePublisherCommandInput extends DescribePublisherInput {}
/**
 * @public
 *
 * The output of {@link DescribePublisherCommand}.
 */
export interface DescribePublisherCommandOutput extends DescribePublisherOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about a CloudFormation extension publisher.</p>
 *          <p>If you don't supply a <code>PublisherId</code>, and you have registered as an extension publisher,
 *     <code>DescribePublisher</code> returns information about your own publisher account.</p>
 *          <p>For more information about registering as a publisher, see:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterPublisher.html">RegisterPublisher</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html">Publishing
 *       extensions to make them available for public use</a> in the <i>CloudFormation CLI User
 *       Guide</i>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribePublisherCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribePublisherCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const input = { // DescribePublisherInput
 *   PublisherId: "STRING_VALUE",
 * };
 * const command = new DescribePublisherCommand(input);
 * const response = await client.send(command);
 * // { // DescribePublisherOutput
 * //   PublisherId: "STRING_VALUE",
 * //   PublisherStatus: "VERIFIED" || "UNVERIFIED",
 * //   IdentityProvider: "AWS_Marketplace" || "GitHub" || "Bitbucket",
 * //   PublisherProfile: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribePublisherCommandInput - {@link DescribePublisherCommandInput}
 * @returns {@link DescribePublisherCommandOutput}
 * @see {@link DescribePublisherCommandInput} for command's `input` shape.
 * @see {@link DescribePublisherCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link CFNRegistryException} (client fault)
 *  <p>An error occurred during a CloudFormation registry operation.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 */
export class DescribePublisherCommand extends $Command<
  DescribePublisherCommandInput,
  DescribePublisherCommandOutput,
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
  constructor(readonly input: DescribePublisherCommandInput) {
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
  ): Handler<DescribePublisherCommandInput, DescribePublisherCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribePublisherCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "DescribePublisherCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CloudFormation",
        operation: "DescribePublisher",
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
  private serialize(input: DescribePublisherCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribePublisherCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribePublisherCommandOutput> {
    return de_DescribePublisherCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
