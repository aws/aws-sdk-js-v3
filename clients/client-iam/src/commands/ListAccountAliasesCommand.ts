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

import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListAccountAliasesRequest, ListAccountAliasesResponse } from "../models/models_0";
import { de_ListAccountAliasesCommand, se_ListAccountAliasesCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAccountAliasesCommand}.
 */
export interface ListAccountAliasesCommandInput extends ListAccountAliasesRequest {}
/**
 * @public
 *
 * The output of {@link ListAccountAliasesCommand}.
 */
export interface ListAccountAliasesCommandOutput extends ListAccountAliasesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the account alias associated with the Amazon Web Services account (Note: you can have only
 *             one). For information about using an Amazon Web Services account alias, see <a href="https://docs.aws.amazon.com/signin/latest/userguide/CreateAccountAlias.html">Creating,
 *                 deleting, and listing an Amazon Web Services account alias</a> in the <i>Amazon Web Services Sign-In
 *                 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListAccountAliasesCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListAccountAliasesCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // ListAccountAliasesRequest
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListAccountAliasesCommand(input);
 * const response = await client.send(command);
 * // { // ListAccountAliasesResponse
 * //   AccountAliases: [ // accountAliasListType // required
 * //     "STRING_VALUE",
 * //   ],
 * //   IsTruncated: true || false,
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAccountAliasesCommandInput - {@link ListAccountAliasesCommandInput}
 * @returns {@link ListAccountAliasesCommandOutput}
 * @see {@link ListAccountAliasesCommandInput} for command's `input` shape.
 * @see {@link ListAccountAliasesCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 * @example To list account aliases
 * ```javascript
 * // The following command lists the aliases for the current account.
 * const input = {};
 * const command = new ListAccountAliasesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "AccountAliases": [
 *     "exmaple-corporation"
 *   ]
 * }
 * *\/
 * // example id: e27b457a-16f9-4e05-a006-3df7b3472741
 * ```
 *
 */
export class ListAccountAliasesCommand extends $Command<
  ListAccountAliasesCommandInput,
  ListAccountAliasesCommandOutput,
  IAMClientResolvedConfig
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
  constructor(readonly input: ListAccountAliasesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAccountAliasesCommandInput, ListAccountAliasesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAccountAliasesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "ListAccountAliasesCommand";
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
  private serialize(input: ListAccountAliasesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListAccountAliasesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAccountAliasesCommandOutput> {
    return de_ListAccountAliasesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
