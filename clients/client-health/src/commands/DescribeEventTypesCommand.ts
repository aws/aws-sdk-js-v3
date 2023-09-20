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

import { HealthClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthClient";
import { DescribeEventTypesRequest, DescribeEventTypesResponse } from "../models/models_0";
import { de_DescribeEventTypesCommand, se_DescribeEventTypesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeEventTypesCommand}.
 */
export interface DescribeEventTypesCommandInput extends DescribeEventTypesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEventTypesCommand}.
 */
export interface DescribeEventTypesCommandOutput extends DescribeEventTypesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns the event types that meet the specified filter criteria. You can use this API
 *          operation to find information about the Health event, such as the category, Amazon Web Service, and event code. The metadata for each event appears in the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EventType.html">EventType</a> object. </p>
 *          <p>If you don't specify a filter criteria, the API operation returns all event types, in no
 *          particular order. </p>
 *          <note>
 *             <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the next request to return more results.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthClient, DescribeEventTypesCommand } from "@aws-sdk/client-health"; // ES Modules import
 * // const { HealthClient, DescribeEventTypesCommand } = require("@aws-sdk/client-health"); // CommonJS import
 * const client = new HealthClient(config);
 * const input = { // DescribeEventTypesRequest
 *   filter: { // EventTypeFilter
 *     eventTypeCodes: [ // EventTypeCodeList
 *       "STRING_VALUE",
 *     ],
 *     services: [ // serviceList
 *       "STRING_VALUE",
 *     ],
 *     eventTypeCategories: [ // EventTypeCategoryList
 *       "issue" || "accountNotification" || "scheduledChange" || "investigation",
 *     ],
 *   },
 *   locale: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new DescribeEventTypesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEventTypesResponse
 * //   eventTypes: [ // EventTypeList
 * //     { // EventType
 * //       service: "STRING_VALUE",
 * //       code: "STRING_VALUE",
 * //       category: "issue" || "accountNotification" || "scheduledChange" || "investigation",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeEventTypesCommandInput - {@link DescribeEventTypesCommandInput}
 * @returns {@link DescribeEventTypesCommandOutput}
 * @see {@link DescribeEventTypesCommandInput} for command's `input` shape.
 * @see {@link DescribeEventTypesCommandOutput} for command's `response` shape.
 * @see {@link HealthClientResolvedConfig | config} for HealthClient's `config` shape.
 *
 * @throws {@link InvalidPaginationToken} (client fault)
 *  <p>The specified pagination token (<code>nextToken</code>) is not valid.</p>
 *
 * @throws {@link UnsupportedLocale} (client fault)
 *  <p>The specified locale is not supported.</p>
 *
 * @throws {@link HealthServiceException}
 * <p>Base exception class for all service exceptions from Health service.</p>
 *
 */
export class DescribeEventTypesCommand extends $Command<
  DescribeEventTypesCommandInput,
  DescribeEventTypesCommandOutput,
  HealthClientResolvedConfig
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
  constructor(readonly input: DescribeEventTypesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: HealthClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeEventTypesCommandInput, DescribeEventTypesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeEventTypesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HealthClient";
    const commandName = "DescribeEventTypesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSHealth_20160804",
        operation: "DescribeEventTypes",
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
  private serialize(input: DescribeEventTypesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeEventTypesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeEventTypesCommandOutput> {
    return de_DescribeEventTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
