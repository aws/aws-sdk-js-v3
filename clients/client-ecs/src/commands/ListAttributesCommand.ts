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

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { ListAttributesRequest, ListAttributesResponse } from "../models/models_0";
import { de_ListAttributesCommand, se_ListAttributesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAttributesCommand}.
 */
export interface ListAttributesCommandInput extends ListAttributesRequest {}
/**
 * @public
 *
 * The output of {@link ListAttributesCommand}.
 */
export interface ListAttributesCommandOutput extends ListAttributesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the attributes for Amazon ECS resources within a specified target type and cluster.
 * 			When you specify a target type and cluster, <code>ListAttributes</code> returns a list
 * 			of attribute objects, one for each attribute on each resource. You can filter the list
 * 			of results to a single attribute name to only return results that have that name. You
 * 			can also filter the results by attribute name and value. You can do this, for example,
 * 			to see which container instances in a cluster are running a Linux AMI
 * 				(<code>ecs.os-type=linux</code>). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, ListAttributesCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, ListAttributesCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const input = { // ListAttributesRequest
 *   cluster: "STRING_VALUE",
 *   targetType: "container-instance", // required
 *   attributeName: "STRING_VALUE",
 *   attributeValue: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAttributesCommand(input);
 * const response = await client.send(command);
 * // { // ListAttributesResponse
 * //   attributes: [ // Attributes
 * //     { // Attribute
 * //       name: "STRING_VALUE", // required
 * //       value: "STRING_VALUE",
 * //       targetType: "container-instance",
 * //       targetId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAttributesCommandInput - {@link ListAttributesCommandInput}
 * @returns {@link ListAttributesCommandOutput}
 * @see {@link ListAttributesCommandInput} for command's `input` shape.
 * @see {@link ListAttributesCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @throws {@link ClusterNotFoundException} (client fault)
 *  <p>The specified cluster wasn't found. You can view your available clusters with <a>ListClusters</a>. Amazon ECS clusters are Region specific.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter isn't valid. Review the available parameters for the API
 * 			request.</p>
 *
 * @throws {@link ECSServiceException}
 * <p>Base exception class for all service exceptions from ECS service.</p>
 *
 */
export class ListAttributesCommand extends $Command<
  ListAttributesCommandInput,
  ListAttributesCommandOutput,
  ECSClientResolvedConfig
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
  constructor(readonly input: ListAttributesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAttributesCommandInput, ListAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAttributesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "ListAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2ContainerServiceV20141113",
        operation: "ListAttributes",
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
  private serialize(input: ListAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListAttributesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAttributesCommandOutput> {
    return de_ListAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
