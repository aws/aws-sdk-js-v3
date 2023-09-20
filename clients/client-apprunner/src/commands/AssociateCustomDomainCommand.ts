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
import { AssociateCustomDomainRequest, AssociateCustomDomainResponse } from "../models/models_0";
import { de_AssociateCustomDomainCommand, se_AssociateCustomDomainCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AssociateCustomDomainCommand}.
 */
export interface AssociateCustomDomainCommandInput extends AssociateCustomDomainRequest {}
/**
 * @public
 *
 * The output of {@link AssociateCustomDomainCommand}.
 */
export interface AssociateCustomDomainCommandOutput extends AssociateCustomDomainResponse, __MetadataBearer {}

/**
 * @public
 * <p>Associate your own domain name with the App Runner subdomain URL of your App Runner service.</p>
 *          <p>After you call <code>AssociateCustomDomain</code> and receive a successful response, use the information in the <a>CustomDomain</a> record
 *       that's returned to add CNAME records to your Domain Name System (DNS). For each mapped domain name, add a mapping to the target App Runner subdomain and one or
 *       more certificate validation records. App Runner then performs DNS validation to verify that you own or control the domain name that you associated. App Runner tracks
 *       domain validity in a certificate stored in <a href="https://docs.aws.amazon.com/acm/latest/userguide">AWS Certificate Manager (ACM)</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, AssociateCustomDomainCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, AssociateCustomDomainCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * const client = new AppRunnerClient(config);
 * const input = { // AssociateCustomDomainRequest
 *   ServiceArn: "STRING_VALUE", // required
 *   DomainName: "STRING_VALUE", // required
 *   EnableWWWSubdomain: true || false,
 * };
 * const command = new AssociateCustomDomainCommand(input);
 * const response = await client.send(command);
 * // { // AssociateCustomDomainResponse
 * //   DNSTarget: "STRING_VALUE", // required
 * //   ServiceArn: "STRING_VALUE", // required
 * //   CustomDomain: { // CustomDomain
 * //     DomainName: "STRING_VALUE", // required
 * //     EnableWWWSubdomain: true || false, // required
 * //     CertificateValidationRecords: [ // CertificateValidationRecordList
 * //       { // CertificateValidationRecord
 * //         Name: "STRING_VALUE",
 * //         Type: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //         Status: "PENDING_VALIDATION" || "SUCCESS" || "FAILED",
 * //       },
 * //     ],
 * //     Status: "CREATING" || "CREATE_FAILED" || "ACTIVE" || "DELETING" || "DELETE_FAILED" || "PENDING_CERTIFICATE_DNS_VALIDATION" || "BINDING_CERTIFICATE", // required
 * //   },
 * //   VpcDNSTargets: [ // VpcDNSTargetList // required
 * //     { // VpcDNSTarget
 * //       VpcIngressConnectionArn: "STRING_VALUE",
 * //       VpcId: "STRING_VALUE",
 * //       DomainName: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param AssociateCustomDomainCommandInput - {@link AssociateCustomDomainCommandInput}
 * @returns {@link AssociateCustomDomainCommandOutput}
 * @see {@link AssociateCustomDomainCommandInput} for command's `input` shape.
 * @see {@link AssociateCustomDomainCommandOutput} for command's `response` shape.
 * @see {@link AppRunnerClientResolvedConfig | config} for AppRunnerClient's `config` shape.
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>An unexpected service exception occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>One or more input parameters aren't valid. Refer to the API action's document page, correct the input parameters, and try the action again.</p>
 *
 * @throws {@link InvalidStateException} (client fault)
 *  <p>You can't perform this action when the resource is in its current state.</p>
 *
 * @throws {@link AppRunnerServiceException}
 * <p>Base exception class for all service exceptions from AppRunner service.</p>
 *
 */
export class AssociateCustomDomainCommand extends $Command<
  AssociateCustomDomainCommandInput,
  AssociateCustomDomainCommandOutput,
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
  constructor(readonly input: AssociateCustomDomainCommandInput) {
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
  ): Handler<AssociateCustomDomainCommandInput, AssociateCustomDomainCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateCustomDomainCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppRunnerClient";
    const commandName = "AssociateCustomDomainCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AppRunner",
        operation: "AssociateCustomDomain",
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
  private serialize(input: AssociateCustomDomainCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AssociateCustomDomainCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateCustomDomainCommandOutput> {
    return de_AssociateCustomDomainCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
