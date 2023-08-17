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
import { DescribeTypeRegistrationInput, DescribeTypeRegistrationOutput } from "../models/models_0";
import { de_DescribeTypeRegistrationCommand, se_DescribeTypeRegistrationCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeTypeRegistrationCommand}.
 */
export interface DescribeTypeRegistrationCommandInput extends DescribeTypeRegistrationInput {}
/**
 * @public
 *
 * The output of {@link DescribeTypeRegistrationCommand}.
 */
export interface DescribeTypeRegistrationCommandOutput extends DescribeTypeRegistrationOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about an extension's registration, including its current status and type and version
 *    identifiers.</p>
 *          <p>When you initiate a registration request using <a>RegisterType</a>, you can then use <a>DescribeTypeRegistration</a> to monitor the progress of that registration request.</p>
 *          <p>Once the registration request has completed, use <a>DescribeType</a> to return detailed information
 *    about an extension.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeTypeRegistrationCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribeTypeRegistrationCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const input = { // DescribeTypeRegistrationInput
 *   RegistrationToken: "STRING_VALUE", // required
 * };
 * const command = new DescribeTypeRegistrationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTypeRegistrationOutput
 * //   ProgressStatus: "COMPLETE" || "IN_PROGRESS" || "FAILED",
 * //   Description: "STRING_VALUE",
 * //   TypeArn: "STRING_VALUE",
 * //   TypeVersionArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeTypeRegistrationCommandInput - {@link DescribeTypeRegistrationCommandInput}
 * @returns {@link DescribeTypeRegistrationCommandOutput}
 * @see {@link DescribeTypeRegistrationCommandInput} for command's `input` shape.
 * @see {@link DescribeTypeRegistrationCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link CFNRegistryException} (client fault)
 *  <p>An error occurred during a CloudFormation registry operation.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 */
export class DescribeTypeRegistrationCommand extends $Command<
  DescribeTypeRegistrationCommandInput,
  DescribeTypeRegistrationCommandOutput,
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
  constructor(readonly input: DescribeTypeRegistrationCommandInput) {
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
  ): Handler<DescribeTypeRegistrationCommandInput, DescribeTypeRegistrationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeTypeRegistrationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "DescribeTypeRegistrationCommand";
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
  private serialize(input: DescribeTypeRegistrationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeTypeRegistrationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeTypeRegistrationCommandOutput> {
    return de_DescribeTypeRegistrationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
