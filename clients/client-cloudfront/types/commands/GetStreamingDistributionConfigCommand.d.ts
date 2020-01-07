import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { GetStreamingDistributionConfigRequest, GetStreamingDistributionConfigResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetStreamingDistributionConfigCommandInput = GetStreamingDistributionConfigRequest;
export declare type GetStreamingDistributionConfigCommandOutput = GetStreamingDistributionConfigResult & __MetadataBearer;
export declare class GetStreamingDistributionConfigCommand extends $Command<GetStreamingDistributionConfigCommandInput, GetStreamingDistributionConfigCommandOutput, CloudFrontClientResolvedConfig> {
    readonly input: GetStreamingDistributionConfigCommandInput;
    constructor(input: GetStreamingDistributionConfigCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFrontClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetStreamingDistributionConfigCommandInput, GetStreamingDistributionConfigCommandOutput>;
    private serialize;
    private deserialize;
}
