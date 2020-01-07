import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { GetDistributionRequest, GetDistributionResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetDistributionCommandInput = GetDistributionRequest;
export declare type GetDistributionCommandOutput = GetDistributionResult & __MetadataBearer;
export declare class GetDistributionCommand extends $Command<GetDistributionCommandInput, GetDistributionCommandOutput, CloudFrontClientResolvedConfig> {
    readonly input: GetDistributionCommandInput;
    constructor(input: GetDistributionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFrontClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDistributionCommandInput, GetDistributionCommandOutput>;
    private serialize;
    private deserialize;
}
