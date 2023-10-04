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
import { GetDataSourceRunInput, GetDataSourceRunOutput } from "../models/models_0";
import { de_GetDataSourceRunCommand, se_GetDataSourceRunCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetDataSourceRunCommand}.
 */
export interface GetDataSourceRunCommandInput extends GetDataSourceRunInput {}
/**
 * @public
 *
 * The output of {@link GetDataSourceRunCommand}.
 */
export interface GetDataSourceRunCommandOutput extends GetDataSourceRunOutput, __MetadataBearer {}

/**
 * @public
 * <p>Gets an Amazon DataZone data source run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, GetDataSourceRunCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, GetDataSourceRunCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // GetDataSourceRunInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new GetDataSourceRunCommand(input);
 * const response = await client.send(command);
 * // { // GetDataSourceRunOutput
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
 * @param GetDataSourceRunCommandInput - {@link GetDataSourceRunCommandInput}
 * @returns {@link GetDataSourceRunCommandOutput}
 * @see {@link GetDataSourceRunCommandInput} for command's `input` shape.
 * @see {@link GetDataSourceRunCommandOutput} for command's `response` shape.
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
export class GetDataSourceRunCommand extends $Command<
  GetDataSourceRunCommandInput,
  GetDataSourceRunCommandOutput,
  DataZoneClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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
  constructor(readonly input: GetDataSourceRunCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataZoneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDataSourceRunCommandInput, GetDataSourceRunCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDataSourceRunCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataZoneClient";
    const commandName = "GetDataSourceRunCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "DataZone",
        operation: "GetDataSourceRun",
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
  private serialize(input: GetDataSourceRunCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetDataSourceRunCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDataSourceRunCommandOutput> {
    return de_GetDataSourceRunCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
