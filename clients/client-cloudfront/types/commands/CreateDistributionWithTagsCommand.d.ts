import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { CreateDistributionWithTagsRequest, CreateDistributionWithTagsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateDistributionWithTagsCommandInput = CreateDistributionWithTagsRequest;
export declare type CreateDistributionWithTagsCommandOutput = CreateDistributionWithTagsResult & __MetadataBearer;
export declare class CreateDistributionWithTagsCommand extends $Command<CreateDistributionWithTagsCommandInput, CreateDistributionWithTagsCommandOutput, CloudFrontClientResolvedConfig> {
    readonly input: CreateDistributionWithTagsCommandInput;
    constructor(input: CreateDistributionWithTagsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFrontClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDistributionWithTagsCommandInput, CreateDistributionWithTagsCommandOutput>;
    private serialize;
    private deserialize;
}
