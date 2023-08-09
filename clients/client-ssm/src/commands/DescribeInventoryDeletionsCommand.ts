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

import { DescribeInventoryDeletionsRequest, DescribeInventoryDeletionsResult } from "../models/models_0";
import { de_DescribeInventoryDeletionsCommand, se_DescribeInventoryDeletionsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeInventoryDeletionsCommand}.
 */
export interface DescribeInventoryDeletionsCommandInput extends DescribeInventoryDeletionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInventoryDeletionsCommand}.
 */
export interface DescribeInventoryDeletionsCommandOutput extends DescribeInventoryDeletionsResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes a specific delete inventory operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeInventoryDeletionsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeInventoryDeletionsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // DescribeInventoryDeletionsRequest
 *   DeletionId: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeInventoryDeletionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInventoryDeletionsResult
 * //   InventoryDeletions: [ // InventoryDeletionsList
 * //     { // InventoryDeletionStatusItem
 * //       DeletionId: "STRING_VALUE",
 * //       TypeName: "STRING_VALUE",
 * //       DeletionStartTime: new Date("TIMESTAMP"),
 * //       LastStatus: "InProgress" || "Complete",
 * //       LastStatusMessage: "STRING_VALUE",
 * //       DeletionSummary: { // InventoryDeletionSummary
 * //         TotalCount: Number("int"),
 * //         RemainingCount: Number("int"),
 * //         SummaryItems: [ // InventoryDeletionSummaryItems
 * //           { // InventoryDeletionSummaryItem
 * //             Version: "STRING_VALUE",
 * //             Count: Number("int"),
 * //             RemainingCount: Number("int"),
 * //           },
 * //         ],
 * //       },
 * //       LastStatusUpdateTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeInventoryDeletionsCommandInput - {@link DescribeInventoryDeletionsCommandInput}
 * @returns {@link DescribeInventoryDeletionsCommandOutput}
 * @see {@link DescribeInventoryDeletionsCommandInput} for command's `input` shape.
 * @see {@link DescribeInventoryDeletionsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidDeletionIdException} (client fault)
 *  <p>The ID specified for the delete operation doesn't exist or isn't valid. Verify the ID and
 *    try again.</p>
 *
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The specified token isn't valid.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export class DescribeInventoryDeletionsCommand extends $Command<
  DescribeInventoryDeletionsCommandInput,
  DescribeInventoryDeletionsCommandOutput,
  SSMClientResolvedConfig
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
  constructor(readonly input: DescribeInventoryDeletionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeInventoryDeletionsCommandInput, DescribeInventoryDeletionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeInventoryDeletionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "DescribeInventoryDeletionsCommand";
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
  private serialize(input: DescribeInventoryDeletionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeInventoryDeletionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeInventoryDeletionsCommandOutput> {
    return de_DescribeInventoryDeletionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
