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

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { ListEndpointsRequest, ListEndpointsResponse } from "../models/models_0";
import { de_ListEndpointsCommand, se_ListEndpointsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListEndpointsCommand}.
 */
export interface ListEndpointsCommandInput extends ListEndpointsRequest {}
/**
 * @public
 *
 * The output of {@link ListEndpointsCommand}.
 */
export interface ListEndpointsCommandOutput extends ListEndpointsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets a list of all existing endpoints that you've created.
 *       For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, ListEndpointsCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, ListEndpointsCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const input = { // ListEndpointsRequest
 *   Filter: { // EndpointFilter
 *     ModelArn: "STRING_VALUE",
 *     Status: "CREATING" || "DELETING" || "FAILED" || "IN_SERVICE" || "UPDATING",
 *     CreationTimeBefore: new Date("TIMESTAMP"),
 *     CreationTimeAfter: new Date("TIMESTAMP"),
 *   },
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListEndpointsCommand(input);
 * const response = await client.send(command);
 * // { // ListEndpointsResponse
 * //   EndpointPropertiesList: [ // EndpointPropertiesList
 * //     { // EndpointProperties
 * //       EndpointArn: "STRING_VALUE",
 * //       Status: "CREATING" || "DELETING" || "FAILED" || "IN_SERVICE" || "UPDATING",
 * //       Message: "STRING_VALUE",
 * //       ModelArn: "STRING_VALUE",
 * //       DesiredModelArn: "STRING_VALUE",
 * //       DesiredInferenceUnits: Number("int"),
 * //       CurrentInferenceUnits: Number("int"),
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       DataAccessRoleArn: "STRING_VALUE",
 * //       DesiredDataAccessRoleArn: "STRING_VALUE",
 * //       FlywheelArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEndpointsCommandInput - {@link ListEndpointsCommandInput}
 * @returns {@link ListEndpointsCommandOutput}
 * @see {@link ListEndpointsCommandInput} for command's `input` shape.
 * @see {@link ListEndpointsCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ComprehendServiceException}
 * <p>Base exception class for all service exceptions from Comprehend service.</p>
 *
 */
export class ListEndpointsCommand extends $Command<
  ListEndpointsCommandInput,
  ListEndpointsCommandOutput,
  ComprehendClientResolvedConfig
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
  constructor(readonly input: ListEndpointsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComprehendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListEndpointsCommandInput, ListEndpointsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListEndpointsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "ListEndpointsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Comprehend_20171127",
        operation: "ListEndpoints",
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
  private serialize(input: ListEndpointsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListEndpointsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListEndpointsCommandOutput> {
    return de_ListEndpointsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
