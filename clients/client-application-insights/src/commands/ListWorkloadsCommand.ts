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

import {
  ApplicationInsightsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationInsightsClient";
import { ListWorkloadsRequest, ListWorkloadsResponse } from "../models/models_0";
import { de_ListWorkloadsCommand, se_ListWorkloadsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListWorkloadsCommand}.
 */
export interface ListWorkloadsCommandInput extends ListWorkloadsRequest {}
/**
 * @public
 *
 * The output of {@link ListWorkloadsCommand}.
 */
export interface ListWorkloadsCommandOutput extends ListWorkloadsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the workloads that are configured on a given component.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationInsightsClient, ListWorkloadsCommand } from "@aws-sdk/client-application-insights"; // ES Modules import
 * // const { ApplicationInsightsClient, ListWorkloadsCommand } = require("@aws-sdk/client-application-insights"); // CommonJS import
 * const client = new ApplicationInsightsClient(config);
 * const input = { // ListWorkloadsRequest
 *   ResourceGroupName: "STRING_VALUE", // required
 *   ComponentName: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   AccountId: "STRING_VALUE",
 * };
 * const command = new ListWorkloadsCommand(input);
 * const response = await client.send(command);
 * // { // ListWorkloadsResponse
 * //   WorkloadList: [ // WorkloadList
 * //     { // Workload
 * //       WorkloadId: "STRING_VALUE",
 * //       ComponentName: "STRING_VALUE",
 * //       WorkloadName: "STRING_VALUE",
 * //       Tier: "CUSTOM" || "DEFAULT" || "DOT_NET_CORE" || "DOT_NET_WORKER" || "DOT_NET_WEB_TIER" || "DOT_NET_WEB" || "SQL_SERVER" || "SQL_SERVER_ALWAYSON_AVAILABILITY_GROUP" || "MYSQL" || "POSTGRESQL" || "JAVA_JMX" || "ORACLE" || "SAP_HANA_MULTI_NODE" || "SAP_HANA_SINGLE_NODE" || "SAP_HANA_HIGH_AVAILABILITY" || "SQL_SERVER_FAILOVER_CLUSTER_INSTANCE" || "SHAREPOINT" || "ACTIVE_DIRECTORY" || "SAP_NETWEAVER_STANDARD" || "SAP_NETWEAVER_DISTRIBUTED" || "SAP_NETWEAVER_HIGH_AVAILABILITY",
 * //       WorkloadRemarks: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListWorkloadsCommandInput - {@link ListWorkloadsCommandInput}
 * @returns {@link ListWorkloadsCommandOutput}
 * @see {@link ListWorkloadsCommandInput} for command's `input` shape.
 * @see {@link ListWorkloadsCommandOutput} for command's `response` shape.
 * @see {@link ApplicationInsightsClientResolvedConfig | config} for ApplicationInsightsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource does not exist in the customer account.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The parameter is not valid.</p>
 *
 * @throws {@link ApplicationInsightsServiceException}
 * <p>Base exception class for all service exceptions from ApplicationInsights service.</p>
 *
 */
export class ListWorkloadsCommand extends $Command<
  ListWorkloadsCommandInput,
  ListWorkloadsCommandOutput,
  ApplicationInsightsClientResolvedConfig
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
  constructor(readonly input: ListWorkloadsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApplicationInsightsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListWorkloadsCommandInput, ListWorkloadsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListWorkloadsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationInsightsClient";
    const commandName = "ListWorkloadsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "EC2WindowsBarleyService",
        operation: "ListWorkloads",
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
  private serialize(input: ListWorkloadsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListWorkloadsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListWorkloadsCommandOutput> {
    return de_ListWorkloadsCommand(output, context);
  }
}
