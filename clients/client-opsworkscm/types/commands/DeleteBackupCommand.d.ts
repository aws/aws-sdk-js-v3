import { OpsWorksCMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksCMClient";
import { DeleteBackupRequest, DeleteBackupResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteBackupCommandInput = DeleteBackupRequest;
export declare type DeleteBackupCommandOutput = DeleteBackupResponse & __MetadataBearer;
export declare class DeleteBackupCommand extends $Command<DeleteBackupCommandInput, DeleteBackupCommandOutput, OpsWorksCMClientResolvedConfig> {
    readonly input: DeleteBackupCommandInput;
    constructor(input: DeleteBackupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksCMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteBackupCommandInput, DeleteBackupCommandOutput>;
    private serialize;
    private deserialize;
}
