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

import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import { ListTagsForVaultInput, ListTagsForVaultOutput } from "../models/models_0";
import { de_ListTagsForVaultCommand, se_ListTagsForVaultCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListTagsForVaultCommand}.
 */
export interface ListTagsForVaultCommandInput extends ListTagsForVaultInput {}
/**
 * @public
 *
 * The output of {@link ListTagsForVaultCommand}.
 */
export interface ListTagsForVaultCommandOutput extends ListTagsForVaultOutput, __MetadataBearer {}

/**
 * @public
 * <p>This operation lists all the tags attached to a vault. The operation returns an empty
 *          map if there are no tags. For more information about tags, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/tagging.html">Tagging Amazon S3 Glacier
 *          Resources</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, ListTagsForVaultCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, ListTagsForVaultCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const input = { // ListTagsForVaultInput
 *   accountId: "STRING_VALUE", // required
 *   vaultName: "STRING_VALUE", // required
 * };
 * const command = new ListTagsForVaultCommand(input);
 * const response = await client.send(command);
 * // { // ListTagsForVaultOutput
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ListTagsForVaultCommandInput - {@link ListTagsForVaultCommandInput}
 * @returns {@link ListTagsForVaultCommandOutput}
 * @see {@link ListTagsForVaultCommandInput} for command's `input` shape.
 * @see {@link ListTagsForVaultCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for GlacierClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Returned if a parameter of the request is incorrectly specified.</p>
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *  <p>Returned if a required header or parameter is missing from the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Returned if the specified resource (such as a vault, upload ID, or job ID) doesn't
 *          exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>Returned if the service cannot complete the request.</p>
 *
 * @throws {@link GlacierServiceException}
 * <p>Base exception class for all service exceptions from Glacier service.</p>
 *
 * @example To list the tags for a vault
 * ```javascript
 * // The example lists all the tags attached to the vault examplevault.
 * const input = {
 *   "accountId": "-",
 *   "vaultName": "examplevault"
 * };
 * const command = new ListTagsForVaultCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Tags": {
 *     "date": "july2015",
 *     "id": "1234"
 *   }
 * }
 * *\/
 * // example id: list-tags-for-vault-1481755839720
 * ```
 *
 */
export class ListTagsForVaultCommand extends $Command<
  ListTagsForVaultCommandInput,
  ListTagsForVaultCommandOutput,
  GlacierClientResolvedConfig
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
  constructor(readonly input: ListTagsForVaultCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlacierClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTagsForVaultCommandInput, ListTagsForVaultCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListTagsForVaultCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlacierClient";
    const commandName = "ListTagsForVaultCommand";
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
  private serialize(input: ListTagsForVaultCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListTagsForVaultCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTagsForVaultCommandOutput> {
    return de_ListTagsForVaultCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
