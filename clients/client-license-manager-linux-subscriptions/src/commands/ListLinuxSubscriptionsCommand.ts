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

import {
  LicenseManagerLinuxSubscriptionsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LicenseManagerLinuxSubscriptionsClient";
import { ListLinuxSubscriptionsRequest, ListLinuxSubscriptionsResponse } from "../models/models_0";
import { de_ListLinuxSubscriptionsCommand, se_ListLinuxSubscriptionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListLinuxSubscriptionsCommand}.
 */
export interface ListLinuxSubscriptionsCommandInput extends ListLinuxSubscriptionsRequest {}
/**
 * @public
 *
 * The output of {@link ListLinuxSubscriptionsCommand}.
 */
export interface ListLinuxSubscriptionsCommandOutput extends ListLinuxSubscriptionsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the Linux subscriptions that have been discovered. If you have linked your
 *       organization, the returned results will include data aggregated across your accounts in
 *       Organizations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerLinuxSubscriptionsClient, ListLinuxSubscriptionsCommand } from "@aws-sdk/client-license-manager-linux-subscriptions"; // ES Modules import
 * // const { LicenseManagerLinuxSubscriptionsClient, ListLinuxSubscriptionsCommand } = require("@aws-sdk/client-license-manager-linux-subscriptions"); // CommonJS import
 * const client = new LicenseManagerLinuxSubscriptionsClient(config);
 * const input = { // ListLinuxSubscriptionsRequest
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // StringList
 *         "STRING_VALUE",
 *       ],
 *       Operator: "STRING_VALUE",
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListLinuxSubscriptionsCommand(input);
 * const response = await client.send(command);
 * // { // ListLinuxSubscriptionsResponse
 * //   Subscriptions: [ // SubscriptionList
 * //     { // Subscription
 * //       Name: "STRING_VALUE",
 * //       Type: "STRING_VALUE",
 * //       InstanceCount: Number("long"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLinuxSubscriptionsCommandInput - {@link ListLinuxSubscriptionsCommandInput}
 * @returns {@link ListLinuxSubscriptionsCommandOutput}
 * @see {@link ListLinuxSubscriptionsCommandInput} for command's `input` shape.
 * @see {@link ListLinuxSubscriptionsCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerLinuxSubscriptionsClientResolvedConfig | config} for LicenseManagerLinuxSubscriptionsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An exception occurred with the service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The provided input is not valid. Try your request again.</p>
 *
 * @throws {@link LicenseManagerLinuxSubscriptionsServiceException}
 * <p>Base exception class for all service exceptions from LicenseManagerLinuxSubscriptions service.</p>
 *
 */
export class ListLinuxSubscriptionsCommand extends $Command<
  ListLinuxSubscriptionsCommandInput,
  ListLinuxSubscriptionsCommandOutput,
  LicenseManagerLinuxSubscriptionsClientResolvedConfig
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
  constructor(readonly input: ListLinuxSubscriptionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LicenseManagerLinuxSubscriptionsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListLinuxSubscriptionsCommandInput, ListLinuxSubscriptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListLinuxSubscriptionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LicenseManagerLinuxSubscriptionsClient";
    const commandName = "ListLinuxSubscriptionsCommand";
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
  private serialize(input: ListLinuxSubscriptionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListLinuxSubscriptionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListLinuxSubscriptionsCommandOutput> {
    return de_ListLinuxSubscriptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
