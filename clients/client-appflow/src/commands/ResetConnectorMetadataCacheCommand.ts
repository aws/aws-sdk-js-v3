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

import { AppflowClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppflowClient";
import { ResetConnectorMetadataCacheRequest, ResetConnectorMetadataCacheResponse } from "../models/models_0";
import {
  de_ResetConnectorMetadataCacheCommand,
  se_ResetConnectorMetadataCacheCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ResetConnectorMetadataCacheCommand}.
 */
export interface ResetConnectorMetadataCacheCommandInput extends ResetConnectorMetadataCacheRequest {}
/**
 * @public
 *
 * The output of {@link ResetConnectorMetadataCacheCommand}.
 */
export interface ResetConnectorMetadataCacheCommandOutput
  extends ResetConnectorMetadataCacheResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Resets metadata about your connector entities that Amazon AppFlow stored in its
 *       cache. Use this action when you want Amazon AppFlow to return the latest information
 *       about the data that you have in a source application.</p>
 *          <p>Amazon AppFlow returns metadata about your entities when you use the
 *       ListConnectorEntities or DescribeConnectorEntities actions. Following these actions, Amazon AppFlow caches the metadata to reduce the number of API requests that it must send to
 *       the source application. Amazon AppFlow automatically resets the cache once every hour,
 *       but you can use this action when you want to get the latest metadata right away.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppflowClient, ResetConnectorMetadataCacheCommand } from "@aws-sdk/client-appflow"; // ES Modules import
 * // const { AppflowClient, ResetConnectorMetadataCacheCommand } = require("@aws-sdk/client-appflow"); // CommonJS import
 * const client = new AppflowClient(config);
 * const input = { // ResetConnectorMetadataCacheRequest
 *   connectorProfileName: "STRING_VALUE",
 *   connectorType: "Salesforce" || "Singular" || "Slack" || "Redshift" || "S3" || "Marketo" || "Googleanalytics" || "Zendesk" || "Servicenow" || "Datadog" || "Trendmicro" || "Snowflake" || "Dynatrace" || "Infornexus" || "Amplitude" || "Veeva" || "EventBridge" || "LookoutMetrics" || "Upsolver" || "Honeycode" || "CustomerProfiles" || "SAPOData" || "CustomConnector" || "Pardot",
 *   connectorEntityName: "STRING_VALUE",
 *   entitiesPath: "STRING_VALUE",
 *   apiVersion: "STRING_VALUE",
 * };
 * const command = new ResetConnectorMetadataCacheCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ResetConnectorMetadataCacheCommandInput - {@link ResetConnectorMetadataCacheCommandInput}
 * @returns {@link ResetConnectorMetadataCacheCommandOutput}
 * @see {@link ResetConnectorMetadataCacheCommandInput} for command's `input` shape.
 * @see {@link ResetConnectorMetadataCacheCommandOutput} for command's `response` shape.
 * @see {@link AppflowClientResolvedConfig | config} for AppflowClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p> There was a conflict when processing the request (for example, a flow with the given name
 *       already exists within the account. Check for conflicting resource names and try again. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> An internal service error occurred during the processing of your request. Try again
 *       later. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The resource specified in the request (such as the source or destination connector
 *       profile) is not found. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The request has invalid or missing parameters. </p>
 *
 * @throws {@link AppflowServiceException}
 * <p>Base exception class for all service exceptions from Appflow service.</p>
 *
 */
export class ResetConnectorMetadataCacheCommand extends $Command<
  ResetConnectorMetadataCacheCommandInput,
  ResetConnectorMetadataCacheCommandOutput,
  AppflowClientResolvedConfig
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
  constructor(readonly input: ResetConnectorMetadataCacheCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppflowClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ResetConnectorMetadataCacheCommandInput, ResetConnectorMetadataCacheCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ResetConnectorMetadataCacheCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppflowClient";
    const commandName = "ResetConnectorMetadataCacheCommand";
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
  private serialize(input: ResetConnectorMetadataCacheCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ResetConnectorMetadataCacheCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ResetConnectorMetadataCacheCommandOutput> {
    return de_ResetConnectorMetadataCacheCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
