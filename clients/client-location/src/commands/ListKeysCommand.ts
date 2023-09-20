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

import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { ListKeysRequest, ListKeysResponse } from "../models/models_0";
import { de_ListKeysCommand, se_ListKeysCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListKeysCommand}.
 */
export interface ListKeysCommandInput extends ListKeysRequest {}
/**
 * @public
 *
 * The output of {@link ListKeysCommand}.
 */
export interface ListKeysCommandOutput extends ListKeysResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists API key resources in your Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, ListKeysCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, ListKeysCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const input = { // ListKeysRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Filter: { // ApiKeyFilter
 *     KeyStatus: "STRING_VALUE",
 *   },
 * };
 * const command = new ListKeysCommand(input);
 * const response = await client.send(command);
 * // { // ListKeysResponse
 * //   Entries: [ // ListKeysResponseEntryList // required
 * //     { // ListKeysResponseEntry
 * //       KeyName: "STRING_VALUE", // required
 * //       ExpireTime: new Date("TIMESTAMP"), // required
 * //       Description: "STRING_VALUE",
 * //       Restrictions: { // ApiKeyRestrictions
 * //         AllowActions: [ // ApiKeyActionList // required
 * //           "STRING_VALUE",
 * //         ],
 * //         AllowResources: [ // GeoArnList // required
 * //           "STRING_VALUE",
 * //         ],
 * //         AllowReferers: [ // RefererPatternList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       CreateTime: new Date("TIMESTAMP"), // required
 * //       UpdateTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListKeysCommandInput - {@link ListKeysCommandInput}
 * @returns {@link ListKeysCommandOutput}
 * @see {@link ListKeysCommandInput} for command's `input` shape.
 * @see {@link ListKeysCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because of insufficient access or permissions. Check with an
 *       administrator to verify your permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed to process because of an unknown server error, exception, or failure.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to meet the constraints specified by the AWS service. </p>
 *
 * @throws {@link LocationServiceException}
 * <p>Base exception class for all service exceptions from Location service.</p>
 *
 */
export class ListKeysCommand extends $Command<
  ListKeysCommandInput,
  ListKeysCommandOutput,
  LocationClientResolvedConfig
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
  constructor(readonly input: ListKeysCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LocationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListKeysCommandInput, ListKeysCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListKeysCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LocationClient";
    const commandName = "ListKeysCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "LocationService",
        operation: "ListKeys",
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
  private serialize(input: ListKeysCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListKeysCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListKeysCommandOutput> {
    return de_ListKeysCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
