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

import { MediaPackageVodClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageVodClient";
import { CreatePackagingGroupRequest, CreatePackagingGroupResponse } from "../models/models_0";
import { de_CreatePackagingGroupCommand, se_CreatePackagingGroupCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreatePackagingGroupCommand}.
 */
export interface CreatePackagingGroupCommandInput extends CreatePackagingGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreatePackagingGroupCommand}.
 */
export interface CreatePackagingGroupCommandOutput extends CreatePackagingGroupResponse, __MetadataBearer {}

/**
 * @public
 * Creates a new MediaPackage VOD PackagingGroup resource.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageVodClient, CreatePackagingGroupCommand } from "@aws-sdk/client-mediapackage-vod"; // ES Modules import
 * // const { MediaPackageVodClient, CreatePackagingGroupCommand } = require("@aws-sdk/client-mediapackage-vod"); // CommonJS import
 * const client = new MediaPackageVodClient(config);
 * const input = { // CreatePackagingGroupRequest
 *   Authorization: { // Authorization
 *     CdnIdentifierSecret: "STRING_VALUE", // required
 *     SecretsRoleArn: "STRING_VALUE", // required
 *   },
 *   EgressAccessLogs: { // EgressAccessLogs
 *     LogGroupName: "STRING_VALUE",
 *   },
 *   Id: "STRING_VALUE", // required
 *   Tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreatePackagingGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreatePackagingGroupResponse
 * //   Arn: "STRING_VALUE",
 * //   Authorization: { // Authorization
 * //     CdnIdentifierSecret: "STRING_VALUE", // required
 * //     SecretsRoleArn: "STRING_VALUE", // required
 * //   },
 * //   CreatedAt: "STRING_VALUE",
 * //   DomainName: "STRING_VALUE",
 * //   EgressAccessLogs: { // EgressAccessLogs
 * //     LogGroupName: "STRING_VALUE",
 * //   },
 * //   Id: "STRING_VALUE",
 * //   Tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreatePackagingGroupCommandInput - {@link CreatePackagingGroupCommandInput}
 * @returns {@link CreatePackagingGroupCommandOutput}
 * @see {@link CreatePackagingGroupCommandInput} for command's `input` shape.
 * @see {@link CreatePackagingGroupCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageVodClientResolvedConfig | config} for MediaPackageVodClient's `config` shape.
 *
 * @throws {@link ForbiddenException} (client fault)
 *  The client is not authorized to access the requested resource.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  An unexpected error occurred.
 *
 * @throws {@link NotFoundException} (client fault)
 *  The requested resource does not exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  An unexpected error occurred.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  The client has exceeded their resource or throttling limits.
 *
 * @throws {@link UnprocessableEntityException} (client fault)
 *  The parameters sent in the request are not valid.
 *
 * @throws {@link MediaPackageVodServiceException}
 * <p>Base exception class for all service exceptions from MediaPackageVod service.</p>
 *
 */
export class CreatePackagingGroupCommand extends $Command<
  CreatePackagingGroupCommandInput,
  CreatePackagingGroupCommandOutput,
  MediaPackageVodClientResolvedConfig
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
  constructor(readonly input: CreatePackagingGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaPackageVodClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreatePackagingGroupCommandInput, CreatePackagingGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreatePackagingGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaPackageVodClient";
    const commandName = "CreatePackagingGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "MediaPackageVod",
        operation: "CreatePackagingGroup",
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
  private serialize(input: CreatePackagingGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreatePackagingGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreatePackagingGroupCommandOutput> {
    return de_CreatePackagingGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
