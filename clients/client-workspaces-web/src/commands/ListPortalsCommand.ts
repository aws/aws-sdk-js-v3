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

import { ListPortalsRequest, ListPortalsResponse, ListPortalsResponseFilterSensitiveLog } from "../models/models_0";
import { de_ListPortalsCommand, se_ListPortalsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListPortalsCommand}.
 */
export interface ListPortalsCommandInput extends ListPortalsRequest {}
/**
 * @public
 *
 * The output of {@link ListPortalsCommand}.
 */
export interface ListPortalsCommandOutput extends ListPortalsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a list or web portals.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, ListPortalsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, ListPortalsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * const client = new WorkSpacesWebClient(config);
 * const input = { // ListPortalsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListPortalsCommand(input);
 * const response = await client.send(command);
 * // { // ListPortalsResponse
 * //   portals: [ // PortalList
 * //     { // PortalSummary
 * //       portalArn: "STRING_VALUE", // required
 * //       rendererType: "STRING_VALUE",
 * //       browserType: "STRING_VALUE",
 * //       portalStatus: "STRING_VALUE",
 * //       portalEndpoint: "STRING_VALUE",
 * //       displayName: "STRING_VALUE",
 * //       creationDate: new Date("TIMESTAMP"),
 * //       browserSettingsArn: "STRING_VALUE",
 * //       userSettingsArn: "STRING_VALUE",
 * //       networkSettingsArn: "STRING_VALUE",
 * //       trustStoreArn: "STRING_VALUE",
 * //       userAccessLoggingSettingsArn: "STRING_VALUE",
 * //       authenticationType: "STRING_VALUE",
 * //       ipAccessSettingsArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPortalsCommandInput - {@link ListPortalsCommandInput}
 * @returns {@link ListPortalsCommandOutput}
 * @see {@link ListPortalsCommandInput} for command's `input` shape.
 * @see {@link ListPortalsCommandOutput} for command's `response` shape.
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
export class ListPortalsCommand extends $Command<
  ListPortalsCommandInput,
  ListPortalsCommandOutput,
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
  constructor(readonly input: ListPortalsCommandInput) {
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
  ): Handler<ListPortalsCommandInput, ListPortalsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListPortalsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesWebClient";
    const commandName = "ListPortalsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: ListPortalsResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSErmineControlPlaneService",
        operation: "ListPortals",
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
  private serialize(input: ListPortalsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListPortalsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPortalsCommandOutput> {
    return de_ListPortalsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
