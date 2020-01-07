import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { RemoveRoleFromDBInstanceMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RemoveRoleFromDBInstanceCommandInput = RemoveRoleFromDBInstanceMessage;
export declare type RemoveRoleFromDBInstanceCommandOutput = __MetadataBearer;
export declare class RemoveRoleFromDBInstanceCommand extends $Command<RemoveRoleFromDBInstanceCommandInput, RemoveRoleFromDBInstanceCommandOutput, RDSClientResolvedConfig> {
    readonly input: RemoveRoleFromDBInstanceCommandInput;
    constructor(input: RemoveRoleFromDBInstanceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RemoveRoleFromDBInstanceCommandInput, RemoveRoleFromDBInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
