import { OpsWorksCMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksCMClient";
import { CreateBackupRequest, CreateBackupResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateBackupCommandInput = CreateBackupRequest;
export declare type CreateBackupCommandOutput = CreateBackupResponse & __MetadataBearer;
export declare class CreateBackupCommand extends $Command<CreateBackupCommandInput, CreateBackupCommandOutput, OpsWorksCMClientResolvedConfig> {
    readonly input: CreateBackupCommandInput;
    constructor(input: CreateBackupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksCMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateBackupCommandInput, CreateBackupCommandOutput>;
    private serialize;
    private deserialize;
}
