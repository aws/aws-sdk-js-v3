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

import { ListOpsItemRelatedItemsRequest, ListOpsItemRelatedItemsResponse } from "../models/models_1";
import { de_ListOpsItemRelatedItemsCommand, se_ListOpsItemRelatedItemsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListOpsItemRelatedItemsCommand}.
 */
export interface ListOpsItemRelatedItemsCommandInput extends ListOpsItemRelatedItemsRequest {}
/**
 * @public
 *
 * The output of {@link ListOpsItemRelatedItemsCommand}.
 */
export interface ListOpsItemRelatedItemsCommandOutput extends ListOpsItemRelatedItemsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists all related-item resources associated with a Systems Manager OpsCenter OpsItem. OpsCenter is a
 *    capability of Amazon Web Services Systems Manager.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListOpsItemRelatedItemsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListOpsItemRelatedItemsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // ListOpsItemRelatedItemsRequest
 *   OpsItemId: "STRING_VALUE",
 *   Filters: [ // OpsItemRelatedItemsFilters
 *     { // OpsItemRelatedItemsFilter
 *       Key: "ResourceType" || "AssociationId" || "ResourceUri", // required
 *       Values: [ // OpsItemRelatedItemsFilterValues // required
 *         "STRING_VALUE",
 *       ],
 *       Operator: "Equal", // required
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListOpsItemRelatedItemsCommand(input);
 * const response = await client.send(command);
 * // { // ListOpsItemRelatedItemsResponse
 * //   NextToken: "STRING_VALUE",
 * //   Summaries: [ // OpsItemRelatedItemSummaries
 * //     { // OpsItemRelatedItemSummary
 * //       OpsItemId: "STRING_VALUE",
 * //       AssociationId: "STRING_VALUE",
 * //       ResourceType: "STRING_VALUE",
 * //       AssociationType: "STRING_VALUE",
 * //       ResourceUri: "STRING_VALUE",
 * //       CreatedBy: { // OpsItemIdentity
 * //         Arn: "STRING_VALUE",
 * //       },
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       LastModifiedBy: {
 * //         Arn: "STRING_VALUE",
 * //       },
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListOpsItemRelatedItemsCommandInput - {@link ListOpsItemRelatedItemsCommandInput}
 * @returns {@link ListOpsItemRelatedItemsCommandOutput}
 * @see {@link ListOpsItemRelatedItemsCommandInput} for command's `input` shape.
 * @see {@link ListOpsItemRelatedItemsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link OpsItemInvalidParameterException} (client fault)
 *  <p>A specified parameter argument isn't valid. Verify the available arguments and try
 *    again.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export class ListOpsItemRelatedItemsCommand extends $Command<
  ListOpsItemRelatedItemsCommandInput,
  ListOpsItemRelatedItemsCommandOutput,
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
  constructor(readonly input: ListOpsItemRelatedItemsCommandInput) {
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
  ): Handler<ListOpsItemRelatedItemsCommandInput, ListOpsItemRelatedItemsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListOpsItemRelatedItemsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "ListOpsItemRelatedItemsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonSSM",
        operation: "ListOpsItemRelatedItems",
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
  private serialize(input: ListOpsItemRelatedItemsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListOpsItemRelatedItemsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListOpsItemRelatedItemsCommandOutput> {
    return de_ListOpsItemRelatedItemsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
