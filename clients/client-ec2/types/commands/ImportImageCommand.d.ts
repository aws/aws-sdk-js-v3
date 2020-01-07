import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ImportImageRequest, ImportImageResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ImportImageCommandInput = ImportImageRequest;
export declare type ImportImageCommandOutput = ImportImageResult & __MetadataBearer;
export declare class ImportImageCommand extends $Command<ImportImageCommandInput, ImportImageCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ImportImageCommandInput;
    constructor(input: ImportImageCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ImportImageCommandInput, ImportImageCommandOutput>;
    private serialize;
    private deserialize;
}
