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

import { DescribeStandardsRequest, DescribeStandardsResponse } from "../models/models_2";
import { de_DescribeStandardsCommand, se_DescribeStandardsCommand } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeStandardsCommand}.
 */
export interface DescribeStandardsCommandInput extends DescribeStandardsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeStandardsCommand}.
 */
export interface DescribeStandardsCommandOutput extends DescribeStandardsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of the available standards in Security Hub.</p>
 *          <p>For each standard, the results include the standard ARN, the name, and a description. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DescribeStandardsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DescribeStandardsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // DescribeStandardsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeStandardsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeStandardsResponse
 * //   Standards: [ // Standards
 * //     { // Standard
 * //       StandardsArn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       EnabledByDefault: true || false,
 * //       StandardsManagedBy: { // StandardsManagedBy
 * //         Company: "STRING_VALUE",
 * //         Product: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeStandardsCommandInput - {@link DescribeStandardsCommandInput}
 * @returns {@link DescribeStandardsCommandOutput}
 * @see {@link DescribeStandardsCommandInput} for command's `input` shape.
 * @see {@link DescribeStandardsCommandOutput} for command's `response` shape.
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
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 * @example To get available Security Hub standards
 * ```javascript
 * // The following example returns a list of available security standards in Security Hub.
 * const input = {};
 * const command = new DescribeStandardsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Standards": [
 *     {
 *       "Description": "The AWS Foundational Security Best Practices standard is a set of automated security checks that detect when AWS accounts and deployed resources do not align to security best practices. The standard is defined by AWS security experts. This curated set of controls helps improve your security posture in AWS, and cover AWS's most popular and foundational services.",
 *       "EnabledByDefault": true,
 *       "Name": "AWS Foundational Security Best Practices v1.0.0",
 *       "StandardsArn": "arn:aws:securityhub:us-west-1::standards/aws-foundational-security-best-practices/v/1.0.0"
 *     },
 *     {
 *       "Description": "The Center for Internet Security (CIS) AWS Foundations Benchmark v1.2.0 is a set of security configuration best practices for AWS. This Security Hub standard automatically checks for your compliance readiness against a subset of CIS requirements.",
 *       "EnabledByDefault": true,
 *       "Name": "CIS AWS Foundations Benchmark v1.2.0",
 *       "StandardsArn": "arn:aws:securityhub:us-west-1::ruleset/cis-aws-foundations-benchmark/v/1.2.0"
 *     },
 *     {
 *       "Description": "The Center for Internet Security (CIS) AWS Foundations Benchmark v1.4.0 is a set of security configuration best practices for AWS. This Security Hub standard automatically checks for your compliance readiness against a subset of CIS requirements.",
 *       "EnabledByDefault": false,
 *       "Name": "CIS AWS Foundations Benchmark v1.4.0",
 *       "StandardsArn": "arn:aws::securityhub:us-west-1::standards/cis-aws-foundations-benchmark/v/1.4.0"
 *     },
 *     {
 *       "Description": "The Payment Card Industry Data Security Standard (PCI DSS) v3.2.1 is an information security standard for entities that store, process, and/or transmit cardholder data. This Security Hub standard automatically checks for your compliance readiness against a subset of PCI DSS requirements.",
 *       "EnabledByDefault": false,
 *       "Name": "PCI DSS v3.2.1",
 *       "StandardsArn": "arn:aws:securityhub:us-west-1::standards/pci-dss/v/3.2.1"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-get-available-security-hub-standards-1676307464661
 * ```
 *
 */
export class DescribeStandardsCommand extends $Command<
  DescribeStandardsCommandInput,
  DescribeStandardsCommandOutput,
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
  constructor(readonly input: DescribeStandardsCommandInput) {
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
  ): Handler<DescribeStandardsCommandInput, DescribeStandardsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeStandardsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "DescribeStandardsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SecurityHubAPIService",
        operation: "DescribeStandards",
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
  private serialize(input: DescribeStandardsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeStandardsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeStandardsCommandOutput> {
    return de_DescribeStandardsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
