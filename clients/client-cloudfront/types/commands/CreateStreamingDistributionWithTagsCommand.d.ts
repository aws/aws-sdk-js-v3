import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { CreateStreamingDistributionWithTagsRequest, CreateStreamingDistributionWithTagsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateStreamingDistributionWithTagsCommandInput = CreateStreamingDistributionWithTagsRequest;
export declare type CreateStreamingDistributionWithTagsCommandOutput = CreateStreamingDistributionWithTagsResult & __MetadataBearer;
export declare class CreateStreamingDistributionWithTagsCommand extends $Command<CreateStreamingDistributionWithTagsCommandInput, CreateStreamingDistributionWithTagsCommandOutput, CloudFrontClientResolvedConfig> {
    readonly input: CreateStreamingDistributionWithTagsCommandInput;
    constructor(input: CreateStreamingDistributionWithTagsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFrontClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateStreamingDistributionWithTagsCommandInput, CreateStreamingDistributionWithTagsCommandOutput>;
    private serialize;
    private deserialize;
}
