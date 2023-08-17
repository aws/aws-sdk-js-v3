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

import { ListPrincipalsRequest, ListPrincipalsResponse } from "../models/models_0";
import { de_ListPrincipalsCommand, se_ListPrincipalsCommand } from "../protocols/Aws_restJson1";
import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListPrincipalsCommand}.
 */
export interface ListPrincipalsCommandInput extends ListPrincipalsRequest {}
/**
 * @public
 *
 * The output of {@link ListPrincipalsCommand}.
 */
export interface ListPrincipalsCommandOutput extends ListPrincipalsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the principals that you are sharing resources with or that are sharing resources
 *             with you.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, ListPrincipalsCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, ListPrincipalsCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const input = { // ListPrincipalsRequest
 *   resourceOwner: "SELF" || "OTHER-ACCOUNTS", // required
 *   resourceArn: "STRING_VALUE",
 *   principals: [ // PrincipalArnOrIdList
 *     "STRING_VALUE",
 *   ],
 *   resourceType: "STRING_VALUE",
 *   resourceShareArns: [ // ResourceShareArnList
 *     "STRING_VALUE",
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListPrincipalsCommand(input);
 * const response = await client.send(command);
 * // { // ListPrincipalsResponse
 * //   principals: [ // PrincipalList
 * //     { // Principal
 * //       id: "STRING_VALUE",
 * //       resourceShareArn: "STRING_VALUE",
 * //       creationTime: new Date("TIMESTAMP"),
 * //       lastUpdatedTime: new Date("TIMESTAMP"),
 * //       external: true || false,
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPrincipalsCommandInput - {@link ListPrincipalsCommandInput}
 * @returns {@link ListPrincipalsCommandOutput}
 * @see {@link ListPrincipalsCommandInput} for command's `input` shape.
 * @see {@link ListPrincipalsCommandOutput} for command's `response` shape.
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
 * @throws {@link MalformedArnException} (client fault)
 *  <p>The operation failed because the specified <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> has a format that isn't
 *             valid.</p>
 *
 * @throws {@link ServerInternalException} (server fault)
 *  <p>The operation failed because the service could not respond to the request due to an
 *             internal problem. Try again later.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The operation failed because the service isn't available. Try again later.</p>
 *
 * @throws {@link UnknownResourceException} (client fault)
 *  <p>The operation failed because a specified resource couldn't be found.</p>
 *
 * @throws {@link RAMServiceException}
 * <p>Base exception class for all service exceptions from RAM service.</p>
 *
 */
export class ListPrincipalsCommand extends $Command<
  ListPrincipalsCommandInput,
  ListPrincipalsCommandOutput,
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
  constructor(readonly input: ListPrincipalsCommandInput) {
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
  ): Handler<ListPrincipalsCommandInput, ListPrincipalsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListPrincipalsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RAMClient";
    const commandName = "ListPrincipalsCommand";
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
  private serialize(input: ListPrincipalsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListPrincipalsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPrincipalsCommandOutput> {
    return de_ListPrincipalsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
