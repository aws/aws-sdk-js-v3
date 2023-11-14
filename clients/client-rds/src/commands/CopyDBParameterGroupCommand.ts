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

import { CopyDBParameterGroupMessage, CopyDBParameterGroupResult } from "../models/models_0";
import { de_CopyDBParameterGroupCommand, se_CopyDBParameterGroupCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CopyDBParameterGroupCommand}.
 */
export interface CopyDBParameterGroupCommandInput extends CopyDBParameterGroupMessage {}
/**
 * @public
 *
 * The output of {@link CopyDBParameterGroupCommand}.
 */
export interface CopyDBParameterGroupCommandOutput extends CopyDBParameterGroupResult, __MetadataBearer {}

/**
 * @public
 * <p>Copies the specified DB parameter group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CopyDBParameterGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CopyDBParameterGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // CopyDBParameterGroupMessage
 *   SourceDBParameterGroupIdentifier: "STRING_VALUE", // required
 *   TargetDBParameterGroupIdentifier: "STRING_VALUE", // required
 *   TargetDBParameterGroupDescription: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CopyDBParameterGroupCommand(input);
 * const response = await client.send(command);
 * // { // CopyDBParameterGroupResult
 * //   DBParameterGroup: { // DBParameterGroup
 * //     DBParameterGroupName: "STRING_VALUE",
 * //     DBParameterGroupFamily: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     DBParameterGroupArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CopyDBParameterGroupCommandInput - {@link CopyDBParameterGroupCommandInput}
 * @returns {@link CopyDBParameterGroupCommandOutput}
 * @see {@link CopyDBParameterGroupCommandInput} for command's `input` shape.
 * @see {@link CopyDBParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBParameterGroupAlreadyExistsFault} (client fault)
 *  <p>A DB parameter group with the same name exists.</p>
 *
 * @throws {@link DBParameterGroupNotFoundFault} (client fault)
 *  <p>
 *             <code>DBParameterGroupName</code> doesn't refer to an
 *         existing DB parameter group.</p>
 *
 * @throws {@link DBParameterGroupQuotaExceededFault} (client fault)
 *  <p>The request would result in the user exceeding the allowed number of DB parameter
 *             groups.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @example To copy a DB parameter group
 * ```javascript
 * // The following example makes a copy of a DB parameter group.
 * const input = {
 *   "SourceDBParameterGroupIdentifier": "mydbpg",
 *   "TargetDBParameterGroupDescription": "Copy of mydbpg parameter group",
 *   "TargetDBParameterGroupIdentifier": "mydbpgcopy"
 * };
 * const command = new CopyDBParameterGroupCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DBParameterGroup": {
 *     "DBParameterGroupArn": "arn:aws:rds:us-east-1:814387698303:pg:mydbpgcopy",
 *     "DBParameterGroupFamily": "mysql5.7",
 *     "DBParameterGroupName": "mydbpgcopy",
 *     "Description": "Copy of mydbpg parameter group"
 *   }
 * }
 * *\/
 * // example id: to-copy-a-db-parameter-group-1679695426993
 * ```
 *
 */
export class CopyDBParameterGroupCommand extends $Command<
  CopyDBParameterGroupCommandInput,
  CopyDBParameterGroupCommandOutput,
  RDSClientResolvedConfig
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
  constructor(readonly input: CopyDBParameterGroupCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CopyDBParameterGroupCommandInput, CopyDBParameterGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CopyDBParameterGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "CopyDBParameterGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonRDSv19",
        operation: "CopyDBParameterGroup",
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
  private serialize(input: CopyDBParameterGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CopyDBParameterGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CopyDBParameterGroupCommandOutput> {
    return de_CopyDBParameterGroupCommand(output, context);
  }
}
