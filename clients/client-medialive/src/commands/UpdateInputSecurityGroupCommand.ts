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

import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { UpdateInputSecurityGroupRequest, UpdateInputSecurityGroupResponse } from "../models/models_2";
import { de_UpdateInputSecurityGroupCommand, se_UpdateInputSecurityGroupCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateInputSecurityGroupCommand}.
 */
export interface UpdateInputSecurityGroupCommandInput extends UpdateInputSecurityGroupRequest {}
/**
 * @public
 *
 * The output of {@link UpdateInputSecurityGroupCommand}.
 */
export interface UpdateInputSecurityGroupCommandOutput extends UpdateInputSecurityGroupResponse, __MetadataBearer {}

/**
 * @public
 * Update an Input Security Group's Whilelists.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, UpdateInputSecurityGroupCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, UpdateInputSecurityGroupCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const input = { // UpdateInputSecurityGroupRequest
 *   InputSecurityGroupId: "STRING_VALUE", // required
 *   Tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 *   WhitelistRules: [ // __listOfInputWhitelistRuleCidr
 *     { // InputWhitelistRuleCidr
 *       Cidr: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new UpdateInputSecurityGroupCommand(input);
 * const response = await client.send(command);
 * // { // UpdateInputSecurityGroupResponse
 * //   SecurityGroup: { // InputSecurityGroup
 * //     Arn: "STRING_VALUE",
 * //     Id: "STRING_VALUE",
 * //     Inputs: [ // __listOf__string
 * //       "STRING_VALUE",
 * //     ],
 * //     State: "IDLE" || "IN_USE" || "UPDATING" || "DELETED",
 * //     Tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     WhitelistRules: [ // __listOfInputWhitelistRule
 * //       { // InputWhitelistRule
 * //         Cidr: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateInputSecurityGroupCommandInput - {@link UpdateInputSecurityGroupCommandInput}
 * @returns {@link UpdateInputSecurityGroupCommandOutput}
 * @see {@link UpdateInputSecurityGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateInputSecurityGroupCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for MediaLiveClient's `config` shape.
 *
 * @throws {@link BadGatewayException} (server fault)
 *  Placeholder documentation for BadGatewayException
 *
 * @throws {@link BadRequestException} (client fault)
 *  Placeholder documentation for BadRequestException
 *
 * @throws {@link ConflictException} (client fault)
 *  Placeholder documentation for ConflictException
 *
 * @throws {@link ForbiddenException} (client fault)
 *  Placeholder documentation for ForbiddenException
 *
 * @throws {@link GatewayTimeoutException} (server fault)
 *  Placeholder documentation for GatewayTimeoutException
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  Placeholder documentation for InternalServerErrorException
 *
 * @throws {@link NotFoundException} (client fault)
 *  Placeholder documentation for NotFoundException
 *
 * @throws {@link MediaLiveServiceException}
 * <p>Base exception class for all service exceptions from MediaLive service.</p>
 *
 */
export class UpdateInputSecurityGroupCommand extends $Command<
  UpdateInputSecurityGroupCommandInput,
  UpdateInputSecurityGroupCommandOutput,
  MediaLiveClientResolvedConfig
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
  constructor(readonly input: UpdateInputSecurityGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaLiveClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateInputSecurityGroupCommandInput, UpdateInputSecurityGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateInputSecurityGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaLiveClient";
    const commandName = "UpdateInputSecurityGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "MediaLive",
        operation: "UpdateInputSecurityGroup",
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
  private serialize(input: UpdateInputSecurityGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateInputSecurityGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateInputSecurityGroupCommandOutput> {
    return de_UpdateInputSecurityGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
