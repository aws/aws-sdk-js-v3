import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { DescribeDominantLanguageDetectionJobRequest, DescribeDominantLanguageDetectionJobResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeDominantLanguageDetectionJobCommandInput = DescribeDominantLanguageDetectionJobRequest;
export declare type DescribeDominantLanguageDetectionJobCommandOutput = DescribeDominantLanguageDetectionJobResponse & __MetadataBearer;
export declare class DescribeDominantLanguageDetectionJobCommand extends $Command<DescribeDominantLanguageDetectionJobCommandInput, DescribeDominantLanguageDetectionJobCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: DescribeDominantLanguageDetectionJobCommandInput;
    constructor(input: DescribeDominantLanguageDetectionJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDominantLanguageDetectionJobCommandInput, DescribeDominantLanguageDetectionJobCommandOutput>;
    private serialize;
    private deserialize;
}
