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

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { SearchIndexRequest, SearchIndexResponse } from "../models/models_2";
import { de_SearchIndexCommand, se_SearchIndexCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SearchIndexCommand}.
 */
export interface SearchIndexCommandInput extends SearchIndexRequest {}
/**
 * @public
 *
 * The output of {@link SearchIndexCommand}.
 */
export interface SearchIndexCommandOutput extends SearchIndexResponse, __MetadataBearer {}

/**
 * @public
 * <p>The query search index.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">SearchIndex</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, SearchIndexCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, SearchIndexCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // SearchIndexRequest
 *   indexName: "STRING_VALUE",
 *   queryString: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   queryVersion: "STRING_VALUE",
 * };
 * const command = new SearchIndexCommand(input);
 * const response = await client.send(command);
 * // { // SearchIndexResponse
 * //   nextToken: "STRING_VALUE",
 * //   things: [ // ThingDocumentList
 * //     { // ThingDocument
 * //       thingName: "STRING_VALUE",
 * //       thingId: "STRING_VALUE",
 * //       thingTypeName: "STRING_VALUE",
 * //       thingGroupNames: [ // ThingGroupNameList
 * //         "STRING_VALUE",
 * //       ],
 * //       attributes: { // Attributes
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       shadow: "STRING_VALUE",
 * //       deviceDefender: "STRING_VALUE",
 * //       connectivity: { // ThingConnectivity
 * //         connected: true || false,
 * //         timestamp: Number("long"),
 * //         disconnectReason: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   thingGroups: [ // ThingGroupDocumentList
 * //     { // ThingGroupDocument
 * //       thingGroupName: "STRING_VALUE",
 * //       thingGroupId: "STRING_VALUE",
 * //       thingGroupDescription: "STRING_VALUE",
 * //       attributes: {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       parentGroupNames: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param SearchIndexCommandInput - {@link SearchIndexCommandInput}
 * @returns {@link SearchIndexCommandOutput}
 * @see {@link SearchIndexCommandInput} for command's `input` shape.
 * @see {@link SearchIndexCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link IndexNotReadyException} (client fault)
 *  <p>The index is not ready.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidQueryException} (client fault)
 *  <p>The query is invalid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 */
export class SearchIndexCommand extends $Command<
  SearchIndexCommandInput,
  SearchIndexCommandOutput,
  IoTClientResolvedConfig
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
  constructor(readonly input: SearchIndexCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SearchIndexCommandInput, SearchIndexCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, SearchIndexCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "SearchIndexCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIotService",
        operation: "SearchIndex",
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
  private serialize(input: SearchIndexCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SearchIndexCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SearchIndexCommandOutput> {
    return de_SearchIndexCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
