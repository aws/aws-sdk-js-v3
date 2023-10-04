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
import {
  ListDataSourceRunActivitiesInput,
  ListDataSourceRunActivitiesOutput,
  ListDataSourceRunActivitiesOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  de_ListDataSourceRunActivitiesCommand,
  se_ListDataSourceRunActivitiesCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListDataSourceRunActivitiesCommand}.
 */
export interface ListDataSourceRunActivitiesCommandInput extends ListDataSourceRunActivitiesInput {}
/**
 * @public
 *
 * The output of {@link ListDataSourceRunActivitiesCommand}.
 */
export interface ListDataSourceRunActivitiesCommandOutput extends ListDataSourceRunActivitiesOutput, __MetadataBearer {}

/**
 * @public
 * <p>Lists data source run activities.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, ListDataSourceRunActivitiesCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, ListDataSourceRunActivitiesCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // ListDataSourceRunActivitiesInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 *   status: "FAILED" || "PUBLISHING_FAILED" || "SUCCEEDED_CREATED" || "SUCCEEDED_UPDATED" || "SKIPPED_ALREADY_IMPORTED" || "SKIPPED_ARCHIVED" || "SKIPPED_NO_ACCESS" || "UNCHANGED",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListDataSourceRunActivitiesCommand(input);
 * const response = await client.send(command);
 * // { // ListDataSourceRunActivitiesOutput
 * //   items: [ // DataSourceRunActivities // required
 * //     { // DataSourceRunActivity
 * //       database: "STRING_VALUE", // required
 * //       dataSourceRunId: "STRING_VALUE", // required
 * //       technicalName: "STRING_VALUE", // required
 * //       dataAssetStatus: "FAILED" || "PUBLISHING_FAILED" || "SUCCEEDED_CREATED" || "SUCCEEDED_UPDATED" || "SKIPPED_ALREADY_IMPORTED" || "SKIPPED_ARCHIVED" || "SKIPPED_NO_ACCESS" || "UNCHANGED", // required
 * //       projectId: "STRING_VALUE", // required
 * //       dataAssetId: "STRING_VALUE",
 * //       technicalDescription: "STRING_VALUE",
 * //       errorMessage: { // DataSourceErrorMessage
 * //         errorType: "ACCESS_DENIED_EXCEPTION" || "CONFLICT_EXCEPTION" || "INTERNAL_SERVER_EXCEPTION" || "RESOURCE_NOT_FOUND_EXCEPTION" || "SERVICE_QUOTA_EXCEEDED_EXCEPTION" || "THROTTLING_EXCEPTION" || "VALIDATION_EXCEPTION", // required
 * //         errorDetail: "STRING_VALUE",
 * //       },
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDataSourceRunActivitiesCommandInput - {@link ListDataSourceRunActivitiesCommandInput}
 * @returns {@link ListDataSourceRunActivitiesCommandOutput}
 * @see {@link ListDataSourceRunActivitiesCommandInput} for command's `input` shape.
 * @see {@link ListDataSourceRunActivitiesCommandOutput} for command's `response` shape.
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
export class ListDataSourceRunActivitiesCommand extends $Command<
  ListDataSourceRunActivitiesCommandInput,
  ListDataSourceRunActivitiesCommandOutput,
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
  constructor(readonly input: ListDataSourceRunActivitiesCommandInput) {
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
  ): Handler<ListDataSourceRunActivitiesCommandInput, ListDataSourceRunActivitiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDataSourceRunActivitiesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataZoneClient";
    const commandName = "ListDataSourceRunActivitiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: ListDataSourceRunActivitiesOutputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "DataZone",
        operation: "ListDataSourceRunActivities",
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
  private serialize(input: ListDataSourceRunActivitiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListDataSourceRunActivitiesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListDataSourceRunActivitiesCommandOutput> {
    return de_ListDataSourceRunActivitiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
