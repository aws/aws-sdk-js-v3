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
import { ListVaultsInput, ListVaultsOutput } from "../models/models_0";
import { de_ListVaultsCommand, se_ListVaultsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListVaultsCommand}.
 */
export interface ListVaultsCommandInput extends ListVaultsInput {}
/**
 * @public
 *
 * The output of {@link ListVaultsCommand}.
 */
export interface ListVaultsCommandOutput extends ListVaultsOutput, __MetadataBearer {}

/**
 * @public
 * <p>This operation lists all vaults owned by the calling user's account. The list
 *          returned in the response is ASCII-sorted by vault name.</p>
 *
 *          <p>By default, this operation returns up to 10 items. If there are more vaults to
 *          list, the response <code>marker</code> field contains the vault Amazon Resource Name (ARN)
 *          at which to continue the list with a new List Vaults request; otherwise, the
 *             <code>marker</code> field is <code>null</code>. To return a list of vaults that begins
 *          at a specific vault, set the <code>marker</code> request parameter to the vault ARN you
 *          obtained from a previous List Vaults request. You can also limit the number of vaults
 *          returned in the response by specifying the <code>limit</code> parameter in the request. </p>
 *
 *          <p>An AWS account has full permission to perform all operations (actions). However, AWS
 *          Identity and Access Management (IAM) users don't have any permissions by default. You must
 *          grant them explicit permission to perform specific actions. For more information, see
 *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using
 *             AWS Identity and Access Management (IAM)</a>.</p>
 *          <p>For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/retrieving-vault-info.html">Retrieving Vault Metadata in
 *             Amazon S3 Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vaults-get.html">List Vaults </a> in the
 *             <i>Amazon Glacier Developer Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, ListVaultsCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, ListVaultsCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const input = { // ListVaultsInput
 *   accountId: "STRING_VALUE", // required
 *   marker: "STRING_VALUE",
 *   limit: Number("int"),
 * };
 * const command = new ListVaultsCommand(input);
 * const response = await client.send(command);
 * // { // ListVaultsOutput
 * //   VaultList: [ // VaultList
 * //     { // DescribeVaultOutput
 * //       VaultARN: "STRING_VALUE",
 * //       VaultName: "STRING_VALUE",
 * //       CreationDate: "STRING_VALUE",
 * //       LastInventoryDate: "STRING_VALUE",
 * //       NumberOfArchives: Number("long"),
 * //       SizeInBytes: Number("long"),
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListVaultsCommandInput - {@link ListVaultsCommandInput}
 * @returns {@link ListVaultsCommandOutput}
 * @see {@link ListVaultsCommandInput} for command's `input` shape.
 * @see {@link ListVaultsCommandOutput} for command's `response` shape.
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
 * @example To list all vaults owned by the calling user's account
 * ```javascript
 * // The example lists all vaults owned by the specified AWS account.
 * const input = {
 *   "accountId": "-",
 *   "limit": "",
 *   "marker": ""
 * };
 * const command = new ListVaultsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "VaultList": [
 *     {
 *       "CreationDate": "2015-04-06T21:23:45.708Z",
 *       "LastInventoryDate": "2015-04-07T00:26:19.028Z",
 *       "NumberOfArchives": 1,
 *       "SizeInBytes": 3178496,
 *       "VaultARN": "arn:aws:glacier:us-west-2:0123456789012:vaults/my-vault",
 *       "VaultName": "my-vault"
 *     }
 *   ]
 * }
 * *\/
 * // example id: list-vaults-1481753006990
 * ```
 *
 */
export class ListVaultsCommand extends $Command<
  ListVaultsCommandInput,
  ListVaultsCommandOutput,
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
  constructor(readonly input: ListVaultsCommandInput) {
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
  ): Handler<ListVaultsCommandInput, ListVaultsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListVaultsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlacierClient";
    const commandName = "ListVaultsCommand";
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
  private serialize(input: ListVaultsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListVaultsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListVaultsCommandOutput> {
    return de_ListVaultsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
