import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateTagsRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateTagsCommandInput = CreateTagsRequest;
export declare type CreateTagsCommandOutput = __MetadataBearer;
export declare class CreateTagsCommand extends $Command<CreateTagsCommandInput, CreateTagsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateTagsCommandInput;
    constructor(input: CreateTagsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTagsCommandInput, CreateTagsCommandOutput>;
    private serialize;
    private deserialize;
}
