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
import { UpdateWorkloadRequest, UpdateWorkloadResponse } from "../models/models_0";
import { de_UpdateWorkloadCommand, se_UpdateWorkloadCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateWorkloadCommand}.
 */
export interface UpdateWorkloadCommandInput extends UpdateWorkloadRequest {}
/**
 * @public
 *
 * The output of {@link UpdateWorkloadCommand}.
 */
export interface UpdateWorkloadCommandOutput extends UpdateWorkloadResponse, __MetadataBearer {}

/**
 * @public
 * <p>Adds a workload to a component. Each component can have at most five workloads.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationInsightsClient, UpdateWorkloadCommand } from "@aws-sdk/client-application-insights"; // ES Modules import
 * // const { ApplicationInsightsClient, UpdateWorkloadCommand } = require("@aws-sdk/client-application-insights"); // CommonJS import
 * const client = new ApplicationInsightsClient(config);
 * const input = { // UpdateWorkloadRequest
 *   ResourceGroupName: "STRING_VALUE", // required
 *   ComponentName: "STRING_VALUE", // required
 *   WorkloadId: "STRING_VALUE",
 *   WorkloadConfiguration: { // WorkloadConfiguration
 *     WorkloadName: "STRING_VALUE",
 *     Tier: "CUSTOM" || "DEFAULT" || "DOT_NET_CORE" || "DOT_NET_WORKER" || "DOT_NET_WEB_TIER" || "DOT_NET_WEB" || "SQL_SERVER" || "SQL_SERVER_ALWAYSON_AVAILABILITY_GROUP" || "MYSQL" || "POSTGRESQL" || "JAVA_JMX" || "ORACLE" || "SAP_HANA_MULTI_NODE" || "SAP_HANA_SINGLE_NODE" || "SAP_HANA_HIGH_AVAILABILITY" || "SQL_SERVER_FAILOVER_CLUSTER_INSTANCE" || "SHAREPOINT" || "ACTIVE_DIRECTORY" || "SAP_NETWEAVER_STANDARD" || "SAP_NETWEAVER_DISTRIBUTED" || "SAP_NETWEAVER_HIGH_AVAILABILITY",
 *     Configuration: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateWorkloadCommand(input);
 * const response = await client.send(command);
 * // { // UpdateWorkloadResponse
 * //   WorkloadId: "STRING_VALUE",
 * //   WorkloadConfiguration: { // WorkloadConfiguration
 * //     WorkloadName: "STRING_VALUE",
 * //     Tier: "CUSTOM" || "DEFAULT" || "DOT_NET_CORE" || "DOT_NET_WORKER" || "DOT_NET_WEB_TIER" || "DOT_NET_WEB" || "SQL_SERVER" || "SQL_SERVER_ALWAYSON_AVAILABILITY_GROUP" || "MYSQL" || "POSTGRESQL" || "JAVA_JMX" || "ORACLE" || "SAP_HANA_MULTI_NODE" || "SAP_HANA_SINGLE_NODE" || "SAP_HANA_HIGH_AVAILABILITY" || "SQL_SERVER_FAILOVER_CLUSTER_INSTANCE" || "SHAREPOINT" || "ACTIVE_DIRECTORY" || "SAP_NETWEAVER_STANDARD" || "SAP_NETWEAVER_DISTRIBUTED" || "SAP_NETWEAVER_HIGH_AVAILABILITY",
 * //     Configuration: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateWorkloadCommandInput - {@link UpdateWorkloadCommandInput}
 * @returns {@link UpdateWorkloadCommandOutput}
 * @see {@link UpdateWorkloadCommandInput} for command's `input` shape.
 * @see {@link UpdateWorkloadCommandOutput} for command's `response` shape.
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
export class UpdateWorkloadCommand extends $Command<
  UpdateWorkloadCommandInput,
  UpdateWorkloadCommandOutput,
  ApplicationInsightsClientResolvedConfig
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
  constructor(readonly input: UpdateWorkloadCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApplicationInsightsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateWorkloadCommandInput, UpdateWorkloadCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateWorkloadCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationInsightsClient";
    const commandName = "UpdateWorkloadCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "EC2WindowsBarleyService",
        operation: "UpdateWorkload",
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
  private serialize(input: UpdateWorkloadCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateWorkloadCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateWorkloadCommandOutput> {
    return de_UpdateWorkloadCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
