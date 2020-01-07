import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateFpgaImageRequest, CreateFpgaImageResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateFpgaImageCommandInput = CreateFpgaImageRequest;
export declare type CreateFpgaImageCommandOutput = CreateFpgaImageResult & __MetadataBearer;
export declare class CreateFpgaImageCommand extends $Command<CreateFpgaImageCommandInput, CreateFpgaImageCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateFpgaImageCommandInput;
    constructor(input: CreateFpgaImageCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateFpgaImageCommandInput, CreateFpgaImageCommandOutput>;
    private serialize;
    private deserialize;
}
