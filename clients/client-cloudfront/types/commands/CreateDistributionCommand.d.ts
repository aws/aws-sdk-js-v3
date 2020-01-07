import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { CreateDistributionRequest, CreateDistributionResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateDistributionCommandInput = CreateDistributionRequest;
export declare type CreateDistributionCommandOutput = CreateDistributionResult & __MetadataBearer;
export declare class CreateDistributionCommand extends $Command<CreateDistributionCommandInput, CreateDistributionCommandOutput, CloudFrontClientResolvedConfig> {
    readonly input: CreateDistributionCommandInput;
    constructor(input: CreateDistributionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFrontClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDistributionCommandInput, CreateDistributionCommandOutput>;
    private serialize;
    private deserialize;
}
