// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListSecurityProfilesRequest, ListSecurityProfilesResponse } from "../models/models_1";
import {
  deserializeAws_restJson1ListSecurityProfilesCommand,
  serializeAws_restJson1ListSecurityProfilesCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link ListSecurityProfilesCommand}.
 */
export interface ListSecurityProfilesCommandInput extends ListSecurityProfilesRequest {}
/**
 * @public
 *
 * The output of {@link ListSecurityProfilesCommand}.
 */
export interface ListSecurityProfilesCommandOutput extends ListSecurityProfilesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the Device Defender security profiles
 *       you've
 *       created. You can filter security profiles by dimension or custom metric.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListSecurityProfiles</a> action.</p>
 *          <note>
 *             <p>
 *                <code>dimensionName</code> and <code>metricName</code> cannot be used in the same request.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListSecurityProfilesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListSecurityProfilesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // ListSecurityProfilesRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   dimensionName: "STRING_VALUE",
 *   metricName: "STRING_VALUE",
 * };
 * const command = new ListSecurityProfilesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListSecurityProfilesCommandInput - {@link ListSecurityProfilesCommandInput}
 * @returns {@link ListSecurityProfilesCommandOutput}
 * @see {@link ListSecurityProfilesCommandInput} for command's `input` shape.
 * @see {@link ListSecurityProfilesCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 *
 */
export class ListSecurityProfilesCommand extends $Command<
  ListSecurityProfilesCommandInput,
  ListSecurityProfilesCommandOutput,
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
  constructor(readonly input: ListSecurityProfilesCommandInput) {
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
  ): Handler<ListSecurityProfilesCommandInput, ListSecurityProfilesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSecurityProfilesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ListSecurityProfilesCommand";
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
  private serialize(input: ListSecurityProfilesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListSecurityProfilesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSecurityProfilesCommandOutput> {
    return deserializeAws_restJson1ListSecurityProfilesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
