// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { GetResourceSharesRequest, GetResourceSharesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetResourceSharesCommand,
  serializeAws_restJson1GetResourceSharesCommand,
} from "../protocols/Aws_restJson1";
import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";

/**
 * @public
 *
 * The input for {@link GetResourceSharesCommand}.
 */
export interface GetResourceSharesCommandInput extends GetResourceSharesRequest {}
/**
 * @public
 *
 * The output of {@link GetResourceSharesCommand}.
 */
export interface GetResourceSharesCommandOutput extends GetResourceSharesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves details about the resource shares that you own or that are shared with you.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, GetResourceSharesCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, GetResourceSharesCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const input = { // GetResourceSharesRequest
 *   resourceShareArns: [ // ResourceShareArnList
 *     "STRING_VALUE",
 *   ],
 *   resourceShareStatus: "PENDING" || "ACTIVE" || "FAILED" || "DELETING" || "DELETED",
 *   resourceOwner: "SELF" || "OTHER-ACCOUNTS", // required
 *   name: "STRING_VALUE",
 *   tagFilters: [ // TagFilters
 *     { // TagFilter
 *       tagKey: "STRING_VALUE",
 *       tagValues: [ // TagValueList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   permissionArn: "STRING_VALUE",
 * };
 * const command = new GetResourceSharesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetResourceSharesCommandInput - {@link GetResourceSharesCommandInput}
 * @returns {@link GetResourceSharesCommandOutput}
 * @see {@link GetResourceSharesCommandInput} for command's `input` shape.
 * @see {@link GetResourceSharesCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for RAMClient's `config` shape.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The specified value for <code>NextToken</code> is not valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is not valid.</p>
 *
 * @throws {@link MalformedArnException} (client fault)
 *  <p>The format of an Amazon Resource Name (ARN) is not valid.</p>
 *
 * @throws {@link ServerInternalException} (server fault)
 *  <p>The service could not respond to the request due to an internal problem.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is not available.</p>
 *
 * @throws {@link UnknownResourceException} (client fault)
 *  <p>A specified resource was not found.</p>
 *
 *
 */
export class GetResourceSharesCommand extends $Command<
  GetResourceSharesCommandInput,
  GetResourceSharesCommandOutput,
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
  constructor(readonly input: GetResourceSharesCommandInput) {
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
  ): Handler<GetResourceSharesCommandInput, GetResourceSharesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetResourceSharesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RAMClient";
    const commandName = "GetResourceSharesCommand";
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
  private serialize(input: GetResourceSharesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetResourceSharesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetResourceSharesCommandOutput> {
    return deserializeAws_restJson1GetResourceSharesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
