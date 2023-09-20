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

import {
  ListReplacePermissionAssociationsWorkRequest,
  ListReplacePermissionAssociationsWorkResponse,
} from "../models/models_0";
import {
  de_ListReplacePermissionAssociationsWorkCommand,
  se_ListReplacePermissionAssociationsWorkCommand,
} from "../protocols/Aws_restJson1";
import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListReplacePermissionAssociationsWorkCommand}.
 */
export interface ListReplacePermissionAssociationsWorkCommandInput
  extends ListReplacePermissionAssociationsWorkRequest {}
/**
 * @public
 *
 * The output of {@link ListReplacePermissionAssociationsWorkCommand}.
 */
export interface ListReplacePermissionAssociationsWorkCommandOutput
  extends ListReplacePermissionAssociationsWorkResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the current status of the asynchronous tasks performed by RAM when you
 *             perform the <a>ReplacePermissionAssociationsWork</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, ListReplacePermissionAssociationsWorkCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, ListReplacePermissionAssociationsWorkCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const input = { // ListReplacePermissionAssociationsWorkRequest
 *   workIds: [ // ReplacePermissionAssociationsWorkIdList
 *     "STRING_VALUE",
 *   ],
 *   status: "IN_PROGRESS" || "COMPLETED" || "FAILED",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListReplacePermissionAssociationsWorkCommand(input);
 * const response = await client.send(command);
 * // { // ListReplacePermissionAssociationsWorkResponse
 * //   replacePermissionAssociationsWorks: [ // ReplacePermissionAssociationsWorkList
 * //     { // ReplacePermissionAssociationsWork
 * //       id: "STRING_VALUE",
 * //       fromPermissionArn: "STRING_VALUE",
 * //       fromPermissionVersion: "STRING_VALUE",
 * //       toPermissionArn: "STRING_VALUE",
 * //       toPermissionVersion: "STRING_VALUE",
 * //       status: "IN_PROGRESS" || "COMPLETED" || "FAILED",
 * //       statusMessage: "STRING_VALUE",
 * //       creationTime: new Date("TIMESTAMP"),
 * //       lastUpdatedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListReplacePermissionAssociationsWorkCommandInput - {@link ListReplacePermissionAssociationsWorkCommandInput}
 * @returns {@link ListReplacePermissionAssociationsWorkCommandOutput}
 * @see {@link ListReplacePermissionAssociationsWorkCommandInput} for command's `input` shape.
 * @see {@link ListReplacePermissionAssociationsWorkCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for RAMClient's `config` shape.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The operation failed because the specified value for <code>NextToken</code> isn't
 *             valid. You must specify a value you received in the <code>NextToken</code> response of a
 *             previous call to this operation.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The operation failed because a parameter you specified isn't valid.</p>
 *
 * @throws {@link ServerInternalException} (server fault)
 *  <p>The operation failed because the service could not respond to the request due to an
 *             internal problem. Try again later.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The operation failed because the service isn't available. Try again later.</p>
 *
 * @throws {@link RAMServiceException}
 * <p>Base exception class for all service exceptions from RAM service.</p>
 *
 */
export class ListReplacePermissionAssociationsWorkCommand extends $Command<
  ListReplacePermissionAssociationsWorkCommandInput,
  ListReplacePermissionAssociationsWorkCommandOutput,
  RAMClientResolvedConfig
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
  constructor(readonly input: ListReplacePermissionAssociationsWorkCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListReplacePermissionAssociationsWorkCommandInput, ListReplacePermissionAssociationsWorkCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListReplacePermissionAssociationsWorkCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RAMClient";
    const commandName = "ListReplacePermissionAssociationsWorkCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonResourceSharing",
        operation: "ListReplacePermissionAssociationsWork",
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
  private serialize(
    input: ListReplacePermissionAssociationsWorkCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListReplacePermissionAssociationsWorkCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListReplacePermissionAssociationsWorkCommandOutput> {
    return de_ListReplacePermissionAssociationsWorkCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
