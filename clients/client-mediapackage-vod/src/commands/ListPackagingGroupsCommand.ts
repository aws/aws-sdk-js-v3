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

import { MediaPackageVodClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageVodClient";
import { ListPackagingGroupsRequest, ListPackagingGroupsResponse } from "../models/models_0";
import { de_ListPackagingGroupsCommand, se_ListPackagingGroupsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListPackagingGroupsCommand}.
 */
export interface ListPackagingGroupsCommandInput extends ListPackagingGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListPackagingGroupsCommand}.
 */
export interface ListPackagingGroupsCommandOutput extends ListPackagingGroupsResponse, __MetadataBearer {}

/**
 * @public
 * Returns a collection of MediaPackage VOD PackagingGroup resources.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageVodClient, ListPackagingGroupsCommand } from "@aws-sdk/client-mediapackage-vod"; // ES Modules import
 * // const { MediaPackageVodClient, ListPackagingGroupsCommand } = require("@aws-sdk/client-mediapackage-vod"); // CommonJS import
 * const client = new MediaPackageVodClient(config);
 * const input = { // ListPackagingGroupsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListPackagingGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListPackagingGroupsResponse
 * //   NextToken: "STRING_VALUE",
 * //   PackagingGroups: [ // __listOfPackagingGroup
 * //     { // PackagingGroup
 * //       ApproximateAssetCount: Number("int"),
 * //       Arn: "STRING_VALUE",
 * //       Authorization: { // Authorization
 * //         CdnIdentifierSecret: "STRING_VALUE", // required
 * //         SecretsRoleArn: "STRING_VALUE", // required
 * //       },
 * //       CreatedAt: "STRING_VALUE",
 * //       DomainName: "STRING_VALUE",
 * //       EgressAccessLogs: { // EgressAccessLogs
 * //         LogGroupName: "STRING_VALUE",
 * //       },
 * //       Id: "STRING_VALUE",
 * //       Tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListPackagingGroupsCommandInput - {@link ListPackagingGroupsCommandInput}
 * @returns {@link ListPackagingGroupsCommandOutput}
 * @see {@link ListPackagingGroupsCommandInput} for command's `input` shape.
 * @see {@link ListPackagingGroupsCommandOutput} for command's `response` shape.
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
export class ListPackagingGroupsCommand extends $Command<
  ListPackagingGroupsCommandInput,
  ListPackagingGroupsCommandOutput,
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
  constructor(readonly input: ListPackagingGroupsCommandInput) {
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
  ): Handler<ListPackagingGroupsCommandInput, ListPackagingGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListPackagingGroupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaPackageVodClient";
    const commandName = "ListPackagingGroupsCommand";
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
  private serialize(input: ListPackagingGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListPackagingGroupsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPackagingGroupsCommandOutput> {
    return de_ListPackagingGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
