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
import { DisassociateCustomDomainRequest, DisassociateCustomDomainResponse } from "../models/models_0";
import { de_DisassociateCustomDomainCommand, se_DisassociateCustomDomainCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DisassociateCustomDomainCommand}.
 */
export interface DisassociateCustomDomainCommandInput extends DisassociateCustomDomainRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateCustomDomainCommand}.
 */
export interface DisassociateCustomDomainCommandOutput extends DisassociateCustomDomainResponse, __MetadataBearer {}

/**
 * @public
 * <p>Disassociate a custom domain name from an App Runner service.</p>
 *          <p>Certificates tracking domain validity are associated with a custom domain and are stored in <a href="https://docs.aws.amazon.com/acm/latest/userguide">AWS
 *         Certificate Manager (ACM)</a>. These certificates aren't deleted as part of this action. App Runner delays certificate deletion for
 *       30 days after a domain is disassociated from your service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, DisassociateCustomDomainCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, DisassociateCustomDomainCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * const client = new AppRunnerClient(config);
 * const input = { // DisassociateCustomDomainRequest
 *   ServiceArn: "STRING_VALUE", // required
 *   DomainName: "STRING_VALUE", // required
 * };
 * const command = new DisassociateCustomDomainCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateCustomDomainResponse
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
 * @param DisassociateCustomDomainCommandInput - {@link DisassociateCustomDomainCommandInput}
 * @returns {@link DisassociateCustomDomainCommandOutput}
 * @see {@link DisassociateCustomDomainCommandInput} for command's `input` shape.
 * @see {@link DisassociateCustomDomainCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource doesn't exist for the specified Amazon Resource Name (ARN) in your Amazon Web Services account.</p>
 *
 * @throws {@link AppRunnerServiceException}
 * <p>Base exception class for all service exceptions from AppRunner service.</p>
 *
 */
export class DisassociateCustomDomainCommand extends $Command<
  DisassociateCustomDomainCommandInput,
  DisassociateCustomDomainCommandOutput,
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
  constructor(readonly input: DisassociateCustomDomainCommandInput) {
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
  ): Handler<DisassociateCustomDomainCommandInput, DisassociateCustomDomainCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociateCustomDomainCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppRunnerClient";
    const commandName = "DisassociateCustomDomainCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AppRunner",
        operation: "DisassociateCustomDomain",
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
  private serialize(input: DisassociateCustomDomainCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DisassociateCustomDomainCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisassociateCustomDomainCommandOutput> {
    return de_DisassociateCustomDomainCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
