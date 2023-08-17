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

import { FinspaceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceClient";
import { ListKxUsersRequest, ListKxUsersResponse } from "../models/models_0";
import { de_ListKxUsersCommand, se_ListKxUsersCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListKxUsersCommand}.
 */
export interface ListKxUsersCommandInput extends ListKxUsersRequest {}
/**
 * @public
 *
 * The output of {@link ListKxUsersCommand}.
 */
export interface ListKxUsersCommandOutput extends ListKxUsersResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists all the users in a kdb environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceClient, ListKxUsersCommand } from "@aws-sdk/client-finspace"; // ES Modules import
 * // const { FinspaceClient, ListKxUsersCommand } = require("@aws-sdk/client-finspace"); // CommonJS import
 * const client = new FinspaceClient(config);
 * const input = { // ListKxUsersRequest
 *   environmentId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListKxUsersCommand(input);
 * const response = await client.send(command);
 * // { // ListKxUsersResponse
 * //   users: [ // KxUserList
 * //     { // KxUser
 * //       userArn: "STRING_VALUE",
 * //       userName: "STRING_VALUE",
 * //       iamRole: "STRING_VALUE",
 * //       createTimestamp: new Date("TIMESTAMP"),
 * //       updateTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListKxUsersCommandInput - {@link ListKxUsersCommandInput}
 * @returns {@link ListKxUsersCommandOutput}
 * @see {@link ListKxUsersCommandInput} for command's `input` shape.
 * @see {@link ListKxUsersCommandOutput} for command's `response` shape.
 * @see {@link FinspaceClientResolvedConfig | config} for FinspaceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *          failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link FinspaceServiceException}
 * <p>Base exception class for all service exceptions from Finspace service.</p>
 *
 */
export class ListKxUsersCommand extends $Command<
  ListKxUsersCommandInput,
  ListKxUsersCommandOutput,
  FinspaceClientResolvedConfig
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
  constructor(readonly input: ListKxUsersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FinspaceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListKxUsersCommandInput, ListKxUsersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListKxUsersCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FinspaceClient";
    const commandName = "ListKxUsersCommand";
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
  private serialize(input: ListKxUsersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListKxUsersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListKxUsersCommandOutput> {
    return de_ListKxUsersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
