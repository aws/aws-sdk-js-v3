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

import { GetResourceShareAssociationsRequest, GetResourceShareAssociationsResponse } from "../models/models_0";
import {
  de_GetResourceShareAssociationsCommand,
  se_GetResourceShareAssociationsCommand,
} from "../protocols/Aws_restJson1";
import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetResourceShareAssociationsCommand}.
 */
export interface GetResourceShareAssociationsCommandInput extends GetResourceShareAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link GetResourceShareAssociationsCommand}.
 */
export interface GetResourceShareAssociationsCommandOutput
  extends GetResourceShareAssociationsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the lists of resources and principals that associated for resource shares that you
 *             own.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, GetResourceShareAssociationsCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, GetResourceShareAssociationsCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const input = { // GetResourceShareAssociationsRequest
 *   associationType: "PRINCIPAL" || "RESOURCE", // required
 *   resourceShareArns: [ // ResourceShareArnList
 *     "STRING_VALUE",
 *   ],
 *   resourceArn: "STRING_VALUE",
 *   principal: "STRING_VALUE",
 *   associationStatus: "ASSOCIATING" || "ASSOCIATED" || "FAILED" || "DISASSOCIATING" || "DISASSOCIATED",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new GetResourceShareAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // GetResourceShareAssociationsResponse
 * //   resourceShareAssociations: [ // ResourceShareAssociationList
 * //     { // ResourceShareAssociation
 * //       resourceShareArn: "STRING_VALUE",
 * //       resourceShareName: "STRING_VALUE",
 * //       associatedEntity: "STRING_VALUE",
 * //       associationType: "PRINCIPAL" || "RESOURCE",
 * //       status: "ASSOCIATING" || "ASSOCIATED" || "FAILED" || "DISASSOCIATING" || "DISASSOCIATED",
 * //       statusMessage: "STRING_VALUE",
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
 * @param GetResourceShareAssociationsCommandInput - {@link GetResourceShareAssociationsCommandInput}
 * @returns {@link GetResourceShareAssociationsCommandOutput}
 * @see {@link GetResourceShareAssociationsCommandInput} for command's `input` shape.
 * @see {@link GetResourceShareAssociationsCommandOutput} for command's `response` shape.
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
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The operation failed because the requested operation isn't permitted.</p>
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
export class GetResourceShareAssociationsCommand extends $Command<
  GetResourceShareAssociationsCommandInput,
  GetResourceShareAssociationsCommandOutput,
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
  constructor(readonly input: GetResourceShareAssociationsCommandInput) {
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
  ): Handler<GetResourceShareAssociationsCommandInput, GetResourceShareAssociationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetResourceShareAssociationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RAMClient";
    const commandName = "GetResourceShareAssociationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonResourceSharing",
        operation: "GetResourceShareAssociations",
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
  private serialize(input: GetResourceShareAssociationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetResourceShareAssociationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetResourceShareAssociationsCommandOutput> {
    return de_GetResourceShareAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
