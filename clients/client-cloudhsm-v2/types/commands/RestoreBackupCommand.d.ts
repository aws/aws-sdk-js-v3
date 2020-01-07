import { CloudHSMV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMV2Client";
import { RestoreBackupRequest, RestoreBackupResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RestoreBackupCommandInput = RestoreBackupRequest;
export declare type RestoreBackupCommandOutput = RestoreBackupResponse & __MetadataBearer;
export declare class RestoreBackupCommand extends $Command<RestoreBackupCommandInput, RestoreBackupCommandOutput, CloudHSMV2ClientResolvedConfig> {
    readonly input: RestoreBackupCommandInput;
    constructor(input: RestoreBackupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudHSMV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RestoreBackupCommandInput, RestoreBackupCommandOutput>;
    private serialize;
    private deserialize;
}
