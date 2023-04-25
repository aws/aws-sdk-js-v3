// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { DescribeStorageSystemResourcesRequest, DescribeStorageSystemResourcesResponse } from "../models/models_0";
import {
  de_DescribeStorageSystemResourcesCommand,
  se_DescribeStorageSystemResourcesCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link DescribeStorageSystemResourcesCommand}.
 */
export interface DescribeStorageSystemResourcesCommandInput extends DescribeStorageSystemResourcesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeStorageSystemResourcesCommand}.
 */
export interface DescribeStorageSystemResourcesCommandOutput
  extends DescribeStorageSystemResourcesResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns information that DataSync Discovery collects about resources in your on-premises storage
 *       system.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, DescribeStorageSystemResourcesCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, DescribeStorageSystemResourcesCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const input = { // DescribeStorageSystemResourcesRequest
 *   DiscoveryJobArn: "STRING_VALUE", // required
 *   ResourceType: "SVM" || "VOLUME" || "CLUSTER", // required
 *   ResourceIds: [ // ResourceIds
 *     "STRING_VALUE",
 *   ],
 *   Filter: { // ResourceFilters
 *     "<keys>": [ // FilterMembers
 *       "STRING_VALUE",
 *     ],
 *   },
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeStorageSystemResourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeStorageSystemResourcesCommandInput - {@link DescribeStorageSystemResourcesCommandInput}
 * @returns {@link DescribeStorageSystemResourcesCommandOutput}
 * @see {@link DescribeStorageSystemResourcesCommandInput} for command's `input` shape.
 * @see {@link DescribeStorageSystemResourcesCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for DataSyncClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception is thrown when an error occurs in the DataSync
 *       service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 *
 */
export class DescribeStorageSystemResourcesCommand extends $Command<
  DescribeStorageSystemResourcesCommandInput,
  DescribeStorageSystemResourcesCommandOutput,
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
  constructor(readonly input: DescribeStorageSystemResourcesCommandInput) {
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
  ): Handler<DescribeStorageSystemResourcesCommandInput, DescribeStorageSystemResourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeStorageSystemResourcesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataSyncClient";
    const commandName = "DescribeStorageSystemResourcesCommand";
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
  private serialize(
    input: DescribeStorageSystemResourcesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeStorageSystemResourcesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeStorageSystemResourcesCommandOutput> {
    return de_DescribeStorageSystemResourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
