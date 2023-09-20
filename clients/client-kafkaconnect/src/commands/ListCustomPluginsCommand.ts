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

import { KafkaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaConnectClient";
import { ListCustomPluginsRequest, ListCustomPluginsResponse } from "../models/models_0";
import { de_ListCustomPluginsCommand, se_ListCustomPluginsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListCustomPluginsCommand}.
 */
export interface ListCustomPluginsCommandInput extends ListCustomPluginsRequest {}
/**
 * @public
 *
 * The output of {@link ListCustomPluginsCommand}.
 */
export interface ListCustomPluginsCommandOutput extends ListCustomPluginsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of all of the custom plugins in this account and Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaConnectClient, ListCustomPluginsCommand } from "@aws-sdk/client-kafkaconnect"; // ES Modules import
 * // const { KafkaConnectClient, ListCustomPluginsCommand } = require("@aws-sdk/client-kafkaconnect"); // CommonJS import
 * const client = new KafkaConnectClient(config);
 * const input = { // ListCustomPluginsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListCustomPluginsCommand(input);
 * const response = await client.send(command);
 * // { // ListCustomPluginsResponse
 * //   customPlugins: [ // __listOfCustomPluginSummary
 * //     { // CustomPluginSummary
 * //       creationTime: new Date("TIMESTAMP"),
 * //       customPluginArn: "STRING_VALUE",
 * //       customPluginState: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       latestRevision: { // CustomPluginRevisionSummary
 * //         contentType: "STRING_VALUE",
 * //         creationTime: new Date("TIMESTAMP"),
 * //         description: "STRING_VALUE",
 * //         fileDescription: { // CustomPluginFileDescription
 * //           fileMd5: "STRING_VALUE",
 * //           fileSize: Number("long"),
 * //         },
 * //         location: { // CustomPluginLocationDescription
 * //           s3Location: { // S3LocationDescription
 * //             bucketArn: "STRING_VALUE",
 * //             fileKey: "STRING_VALUE",
 * //             objectVersion: "STRING_VALUE",
 * //           },
 * //         },
 * //         revision: Number("long"),
 * //       },
 * //       name: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCustomPluginsCommandInput - {@link ListCustomPluginsCommandInput}
 * @returns {@link ListCustomPluginsCommandOutput}
 * @see {@link ListCustomPluginsCommandInput} for command's `input` shape.
 * @see {@link ListCustomPluginsCommandOutput} for command's `response` shape.
 * @see {@link KafkaConnectClientResolvedConfig | config} for KafkaConnectClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>HTTP Status Code 400: Bad request due to incorrect input. Correct your request and then
 *          retry it.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>HTTP Status Code 403: Access forbidden. Correct your credentials and then retry your
 *          request.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>HTTP Status Code 500: Unexpected internal server error. Retrying your request might
 *          resolve the issue.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>HTTP Status Code 404: Resource not found due to incorrect input. Correct your request
 *          and then retry it.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>HTTP Status Code 503: Service Unavailable. Retrying your request in some time might
 *          resolve the issue.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>HTTP Status Code 429: Limit exceeded. Resource limit reached.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>HTTP Status Code 401: Unauthorized request. The provided credentials couldn't be
 *          validated.</p>
 *
 * @throws {@link KafkaConnectServiceException}
 * <p>Base exception class for all service exceptions from KafkaConnect service.</p>
 *
 */
export class ListCustomPluginsCommand extends $Command<
  ListCustomPluginsCommandInput,
  ListCustomPluginsCommandOutput,
  KafkaConnectClientResolvedConfig
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
  constructor(readonly input: ListCustomPluginsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KafkaConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListCustomPluginsCommandInput, ListCustomPluginsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListCustomPluginsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KafkaConnectClient";
    const commandName = "ListCustomPluginsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "KafkaConnect",
        operation: "ListCustomPlugins",
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
  private serialize(input: ListCustomPluginsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListCustomPluginsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListCustomPluginsCommandOutput> {
    return de_ListCustomPluginsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
