import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CopyImageRequest, CopyImageResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CopyImageCommandInput = CopyImageRequest;
export declare type CopyImageCommandOutput = CopyImageResult & __MetadataBearer;
export declare class CopyImageCommand extends $Command<CopyImageCommandInput, CopyImageCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CopyImageCommandInput;
    constructor(input: CopyImageCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CopyImageCommandInput, CopyImageCommandOutput>;
    private serialize;
    private deserialize;
}
