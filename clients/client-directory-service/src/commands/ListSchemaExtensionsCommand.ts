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

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { ListSchemaExtensionsRequest, ListSchemaExtensionsResult } from "../models/models_0";
import { de_ListSchemaExtensionsCommand, se_ListSchemaExtensionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListSchemaExtensionsCommand}.
 */
export interface ListSchemaExtensionsCommandInput extends ListSchemaExtensionsRequest {}
/**
 * @public
 *
 * The output of {@link ListSchemaExtensionsCommand}.
 */
export interface ListSchemaExtensionsCommandOutput extends ListSchemaExtensionsResult, __MetadataBearer {}

/**
 * @public
 * <p>Lists all schema extensions applied to a Microsoft AD Directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, ListSchemaExtensionsCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, ListSchemaExtensionsCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const input = { // ListSchemaExtensionsRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new ListSchemaExtensionsCommand(input);
 * const response = await client.send(command);
 * // { // ListSchemaExtensionsResult
 * //   SchemaExtensionsInfo: [ // SchemaExtensionsInfo
 * //     { // SchemaExtensionInfo
 * //       DirectoryId: "STRING_VALUE",
 * //       SchemaExtensionId: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       SchemaExtensionStatus: "Initializing" || "CreatingSnapshot" || "UpdatingSchema" || "Replicating" || "CancelInProgress" || "RollbackInProgress" || "Cancelled" || "Failed" || "Completed",
 * //       SchemaExtensionStatusReason: "STRING_VALUE",
 * //       StartDateTime: new Date("TIMESTAMP"),
 * //       EndDateTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSchemaExtensionsCommandInput - {@link ListSchemaExtensionsCommandInput}
 * @returns {@link ListSchemaExtensionsCommandOutput}
 * @see {@link ListSchemaExtensionsCommandInput} for command's `input` shape.
 * @see {@link ListSchemaExtensionsCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *  <p>The specified entity could not be found.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The <code>NextToken</code> value is not valid.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An exception has occurred in Directory Service.</p>
 *
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
 */
export class ListSchemaExtensionsCommand extends $Command<
  ListSchemaExtensionsCommandInput,
  ListSchemaExtensionsCommandOutput,
  DirectoryServiceClientResolvedConfig
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
  constructor(readonly input: ListSchemaExtensionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectoryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSchemaExtensionsCommandInput, ListSchemaExtensionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSchemaExtensionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectoryServiceClient";
    const commandName = "ListSchemaExtensionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "DirectoryService_20150416",
        operation: "ListSchemaExtensions",
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
  private serialize(input: ListSchemaExtensionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListSchemaExtensionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSchemaExtensionsCommandOutput> {
    return de_ListSchemaExtensionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
