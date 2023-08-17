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

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { UpdateKeyGroupRequest, UpdateKeyGroupResult } from "../models/models_1";
import { de_UpdateKeyGroupCommand, se_UpdateKeyGroupCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateKeyGroupCommand}.
 */
export interface UpdateKeyGroupCommandInput extends UpdateKeyGroupRequest {}
/**
 * @public
 *
 * The output of {@link UpdateKeyGroupCommand}.
 */
export interface UpdateKeyGroupCommandOutput extends UpdateKeyGroupResult, __MetadataBearer {}

/**
 * @public
 * <p>Updates a key group.</p>
 *          <p>When you update a key group, all the fields are updated with the values provided in
 * 			the request. You cannot update some fields independent of others. To update a key
 * 			group:</p>
 *          <ol>
 *             <li>
 *                <p>Get the current key group with <code>GetKeyGroup</code> or
 * 						<code>GetKeyGroupConfig</code>.</p>
 *             </li>
 *             <li>
 *                <p>Locally modify the fields in the key group that you want to update. For
 * 					example, add or remove public key IDs.</p>
 *             </li>
 *             <li>
 *                <p>Call <code>UpdateKeyGroup</code> with the entire key group object, including
 * 					the fields that you modified and those that you didn't.</p>
 *             </li>
 *          </ol>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, UpdateKeyGroupCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, UpdateKeyGroupCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // UpdateKeyGroupRequest
 *   KeyGroupConfig: { // KeyGroupConfig
 *     Name: "STRING_VALUE", // required
 *     Items: [ // PublicKeyIdList // required
 *       "STRING_VALUE",
 *     ],
 *     Comment: "STRING_VALUE",
 *   },
 *   Id: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE",
 * };
 * const command = new UpdateKeyGroupCommand(input);
 * const response = await client.send(command);
 * // { // UpdateKeyGroupResult
 * //   KeyGroup: { // KeyGroup
 * //     Id: "STRING_VALUE", // required
 * //     LastModifiedTime: new Date("TIMESTAMP"), // required
 * //     KeyGroupConfig: { // KeyGroupConfig
 * //       Name: "STRING_VALUE", // required
 * //       Items: [ // PublicKeyIdList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       Comment: "STRING_VALUE",
 * //     },
 * //   },
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateKeyGroupCommandInput - {@link UpdateKeyGroupCommandInput}
 * @returns {@link UpdateKeyGroupCommandOutput}
 * @see {@link UpdateKeyGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateKeyGroupCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link InvalidIfMatchVersion} (client fault)
 *  <p>The <code>If-Match</code> version is missing or not valid.</p>
 *
 * @throws {@link KeyGroupAlreadyExists} (client fault)
 *  <p>A key group with this name already exists. You must provide a unique name. To modify
 * 			an existing key group, use <code>UpdateKeyGroup</code>.</p>
 *
 * @throws {@link NoSuchResource} (client fault)
 *  <p>A resource that was specified is not valid.</p>
 *
 * @throws {@link PreconditionFailed} (client fault)
 *  <p>The precondition in one or more of the request fields evaluated to
 * 			<code>false</code>.</p>
 *
 * @throws {@link TooManyPublicKeysInKeyGroup} (client fault)
 *  <p>The number of public keys in this key group is more than the maximum allowed. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 */
export class UpdateKeyGroupCommand extends $Command<
  UpdateKeyGroupCommandInput,
  UpdateKeyGroupCommandOutput,
  CloudFrontClientResolvedConfig
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
  constructor(readonly input: UpdateKeyGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateKeyGroupCommandInput, UpdateKeyGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateKeyGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "UpdateKeyGroupCommand";
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
  private serialize(input: UpdateKeyGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateKeyGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateKeyGroupCommandOutput> {
    return de_UpdateKeyGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
