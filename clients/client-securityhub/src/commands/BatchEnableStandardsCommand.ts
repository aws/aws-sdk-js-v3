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

import { BatchEnableStandardsRequest, BatchEnableStandardsResponse } from "../models/models_2";
import { de_BatchEnableStandardsCommand, se_BatchEnableStandardsCommand } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchEnableStandardsCommand}.
 */
export interface BatchEnableStandardsCommandInput extends BatchEnableStandardsRequest {}
/**
 * @public
 *
 * The output of {@link BatchEnableStandardsCommand}.
 */
export interface BatchEnableStandardsCommandOutput extends BatchEnableStandardsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Enables the standards specified by the provided <code>StandardsArn</code>. To obtain the
 *          ARN for a standard, use the <code>DescribeStandards</code>
 *          operation.</p>
 *          <p>For more information, see the <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards.html">Security Standards</a>
 *          section of the <i>Security Hub User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, BatchEnableStandardsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, BatchEnableStandardsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // BatchEnableStandardsRequest
 *   StandardsSubscriptionRequests: [ // StandardsSubscriptionRequests // required
 *     { // StandardsSubscriptionRequest
 *       StandardsArn: "STRING_VALUE", // required
 *       StandardsInput: { // StandardsInputParameterMap
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   ],
 * };
 * const command = new BatchEnableStandardsCommand(input);
 * const response = await client.send(command);
 * // { // BatchEnableStandardsResponse
 * //   StandardsSubscriptions: [ // StandardsSubscriptions
 * //     { // StandardsSubscription
 * //       StandardsSubscriptionArn: "STRING_VALUE", // required
 * //       StandardsArn: "STRING_VALUE", // required
 * //       StandardsInput: { // StandardsInputParameterMap // required
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       StandardsStatus: "PENDING" || "READY" || "FAILED" || "DELETING" || "INCOMPLETE", // required
 * //       StandardsStatusReason: { // StandardsStatusReason
 * //         StatusReasonCode: "NO_AVAILABLE_CONFIGURATION_RECORDER" || "INTERNAL_ERROR", // required
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchEnableStandardsCommandInput - {@link BatchEnableStandardsCommandInput}
 * @returns {@link BatchEnableStandardsCommandOutput}
 * @see {@link BatchEnableStandardsCommandInput} for command's `input` shape.
 * @see {@link BatchEnableStandardsCommandOutput} for command's `response` shape.
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
 * @example To enable security standards
 * ```javascript
 * // The following example enables the security standard specified by the StandardArn. You can use this operation to enable one or more Security Hub standards.
 * const input = {
 *   "StandardsSubscriptionRequests": [
 *     {
 *       "StandardsArn": "arn:aws:securityhub:us-west-1::standards/pci-dss/v/3.2.1"
 *     }
 *   ]
 * };
 * const command = new BatchEnableStandardsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "StandardsSubscriptions": [
 *     {
 *       "StandardsArn": "arn:aws:securityhub:us-west-1::standards/pci-dss/v/3.2.1",
 *       "StandardsInput": {},
 *       "StandardsStatus": "PENDING",
 *       "StandardsSubscriptionArn": "arn:aws:securityhub:us-west-1:123456789012:subscription/pci-dss/v/3.2.1"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-enable-security-standards-1683233792239
 * ```
 *
 */
export class BatchEnableStandardsCommand extends $Command<
  BatchEnableStandardsCommandInput,
  BatchEnableStandardsCommandOutput,
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
  constructor(readonly input: BatchEnableStandardsCommandInput) {
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
  ): Handler<BatchEnableStandardsCommandInput, BatchEnableStandardsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchEnableStandardsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "BatchEnableStandardsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SecurityHubAPIService",
        operation: "BatchEnableStandards",
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
  private serialize(input: BatchEnableStandardsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchEnableStandardsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchEnableStandardsCommandOutput> {
    return de_BatchEnableStandardsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
