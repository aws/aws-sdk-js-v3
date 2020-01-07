import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { UpdateStreamingDistributionRequest, UpdateStreamingDistributionResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateStreamingDistributionCommandInput = UpdateStreamingDistributionRequest;
export declare type UpdateStreamingDistributionCommandOutput = UpdateStreamingDistributionResult & __MetadataBearer;
export declare class UpdateStreamingDistributionCommand extends $Command<UpdateStreamingDistributionCommandInput, UpdateStreamingDistributionCommandOutput, CloudFrontClientResolvedConfig> {
    readonly input: UpdateStreamingDistributionCommandInput;
    constructor(input: UpdateStreamingDistributionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFrontClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateStreamingDistributionCommandInput, UpdateStreamingDistributionCommandOutput>;
    private serialize;
    private deserialize;
}
