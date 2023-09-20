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

import { UpdateResourceShareRequest, UpdateResourceShareResponse } from "../models/models_0";
import { de_UpdateResourceShareCommand, se_UpdateResourceShareCommand } from "../protocols/Aws_restJson1";
import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateResourceShareCommand}.
 */
export interface UpdateResourceShareCommandInput extends UpdateResourceShareRequest {}
/**
 * @public
 *
 * The output of {@link UpdateResourceShareCommand}.
 */
export interface UpdateResourceShareCommandOutput extends UpdateResourceShareResponse, __MetadataBearer {}

/**
 * @public
 * <p>Modifies some of the properties of the specified resource share.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, UpdateResourceShareCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, UpdateResourceShareCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const input = { // UpdateResourceShareRequest
 *   resourceShareArn: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   allowExternalPrincipals: true || false,
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdateResourceShareCommand(input);
 * const response = await client.send(command);
 * // { // UpdateResourceShareResponse
 * //   resourceShare: { // ResourceShare
 * //     resourceShareArn: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     owningAccountId: "STRING_VALUE",
 * //     allowExternalPrincipals: true || false,
 * //     status: "PENDING" || "ACTIVE" || "FAILED" || "DELETING" || "DELETED",
 * //     statusMessage: "STRING_VALUE",
 * //     tags: [ // TagList
 * //       { // Tag
 * //         key: "STRING_VALUE",
 * //         value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     creationTime: new Date("TIMESTAMP"),
 * //     lastUpdatedTime: new Date("TIMESTAMP"),
 * //     featureSet: "CREATED_FROM_POLICY" || "PROMOTING_TO_STANDARD" || "STANDARD",
 * //   },
 * //   clientToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateResourceShareCommandInput - {@link UpdateResourceShareCommandInput}
 * @returns {@link UpdateResourceShareCommandOutput}
 * @see {@link UpdateResourceShareCommandInput} for command's `input` shape.
 * @see {@link UpdateResourceShareCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for RAMClient's `config` shape.
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *  <p>The operation failed because the client token input parameter matched one that was
 *             used with a previous call to the operation, but at least one of the other input
 *             parameters is different from the previous call.</p>
 *
 * @throws {@link InvalidClientTokenException} (client fault)
 *  <p>The operation failed because the specified client token isn't valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The operation failed because a parameter you specified isn't valid.</p>
 *
 * @throws {@link MalformedArnException} (client fault)
 *  <p>The operation failed because the specified <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> has a format that isn't
 *             valid.</p>
 *
 * @throws {@link MissingRequiredParameterException} (client fault)
 *  <p>The operation failed because a required input parameter is missing.</p>
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
export class UpdateResourceShareCommand extends $Command<
  UpdateResourceShareCommandInput,
  UpdateResourceShareCommandOutput,
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
  constructor(readonly input: UpdateResourceShareCommandInput) {
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
  ): Handler<UpdateResourceShareCommandInput, UpdateResourceShareCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateResourceShareCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RAMClient";
    const commandName = "UpdateResourceShareCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonResourceSharing",
        operation: "UpdateResourceShare",
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
  private serialize(input: UpdateResourceShareCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateResourceShareCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateResourceShareCommandOutput> {
    return de_UpdateResourceShareCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
