import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { GetDistributionConfigRequest, GetDistributionConfigResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetDistributionConfigCommandInput = GetDistributionConfigRequest;
export declare type GetDistributionConfigCommandOutput = GetDistributionConfigResult & __MetadataBearer;
export declare class GetDistributionConfigCommand extends $Command<GetDistributionConfigCommandInput, GetDistributionConfigCommandOutput, CloudFrontClientResolvedConfig> {
    readonly input: GetDistributionConfigCommandInput;
    constructor(input: GetDistributionConfigCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFrontClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDistributionConfigCommandInput, GetDistributionConfigCommandOutput>;
    private serialize;
    private deserialize;
}
