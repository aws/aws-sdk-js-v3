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
import { CreateKeyGroupRequest, CreateKeyGroupResult } from "../models/models_0";
import { de_CreateKeyGroupCommand, se_CreateKeyGroupCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateKeyGroupCommand}.
 */
export interface CreateKeyGroupCommandInput extends CreateKeyGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateKeyGroupCommand}.
 */
export interface CreateKeyGroupCommandOutput extends CreateKeyGroupResult, __MetadataBearer {}

/**
 * @public
 * <p>Creates a key group that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">CloudFront signed URLs and signed cookies</a>.</p>
 *          <p>To create a key group, you must specify at least one public key for the key group.
 * 			After you create a key group, you can reference it from one or more cache behaviors.
 * 			When you reference a key group in a cache behavior, CloudFront requires signed URLs or signed
 * 			cookies for all requests that match the cache behavior. The URLs or cookies must be
 * 			signed with a private key whose corresponding public key is in the key group. The signed
 * 			URL or cookie contains information about which public key CloudFront should use to verify the
 * 			signature. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving private content</a> in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CreateKeyGroupCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CreateKeyGroupCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // CreateKeyGroupRequest
 *   KeyGroupConfig: { // KeyGroupConfig
 *     Name: "STRING_VALUE", // required
 *     Items: [ // PublicKeyIdList // required
 *       "STRING_VALUE",
 *     ],
 *     Comment: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateKeyGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateKeyGroupResult
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
 * //   Location: "STRING_VALUE",
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateKeyGroupCommandInput - {@link CreateKeyGroupCommandInput}
 * @returns {@link CreateKeyGroupCommandOutput}
 * @see {@link CreateKeyGroupCommandInput} for command's `input` shape.
 * @see {@link CreateKeyGroupCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link KeyGroupAlreadyExists} (client fault)
 *  <p>A key group with this name already exists. You must provide a unique name. To modify
 * 			an existing key group, use <code>UpdateKeyGroup</code>.</p>
 *
 * @throws {@link TooManyKeyGroups} (client fault)
 *  <p>You have reached the maximum number of key groups for this Amazon Web Services account. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
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
export class CreateKeyGroupCommand extends $Command<
  CreateKeyGroupCommandInput,
  CreateKeyGroupCommandOutput,
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
  constructor(readonly input: CreateKeyGroupCommandInput) {
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
  ): Handler<CreateKeyGroupCommandInput, CreateKeyGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateKeyGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "CreateKeyGroupCommand";
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
  private serialize(input: CreateKeyGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateKeyGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateKeyGroupCommandOutput> {
    return de_CreateKeyGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
