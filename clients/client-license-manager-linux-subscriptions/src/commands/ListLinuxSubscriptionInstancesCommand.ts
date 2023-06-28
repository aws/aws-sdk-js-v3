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
import { ListLinuxSubscriptionInstancesRequest, ListLinuxSubscriptionInstancesResponse } from "../models/models_0";
import {
  de_ListLinuxSubscriptionInstancesCommand,
  se_ListLinuxSubscriptionInstancesCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListLinuxSubscriptionInstancesCommand}.
 */
export interface ListLinuxSubscriptionInstancesCommandInput extends ListLinuxSubscriptionInstancesRequest {}
/**
 * @public
 *
 * The output of {@link ListLinuxSubscriptionInstancesCommand}.
 */
export interface ListLinuxSubscriptionInstancesCommandOutput
  extends ListLinuxSubscriptionInstancesResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Lists the running Amazon EC2 instances that were discovered with commercial Linux
 *       subscriptions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerLinuxSubscriptionsClient, ListLinuxSubscriptionInstancesCommand } from "@aws-sdk/client-license-manager-linux-subscriptions"; // ES Modules import
 * // const { LicenseManagerLinuxSubscriptionsClient, ListLinuxSubscriptionInstancesCommand } = require("@aws-sdk/client-license-manager-linux-subscriptions"); // CommonJS import
 * const client = new LicenseManagerLinuxSubscriptionsClient(config);
 * const input = { // ListLinuxSubscriptionInstancesRequest
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
 * const command = new ListLinuxSubscriptionInstancesCommand(input);
 * const response = await client.send(command);
 * // { // ListLinuxSubscriptionInstancesResponse
 * //   Instances: [ // InstanceList
 * //     { // Instance
 * //       AmiId: "STRING_VALUE",
 * //       InstanceID: "STRING_VALUE",
 * //       InstanceType: "STRING_VALUE",
 * //       AccountID: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       Region: "STRING_VALUE",
 * //       UsageOperation: "STRING_VALUE",
 * //       ProductCode: [ // ProductCodeList
 * //         "STRING_VALUE",
 * //       ],
 * //       LastUpdatedTime: "STRING_VALUE",
 * //       SubscriptionName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLinuxSubscriptionInstancesCommandInput - {@link ListLinuxSubscriptionInstancesCommandInput}
 * @returns {@link ListLinuxSubscriptionInstancesCommandOutput}
 * @see {@link ListLinuxSubscriptionInstancesCommandInput} for command's `input` shape.
 * @see {@link ListLinuxSubscriptionInstancesCommandOutput} for command's `response` shape.
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
export class ListLinuxSubscriptionInstancesCommand extends $Command<
  ListLinuxSubscriptionInstancesCommandInput,
  ListLinuxSubscriptionInstancesCommandOutput,
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
  constructor(readonly input: ListLinuxSubscriptionInstancesCommandInput) {
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
  ): Handler<ListLinuxSubscriptionInstancesCommandInput, ListLinuxSubscriptionInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListLinuxSubscriptionInstancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LicenseManagerLinuxSubscriptionsClient";
    const commandName = "ListLinuxSubscriptionInstancesCommand";
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
    input: ListLinuxSubscriptionInstancesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListLinuxSubscriptionInstancesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListLinuxSubscriptionInstancesCommandOutput> {
    return de_ListLinuxSubscriptionInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
