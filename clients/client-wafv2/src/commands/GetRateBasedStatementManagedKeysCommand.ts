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

import {
  GetRateBasedStatementManagedKeysRequest,
  GetRateBasedStatementManagedKeysRequestFilterSensitiveLog,
  GetRateBasedStatementManagedKeysResponse,
  GetRateBasedStatementManagedKeysResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetRateBasedStatementManagedKeysCommand,
  serializeAws_json1_1GetRateBasedStatementManagedKeysCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";

export interface GetRateBasedStatementManagedKeysCommandInput extends GetRateBasedStatementManagedKeysRequest {}
export interface GetRateBasedStatementManagedKeysCommandOutput
  extends GetRateBasedStatementManagedKeysResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves the keys that are currently blocked by a rate-based rule instance. The maximum
 *          number of managed keys that can be blocked for a single rate-based rule instance is 10,000.
 *          If more than 10,000 addresses exceed the rate limit, those with the highest rates are
 *          blocked.</p>
 *          <p>For a rate-based rule that you've defined inside a rule group, provide the name of the
 *          rule group reference statement in your request, in addition to the rate-based rule name and
 *          the web ACL name. </p>
 *          <p>WAF monitors web requests and manages keys independently for each unique combination
 *          of web ACL, optional rule group, and rate-based rule. For example, if you define a
 *          rate-based rule inside a rule group, and then use the rule group in a web ACL, WAF
 *          monitors web requests and manages keys for that web ACL, rule group reference statement,
 *          and rate-based rule instance. If you use the same rule group in a second web ACL, WAF
 *          monitors web requests and manages keys for this second usage completely independent of your
 *          first. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, GetRateBasedStatementManagedKeysCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, GetRateBasedStatementManagedKeysCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new GetRateBasedStatementManagedKeysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRateBasedStatementManagedKeysCommandInput} for command's `input` shape.
 * @see {@link GetRateBasedStatementManagedKeysCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for WAFV2Client's `config` shape.
 *
 */
export class GetRateBasedStatementManagedKeysCommand extends $Command<
  GetRateBasedStatementManagedKeysCommandInput,
  GetRateBasedStatementManagedKeysCommandOutput,
  WAFV2ClientResolvedConfig
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

  constructor(readonly input: GetRateBasedStatementManagedKeysCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WAFV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetRateBasedStatementManagedKeysCommandInput, GetRateBasedStatementManagedKeysCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetRateBasedStatementManagedKeysCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFV2Client";
    const commandName = "GetRateBasedStatementManagedKeysCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetRateBasedStatementManagedKeysRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetRateBasedStatementManagedKeysResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetRateBasedStatementManagedKeysCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetRateBasedStatementManagedKeysCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetRateBasedStatementManagedKeysCommandOutput> {
    return deserializeAws_json1_1GetRateBasedStatementManagedKeysCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
