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

import { AppRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppRunnerClient";
import { DescribeCustomDomainsRequest, DescribeCustomDomainsResponse } from "../models/models_0";
import { de_DescribeCustomDomainsCommand, se_DescribeCustomDomainsCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeCustomDomainsCommand}.
 */
export interface DescribeCustomDomainsCommandInput extends DescribeCustomDomainsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCustomDomainsCommand}.
 */
export interface DescribeCustomDomainsCommandOutput extends DescribeCustomDomainsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Return a description of custom domain names that are associated with an App Runner service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, DescribeCustomDomainsCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, DescribeCustomDomainsCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * const client = new AppRunnerClient(config);
 * const input = { // DescribeCustomDomainsRequest
 *   ServiceArn: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeCustomDomainsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCustomDomainsResponse
 * //   DNSTarget: "STRING_VALUE", // required
 * //   ServiceArn: "STRING_VALUE", // required
 * //   CustomDomains: [ // CustomDomainList // required
 * //     { // CustomDomain
 * //       DomainName: "STRING_VALUE", // required
 * //       EnableWWWSubdomain: true || false, // required
 * //       CertificateValidationRecords: [ // CertificateValidationRecordList
 * //         { // CertificateValidationRecord
 * //           Name: "STRING_VALUE",
 * //           Type: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //           Status: "PENDING_VALIDATION" || "SUCCESS" || "FAILED",
 * //         },
 * //       ],
 * //       Status: "CREATING" || "CREATE_FAILED" || "ACTIVE" || "DELETING" || "DELETE_FAILED" || "PENDING_CERTIFICATE_DNS_VALIDATION" || "BINDING_CERTIFICATE", // required
 * //     },
 * //   ],
 * //   VpcDNSTargets: [ // VpcDNSTargetList // required
 * //     { // VpcDNSTarget
 * //       VpcIngressConnectionArn: "STRING_VALUE",
 * //       VpcId: "STRING_VALUE",
 * //       DomainName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeCustomDomainsCommandInput - {@link DescribeCustomDomainsCommandInput}
 * @returns {@link DescribeCustomDomainsCommandOutput}
 * @see {@link DescribeCustomDomainsCommandInput} for command's `input` shape.
 * @see {@link DescribeCustomDomainsCommandOutput} for command's `response` shape.
 * @see {@link AppRunnerClientResolvedConfig | config} for AppRunnerClient's `config` shape.
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>An unexpected service exception occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>One or more input parameters aren't valid. Refer to the API action's document page, correct the input parameters, and try the action again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource doesn't exist for the specified Amazon Resource Name (ARN) in your Amazon Web Services account.</p>
 *
 * @throws {@link AppRunnerServiceException}
 * <p>Base exception class for all service exceptions from AppRunner service.</p>
 *
 */
export class DescribeCustomDomainsCommand extends $Command<
  DescribeCustomDomainsCommandInput,
  DescribeCustomDomainsCommandOutput,
  AppRunnerClientResolvedConfig
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
  constructor(readonly input: DescribeCustomDomainsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppRunnerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeCustomDomainsCommandInput, DescribeCustomDomainsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeCustomDomainsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppRunnerClient";
    const commandName = "DescribeCustomDomainsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AppRunner",
        operation: "DescribeCustomDomains",
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
  private serialize(input: DescribeCustomDomainsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeCustomDomainsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeCustomDomainsCommandOutput> {
    return de_DescribeCustomDomainsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
