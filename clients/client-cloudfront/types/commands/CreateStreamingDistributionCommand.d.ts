import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { CreateStreamingDistributionRequest, CreateStreamingDistributionResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateStreamingDistributionCommandInput = CreateStreamingDistributionRequest;
export declare type CreateStreamingDistributionCommandOutput = CreateStreamingDistributionResult & __MetadataBearer;
export declare class CreateStreamingDistributionCommand extends $Command<CreateStreamingDistributionCommandInput, CreateStreamingDistributionCommandOutput, CloudFrontClientResolvedConfig> {
    readonly input: CreateStreamingDistributionCommandInput;
    constructor(input: CreateStreamingDistributionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFrontClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateStreamingDistributionCommandInput, CreateStreamingDistributionCommandOutput>;
    private serialize;
    private deserialize;
}
