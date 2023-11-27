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

import { GetSpaceInput, GetSpaceOutput, GetSpaceOutputFilterSensitiveLog } from "../models/models_0";
import { de_GetSpaceCommand, se_GetSpaceCommand } from "../protocols/Aws_restJson1";
import { RepostspaceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RepostspaceClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSpaceCommand}.
 */
export interface GetSpaceCommandInput extends GetSpaceInput {}
/**
 * @public
 *
 * The output of {@link GetSpaceCommand}.
 */
export interface GetSpaceCommandOutput extends GetSpaceOutput, __MetadataBearer {}

/**
 * @public
 * <p>Displays information about the AWS re:Post Private private re:Post.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RepostspaceClient, GetSpaceCommand } from "@aws-sdk/client-repostspace"; // ES Modules import
 * // const { RepostspaceClient, GetSpaceCommand } = require("@aws-sdk/client-repostspace"); // CommonJS import
 * const client = new RepostspaceClient(config);
 * const input = { // GetSpaceInput
 *   spaceId: "STRING_VALUE", // required
 * };
 * const command = new GetSpaceCommand(input);
 * const response = await client.send(command);
 * // { // GetSpaceOutput
 * //   spaceId: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   status: "STRING_VALUE", // required
 * //   configurationStatus: "CONFIGURED" || "UNCONFIGURED", // required
 * //   clientId: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   vanityDomainStatus: "PENDING" || "APPROVED" || "UNAPPROVED", // required
 * //   vanityDomain: "STRING_VALUE", // required
 * //   randomDomain: "STRING_VALUE", // required
 * //   customerRoleArn: "STRING_VALUE",
 * //   createDateTime: new Date("TIMESTAMP"), // required
 * //   deleteDateTime: new Date("TIMESTAMP"),
 * //   tier: "BASIC" || "STANDARD", // required
 * //   storageLimit: Number("long"), // required
 * //   userAdmins: [ // UserAdmins
 * //     "STRING_VALUE",
 * //   ],
 * //   groupAdmins: [ // GroupAdmins
 * //     "STRING_VALUE",
 * //   ],
 * //   userKMSKey: "STRING_VALUE",
 * //   userCount: Number("int"),
 * //   contentSize: Number("long"),
 * // };
 *
 * ```
 *
 * @param GetSpaceCommandInput - {@link GetSpaceCommandInput}
 * @returns {@link GetSpaceCommandOutput}
 * @see {@link GetSpaceCommandInput} for command's `input` shape.
 * @see {@link GetSpaceCommandOutput} for command's `response` shape.
 * @see {@link RepostspaceClientResolvedConfig | config} for RepostspaceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link RepostspaceServiceException}
 * <p>Base exception class for all service exceptions from Repostspace service.</p>
 *
 */
export class GetSpaceCommand extends $Command<
  GetSpaceCommandInput,
  GetSpaceCommandOutput,
  RepostspaceClientResolvedConfig
> {
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
  constructor(readonly input: GetSpaceCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RepostspaceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSpaceCommandInput, GetSpaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetSpaceCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RepostspaceClient";
    const commandName = "GetSpaceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetSpaceOutputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "RepostSpace",
        operation: "GetSpace",
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
  private serialize(input: GetSpaceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetSpaceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSpaceCommandOutput> {
    return de_GetSpaceCommand(output, context);
  }
}
