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

import { CloudHSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMClient";
import { ListLunaClientsRequest, ListLunaClientsResponse } from "../models/models_0";
import { de_ListLunaClientsCommand, se_ListLunaClientsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListLunaClientsCommand}.
 */
export interface ListLunaClientsCommandInput extends ListLunaClientsRequest {}
/**
 * @public
 *
 * The output of {@link ListLunaClientsCommand}.
 */
export interface ListLunaClientsCommandOutput extends ListLunaClientsResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For
 *       more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM
 *       Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS
 *       CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p>
 *          <p>
 *             <b>For information about the current version of AWS
 *       CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the
 *       <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>,
 *       and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API
 *       Reference</a>.</p>
 *          <p>Lists all of the clients.</p>
 *          <p>This operation supports pagination with the use of the <code>NextToken</code> member.
 *       If more results are available, the <code>NextToken</code> member of the response contains a
 *       token that you pass in the next call to <code>ListLunaClients</code> to retrieve the next set
 *       of items.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMClient, ListLunaClientsCommand } from "@aws-sdk/client-cloudhsm"; // ES Modules import
 * // const { CloudHSMClient, ListLunaClientsCommand } = require("@aws-sdk/client-cloudhsm"); // CommonJS import
 * const client = new CloudHSMClient(config);
 * const input = { // ListLunaClientsRequest
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListLunaClientsCommand(input);
 * const response = await client.send(command);
 * // { // ListLunaClientsResponse
 * //   ClientList: [ // ClientList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLunaClientsCommandInput - {@link ListLunaClientsCommandInput}
 * @returns {@link ListLunaClientsCommandOutput}
 * @see {@link ListLunaClientsCommandInput} for command's `input` shape.
 * @see {@link ListLunaClientsCommandOutput} for command's `response` shape.
 * @see {@link CloudHSMClientResolvedConfig | config} for CloudHSMClient's `config` shape.
 *
 * @throws {@link CloudHsmInternalException} (server fault)
 *  <p>Indicates that an internal error occurred.</p>
 *
 * @throws {@link CloudHsmServiceException} (client fault)
 *  <p>Indicates that an exception occurred in the AWS CloudHSM service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that one or more of the request parameters are not valid.</p>
 *
 * @throws {@link CloudHSMServiceException}
 * <p>Base exception class for all service exceptions from CloudHSM service.</p>
 *
 */
export class ListLunaClientsCommand extends $Command<
  ListLunaClientsCommandInput,
  ListLunaClientsCommandOutput,
  CloudHSMClientResolvedConfig
> {
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
  constructor(readonly input: ListLunaClientsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudHSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListLunaClientsCommandInput, ListLunaClientsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListLunaClientsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudHSMClient";
    const commandName = "ListLunaClientsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CloudHsmFrontendService",
        operation: "ListLunaClients",
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
  private serialize(input: ListLunaClientsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListLunaClientsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListLunaClientsCommandOutput> {
    return de_ListLunaClientsCommand(output, context);
  }
}
