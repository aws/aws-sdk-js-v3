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

import { ListUserAccessLoggingSettingsRequest, ListUserAccessLoggingSettingsResponse } from "../models/models_0";
import {
  de_ListUserAccessLoggingSettingsCommand,
  se_ListUserAccessLoggingSettingsCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListUserAccessLoggingSettingsCommand}.
 */
export interface ListUserAccessLoggingSettingsCommandInput extends ListUserAccessLoggingSettingsRequest {}
/**
 * @public
 *
 * The output of {@link ListUserAccessLoggingSettingsCommand}.
 */
export interface ListUserAccessLoggingSettingsCommandOutput
  extends ListUserAccessLoggingSettingsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a list of user access logging settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, ListUserAccessLoggingSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, ListUserAccessLoggingSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * const client = new WorkSpacesWebClient(config);
 * const input = { // ListUserAccessLoggingSettingsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListUserAccessLoggingSettingsCommand(input);
 * const response = await client.send(command);
 * // { // ListUserAccessLoggingSettingsResponse
 * //   userAccessLoggingSettings: [ // UserAccessLoggingSettingsList
 * //     { // UserAccessLoggingSettingsSummary
 * //       userAccessLoggingSettingsArn: "STRING_VALUE",
 * //       kinesisStreamArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListUserAccessLoggingSettingsCommandInput - {@link ListUserAccessLoggingSettingsCommandInput}
 * @returns {@link ListUserAccessLoggingSettingsCommandOutput}
 * @see {@link ListUserAccessLoggingSettingsCommandInput} for command's `input` shape.
 * @see {@link ListUserAccessLoggingSettingsCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesWebClientResolvedConfig | config} for WorkSpacesWebClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is an internal server error.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>There is a throttling error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There is a validation error.</p>
 *
 * @throws {@link WorkSpacesWebServiceException}
 * <p>Base exception class for all service exceptions from WorkSpacesWeb service.</p>
 *
 */
export class ListUserAccessLoggingSettingsCommand extends $Command<
  ListUserAccessLoggingSettingsCommandInput,
  ListUserAccessLoggingSettingsCommandOutput,
  WorkSpacesWebClientResolvedConfig
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
  constructor(readonly input: ListUserAccessLoggingSettingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkSpacesWebClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListUserAccessLoggingSettingsCommandInput, ListUserAccessLoggingSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListUserAccessLoggingSettingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesWebClient";
    const commandName = "ListUserAccessLoggingSettingsCommand";
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
  private serialize(input: ListUserAccessLoggingSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListUserAccessLoggingSettingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListUserAccessLoggingSettingsCommandOutput> {
    return de_ListUserAccessLoggingSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
