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

import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { DescribeConnectionRequest, DescribeConnectionResponse } from "../models/models_0";
import { de_DescribeConnectionCommand, se_DescribeConnectionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeConnectionCommand}.
 */
export interface DescribeConnectionCommandInput extends DescribeConnectionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeConnectionCommand}.
 */
export interface DescribeConnectionCommandOutput extends DescribeConnectionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves details about a connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, DescribeConnectionCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, DescribeConnectionCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * const client = new CloudWatchEventsClient(config);
 * const input = { // DescribeConnectionRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DescribeConnectionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeConnectionResponse
 * //   ConnectionArn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   ConnectionState: "STRING_VALUE",
 * //   StateReason: "STRING_VALUE",
 * //   AuthorizationType: "STRING_VALUE",
 * //   SecretArn: "STRING_VALUE",
 * //   AuthParameters: { // ConnectionAuthResponseParameters
 * //     BasicAuthParameters: { // ConnectionBasicAuthResponseParameters
 * //       Username: "STRING_VALUE",
 * //     },
 * //     OAuthParameters: { // ConnectionOAuthResponseParameters
 * //       ClientParameters: { // ConnectionOAuthClientResponseParameters
 * //         ClientID: "STRING_VALUE",
 * //       },
 * //       AuthorizationEndpoint: "STRING_VALUE",
 * //       HttpMethod: "STRING_VALUE",
 * //       OAuthHttpParameters: { // ConnectionHttpParameters
 * //         HeaderParameters: [ // ConnectionHeaderParametersList
 * //           { // ConnectionHeaderParameter
 * //             Key: "STRING_VALUE",
 * //             Value: "STRING_VALUE",
 * //             IsValueSecret: true || false,
 * //           },
 * //         ],
 * //         QueryStringParameters: [ // ConnectionQueryStringParametersList
 * //           { // ConnectionQueryStringParameter
 * //             Key: "STRING_VALUE",
 * //             Value: "STRING_VALUE",
 * //             IsValueSecret: true || false,
 * //           },
 * //         ],
 * //         BodyParameters: [ // ConnectionBodyParametersList
 * //           { // ConnectionBodyParameter
 * //             Key: "STRING_VALUE",
 * //             Value: "STRING_VALUE",
 * //             IsValueSecret: true || false,
 * //           },
 * //         ],
 * //       },
 * //     },
 * //     ApiKeyAuthParameters: { // ConnectionApiKeyAuthResponseParameters
 * //       ApiKeyName: "STRING_VALUE",
 * //     },
 * //     InvocationHttpParameters: {
 * //       HeaderParameters: [
 * //         {
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //           IsValueSecret: true || false,
 * //         },
 * //       ],
 * //       QueryStringParameters: [
 * //         {
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //           IsValueSecret: true || false,
 * //         },
 * //       ],
 * //       BodyParameters: [
 * //         {
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //           IsValueSecret: true || false,
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * //   LastAuthorizedTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeConnectionCommandInput - {@link DescribeConnectionCommandInput}
 * @returns {@link DescribeConnectionCommandOutput}
 * @see {@link DescribeConnectionCommandInput} for command's `input` shape.
 * @see {@link DescribeConnectionCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for CloudWatchEventsClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An entity that you specified does not exist.</p>
 *
 * @throws {@link CloudWatchEventsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchEvents service.</p>
 *
 */
export class DescribeConnectionCommand extends $Command<
  DescribeConnectionCommandInput,
  DescribeConnectionCommandOutput,
  CloudWatchEventsClientResolvedConfig
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
  constructor(readonly input: DescribeConnectionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchEventsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeConnectionCommandInput, DescribeConnectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeConnectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchEventsClient";
    const commandName = "DescribeConnectionCommand";
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
  private serialize(input: DescribeConnectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeConnectionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeConnectionCommandOutput> {
    return de_DescribeConnectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
