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

import { AddTagsToResourceInput, AddTagsToResourceOutput } from "../models/models_0";
import { de_AddTagsToResourceCommand, se_AddTagsToResourceCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AddTagsToResourceCommand}.
 */
export interface AddTagsToResourceCommandInput extends AddTagsToResourceInput {}
/**
 * @public
 *
 * The output of {@link AddTagsToResourceCommand}.
 */
export interface AddTagsToResourceCommandOutput extends AddTagsToResourceOutput, __MetadataBearer {}

/**
 * @public
 * <p>Adds one or more tags to the specified resource. You use tags to add metadata to
 *          resources, which you can use to categorize these resources. For example, you can categorize
 *          resources by purpose, owner, environment, or team. Each tag consists of a key and a value,
 *          which you define. You can add tags to the following Storage Gateway resources:</p>
 *          <ul>
 *             <li>
 *                <p>Storage gateways of all types</p>
 *             </li>
 *             <li>
 *                <p>Storage volumes</p>
 *             </li>
 *             <li>
 *                <p>Virtual tapes</p>
 *             </li>
 *             <li>
 *                <p>NFS and SMB file shares</p>
 *             </li>
 *             <li>
 *                <p>File System associations</p>
 *             </li>
 *          </ul>
 *          <p>You can create a maximum of 50 tags for each resource. Virtual tapes and storage volumes
 *          that are recovered to a new gateway maintain their tags.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, AddTagsToResourceCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, AddTagsToResourceCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // AddTagsToResourceInput
 *   ResourceARN: "STRING_VALUE", // required
 *   Tags: [ // Tags // required
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new AddTagsToResourceCommand(input);
 * const response = await client.send(command);
 * // { // AddTagsToResourceOutput
 * //   ResourceARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AddTagsToResourceCommandInput - {@link AddTagsToResourceCommandInput}
 * @returns {@link AddTagsToResourceCommandOutput}
 * @see {@link AddTagsToResourceCommandInput} for command's `input` shape.
 * @see {@link AddTagsToResourceCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An internal server error has occurred during the request. For more information, see the
 *          error and message fields.</p>
 *
 * @throws {@link InvalidGatewayRequestException} (client fault)
 *  <p>An exception occurred because an invalid gateway request was issued to the service. For
 *          more information, see the error and message fields.</p>
 *
 * @throws {@link StorageGatewayServiceException}
 * <p>Base exception class for all service exceptions from StorageGateway service.</p>
 *
 * @example To add tags to resource
 * ```javascript
 * // Adds one or more tags to the specified resource.
 * const input = {
 *   "ResourceARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-11A2222B",
 *   "Tags": [
 *     {
 *       "Key": "Dev Gatgeway Region",
 *       "Value": "East Coast"
 *     }
 *   ]
 * };
 * const command = new AddTagsToResourceCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ResourceARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-11A2222B"
 * }
 * *\/
 * // example id: to-add-tags-to-resource-1471283689460
 * ```
 *
 */
export class AddTagsToResourceCommand extends $Command<
  AddTagsToResourceCommandInput,
  AddTagsToResourceCommandOutput,
  StorageGatewayClientResolvedConfig
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
  constructor(readonly input: AddTagsToResourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AddTagsToResourceCommandInput, AddTagsToResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AddTagsToResourceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "AddTagsToResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "StorageGateway_20130630",
        operation: "AddTagsToResource",
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
  private serialize(input: AddTagsToResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AddTagsToResourceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddTagsToResourceCommandOutput> {
    return de_AddTagsToResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
