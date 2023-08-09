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

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { DescribeAccountPoliciesRequest, DescribeAccountPoliciesResponse } from "../models/models_0";
import { de_DescribeAccountPoliciesCommand, se_DescribeAccountPoliciesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAccountPoliciesCommand}.
 */
export interface DescribeAccountPoliciesCommandInput extends DescribeAccountPoliciesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAccountPoliciesCommand}.
 */
export interface DescribeAccountPoliciesCommandOutput extends DescribeAccountPoliciesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of all CloudWatch Logs account policies in the account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DescribeAccountPoliciesCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DescribeAccountPoliciesCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const input = { // DescribeAccountPoliciesRequest
 *   policyType: "DATA_PROTECTION_POLICY", // required
 *   policyName: "STRING_VALUE",
 *   accountIdentifiers: [ // AccountIds
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeAccountPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAccountPoliciesResponse
 * //   accountPolicies: [ // AccountPolicies
 * //     { // AccountPolicy
 * //       policyName: "STRING_VALUE",
 * //       policyDocument: "STRING_VALUE",
 * //       lastUpdatedTime: Number("long"),
 * //       policyType: "DATA_PROTECTION_POLICY",
 * //       scope: "ALL",
 * //       accountId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeAccountPoliciesCommandInput - {@link DescribeAccountPoliciesCommandInput}
 * @returns {@link DescribeAccountPoliciesCommandOutput}
 * @see {@link DescribeAccountPoliciesCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountPoliciesCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link OperationAbortedException} (client fault)
 *  <p>Multiple concurrent requests to update the same resource were in conflict.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service cannot complete the request.</p>
 *
 * @throws {@link CloudWatchLogsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchLogs service.</p>
 *
 */
export class DescribeAccountPoliciesCommand extends $Command<
  DescribeAccountPoliciesCommandInput,
  DescribeAccountPoliciesCommandOutput,
  CloudWatchLogsClientResolvedConfig
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
  constructor(readonly input: DescribeAccountPoliciesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAccountPoliciesCommandInput, DescribeAccountPoliciesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAccountPoliciesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchLogsClient";
    const commandName = "DescribeAccountPoliciesCommand";
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
  private serialize(input: DescribeAccountPoliciesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeAccountPoliciesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAccountPoliciesCommandOutput> {
    return de_DescribeAccountPoliciesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
