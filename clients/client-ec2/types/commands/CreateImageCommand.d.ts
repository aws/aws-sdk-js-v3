import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateImageRequest, CreateImageResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateImageCommandInput = CreateImageRequest;
export declare type CreateImageCommandOutput = CreateImageResult & __MetadataBearer;
export declare class CreateImageCommand extends $Command<CreateImageCommandInput, CreateImageCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateImageCommandInput;
    constructor(input: CreateImageCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateImageCommandInput, CreateImageCommandOutput>;
    private serialize;
    private deserialize;
}
