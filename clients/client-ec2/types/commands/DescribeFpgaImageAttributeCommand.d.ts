import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeFpgaImageAttributeRequest, DescribeFpgaImageAttributeResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeFpgaImageAttributeCommandInput = DescribeFpgaImageAttributeRequest;
export declare type DescribeFpgaImageAttributeCommandOutput = DescribeFpgaImageAttributeResult & __MetadataBearer;
export declare class DescribeFpgaImageAttributeCommand extends $Command<DescribeFpgaImageAttributeCommandInput, DescribeFpgaImageAttributeCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeFpgaImageAttributeCommandInput;
    constructor(input: DescribeFpgaImageAttributeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeFpgaImageAttributeCommandInput, DescribeFpgaImageAttributeCommandOutput>;
    private serialize;
    private deserialize;
}
