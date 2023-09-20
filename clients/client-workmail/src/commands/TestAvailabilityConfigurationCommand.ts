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

import {
  TestAvailabilityConfigurationRequest,
  TestAvailabilityConfigurationRequestFilterSensitiveLog,
  TestAvailabilityConfigurationResponse,
} from "../models/models_0";
import {
  de_TestAvailabilityConfigurationCommand,
  se_TestAvailabilityConfigurationCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link TestAvailabilityConfigurationCommand}.
 */
export interface TestAvailabilityConfigurationCommandInput extends TestAvailabilityConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link TestAvailabilityConfigurationCommand}.
 */
export interface TestAvailabilityConfigurationCommandOutput
  extends TestAvailabilityConfigurationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Performs a test on an availability provider to ensure that access is allowed. For EWS, it verifies the provided credentials can be used to successfully log in. For Lambda, it verifies that the Lambda function can be invoked and that the resource access
 *          policy was configured to deny anonymous access. An anonymous invocation is one done without providing either a <code>SourceArn</code> or <code>SourceAccount</code> header.</p>
 *          <note>
 *             <p>The request must contain either one provider definition (<code>EwsProvider</code> or
 *                <code>LambdaProvider</code>) or the <code>DomainName</code> parameter. If the
 *                <code>DomainName</code> parameter is provided, the configuration stored under the
 *                <code>DomainName</code> will be tested.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, TestAvailabilityConfigurationCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, TestAvailabilityConfigurationCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const input = { // TestAvailabilityConfigurationRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   DomainName: "STRING_VALUE",
 *   EwsProvider: { // EwsAvailabilityProvider
 *     EwsEndpoint: "STRING_VALUE", // required
 *     EwsUsername: "STRING_VALUE", // required
 *     EwsPassword: "STRING_VALUE", // required
 *   },
 *   LambdaProvider: { // LambdaAvailabilityProvider
 *     LambdaArn: "STRING_VALUE", // required
 *   },
 * };
 * const command = new TestAvailabilityConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // TestAvailabilityConfigurationResponse
 * //   TestPassed: true || false,
 * //   FailureReason: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param TestAvailabilityConfigurationCommandInput - {@link TestAvailabilityConfigurationCommandInput}
 * @returns {@link TestAvailabilityConfigurationCommandOutput}
 * @see {@link TestAvailabilityConfigurationCommandInput} for command's `input` shape.
 * @see {@link TestAvailabilityConfigurationCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *  <p>An operation received a valid organization identifier that either doesn't belong or
 *          exist in the system.</p>
 *
 * @throws {@link OrganizationStateException} (client fault)
 *  <p>The organization must have a valid state to perform certain
 *          operations on the organization or its members.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource cannot be found.</p>
 *
 * @throws {@link WorkMailServiceException}
 * <p>Base exception class for all service exceptions from WorkMail service.</p>
 *
 */
export class TestAvailabilityConfigurationCommand extends $Command<
  TestAvailabilityConfigurationCommandInput,
  TestAvailabilityConfigurationCommandOutput,
  WorkMailClientResolvedConfig
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
  constructor(readonly input: TestAvailabilityConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkMailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TestAvailabilityConfigurationCommandInput, TestAvailabilityConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, TestAvailabilityConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkMailClient";
    const commandName = "TestAvailabilityConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TestAvailabilityConfigurationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "WorkMailService",
        operation: "TestAvailabilityConfiguration",
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
  private serialize(input: TestAvailabilityConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_TestAvailabilityConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<TestAvailabilityConfigurationCommandOutput> {
    return de_TestAvailabilityConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
