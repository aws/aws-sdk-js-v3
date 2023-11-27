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

import { ListSpacesInput, ListSpacesOutput, ListSpacesOutputFilterSensitiveLog } from "../models/models_0";
import { de_ListSpacesCommand, se_ListSpacesCommand } from "../protocols/Aws_restJson1";
import { RepostspaceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RepostspaceClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListSpacesCommand}.
 */
export interface ListSpacesCommandInput extends ListSpacesInput {}
/**
 * @public
 *
 * The output of {@link ListSpacesCommand}.
 */
export interface ListSpacesCommandOutput extends ListSpacesOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of AWS re:Post Private private re:Posts in the account with some information about each private re:Post.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RepostspaceClient, ListSpacesCommand } from "@aws-sdk/client-repostspace"; // ES Modules import
 * // const { RepostspaceClient, ListSpacesCommand } = require("@aws-sdk/client-repostspace"); // CommonJS import
 * const client = new RepostspaceClient(config);
 * const input = { // ListSpacesInput
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListSpacesCommand(input);
 * const response = await client.send(command);
 * // { // ListSpacesOutput
 * //   spaces: [ // SpacesList // required
 * //     { // SpaceData
 * //       spaceId: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       status: "STRING_VALUE", // required
 * //       configurationStatus: "CONFIGURED" || "UNCONFIGURED", // required
 * //       vanityDomainStatus: "PENDING" || "APPROVED" || "UNAPPROVED", // required
 * //       vanityDomain: "STRING_VALUE", // required
 * //       randomDomain: "STRING_VALUE", // required
 * //       tier: "BASIC" || "STANDARD", // required
 * //       storageLimit: Number("long"), // required
 * //       createDateTime: new Date("TIMESTAMP"), // required
 * //       deleteDateTime: new Date("TIMESTAMP"),
 * //       userKMSKey: "STRING_VALUE",
 * //       userCount: Number("int"),
 * //       contentSize: Number("long"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSpacesCommandInput - {@link ListSpacesCommandInput}
 * @returns {@link ListSpacesCommandOutput}
 * @see {@link ListSpacesCommandInput} for command's `input` shape.
 * @see {@link ListSpacesCommandOutput} for command's `response` shape.
 * @see {@link RepostspaceClientResolvedConfig | config} for RepostspaceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
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
export class ListSpacesCommand extends $Command<
  ListSpacesCommandInput,
  ListSpacesCommandOutput,
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
  constructor(readonly input: ListSpacesCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RepostspaceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSpacesCommandInput, ListSpacesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListSpacesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RepostspaceClient";
    const commandName = "ListSpacesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: ListSpacesOutputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "RepostSpace",
        operation: "ListSpaces",
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
  private serialize(input: ListSpacesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListSpacesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSpacesCommandOutput> {
    return de_ListSpacesCommand(output, context);
  }
}
