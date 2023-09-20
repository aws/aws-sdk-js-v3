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

import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { ListContactsRequest, ListContactsResponse } from "../models/models_0";
import { de_ListContactsCommand, se_ListContactsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListContactsCommand}.
 */
export interface ListContactsCommandInput extends ListContactsRequest {}
/**
 * @public
 *
 * The output of {@link ListContactsCommand}.
 */
export interface ListContactsCommandOutput extends ListContactsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of contacts.</p>
 *          <p>If <code>statusList</code> contains AVAILABLE, the request must include
 *       <code>groundStation</code>, <code>missionprofileArn</code>, and <code>satelliteArn</code>.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, ListContactsCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, ListContactsCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const input = { // ListContactsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   statusList: [ // StatusList // required
 *     "STRING_VALUE",
 *   ],
 *   startTime: new Date("TIMESTAMP"), // required
 *   endTime: new Date("TIMESTAMP"), // required
 *   groundStation: "STRING_VALUE",
 *   satelliteArn: "STRING_VALUE",
 *   missionProfileArn: "STRING_VALUE",
 * };
 * const command = new ListContactsCommand(input);
 * const response = await client.send(command);
 * // { // ListContactsResponse
 * //   nextToken: "STRING_VALUE",
 * //   contactList: [ // ContactList
 * //     { // ContactData
 * //       contactId: "STRING_VALUE",
 * //       missionProfileArn: "STRING_VALUE",
 * //       satelliteArn: "STRING_VALUE",
 * //       startTime: new Date("TIMESTAMP"),
 * //       endTime: new Date("TIMESTAMP"),
 * //       prePassStartTime: new Date("TIMESTAMP"),
 * //       postPassEndTime: new Date("TIMESTAMP"),
 * //       groundStation: "STRING_VALUE",
 * //       contactStatus: "STRING_VALUE",
 * //       errorMessage: "STRING_VALUE",
 * //       maximumElevation: { // Elevation
 * //         value: Number("double"), // required
 * //         unit: "STRING_VALUE", // required
 * //       },
 * //       region: "STRING_VALUE",
 * //       tags: { // TagsMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListContactsCommandInput - {@link ListContactsCommandInput}
 * @returns {@link ListContactsCommandOutput}
 * @see {@link ListContactsCommandInput} for command's `input` shape.
 * @see {@link ListContactsCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for GroundStationClient's `config` shape.
 *
 * @throws {@link DependencyException} (server fault)
 *  <p>Dependency encountered an error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource was not found.</p>
 *
 * @throws {@link GroundStationServiceException}
 * <p>Base exception class for all service exceptions from GroundStation service.</p>
 *
 */
export class ListContactsCommand extends $Command<
  ListContactsCommandInput,
  ListContactsCommandOutput,
  GroundStationClientResolvedConfig
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
  constructor(readonly input: ListContactsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GroundStationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListContactsCommandInput, ListContactsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListContactsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GroundStationClient";
    const commandName = "ListContactsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "GroundStation",
        operation: "ListContacts",
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
  private serialize(input: ListContactsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListContactsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListContactsCommandOutput> {
    return de_ListContactsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
