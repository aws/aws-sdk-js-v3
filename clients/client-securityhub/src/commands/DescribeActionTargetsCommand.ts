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

import { DescribeActionTargetsRequest, DescribeActionTargetsResponse } from "../models/models_2";
import { de_DescribeActionTargetsCommand, se_DescribeActionTargetsCommand } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeActionTargetsCommand}.
 */
export interface DescribeActionTargetsCommandInput extends DescribeActionTargetsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeActionTargetsCommand}.
 */
export interface DescribeActionTargetsCommandOutput extends DescribeActionTargetsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of the custom action targets in Security Hub in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DescribeActionTargetsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DescribeActionTargetsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // DescribeActionTargetsRequest
 *   ActionTargetArns: [ // ArnList
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeActionTargetsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeActionTargetsResponse
 * //   ActionTargets: [ // ActionTargetList // required
 * //     { // ActionTarget
 * //       ActionTargetArn: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeActionTargetsCommandInput - {@link DescribeActionTargetsCommandInput}
 * @returns {@link DescribeActionTargetsCommandOutput}
 * @see {@link DescribeActionTargetsCommandInput} for command's `input` shape.
 * @see {@link DescribeActionTargetsCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidAccessException} (client fault)
 *  <p>The account doesn't have permission to perform this action.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because you supplied an invalid or out-of-range value for an
 *          input parameter.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because we can't find the specified resource.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 * @example To return custom action targets
 * ```javascript
 * // The following example returns a list of custom action targets. You use custom actions on findings and insights in Security Hub to trigger target actions in Amazon CloudWatch Events.
 * const input = {
 *   "ActionTargetArns": [
 *     "arn:aws:securityhub:us-west-1:123456789012:action/custom/Remediation"
 *   ]
 * };
 * const command = new DescribeActionTargetsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ActionTargets": [
 *     {
 *       "ActionTargetArn": "arn:aws:securityhub:us-west-1:123456789012:action/custom/Remediation",
 *       "Description": "Action to send the finding for remediation tracking",
 *       "Name": "Send to remediation"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-return-custom-action-targets-1675883682038
 * ```
 *
 */
export class DescribeActionTargetsCommand extends $Command<
  DescribeActionTargetsCommandInput,
  DescribeActionTargetsCommandOutput,
  SecurityHubClientResolvedConfig
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
  constructor(readonly input: DescribeActionTargetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeActionTargetsCommandInput, DescribeActionTargetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeActionTargetsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "DescribeActionTargetsCommand";
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
  private serialize(input: DescribeActionTargetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeActionTargetsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeActionTargetsCommandOutput> {
    return de_DescribeActionTargetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
