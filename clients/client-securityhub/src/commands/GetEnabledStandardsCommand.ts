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

import { GetEnabledStandardsRequest, GetEnabledStandardsResponse } from "../models/models_2";
import { de_GetEnabledStandardsCommand, se_GetEnabledStandardsCommand } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetEnabledStandardsCommand}.
 */
export interface GetEnabledStandardsCommandInput extends GetEnabledStandardsRequest {}
/**
 * @public
 *
 * The output of {@link GetEnabledStandardsCommand}.
 */
export interface GetEnabledStandardsCommandOutput extends GetEnabledStandardsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of the standards that are currently enabled.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, GetEnabledStandardsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, GetEnabledStandardsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // GetEnabledStandardsRequest
 *   StandardsSubscriptionArns: [ // StandardsSubscriptionArns
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new GetEnabledStandardsCommand(input);
 * const response = await client.send(command);
 * // { // GetEnabledStandardsResponse
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
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetEnabledStandardsCommandInput - {@link GetEnabledStandardsCommandInput}
 * @returns {@link GetEnabledStandardsCommandOutput}
 * @see {@link GetEnabledStandardsCommandInput} for command's `input` shape.
 * @see {@link GetEnabledStandardsCommandOutput} for command's `response` shape.
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
 * @example To return a list of enabled standards
 * ```javascript
 * // The following example returns a list of Security Hub standards that are currently enabled in your account.
 * const input = {
 *   "StandardsSubscriptionArns": [
 *     "arn:aws:securityhub:us-west-1:123456789012:subscription/pci-dss/v/3.2.1"
 *   ]
 * };
 * const command = new GetEnabledStandardsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "StandardsSubscriptions": [
 *     {
 *       "StandardsArn": "arn:aws:securityhub:us-west-1::standards/pci-dss/v/3.2.1",
 *       "StandardsInput": {},
 *       "StandardsStatus": "READY",
 *       "StandardsSubscriptionArn": "arn:aws:securityhub:us-west-1:123456789012:subscription/pci-dss/v/3.2.1"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-return-a-list-of-enabled-standards-1677090731129
 * ```
 *
 */
export class GetEnabledStandardsCommand extends $Command<
  GetEnabledStandardsCommandInput,
  GetEnabledStandardsCommandOutput,
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
  constructor(readonly input: GetEnabledStandardsCommandInput) {
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
  ): Handler<GetEnabledStandardsCommandInput, GetEnabledStandardsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetEnabledStandardsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "GetEnabledStandardsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SecurityHubAPIService",
        operation: "GetEnabledStandards",
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
  private serialize(input: GetEnabledStandardsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetEnabledStandardsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetEnabledStandardsCommandOutput> {
    return de_GetEnabledStandardsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
