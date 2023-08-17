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

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { GetConfiguredTableInput, GetConfiguredTableOutput } from "../models/models_0";
import { de_GetConfiguredTableCommand, se_GetConfiguredTableCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetConfiguredTableCommand}.
 */
export interface GetConfiguredTableCommandInput extends GetConfiguredTableInput {}
/**
 * @public
 *
 * The output of {@link GetConfiguredTableCommand}.
 */
export interface GetConfiguredTableCommandOutput extends GetConfiguredTableOutput, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a configured table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, GetConfiguredTableCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, GetConfiguredTableCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * const client = new CleanRoomsClient(config);
 * const input = { // GetConfiguredTableInput
 *   configuredTableIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetConfiguredTableCommand(input);
 * const response = await client.send(command);
 * // { // GetConfiguredTableOutput
 * //   configuredTable: { // ConfiguredTable
 * //     id: "STRING_VALUE", // required
 * //     arn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     description: "STRING_VALUE",
 * //     tableReference: { // TableReference Union: only one key present
 * //       glue: { // GlueTableReference
 * //         tableName: "STRING_VALUE", // required
 * //         databaseName: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     createTime: new Date("TIMESTAMP"), // required
 * //     updateTime: new Date("TIMESTAMP"), // required
 * //     analysisRuleTypes: [ // ConfiguredTableAnalysisRuleTypeList // required
 * //       "AGGREGATION" || "LIST" || "CUSTOM",
 * //     ],
 * //     analysisMethod: "STRING_VALUE", // required
 * //     allowedColumns: [ // AllowedColumnList // required
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetConfiguredTableCommandInput - {@link GetConfiguredTableCommandInput}
 * @returns {@link GetConfiguredTableCommandOutput}
 * @see {@link GetConfiguredTableCommandInput} for command's `input` shape.
 * @see {@link GetConfiguredTableCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Caller does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints.</p>
 *
 * @throws {@link CleanRoomsServiceException}
 * <p>Base exception class for all service exceptions from CleanRooms service.</p>
 *
 */
export class GetConfiguredTableCommand extends $Command<
  GetConfiguredTableCommandInput,
  GetConfiguredTableCommandOutput,
  CleanRoomsClientResolvedConfig
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
  constructor(readonly input: GetConfiguredTableCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CleanRoomsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetConfiguredTableCommandInput, GetConfiguredTableCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetConfiguredTableCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CleanRoomsClient";
    const commandName = "GetConfiguredTableCommand";
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
  private serialize(input: GetConfiguredTableCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetConfiguredTableCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetConfiguredTableCommandOutput> {
    return de_GetConfiguredTableCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
