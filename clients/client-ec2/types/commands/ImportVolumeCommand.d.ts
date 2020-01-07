import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ImportVolumeRequest, ImportVolumeResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ImportVolumeCommandInput = ImportVolumeRequest;
export declare type ImportVolumeCommandOutput = ImportVolumeResult & __MetadataBearer;
export declare class ImportVolumeCommand extends $Command<ImportVolumeCommandInput, ImportVolumeCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ImportVolumeCommandInput;
    constructor(input: ImportVolumeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ImportVolumeCommandInput, ImportVolumeCommandOutput>;
    private serialize;
    private deserialize;
}
