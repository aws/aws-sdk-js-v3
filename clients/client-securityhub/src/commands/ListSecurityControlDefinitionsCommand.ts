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

import { ListSecurityControlDefinitionsRequest, ListSecurityControlDefinitionsResponse } from "../models/models_2";
import {
  de_ListSecurityControlDefinitionsCommand,
  se_ListSecurityControlDefinitionsCommand,
} from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListSecurityControlDefinitionsCommand}.
 */
export interface ListSecurityControlDefinitionsCommandInput extends ListSecurityControlDefinitionsRequest {}
/**
 * @public
 *
 * The output of {@link ListSecurityControlDefinitionsCommand}.
 */
export interface ListSecurityControlDefinitionsCommandOutput
  extends ListSecurityControlDefinitionsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>
 *          Lists all of the security controls that apply to a specified standard.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, ListSecurityControlDefinitionsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, ListSecurityControlDefinitionsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // ListSecurityControlDefinitionsRequest
 *   StandardsArn: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListSecurityControlDefinitionsCommand(input);
 * const response = await client.send(command);
 * // { // ListSecurityControlDefinitionsResponse
 * //   SecurityControlDefinitions: [ // SecurityControlDefinitions // required
 * //     { // SecurityControlDefinition
 * //       SecurityControlId: "STRING_VALUE", // required
 * //       Title: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE", // required
 * //       RemediationUrl: "STRING_VALUE", // required
 * //       SeverityRating: "LOW" || "MEDIUM" || "HIGH" || "CRITICAL", // required
 * //       CurrentRegionAvailability: "AVAILABLE" || "UNAVAILABLE", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSecurityControlDefinitionsCommandInput - {@link ListSecurityControlDefinitionsCommandInput}
 * @returns {@link ListSecurityControlDefinitionsCommandOutput}
 * @see {@link ListSecurityControlDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListSecurityControlDefinitionsCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current Amazon Web Services
 *          account or throttling limits. The error code describes the limit exceeded.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 * @example To list security controls that apply to a standard
 * ```javascript
 * // The following example lists security controls that apply to a specified Security Hub standard.
 * const input = {
 *   "MaxResults": 3,
 *   "NextToken": "NULL",
 *   "StandardsArn": "arn:aws:securityhub:::standards/aws-foundational-security-best-practices/v/1.0.0"
 * };
 * const command = new ListSecurityControlDefinitionsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "NextToken": "U2FsdGVkX1...",
 *   "SecurityControlDefinitions": [
 *     {
 *       "CurrentRegionAvailability": "AVAILABLE",
 *       "Description": "This AWS control checks whether ACM Certificates in your account are marked for expiration within a specified time period. Certificates provided by ACM are automatically renewed. ACM does not automatically renew certificates that you import.",
 *       "RemediationUrl": "https://docs.aws.amazon.com/console/securityhub/ACM.1/remediation",
 *       "SecurityControlId": "ACM.1",
 *       "SeverityRating": "MEDIUM",
 *       "Title": "Imported and ACM-issued certificates should be renewed after a specified time period"
 *     },
 *     {
 *       "CurrentRegionAvailability": "AVAILABLE",
 *       "Description": "This control checks whether all stages of Amazon API Gateway REST and WebSocket APIs have logging enabled. The control fails if logging is not enabled for all methods of a stage or if loggingLevel is neither ERROR nor INFO.",
 *       "RemediationUrl": "https://docs.aws.amazon.com/console/securityhub/APIGateway.1/remediation",
 *       "SecurityControlId": "APIGateway.1",
 *       "SeverityRating": "MEDIUM",
 *       "Title": "API Gateway REST and WebSocket API execution logging should be enabled"
 *     },
 *     {
 *       "CurrentRegionAvailability": "AVAILABLE",
 *       "Description": "This control checks whether Amazon API Gateway REST API stages have SSL certificates configured that backend systems can use to authenticate that incoming requests are from the API Gateway.",
 *       "RemediationUrl": "https://docs.aws.amazon.com/console/securityhub/APIGateway.2/remediation",
 *       "SecurityControlId": "APIGateway.2",
 *       "SeverityRating": "MEDIUM",
 *       "Title": "API Gateway REST API stages should be configured to use SSL certificates for backend authentication"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-list-security-controls-that-apply-to-a-standard-1678386912894
 * ```
 *
 */
export class ListSecurityControlDefinitionsCommand extends $Command<
  ListSecurityControlDefinitionsCommandInput,
  ListSecurityControlDefinitionsCommandOutput,
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
  constructor(readonly input: ListSecurityControlDefinitionsCommandInput) {
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
  ): Handler<ListSecurityControlDefinitionsCommandInput, ListSecurityControlDefinitionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSecurityControlDefinitionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "ListSecurityControlDefinitionsCommand";
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
  private serialize(
    input: ListSecurityControlDefinitionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListSecurityControlDefinitionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListSecurityControlDefinitionsCommandOutput> {
    return de_ListSecurityControlDefinitionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
