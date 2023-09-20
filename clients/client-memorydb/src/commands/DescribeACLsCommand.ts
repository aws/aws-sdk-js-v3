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
import { DescribeACLsRequest, DescribeACLsResponse } from "../models/models_0";
import { de_DescribeACLsCommand, se_DescribeACLsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeACLsCommand}.
 */
export interface DescribeACLsCommandInput extends DescribeACLsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeACLsCommand}.
 */
export interface DescribeACLsCommandOutput extends DescribeACLsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of ACLs</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, DescribeACLsCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, DescribeACLsCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * const client = new MemoryDBClient(config);
 * const input = { // DescribeACLsRequest
 *   ACLName: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeACLsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeACLsResponse
 * //   ACLs: [ // ACLList
 * //     { // ACL
 * //       Name: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       UserNames: [ // UserNameList
 * //         "STRING_VALUE",
 * //       ],
 * //       MinimumEngineVersion: "STRING_VALUE",
 * //       PendingChanges: { // ACLPendingChanges
 * //         UserNamesToRemove: [
 * //           "STRING_VALUE",
 * //         ],
 * //         UserNamesToAdd: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       Clusters: [ // ACLClusterNameList
 * //         "STRING_VALUE",
 * //       ],
 * //       ARN: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeACLsCommandInput - {@link DescribeACLsCommandInput}
 * @returns {@link DescribeACLsCommandOutput}
 * @see {@link DescribeACLsCommandInput} for command's `input` shape.
 * @see {@link DescribeACLsCommandOutput} for command's `response` shape.
 * @see {@link MemoryDBClientResolvedConfig | config} for MemoryDBClient's `config` shape.
 *
 * @throws {@link ACLNotFoundFault} (client fault)
 *  <p></p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p></p>
 *
 * @throws {@link MemoryDBServiceException}
 * <p>Base exception class for all service exceptions from MemoryDB service.</p>
 *
 */
export class DescribeACLsCommand extends $Command<
  DescribeACLsCommandInput,
  DescribeACLsCommandOutput,
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
  constructor(readonly input: DescribeACLsCommandInput) {
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
  ): Handler<DescribeACLsCommandInput, DescribeACLsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DescribeACLsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MemoryDBClient";
    const commandName = "DescribeACLsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonMemoryDB",
        operation: "DescribeACLs",
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
  private serialize(input: DescribeACLsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeACLsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeACLsCommandOutput> {
    return de_DescribeACLsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
