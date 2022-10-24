// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { HealthClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthClient";
import {
  DescribeAffectedAccountsForOrganizationRequest,
  DescribeAffectedAccountsForOrganizationRequestFilterSensitiveLog,
  DescribeAffectedAccountsForOrganizationResponse,
  DescribeAffectedAccountsForOrganizationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeAffectedAccountsForOrganizationCommand,
  serializeAws_json1_1DescribeAffectedAccountsForOrganizationCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeAffectedAccountsForOrganizationCommandInput
  extends DescribeAffectedAccountsForOrganizationRequest {}
export interface DescribeAffectedAccountsForOrganizationCommandOutput
  extends DescribeAffectedAccountsForOrganizationResponse,
    __MetadataBearer {}

/**
 * <p>Returns a list of accounts in the organization from Organizations that are affected by the
 *          provided event. For more information about the different types of Health events, see
 *             <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html">Event</a>. </p>
 *          <p>Before you can call this operation, you must first enable Health to work with
 *          Organizations. To do this, call the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EnableHealthServiceAccessForOrganization.html">EnableHealthServiceAccessForOrganization</a> operation from your organization's
 *          management account.</p>
 *          <note>
 *             <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the next request to return more results.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthClient, DescribeAffectedAccountsForOrganizationCommand } from "@aws-sdk/client-health"; // ES Modules import
 * // const { HealthClient, DescribeAffectedAccountsForOrganizationCommand } = require("@aws-sdk/client-health"); // CommonJS import
 * const client = new HealthClient(config);
 * const command = new DescribeAffectedAccountsForOrganizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAffectedAccountsForOrganizationCommandInput} for command's `input` shape.
 * @see {@link DescribeAffectedAccountsForOrganizationCommandOutput} for command's `response` shape.
 * @see {@link HealthClientResolvedConfig | config} for HealthClient's `config` shape.
 *
 */
export class DescribeAffectedAccountsForOrganizationCommand extends $Command<
  DescribeAffectedAccountsForOrganizationCommandInput,
  DescribeAffectedAccountsForOrganizationCommandOutput,
  HealthClientResolvedConfig
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

  constructor(readonly input: DescribeAffectedAccountsForOrganizationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: HealthClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeAffectedAccountsForOrganizationCommandInput,
    DescribeAffectedAccountsForOrganizationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DescribeAffectedAccountsForOrganizationCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HealthClient";
    const commandName = "DescribeAffectedAccountsForOrganizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAffectedAccountsForOrganizationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeAffectedAccountsForOrganizationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeAffectedAccountsForOrganizationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeAffectedAccountsForOrganizationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAffectedAccountsForOrganizationCommandOutput> {
    return deserializeAws_json1_1DescribeAffectedAccountsForOrganizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
