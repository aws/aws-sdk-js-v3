import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { GetStreamingDistributionRequest, GetStreamingDistributionResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetStreamingDistributionCommandInput = GetStreamingDistributionRequest;
export declare type GetStreamingDistributionCommandOutput = GetStreamingDistributionResult & __MetadataBearer;
export declare class GetStreamingDistributionCommand extends $Command<GetStreamingDistributionCommandInput, GetStreamingDistributionCommandOutput, CloudFrontClientResolvedConfig> {
    readonly input: GetStreamingDistributionCommandInput;
    constructor(input: GetStreamingDistributionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFrontClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetStreamingDistributionCommandInput, GetStreamingDistributionCommandOutput>;
    private serialize;
    private deserialize;
}
