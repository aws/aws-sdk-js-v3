import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { UpdateDistributionRequest, UpdateDistributionResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateDistributionCommandInput = UpdateDistributionRequest;
export declare type UpdateDistributionCommandOutput = UpdateDistributionResult & __MetadataBearer;
export declare class UpdateDistributionCommand extends $Command<UpdateDistributionCommandInput, UpdateDistributionCommandOutput, CloudFrontClientResolvedConfig> {
    readonly input: UpdateDistributionCommandInput;
    constructor(input: UpdateDistributionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFrontClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDistributionCommandInput, UpdateDistributionCommandOutput>;
    private serialize;
    private deserialize;
}
