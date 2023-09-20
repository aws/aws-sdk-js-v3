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

import { MemoryDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MemoryDBClient";
import { DescribeServiceUpdatesRequest, DescribeServiceUpdatesResponse } from "../models/models_0";
import { de_DescribeServiceUpdatesCommand, se_DescribeServiceUpdatesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeServiceUpdatesCommand}.
 */
export interface DescribeServiceUpdatesCommandInput extends DescribeServiceUpdatesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeServiceUpdatesCommand}.
 */
export interface DescribeServiceUpdatesCommandOutput extends DescribeServiceUpdatesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns details of the service updates</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, DescribeServiceUpdatesCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, DescribeServiceUpdatesCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * const client = new MemoryDBClient(config);
 * const input = { // DescribeServiceUpdatesRequest
 *   ServiceUpdateName: "STRING_VALUE",
 *   ClusterNames: [ // ClusterNameList
 *     "STRING_VALUE",
 *   ],
 *   Status: [ // ServiceUpdateStatusList
 *     "available" || "in-progress" || "complete" || "scheduled",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeServiceUpdatesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeServiceUpdatesResponse
 * //   NextToken: "STRING_VALUE",
 * //   ServiceUpdates: [ // ServiceUpdateList
 * //     { // ServiceUpdate
 * //       ClusterName: "STRING_VALUE",
 * //       ServiceUpdateName: "STRING_VALUE",
 * //       ReleaseDate: new Date("TIMESTAMP"),
 * //       Description: "STRING_VALUE",
 * //       Status: "available" || "in-progress" || "complete" || "scheduled",
 * //       Type: "security-update",
 * //       NodesUpdated: "STRING_VALUE",
 * //       AutoUpdateStartDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeServiceUpdatesCommandInput - {@link DescribeServiceUpdatesCommandInput}
 * @returns {@link DescribeServiceUpdatesCommandOutput}
 * @see {@link DescribeServiceUpdatesCommandInput} for command's `input` shape.
 * @see {@link DescribeServiceUpdatesCommandOutput} for command's `response` shape.
 * @see {@link MemoryDBClientResolvedConfig | config} for MemoryDBClient's `config` shape.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p></p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p></p>
 *
 * @throws {@link MemoryDBServiceException}
 * <p>Base exception class for all service exceptions from MemoryDB service.</p>
 *
 */
export class DescribeServiceUpdatesCommand extends $Command<
  DescribeServiceUpdatesCommandInput,
  DescribeServiceUpdatesCommandOutput,
  MemoryDBClientResolvedConfig
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
  constructor(readonly input: DescribeServiceUpdatesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MemoryDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeServiceUpdatesCommandInput, DescribeServiceUpdatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeServiceUpdatesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MemoryDBClient";
    const commandName = "DescribeServiceUpdatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonMemoryDB",
        operation: "DescribeServiceUpdates",
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
  private serialize(input: DescribeServiceUpdatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeServiceUpdatesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeServiceUpdatesCommandOutput> {
    return de_DescribeServiceUpdatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
