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

import { BatchGetSecurityControlsRequest, BatchGetSecurityControlsResponse } from "../models/models_2";
import { de_BatchGetSecurityControlsCommand, se_BatchGetSecurityControlsCommand } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchGetSecurityControlsCommand}.
 */
export interface BatchGetSecurityControlsCommandInput extends BatchGetSecurityControlsRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetSecurityControlsCommand}.
 */
export interface BatchGetSecurityControlsCommandOutput extends BatchGetSecurityControlsResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 *          Provides details about a batch of security controls for the current Amazon Web Services account and Amazon Web Services Region.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, BatchGetSecurityControlsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, BatchGetSecurityControlsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // BatchGetSecurityControlsRequest
 *   SecurityControlIds: [ // StringList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetSecurityControlsCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetSecurityControlsResponse
 * //   SecurityControls: [ // SecurityControls // required
 * //     { // SecurityControl
 * //       SecurityControlId: "STRING_VALUE", // required
 * //       SecurityControlArn: "STRING_VALUE", // required
 * //       Title: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE", // required
 * //       RemediationUrl: "STRING_VALUE", // required
 * //       SeverityRating: "LOW" || "MEDIUM" || "HIGH" || "CRITICAL", // required
 * //       SecurityControlStatus: "ENABLED" || "DISABLED", // required
 * //     },
 * //   ],
 * //   UnprocessedIds: [ // UnprocessedSecurityControls
 * //     { // UnprocessedSecurityControl
 * //       SecurityControlId: "STRING_VALUE", // required
 * //       ErrorCode: "INVALID_INPUT" || "ACCESS_DENIED" || "NOT_FOUND" || "LIMIT_EXCEEDED", // required
 * //       ErrorReason: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetSecurityControlsCommandInput - {@link BatchGetSecurityControlsCommandInput}
 * @returns {@link BatchGetSecurityControlsCommandOutput}
 * @see {@link BatchGetSecurityControlsCommandInput} for command's `input` shape.
 * @see {@link BatchGetSecurityControlsCommandOutput} for command's `response` shape.
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
 * @example To get security control details
 * ```javascript
 * // The following example gets details for the specified controls in the current AWS account and AWS Region.
 * const input = {
 *   "SecurityControlIds": [
 *     "ACM.1",
 *     "APIGateway.1"
 *   ]
 * };
 * const command = new BatchGetSecurityControlsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "SecurityControls": [
 *     {
 *       "Description": "This AWS control checks whether ACM Certificates in your account are marked for expiration within a specified time period. Certificates provided by ACM are automatically renewed. ACM does not automatically renew certificates that you import.",
 *       "RemediationUrl": "https://docs.aws.amazon.com/console/securityhub/ACM.1/remediation",
 *       "SecurityControlArn": "arn:aws:securityhub:us-west-2:123456789012:security-control/ACM.1",
 *       "SecurityControlId": "ACM.1",
 *       "SecurityControlStatus": "ENABLED",
 *       "SeverityRating": "MEDIUM",
 *       "Title": "Imported and ACM-issued certificates should be renewed after a specified time period"
 *     },
 *     {
 *       "Description": "This control checks whether all stages of Amazon API Gateway REST and WebSocket APIs have logging enabled. The control fails if logging is not enabled for all methods of a stage or if loggingLevel is neither ERROR nor INFO.",
 *       "RemediationUrl": "https://docs.aws.amazon.com/console/securityhub/APIGateway.1/remediation",
 *       "SecurityControlArn": "arn:aws:securityhub:us-west-2:123456789012:security-control/APIGateway.1",
 *       "SecurityControlId": "APIGateway.1",
 *       "SecurityControlStatus": "ENABLED",
 *       "SeverityRating": "MEDIUM",
 *       "Title": "API Gateway REST and WebSocket API execution logging should be enabled"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-get-security-control-details--1683234478355
 * ```
 *
 */
export class BatchGetSecurityControlsCommand extends $Command<
  BatchGetSecurityControlsCommandInput,
  BatchGetSecurityControlsCommandOutput,
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
  constructor(readonly input: BatchGetSecurityControlsCommandInput) {
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
  ): Handler<BatchGetSecurityControlsCommandInput, BatchGetSecurityControlsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchGetSecurityControlsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "BatchGetSecurityControlsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SecurityHubAPIService",
        operation: "BatchGetSecurityControls",
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
  private serialize(input: BatchGetSecurityControlsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchGetSecurityControlsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchGetSecurityControlsCommandOutput> {
    return de_BatchGetSecurityControlsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
