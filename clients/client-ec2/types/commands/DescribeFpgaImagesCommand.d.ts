import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeFpgaImagesRequest, DescribeFpgaImagesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeFpgaImagesCommandInput = DescribeFpgaImagesRequest;
export declare type DescribeFpgaImagesCommandOutput = DescribeFpgaImagesResult & __MetadataBearer;
export declare class DescribeFpgaImagesCommand extends $Command<DescribeFpgaImagesCommandInput, DescribeFpgaImagesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeFpgaImagesCommandInput;
    constructor(input: DescribeFpgaImagesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeFpgaImagesCommandInput, DescribeFpgaImagesCommandOutput>;
    private serialize;
    private deserialize;
}
