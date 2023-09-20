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

import { ListTargetGroupsRequest, ListTargetGroupsResponse } from "../models/models_0";
import { de_ListTargetGroupsCommand, se_ListTargetGroupsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, VPCLatticeClientResolvedConfig } from "../VPCLatticeClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListTargetGroupsCommand}.
 */
export interface ListTargetGroupsCommandInput extends ListTargetGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListTargetGroupsCommand}.
 */
export interface ListTargetGroupsCommandOutput extends ListTargetGroupsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists your target groups. You can narrow your search by using the filters below in your
 *    request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VPCLatticeClient, ListTargetGroupsCommand } from "@aws-sdk/client-vpc-lattice"; // ES Modules import
 * // const { VPCLatticeClient, ListTargetGroupsCommand } = require("@aws-sdk/client-vpc-lattice"); // CommonJS import
 * const client = new VPCLatticeClient(config);
 * const input = { // ListTargetGroupsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   vpcIdentifier: "STRING_VALUE",
 *   targetGroupType: "STRING_VALUE",
 * };
 * const command = new ListTargetGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListTargetGroupsResponse
 * //   items: [ // TargetGroupList
 * //     { // TargetGroupSummary
 * //       id: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       type: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       port: Number("int"),
 * //       protocol: "STRING_VALUE",
 * //       ipAddressType: "STRING_VALUE",
 * //       vpcIdentifier: "STRING_VALUE",
 * //       lastUpdatedAt: new Date("TIMESTAMP"),
 * //       status: "STRING_VALUE",
 * //       serviceArns: [ // ServiceArnList
 * //         "STRING_VALUE",
 * //       ],
 * //       lambdaEventStructureVersion: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTargetGroupsCommandInput - {@link ListTargetGroupsCommandInput}
 * @returns {@link ListTargetGroupsCommandOutput}
 * @see {@link ListTargetGroupsCommandInput} for command's `input` shape.
 * @see {@link ListTargetGroupsCommandOutput} for command's `response` shape.
 * @see {@link VPCLatticeClientResolvedConfig | config} for VPCLatticeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing the request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by an Amazon Web Services
 *    service.</p>
 *
 * @throws {@link VPCLatticeServiceException}
 * <p>Base exception class for all service exceptions from VPCLattice service.</p>
 *
 */
export class ListTargetGroupsCommand extends $Command<
  ListTargetGroupsCommandInput,
  ListTargetGroupsCommandOutput,
  VPCLatticeClientResolvedConfig
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
  constructor(readonly input: ListTargetGroupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: VPCLatticeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTargetGroupsCommandInput, ListTargetGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListTargetGroupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "VPCLatticeClient";
    const commandName = "ListTargetGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "MercuryControlPlane",
        operation: "ListTargetGroups",
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
  private serialize(input: ListTargetGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListTargetGroupsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTargetGroupsCommandOutput> {
    return de_ListTargetGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
