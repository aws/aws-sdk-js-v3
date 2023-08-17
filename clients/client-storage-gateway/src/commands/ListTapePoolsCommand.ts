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

import { ListTapePoolsInput, ListTapePoolsOutput } from "../models/models_0";
import { de_ListTapePoolsCommand, se_ListTapePoolsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListTapePoolsCommand}.
 */
export interface ListTapePoolsCommandInput extends ListTapePoolsInput {}
/**
 * @public
 *
 * The output of {@link ListTapePoolsCommand}.
 */
export interface ListTapePoolsCommandOutput extends ListTapePoolsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Lists custom tape pools. You specify custom tape pools to list by specifying one or more
 *          custom tape pool Amazon Resource Names (ARNs). If you don't specify a custom tape pool ARN,
 *          the operation lists all custom tape pools.</p>
 *
 *          <p>This operation supports pagination. You can optionally specify the <code>Limit</code>
 *          parameter in the body to limit the number of tape pools in the response. If the number of
 *          tape pools returned in the response is truncated, the response includes a
 *             <code>Marker</code> element that you can use in your subsequent request to retrieve the
 *          next set of tape pools.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, ListTapePoolsCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, ListTapePoolsCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // ListTapePoolsInput
 *   PoolARNs: [ // PoolARNs
 *     "STRING_VALUE",
 *   ],
 *   Marker: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new ListTapePoolsCommand(input);
 * const response = await client.send(command);
 * // { // ListTapePoolsOutput
 * //   PoolInfos: [ // PoolInfos
 * //     { // PoolInfo
 * //       PoolARN: "STRING_VALUE",
 * //       PoolName: "STRING_VALUE",
 * //       StorageClass: "STRING_VALUE",
 * //       RetentionLockType: "STRING_VALUE",
 * //       RetentionLockTimeInDays: Number("int"),
 * //       PoolStatus: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTapePoolsCommandInput - {@link ListTapePoolsCommandInput}
 * @returns {@link ListTapePoolsCommandOutput}
 * @see {@link ListTapePoolsCommandInput} for command's `input` shape.
 * @see {@link ListTapePoolsCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An internal server error has occurred during the request. For more information, see the
 *          error and message fields.</p>
 *
 * @throws {@link InvalidGatewayRequestException} (client fault)
 *  <p>An exception occurred because an invalid gateway request was issued to the service. For
 *          more information, see the error and message fields.</p>
 *
 * @throws {@link StorageGatewayServiceException}
 * <p>Base exception class for all service exceptions from StorageGateway service.</p>
 *
 */
export class ListTapePoolsCommand extends $Command<
  ListTapePoolsCommandInput,
  ListTapePoolsCommandOutput,
  StorageGatewayClientResolvedConfig
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
  constructor(readonly input: ListTapePoolsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTapePoolsCommandInput, ListTapePoolsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListTapePoolsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "ListTapePoolsCommand";
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
  private serialize(input: ListTapePoolsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListTapePoolsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTapePoolsCommandOutput> {
    return de_ListTapePoolsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
