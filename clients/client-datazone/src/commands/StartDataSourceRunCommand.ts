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

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { StartDataSourceRunInput, StartDataSourceRunOutput } from "../models/models_0";
import { de_StartDataSourceRunCommand, se_StartDataSourceRunCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartDataSourceRunCommand}.
 */
export interface StartDataSourceRunCommandInput extends StartDataSourceRunInput {}
/**
 * @public
 *
 * The output of {@link StartDataSourceRunCommand}.
 */
export interface StartDataSourceRunCommandOutput extends StartDataSourceRunOutput, __MetadataBearer {}

/**
 * @public
 * <p>Start the run of the specified data source in Amazon DataZone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, StartDataSourceRunCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, StartDataSourceRunCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // StartDataSourceRunInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   dataSourceIdentifier: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new StartDataSourceRunCommand(input);
 * const response = await client.send(command);
 * // { // StartDataSourceRunOutput
 * //   domainId: "STRING_VALUE", // required
 * //   dataSourceId: "STRING_VALUE", // required
 * //   id: "STRING_VALUE", // required
 * //   projectId: "STRING_VALUE", // required
 * //   status: "REQUESTED" || "RUNNING" || "FAILED" || "PARTIALLY_SUCCEEDED" || "SUCCESS", // required
 * //   type: "PRIORITIZED" || "SCHEDULED", // required
 * //   dataSourceConfigurationSnapshot: "STRING_VALUE",
 * //   runStatisticsForAssets: { // RunStatisticsForAssets
 * //     added: Number("int"),
 * //     updated: Number("int"),
 * //     unchanged: Number("int"),
 * //     skipped: Number("int"),
 * //     failed: Number("int"),
 * //   },
 * //   errorMessage: { // DataSourceErrorMessage
 * //     errorType: "ACCESS_DENIED_EXCEPTION" || "CONFLICT_EXCEPTION" || "INTERNAL_SERVER_EXCEPTION" || "RESOURCE_NOT_FOUND_EXCEPTION" || "SERVICE_QUOTA_EXCEEDED_EXCEPTION" || "THROTTLING_EXCEPTION" || "VALIDATION_EXCEPTION", // required
 * //     errorDetail: "STRING_VALUE",
 * //   },
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   startedAt: new Date("TIMESTAMP"),
 * //   stoppedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param StartDataSourceRunCommandInput - {@link StartDataSourceRunCommandInput}
 * @returns {@link StartDataSourceRunCommandOutput}
 * @see {@link StartDataSourceRunCommandInput} for command's `input` shape.
 * @see {@link StartDataSourceRunCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There is a conflict while performing this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request has exceeded the specified service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link DataZoneServiceException}
 * <p>Base exception class for all service exceptions from DataZone service.</p>
 *
 */
export class StartDataSourceRunCommand extends $Command<
  StartDataSourceRunCommandInput,
  StartDataSourceRunCommandOutput,
  DataZoneClientResolvedConfig
> {
  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: StartDataSourceRunCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataZoneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartDataSourceRunCommandInput, StartDataSourceRunCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartDataSourceRunCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataZoneClient";
    const commandName = "StartDataSourceRunCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "DataZone",
        operation: "StartDataSourceRun",
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
  private serialize(input: StartDataSourceRunCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartDataSourceRunCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartDataSourceRunCommandOutput> {
    return de_StartDataSourceRunCommand(output, context);
  }
}
