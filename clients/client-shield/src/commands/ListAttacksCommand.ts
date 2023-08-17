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

import { ListAttacksRequest, ListAttacksResponse } from "../models/models_0";
import { de_ListAttacksCommand, se_ListAttacksCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAttacksCommand}.
 */
export interface ListAttacksCommandInput extends ListAttacksRequest {}
/**
 * @public
 *
 * The output of {@link ListAttacksCommand}.
 */
export interface ListAttacksCommandOutput extends ListAttacksResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns all ongoing DDoS attacks or all DDoS attacks during a specified time
 *          period.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, ListAttacksCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, ListAttacksCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const input = { // ListAttacksRequest
 *   ResourceArns: [ // ResourceArnFilterList
 *     "STRING_VALUE",
 *   ],
 *   StartTime: { // TimeRange
 *     FromInclusive: new Date("TIMESTAMP"),
 *     ToExclusive: new Date("TIMESTAMP"),
 *   },
 *   EndTime: {
 *     FromInclusive: new Date("TIMESTAMP"),
 *     ToExclusive: new Date("TIMESTAMP"),
 *   },
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListAttacksCommand(input);
 * const response = await client.send(command);
 * // { // ListAttacksResponse
 * //   AttackSummaries: [ // AttackSummaries
 * //     { // AttackSummary
 * //       AttackId: "STRING_VALUE",
 * //       ResourceArn: "STRING_VALUE",
 * //       StartTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //       AttackVectors: [ // AttackVectorDescriptionList
 * //         { // AttackVectorDescription
 * //           VectorType: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAttacksCommandInput - {@link ListAttacksCommandInput}
 * @returns {@link ListAttacksCommandOutput}
 * @see {@link ListAttacksCommandInput} for command's `input` shape.
 * @see {@link ListAttacksCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for ShieldClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>Exception that indicates that a problem occurred with the service infrastructure. You can retry the request.</p>
 *
 * @throws {@link InvalidOperationException} (client fault)
 *  <p>Exception that indicates that the operation would not cause any change to occur.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Exception that indicates that the parameters passed to the API are invalid. If available, this exception includes details in additional properties. </p>
 *
 * @throws {@link ShieldServiceException}
 * <p>Base exception class for all service exceptions from Shield service.</p>
 *
 */
export class ListAttacksCommand extends $Command<
  ListAttacksCommandInput,
  ListAttacksCommandOutput,
  ShieldClientResolvedConfig
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
  constructor(readonly input: ListAttacksCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ShieldClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAttacksCommandInput, ListAttacksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListAttacksCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ShieldClient";
    const commandName = "ListAttacksCommand";
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
  private serialize(input: ListAttacksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListAttacksCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAttacksCommandOutput> {
    return de_ListAttacksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
