import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { DescribeBatchInferenceJobRequest, DescribeBatchInferenceJobResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeBatchInferenceJobCommandInput = DescribeBatchInferenceJobRequest;
export declare type DescribeBatchInferenceJobCommandOutput = DescribeBatchInferenceJobResponse & __MetadataBearer;
export declare class DescribeBatchInferenceJobCommand extends $Command<DescribeBatchInferenceJobCommandInput, DescribeBatchInferenceJobCommandOutput, PersonalizeClientResolvedConfig> {
    readonly input: DescribeBatchInferenceJobCommandInput;
    constructor(input: DescribeBatchInferenceJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PersonalizeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeBatchInferenceJobCommandInput, DescribeBatchInferenceJobCommandOutput>;
    private serialize;
    private deserialize;
}
