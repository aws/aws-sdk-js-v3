import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DeleteDBInstanceAutomatedBackupMessage, DeleteDBInstanceAutomatedBackupResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteDBInstanceAutomatedBackupCommandInput = DeleteDBInstanceAutomatedBackupMessage;
export declare type DeleteDBInstanceAutomatedBackupCommandOutput = DeleteDBInstanceAutomatedBackupResult & __MetadataBearer;
export declare class DeleteDBInstanceAutomatedBackupCommand extends $Command<DeleteDBInstanceAutomatedBackupCommandInput, DeleteDBInstanceAutomatedBackupCommandOutput, RDSClientResolvedConfig> {
    readonly input: DeleteDBInstanceAutomatedBackupCommandInput;
    constructor(input: DeleteDBInstanceAutomatedBackupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDBInstanceAutomatedBackupCommandInput, DeleteDBInstanceAutomatedBackupCommandOutput>;
    private serialize;
    private deserialize;
}
