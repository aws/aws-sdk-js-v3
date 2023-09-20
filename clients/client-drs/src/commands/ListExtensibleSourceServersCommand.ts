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

import { DrsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DrsClient";
import {
  ListExtensibleSourceServersRequest,
  ListExtensibleSourceServersResponse,
  ListExtensibleSourceServersResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_ListExtensibleSourceServersCommand,
  se_ListExtensibleSourceServersCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListExtensibleSourceServersCommand}.
 */
export interface ListExtensibleSourceServersCommandInput extends ListExtensibleSourceServersRequest {}
/**
 * @public
 *
 * The output of {@link ListExtensibleSourceServersCommand}.
 */
export interface ListExtensibleSourceServersCommandOutput
  extends ListExtensibleSourceServersResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of source servers on a staging account that are extensible, which means that:
 *             a. The source server is not already extended into this Account.
 *             b. The source server on the Account we’re reading from is not an extension of another source server.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, ListExtensibleSourceServersCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, ListExtensibleSourceServersCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * const client = new DrsClient(config);
 * const input = { // ListExtensibleSourceServersRequest
 *   stagingAccountID: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListExtensibleSourceServersCommand(input);
 * const response = await client.send(command);
 * // { // ListExtensibleSourceServersResponse
 * //   items: [ // StagingSourceServersList
 * //     { // StagingSourceServer
 * //       hostname: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       tags: { // TagsMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListExtensibleSourceServersCommandInput - {@link ListExtensibleSourceServersCommandInput}
 * @returns {@link ListExtensibleSourceServersCommandOutput}
 * @see {@link ListExtensibleSourceServersCommandInput} for command's `input` shape.
 * @see {@link ListExtensibleSourceServersCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>The account performing the request has not been initialized.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the AWS service.</p>
 *
 * @throws {@link DrsServiceException}
 * <p>Base exception class for all service exceptions from Drs service.</p>
 *
 */
export class ListExtensibleSourceServersCommand extends $Command<
  ListExtensibleSourceServersCommandInput,
  ListExtensibleSourceServersCommandOutput,
  DrsClientResolvedConfig
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
  constructor(readonly input: ListExtensibleSourceServersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DrsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListExtensibleSourceServersCommandInput, ListExtensibleSourceServersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListExtensibleSourceServersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DrsClient";
    const commandName = "ListExtensibleSourceServersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: ListExtensibleSourceServersResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "ElasticDisasterRecoveryService",
        operation: "ListExtensibleSourceServers",
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
  private serialize(input: ListExtensibleSourceServersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListExtensibleSourceServersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListExtensibleSourceServersCommandOutput> {
    return de_ListExtensibleSourceServersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
