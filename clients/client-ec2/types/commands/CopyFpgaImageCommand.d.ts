import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CopyFpgaImageRequest, CopyFpgaImageResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CopyFpgaImageCommandInput = CopyFpgaImageRequest;
export declare type CopyFpgaImageCommandOutput = CopyFpgaImageResult & __MetadataBearer;
export declare class CopyFpgaImageCommand extends $Command<CopyFpgaImageCommandInput, CopyFpgaImageCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CopyFpgaImageCommandInput;
    constructor(input: CopyFpgaImageCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CopyFpgaImageCommandInput, CopyFpgaImageCommandOutput>;
    private serialize;
    private deserialize;
}
