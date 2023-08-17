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
import { CreateConfiguredTableInput, CreateConfiguredTableOutput } from "../models/models_0";
import { de_CreateConfiguredTableCommand, se_CreateConfiguredTableCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateConfiguredTableCommand}.
 */
export interface CreateConfiguredTableCommandInput extends CreateConfiguredTableInput {}
/**
 * @public
 *
 * The output of {@link CreateConfiguredTableCommand}.
 */
export interface CreateConfiguredTableCommandOutput extends CreateConfiguredTableOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new configured table resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, CreateConfiguredTableCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, CreateConfiguredTableCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * const client = new CleanRoomsClient(config);
 * const input = { // CreateConfiguredTableInput
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   tableReference: { // TableReference Union: only one key present
 *     glue: { // GlueTableReference
 *       tableName: "STRING_VALUE", // required
 *       databaseName: "STRING_VALUE", // required
 *     },
 *   },
 *   allowedColumns: [ // AllowedColumnList // required
 *     "STRING_VALUE",
 *   ],
 *   analysisMethod: "STRING_VALUE", // required
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateConfiguredTableCommand(input);
 * const response = await client.send(command);
 * // { // CreateConfiguredTableOutput
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
 * @param CreateConfiguredTableCommandInput - {@link CreateConfiguredTableCommandInput}
 * @returns {@link CreateConfiguredTableCommandOutput}
 * @see {@link CreateConfiguredTableCommandInput} for command's `input` shape.
 * @see {@link CreateConfiguredTableCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Caller does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Request denied because service quota has been exceeded.</p>
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
export class CreateConfiguredTableCommand extends $Command<
  CreateConfiguredTableCommandInput,
  CreateConfiguredTableCommandOutput,
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
  constructor(readonly input: CreateConfiguredTableCommandInput) {
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
  ): Handler<CreateConfiguredTableCommandInput, CreateConfiguredTableCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateConfiguredTableCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CleanRoomsClient";
    const commandName = "CreateConfiguredTableCommand";
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
  private serialize(input: CreateConfiguredTableCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateConfiguredTableCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateConfiguredTableCommandOutput> {
    return de_CreateConfiguredTableCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
