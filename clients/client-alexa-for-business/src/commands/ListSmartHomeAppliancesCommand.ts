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

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { ListSmartHomeAppliancesRequest, ListSmartHomeAppliancesResponse } from "../models/models_0";
import { de_ListSmartHomeAppliancesCommand, se_ListSmartHomeAppliancesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListSmartHomeAppliancesCommand}.
 */
export interface ListSmartHomeAppliancesCommandInput extends ListSmartHomeAppliancesRequest {}
/**
 * @public
 *
 * The output of {@link ListSmartHomeAppliancesCommand}.
 */
export interface ListSmartHomeAppliancesCommandOutput extends ListSmartHomeAppliancesResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Lists all of the smart home appliances associated with a room.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, ListSmartHomeAppliancesCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, ListSmartHomeAppliancesCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // ListSmartHomeAppliancesRequest
 *   RoomArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListSmartHomeAppliancesCommand(input);
 * const response = await client.send(command);
 * // { // ListSmartHomeAppliancesResponse
 * //   SmartHomeAppliances: [ // SmartHomeApplianceList
 * //     { // SmartHomeAppliance
 * //       FriendlyName: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       ManufacturerName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSmartHomeAppliancesCommandInput - {@link ListSmartHomeAppliancesCommandInput}
 * @returns {@link ListSmartHomeAppliancesCommandOutput}
 * @see {@link ListSmartHomeAppliancesCommandInput} for command's `input` shape.
 * @see {@link ListSmartHomeAppliancesCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource is not found.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class ListSmartHomeAppliancesCommand extends $Command<
  ListSmartHomeAppliancesCommandInput,
  ListSmartHomeAppliancesCommandOutput,
  AlexaForBusinessClientResolvedConfig
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
  constructor(readonly input: ListSmartHomeAppliancesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSmartHomeAppliancesCommandInput, ListSmartHomeAppliancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSmartHomeAppliancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "ListSmartHomeAppliancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AlexaForBusiness",
        operation: "ListSmartHomeAppliances",
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
  private serialize(input: ListSmartHomeAppliancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListSmartHomeAppliancesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSmartHomeAppliancesCommandOutput> {
    return de_ListSmartHomeAppliancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
