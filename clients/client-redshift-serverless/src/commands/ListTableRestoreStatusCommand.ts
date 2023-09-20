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

import { ListTableRestoreStatusRequest, ListTableRestoreStatusResponse } from "../models/models_0";
import { de_ListTableRestoreStatusCommand, se_ListTableRestoreStatusCommand } from "../protocols/Aws_json1_1";
import {
  RedshiftServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RedshiftServerlessClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListTableRestoreStatusCommand}.
 */
export interface ListTableRestoreStatusCommandInput extends ListTableRestoreStatusRequest {}
/**
 * @public
 *
 * The output of {@link ListTableRestoreStatusCommand}.
 */
export interface ListTableRestoreStatusCommandOutput extends ListTableRestoreStatusResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about an array of <code>TableRestoreStatus</code> objects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, ListTableRestoreStatusCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, ListTableRestoreStatusCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * const client = new RedshiftServerlessClient(config);
 * const input = { // ListTableRestoreStatusRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   namespaceName: "STRING_VALUE",
 *   workgroupName: "STRING_VALUE",
 * };
 * const command = new ListTableRestoreStatusCommand(input);
 * const response = await client.send(command);
 * // { // ListTableRestoreStatusResponse
 * //   nextToken: "STRING_VALUE",
 * //   tableRestoreStatuses: [ // TableRestoreStatusList
 * //     { // TableRestoreStatus
 * //       tableRestoreRequestId: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       message: "STRING_VALUE",
 * //       requestTime: new Date("TIMESTAMP"),
 * //       namespaceName: "STRING_VALUE",
 * //       workgroupName: "STRING_VALUE",
 * //       snapshotName: "STRING_VALUE",
 * //       progressInMegaBytes: Number("long"),
 * //       totalDataInMegaBytes: Number("long"),
 * //       sourceDatabaseName: "STRING_VALUE",
 * //       sourceSchemaName: "STRING_VALUE",
 * //       sourceTableName: "STRING_VALUE",
 * //       targetDatabaseName: "STRING_VALUE",
 * //       targetSchemaName: "STRING_VALUE",
 * //       newTableName: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListTableRestoreStatusCommandInput - {@link ListTableRestoreStatusCommandInput}
 * @returns {@link ListTableRestoreStatusCommandOutput}
 * @see {@link ListTableRestoreStatusCommandInput} for command's `input` shape.
 * @see {@link ListTableRestoreStatusCommandOutput} for command's `response` shape.
 * @see {@link RedshiftServerlessClientResolvedConfig | config} for RedshiftServerlessClient's `config` shape.
 *
 * @throws {@link InvalidPaginationException} (client fault)
 *  <p>The provided pagination token is invalid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link RedshiftServerlessServiceException}
 * <p>Base exception class for all service exceptions from RedshiftServerless service.</p>
 *
 */
export class ListTableRestoreStatusCommand extends $Command<
  ListTableRestoreStatusCommandInput,
  ListTableRestoreStatusCommandOutput,
  RedshiftServerlessClientResolvedConfig
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
  constructor(readonly input: ListTableRestoreStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftServerlessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTableRestoreStatusCommandInput, ListTableRestoreStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListTableRestoreStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftServerlessClient";
    const commandName = "ListTableRestoreStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RedshiftServerless",
        operation: "ListTableRestoreStatus",
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
  private serialize(input: ListTableRestoreStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListTableRestoreStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTableRestoreStatusCommandOutput> {
    return de_ListTableRestoreStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
