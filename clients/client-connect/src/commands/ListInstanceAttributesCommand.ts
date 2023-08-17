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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { ListInstanceAttributesRequest, ListInstanceAttributesResponse } from "../models/models_1";
import { de_ListInstanceAttributesCommand, se_ListInstanceAttributesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListInstanceAttributesCommand}.
 */
export interface ListInstanceAttributesCommandInput extends ListInstanceAttributesRequest {}
/**
 * @public
 *
 * The output of {@link ListInstanceAttributesCommand}.
 */
export interface ListInstanceAttributesCommandOutput extends ListInstanceAttributesResponse, __MetadataBearer {}

/**
 * @public
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Returns a paginated list of all attribute types for the given instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListInstanceAttributesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListInstanceAttributesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // ListInstanceAttributesRequest
 *   InstanceId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListInstanceAttributesCommand(input);
 * const response = await client.send(command);
 * // { // ListInstanceAttributesResponse
 * //   Attributes: [ // AttributesList
 * //     { // Attribute
 * //       AttributeType: "INBOUND_CALLS" || "OUTBOUND_CALLS" || "CONTACTFLOW_LOGS" || "CONTACT_LENS" || "AUTO_RESOLVE_BEST_VOICES" || "USE_CUSTOM_TTS_VOICES" || "EARLY_MEDIA" || "MULTI_PARTY_CONFERENCE" || "HIGH_VOLUME_OUTBOUND" || "ENHANCED_CONTACT_MONITORING",
 * //       Value: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListInstanceAttributesCommandInput - {@link ListInstanceAttributesCommandInput}
 * @returns {@link ListInstanceAttributesCommandOutput}
 * @see {@link ListInstanceAttributesCommandInput} for command's `input` shape.
 * @see {@link ListInstanceAttributesCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 */
export class ListInstanceAttributesCommand extends $Command<
  ListInstanceAttributesCommandInput,
  ListInstanceAttributesCommandOutput,
  ConnectClientResolvedConfig
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
  constructor(readonly input: ListInstanceAttributesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListInstanceAttributesCommandInput, ListInstanceAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListInstanceAttributesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "ListInstanceAttributesCommand";
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
  private serialize(input: ListInstanceAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListInstanceAttributesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListInstanceAttributesCommandOutput> {
    return de_ListInstanceAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
