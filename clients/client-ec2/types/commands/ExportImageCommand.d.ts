import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ExportImageRequest, ExportImageResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ExportImageCommandInput = ExportImageRequest;
export declare type ExportImageCommandOutput = ExportImageResult & __MetadataBearer;
export declare class ExportImageCommand extends $Command<ExportImageCommandInput, ExportImageCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ExportImageCommandInput;
    constructor(input: ExportImageCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ExportImageCommandInput, ExportImageCommandOutput>;
    private serialize;
    private deserialize;
}
