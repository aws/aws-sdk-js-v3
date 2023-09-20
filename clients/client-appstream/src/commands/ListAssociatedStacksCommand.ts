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

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { ListAssociatedStacksRequest, ListAssociatedStacksResult } from "../models/models_0";
import { de_ListAssociatedStacksCommand, se_ListAssociatedStacksCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAssociatedStacksCommand}.
 */
export interface ListAssociatedStacksCommandInput extends ListAssociatedStacksRequest {}
/**
 * @public
 *
 * The output of {@link ListAssociatedStacksCommand}.
 */
export interface ListAssociatedStacksCommandOutput extends ListAssociatedStacksResult, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the name of the stack with which the specified fleet is associated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, ListAssociatedStacksCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, ListAssociatedStacksCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const input = { // ListAssociatedStacksRequest
 *   FleetName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListAssociatedStacksCommand(input);
 * const response = await client.send(command);
 * // { // ListAssociatedStacksResult
 * //   Names: [ // StringList
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAssociatedStacksCommandInput - {@link ListAssociatedStacksCommandInput}
 * @returns {@link ListAssociatedStacksCommandOutput}
 * @see {@link ListAssociatedStacksCommandInput} for command's `input` shape.
 * @see {@link ListAssociatedStacksCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link AppStreamServiceException}
 * <p>Base exception class for all service exceptions from AppStream service.</p>
 *
 */
export class ListAssociatedStacksCommand extends $Command<
  ListAssociatedStacksCommandInput,
  ListAssociatedStacksCommandOutput,
  AppStreamClientResolvedConfig
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
  constructor(readonly input: ListAssociatedStacksCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppStreamClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAssociatedStacksCommandInput, ListAssociatedStacksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAssociatedStacksCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppStreamClient";
    const commandName = "ListAssociatedStacksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "PhotonAdminProxyService",
        operation: "ListAssociatedStacks",
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
  private serialize(input: ListAssociatedStacksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListAssociatedStacksCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAssociatedStacksCommandOutput> {
    return de_ListAssociatedStacksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
