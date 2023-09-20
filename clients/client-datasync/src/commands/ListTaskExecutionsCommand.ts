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

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { ListTaskExecutionsRequest, ListTaskExecutionsResponse } from "../models/models_0";
import { de_ListTaskExecutionsCommand, se_ListTaskExecutionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListTaskExecutionsCommand}.
 */
export interface ListTaskExecutionsCommandInput extends ListTaskExecutionsRequest {}
/**
 * @public
 *
 * The output of {@link ListTaskExecutionsCommand}.
 */
export interface ListTaskExecutionsCommandOutput extends ListTaskExecutionsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of executed tasks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, ListTaskExecutionsCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, ListTaskExecutionsCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const input = { // ListTaskExecutionsRequest
 *   TaskArn: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListTaskExecutionsCommand(input);
 * const response = await client.send(command);
 * // { // ListTaskExecutionsResponse
 * //   TaskExecutions: [ // TaskExecutionList
 * //     { // TaskExecutionListEntry
 * //       TaskExecutionArn: "STRING_VALUE",
 * //       Status: "QUEUED" || "LAUNCHING" || "PREPARING" || "TRANSFERRING" || "VERIFYING" || "SUCCESS" || "ERROR",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTaskExecutionsCommandInput - {@link ListTaskExecutionsCommandInput}
 * @returns {@link ListTaskExecutionsCommandOutput}
 * @see {@link ListTaskExecutionsCommandInput} for command's `input` shape.
 * @see {@link ListTaskExecutionsCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for DataSyncClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception is thrown when an error occurs in the DataSync
 *       service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link DataSyncServiceException}
 * <p>Base exception class for all service exceptions from DataSync service.</p>
 *
 */
export class ListTaskExecutionsCommand extends $Command<
  ListTaskExecutionsCommandInput,
  ListTaskExecutionsCommandOutput,
  DataSyncClientResolvedConfig
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
  constructor(readonly input: ListTaskExecutionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTaskExecutionsCommandInput, ListTaskExecutionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListTaskExecutionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataSyncClient";
    const commandName = "ListTaskExecutionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "FmrsService",
        operation: "ListTaskExecutions",
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
  private serialize(input: ListTaskExecutionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListTaskExecutionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTaskExecutionsCommandOutput> {
    return de_ListTaskExecutionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
