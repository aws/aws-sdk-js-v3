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

import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { DescribeResourceGroupsRequest, DescribeResourceGroupsResponse } from "../models/models_0";
import { de_DescribeResourceGroupsCommand, se_DescribeResourceGroupsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeResourceGroupsCommand}.
 */
export interface DescribeResourceGroupsCommandInput extends DescribeResourceGroupsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeResourceGroupsCommand}.
 */
export interface DescribeResourceGroupsCommandOutput extends DescribeResourceGroupsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes the resource groups that are specified by the ARNs of the resource
 *          groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, DescribeResourceGroupsCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, DescribeResourceGroupsCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const input = { // DescribeResourceGroupsRequest
 *   resourceGroupArns: [ // BatchDescribeArnList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeResourceGroupsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeResourceGroupsResponse
 * //   resourceGroups: [ // ResourceGroupList // required
 * //     { // ResourceGroup
 * //       arn: "STRING_VALUE", // required
 * //       tags: [ // ResourceGroupTags // required
 * //         { // ResourceGroupTag
 * //           key: "STRING_VALUE", // required
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   failedItems: { // FailedItems // required
 * //     "<keys>": { // FailedItemDetails
 * //       failureCode: "INVALID_ARN" || "DUPLICATE_ARN" || "ITEM_DOES_NOT_EXIST" || "ACCESS_DENIED" || "LIMIT_EXCEEDED" || "INTERNAL_ERROR", // required
 * //       retryable: true || false, // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeResourceGroupsCommandInput - {@link DescribeResourceGroupsCommandInput}
 * @returns {@link DescribeResourceGroupsCommandOutput}
 * @see {@link DescribeResourceGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeResourceGroupsCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for InspectorClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *          input parameter.</p>
 *
 * @throws {@link InspectorServiceException}
 * <p>Base exception class for all service exceptions from Inspector service.</p>
 *
 * @example Describe resource groups
 * ```javascript
 * // Describes the resource groups that are specified by the ARNs of the resource groups.
 * const input = {
 *   "resourceGroupArns": [
 *     "arn:aws:inspector:us-west-2:123456789012:resourcegroup/0-PyGXopAI"
 *   ]
 * };
 * const command = new DescribeResourceGroupsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "failedItems": {},
 *   "resourceGroups": [
 *     {
 *       "arn": "arn:aws:inspector:us-west-2:123456789012:resourcegroup/0-PyGXopAI",
 *       "createdAt": "1458074191.098",
 *       "tags": [
 *         {
 *           "key": "Name",
 *           "value": "example"
 *         }
 *       ]
 *     }
 *   ]
 * }
 * *\/
 * // example id: describe-resource-groups-1481065787743
 * ```
 *
 */
export class DescribeResourceGroupsCommand extends $Command<
  DescribeResourceGroupsCommandInput,
  DescribeResourceGroupsCommandOutput,
  InspectorClientResolvedConfig
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
  constructor(readonly input: DescribeResourceGroupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: InspectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeResourceGroupsCommandInput, DescribeResourceGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeResourceGroupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InspectorClient";
    const commandName = "DescribeResourceGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "InspectorService",
        operation: "DescribeResourceGroups",
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
  private serialize(input: DescribeResourceGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeResourceGroupsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeResourceGroupsCommandOutput> {
    return de_DescribeResourceGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
