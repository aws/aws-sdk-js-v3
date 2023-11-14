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

import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { ListEksAnywhereSubscriptionsRequest, ListEksAnywhereSubscriptionsResponse } from "../models/models_0";
import {
  de_ListEksAnywhereSubscriptionsCommand,
  se_ListEksAnywhereSubscriptionsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListEksAnywhereSubscriptionsCommand}.
 */
export interface ListEksAnywhereSubscriptionsCommandInput extends ListEksAnywhereSubscriptionsRequest {}
/**
 * @public
 *
 * The output of {@link ListEksAnywhereSubscriptionsCommand}.
 */
export interface ListEksAnywhereSubscriptionsCommandOutput
  extends ListEksAnywhereSubscriptionsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Displays the full description of the subscription.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, ListEksAnywhereSubscriptionsCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, ListEksAnywhereSubscriptionsCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const input = { // ListEksAnywhereSubscriptionsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   includeStatus: [ // EksAnywhereSubscriptionStatusValues
 *     "CREATING" || "ACTIVE" || "UPDATING" || "EXPIRING" || "EXPIRED" || "DELETING",
 *   ],
 * };
 * const command = new ListEksAnywhereSubscriptionsCommand(input);
 * const response = await client.send(command);
 * // { // ListEksAnywhereSubscriptionsResponse
 * //   subscriptions: [ // EksAnywhereSubscriptionList
 * //     { // EksAnywhereSubscription
 * //       id: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       effectiveDate: new Date("TIMESTAMP"),
 * //       expirationDate: new Date("TIMESTAMP"),
 * //       licenseQuantity: Number("int"),
 * //       licenseType: "Cluster",
 * //       term: { // EksAnywhereSubscriptionTerm
 * //         duration: Number("int"),
 * //         unit: "MONTHS",
 * //       },
 * //       status: "STRING_VALUE",
 * //       autoRenew: true || false,
 * //       licenseArns: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEksAnywhereSubscriptionsCommandInput - {@link ListEksAnywhereSubscriptionsCommandInput}
 * @returns {@link ListEksAnywhereSubscriptionsCommandOutput}
 * @see {@link ListEksAnywhereSubscriptionsCommandInput} for command's `input` shape.
 * @see {@link ListEksAnywhereSubscriptionsCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for EKSClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. Actions can include using an
 *             action or resource on behalf of an <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html">IAM principal</a> that doesn't have permissions to use
 *             the action or resource or specifying an identifier that is not valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unavailable. Back off and retry the operation.</p>
 *
 * @throws {@link EKSServiceException}
 * <p>Base exception class for all service exceptions from EKS service.</p>
 *
 */
export class ListEksAnywhereSubscriptionsCommand extends $Command<
  ListEksAnywhereSubscriptionsCommandInput,
  ListEksAnywhereSubscriptionsCommandOutput,
  EKSClientResolvedConfig
> {
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
  constructor(readonly input: ListEksAnywhereSubscriptionsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EKSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListEksAnywhereSubscriptionsCommandInput, ListEksAnywhereSubscriptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListEksAnywhereSubscriptionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EKSClient";
    const commandName = "ListEksAnywhereSubscriptionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSWesleyFrontend",
        operation: "ListEksAnywhereSubscriptions",
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
  private serialize(input: ListEksAnywhereSubscriptionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListEksAnywhereSubscriptionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListEksAnywhereSubscriptionsCommandOutput> {
    return de_ListEksAnywhereSubscriptionsCommand(output, context);
  }
}
