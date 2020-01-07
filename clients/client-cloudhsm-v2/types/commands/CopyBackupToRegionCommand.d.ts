import { CloudHSMV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMV2Client";
import { CopyBackupToRegionRequest, CopyBackupToRegionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CopyBackupToRegionCommandInput = CopyBackupToRegionRequest;
export declare type CopyBackupToRegionCommandOutput = CopyBackupToRegionResponse & __MetadataBearer;
export declare class CopyBackupToRegionCommand extends $Command<CopyBackupToRegionCommandInput, CopyBackupToRegionCommandOutput, CloudHSMV2ClientResolvedConfig> {
    readonly input: CopyBackupToRegionCommandInput;
    constructor(input: CopyBackupToRegionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudHSMV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CopyBackupToRegionCommandInput, CopyBackupToRegionCommandOutput>;
    private serialize;
    private deserialize;
}
