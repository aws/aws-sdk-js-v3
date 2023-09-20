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
import { ListDiscoveryJobsRequest, ListDiscoveryJobsResponse } from "../models/models_0";
import { de_ListDiscoveryJobsCommand, se_ListDiscoveryJobsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListDiscoveryJobsCommand}.
 */
export interface ListDiscoveryJobsCommandInput extends ListDiscoveryJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListDiscoveryJobsCommand}.
 */
export interface ListDiscoveryJobsCommandOutput extends ListDiscoveryJobsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Provides a list of the existing discovery jobs in the Amazon Web Services Region and
 *         Amazon Web Services account where you're using DataSync Discovery.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, ListDiscoveryJobsCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, ListDiscoveryJobsCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const input = { // ListDiscoveryJobsRequest
 *   StorageSystemArn: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListDiscoveryJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListDiscoveryJobsResponse
 * //   DiscoveryJobs: [ // DiscoveryJobList
 * //     { // DiscoveryJobListEntry
 * //       DiscoveryJobArn: "STRING_VALUE",
 * //       Status: "RUNNING" || "WARNING" || "TERMINATED" || "FAILED" || "STOPPED" || "COMPLETED" || "COMPLETED_WITH_ISSUES",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDiscoveryJobsCommandInput - {@link ListDiscoveryJobsCommandInput}
 * @returns {@link ListDiscoveryJobsCommandOutput}
 * @see {@link ListDiscoveryJobsCommandInput} for command's `input` shape.
 * @see {@link ListDiscoveryJobsCommandOutput} for command's `response` shape.
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
export class ListDiscoveryJobsCommand extends $Command<
  ListDiscoveryJobsCommandInput,
  ListDiscoveryJobsCommandOutput,
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
  constructor(readonly input: ListDiscoveryJobsCommandInput) {
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
  ): Handler<ListDiscoveryJobsCommandInput, ListDiscoveryJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDiscoveryJobsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataSyncClient";
    const commandName = "ListDiscoveryJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "FmrsService",
        operation: "ListDiscoveryJobs",
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
  private serialize(input: ListDiscoveryJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListDiscoveryJobsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDiscoveryJobsCommandOutput> {
    return de_ListDiscoveryJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
